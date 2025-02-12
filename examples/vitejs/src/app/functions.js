import i18nFile from 'assets/i18n'

const initialState = {
  page: null,
  i18n: window.localStorage.getItem('i18n'),
  i18nFile,
  loading: false,
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
  }

  set({ page: page.default })
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
  increment,
  decrement,
  zero
}
