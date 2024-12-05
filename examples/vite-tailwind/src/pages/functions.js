import api from 'services/api'
import { http } from 'portalx'

const initialState = {
  page: { name: '', content: null },
  i18n: null,
  loading: false,
  //
  num: 0,
  //
  extraFunctions: {
    api: {}
  }
}

async function getPage ({ payload, set }) {
  const { hash } = payload

  let page = ['/', ''].includes(hash) ? 'Home' : hash
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

  const apiServices = {}
  for (const e in api.services) {
    const service = api.services[e].match(/\S+/g)
    const method = service[0].toLowerCase()
    const url = api.url + service[1]

    apiServices[e] = async (payload = {}) => {
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
    extraFunctions: { api: apiServices }
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
  getPage,
  setServices,
  increment,
  decrement,
  zero
}
