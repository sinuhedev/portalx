'use client'

import { useReducer, createContext, use } from 'react'

/**
 * set*
 */

function setValue (state, payload, value) {
  const paths = payload.split('.')

  /**
   * one level
   */
  if (paths.length === 1) {
    // set Object and exist Object
    if (value && typeof value === 'object' && Object.keys(value).length) {
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
 * Create context
 */
const ReactFx = createContext()

/**
 * useFx
 */
function useFx (functions = { initialState: {} }) {
  // reducer
  const [state, dispatch] = useFxReducer(functions.initialState)

  // context
  const context = use(ReactFx)

  // Common actions
  const commonActions = ['set', 'show', 'hide', 'change', 'reset'].reduce((acc, e) => {
    acc[e] = payload => dispatch({ type: e, payload })
    return acc
  }, {})

  // Actions
  const actions = Object.keys(functions).reduce((ac, e) => {
    if (functions[e] instanceof Function) {
      ac[e] = payload =>
        functions[e]({
          ...commonActions,
          state,
          payload,
          //
          context
        })
    }
    return ac
  }, {})

  // Context, State and Actions
  return Object.freeze({
    initialState: functions.initialState,
    state,
    fx: { ...commonActions, ...actions },
    //
    context
  })
}

export { useFx, ReactFx }
