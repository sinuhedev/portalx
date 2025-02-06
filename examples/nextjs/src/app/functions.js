import { getUser } from './actions'

const initialState = {
  i18n: '',
  loading: false,
  services: {
    api: {}
  },
  num: 0
}

function init ({ set }) {
  set({
    i18n: window.localStorage.getItem('i18n')
  })
}

function changeI18n ({ set, payload }) {
  const { value } = payload.target
  set({
    i18n: value
  })
  window.localStorage.setItem('i18n', value)
}

function setServices ({ set, show, hide }) {
  set({
    services: {
      api: {
        getUser
      }
    }
  })

  // const headers = {}

  // const api = {}
  // for (const e in API.methods) {
  //   const service = API.methods[e].match(/\S+/g)
  //   const method = service[0].toLowerCase()
  //   const url = API.url + service[1]

  //   api[e] = async (payload = {}) => {
  //     const path = payload?.path ?? {}
  //     const body = payload?.body ?? {}
  //     const loading = payload?.loading ?? true

  //     if (loading) show('loading')

  //     const response = await http[method](url, path, body, headers)

  //     if (loading) hide('loading')

  //     if (response.ok) return response
  //     else throw response
  //   }
  // }

  // set({
  //   services: {
  //     api: actions
  //   }
  // })
}

function increment ({ state, set }) {
  set({ num: state.num + 1 })
}

function decrement ({ state, set }) {
  set({ num: state.num - 1 })
}

function zero ({ payload, set }) {
  set({ num: payload.value })
}

export default {
  initialState,
  init,
  changeI18n,
  setServices,
  increment,
  decrement,
  zero
}
