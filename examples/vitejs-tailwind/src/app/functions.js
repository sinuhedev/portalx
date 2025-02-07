const initialState = {
  page: null
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

export default {
  initialState,
  getPage

}
