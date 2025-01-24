const initialState = {
  page: { name: '', content: null },
  i18n: null
}

async function getPage ({ payload, set }) {
  const { hash } = payload

  let page = ['/', ''].includes(hash) ? 'Home' : hash
  let name = page.replaceAll('/', '')

  try {
    const path = page.split('/')

    switch (path.length) {
      case 1:
        page = await import(`../pages/${path[0]}/index.jsx`)
        break
      case 2:
        page = await import(`../pages/${path[0]}/${path[1]}/index.jsx`)
        break
      case 3:
        page = await import(`../pages/${path[0]}/${path[1]}/${path[2]}/index.jsx`)
        break
    }
  } catch (e) {
    console.error(e)
    page = await import('../pages/Http/NotFound/index.jsx')
    name = 'NotFound'
  }

  set({ page: { name, content: page.default } })
}

export default {
  initialState,
  getPage
}
