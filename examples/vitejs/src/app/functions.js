import API from 'services/api'
import { http } from 'portalx'

const initialState = {
  page: { name: '', content: null },
  i18n: window.localStorage.getItem('i18n') ?? '',
  loading: false,
  services: {
    api: {}
  },
  //
  num: 0
}

function changeI18n ({ set, payload }) {
  const { value } = payload.target
  set({
    i18n: value
  })

  window.localStorage.setItem('i18n', value)
}

async function getPage ({ payload, set }) {
  const { hash } = payload

  let page = ['#/', ''].includes(hash) ? 'Home' : hash.substring(2)
  let name = page.replaceAll('/', '')

  try {
    const path = page.split('/')

    switch (path.length) {
      case 1:
        page = await import(`./${path[0]}/index.jsx`)
        break
      case 2:
        page = await import(`./${path[0]}/${path[1]}/index.jsx`)
        break
      case 3:
        page = await import(`./${path[0]}/${path[1]}/${path[2]}/index.jsx`)
        break
    }
  } catch (e) {
    console.error(e)
    page = await import('./Http/NotFound/index.jsx')
    name = 'NotFound'
  }

  set({ page: { name, content: page.default } })
}

function setServices ({ set, show, hide }) {
  const headers = {}

  const api = {}
  for (const e in API.methods) {
    const service = API.methods[e].match(/\S+/g)
    const method = service[0].toLowerCase()
    const url = API.url + service[1]

    api[e] = async (payload = {}) => {
      const path = payload?.path ?? {}
      const body = payload?.body ?? {}
      const loading = payload?.loading ?? true

      if (loading) show('loading')

      const response = await http[method](url, path, body, headers)

      if (loading) hide('loading')

      if (response.ok) return response
      else throw response
    }
  }

  set({
    services: { api }
  })
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
  changeI18n,
  getPage,
  setServices,
  increment,
  decrement,
  zero
}
