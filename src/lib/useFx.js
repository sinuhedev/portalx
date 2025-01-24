import { useReducer } from 'react'
import { useResize, useQueryString } from './useX'

/**
 * set*
 */
function setMerge (target, source) {
  // in array return all source
  if (Array.isArray(target)) return source

  const isObject = obj => obj && typeof obj === 'object'
  const output = { ...target }

  // merge
  Object.keys(source).forEach(key => {
    if (isObject(target[key]) && isObject(source[key])) {
      output[key] = setMerge(target[key], source[key])
    } else output[key] = structuredClone(source[key])
  })

  return output
}

function setValue (state, payload, value) {
  const paths = payload.split('.')

  /**
   * one level
   */
  if (paths.length === 1) {
    // set Object and exist Object
    if (typeof value === 'object' && Object.keys(value).length) {
      return { ...state, [payload]: { ...state[payload], ...value } }
    }

    // set Value
    return {
      ...state,
      [payload]: value
    }
  }

  /**
   * multi level
   */
  const stateClone = structuredClone(state)
  const finalPath = paths.pop()
  const stateRef = paths.reduce((ac, e) => ac[e], stateClone)
  stateRef[finalPath] = value

  return stateClone
}

/**
 * useFxReducer
 */
function useFxReducer (initialState) {
  const reducer = (state, action) => {
    const { type, payload } = action

    switch (type) {
      case 'set':
        // Merge only item
        if (Object.keys(payload).length === 1) {
          const key = Object.keys(payload)[0]
          return setValue(state, key, payload[key])
        }

        // Merge all json
        return setMerge(state, payload)

      case 'show':
        return setValue(state, payload, true)

      case 'hide':
        return setValue(state, payload, false)

      case 'change':
        return setValue(
          state,
          payload.target.name,
          payload.target.type === 'checkbox' ? payload.target.checked : payload.target.value
        )

      case 'reset':
        // value reset
        if (payload) {
          const paths = Array.isArray(payload) ? payload : [payload]

          return paths.reduce((ac, path) => {
            const value = path.split('.').reduce((ac, e) => ac[e], initialState)
            return setValue(ac, path, value)
          }, state)
        }

        // all reset
        return initialState

      default:
        return state
    }
  }

  return useReducer(reducer, initialState)
}

/**
 * Context
 */
let context = null

/**
 * useFx
 */
function useFx (functions = { initialState: {} }, props = { isContext: false }) {
  // hooks
  const qs = useQueryString()
  const resize = useResize()

  // reducer
  const [state, dispatch] = useFxReducer(functions.initialState)

  // Common actions
  const commonActions = ['set', 'show', 'hide', 'change', 'reset'].reduce(
    (ac, e) => {
      ac[e] = payload => dispatch({ type: e, payload })
      return ac
    },
    {}
  )

  // Actions
  const actions = Object.keys(functions).reduce((ac, e) => {
    if (functions[e] instanceof Function) {
      ac[e] = payload =>
        functions[e]({
          ...commonActions,
          state,
          payload,
          //
          ...(props.isContext ? {} : { context, ...context.state?.extraFunctions })
        })
    }
    return ac
  }, {})

  // State and Actions
  const stateAndActions = {
    initialState: functions.initialState,
    state,
    fx: { ...commonActions, ...actions },
    //
    qs,
    resize,
    //
    ...(props.isContext ? {} : { context })
  }

  if (props.isContext) context = stateAndActions

  return stateAndActions
}

export default useFx
