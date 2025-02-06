/**
 * get
 */
async function get (url = '', path = {}, body = {}, headers = {}) {
  // path
  const urlTemplate = url.match(/:\w+/g)
  if (urlTemplate) {
    urlTemplate.forEach(e => {
      const key = e.split(':')[1]
      url = url.replaceAll(e, path[key] ?? '')
    })
  }

  url = url.slice(-1) === '/' ? url.slice(0, -1) : url

  // query
  const queryParameters = body ? '' : '?' + new URLSearchParams(body).toString()

  // http
  const response = await fetch(url + queryParameters, {
    method: 'GET',
    headers: {
      'Content-Type': 'application/json',
      ...headers
    }
  })

  const { ok, status } = response

  let data
  try {
    data = await response.json()
  } catch (e) {
    console.error(e)
    data = [{}]
  }

  return {
    ok,
    status,
    data
  }
}

/**
 * post
 */
async function post (url = '', path = {}, body = {}, headers = {}) {
  // path
  const urlTemplate = url.match(/:\w+/g)
  if (urlTemplate) {
    urlTemplate.forEach(e => {
      const key = e.split(':')[1]
      url = url.replaceAll(e, path[key] ?? '')
    })
  }
  url = url.slice(-1) === '/' ? url.slice(0, -1) : url

  const response = await fetch(url, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      ...headers
    },
    body: JSON.stringify(body)
  })

  const { ok, status } = response

  let data
  try {
    data = await response.json()
  } catch (e) {
    console.error(e)
    data = [{}]
  }

  return {
    ok,
    status,
    data
  }
}

/**
 * put
 */
async function put (url = '', path = {}, body = {}, headers = {}) {
  // path
  const urlTemplate = url.match(/:\w+/g)
  if (urlTemplate) {
    urlTemplate.forEach(e => {
      const key = e.split(':')[1]
      url = url.replaceAll(e, path[key] ?? '')
    })
  }
  url = url.slice(-1) === '/' ? url.slice(0, -1) : url

  const response = await fetch(url, {
    method: 'PUT',
    headers: {
      'Content-Type': 'application/json',
      ...headers
    },
    body: JSON.stringify(body)
  })

  const { ok, status } = response

  let data
  try {
    data = await response.json()
  } catch (e) {
    console.error(e)
    data = [{}]
  }

  return {
    ok,
    status,
    data
  }
}

/**
 * delete
 */
async function _delete (url = '', path = {}, body = {}, headers = {}) {
  // path
  const urlTemplate = url.match(/:\w+/g)
  if (urlTemplate) {
    urlTemplate.forEach(e => {
      const key = e.split(':')[1]
      url = url.replaceAll(e, path[key] ?? '')
    })
  }
  url = url.slice(-1) === '/' ? url.slice(0, -1) : url

  const response = await fetch(url, {
    method: 'DELETE',
    headers: {
      'Content-Type': 'application/json',
      ...headers
    },
    body: JSON.stringify(body)
  })

  const { ok, status } = response

  let data
  try {
    data = await response.json()
  } catch (e) {
    console.error(e)
    data = [{}]
  }

  return {
    ok,
    status,
    data
  }
}

export default {
  get,
  post,
  put,
  delete: _delete
}
