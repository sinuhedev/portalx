import { env } from 'utils'

const initialState = {
  page: { name: '', content: null },
  i18n: window.localStorage.getItem('i18n') ?? ''
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

export default {
  initialState,
  changeI18n,
  getPage
}
