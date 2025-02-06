function urlTemplate (url, path) {
  const params = url.match(/:\w+/g) ?? []

  return params.reduce((acc, e) => {
    const key = e.split(':')[1]
    return acc.replaceAll(e, path[key] ?? '')
  }, url)
}

/**
 * get
 */
async function get (url = '', path = {}, body = {}, headers = {}) {
  // url and path
  url = urlTemplate(url, path)

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

  const { ok, status, statusText } = response

  if (ok) {
    const data = await response.json()
    return {
      ok,
      status,
      statusText,
      data
    }
  }

  throw new Error(`ok: ${ok} , status: ${status} , statusText: ${statusText}`)
}

/**
 * post
 */
async function post (url = '', path = {}, body = {}, headers = {}) {
  // url and path
  url = urlTemplate(url, path)

  const response = await fetch(url, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      ...headers
    },
    body: JSON.stringify(body)
  })

  const { ok, status, statusText } = response

  if (ok) {
    const data = await response.json()
    return {
      ok,
      status,
      statusText,
      data
    }
  }

  throw new Error(`ok: ${ok} , status: ${status} , statusText: ${statusText}`)
}

/**
 * put
 */
async function put (url = '', path = {}, body = {}, headers = {}) {
  // url and path
  url = urlTemplate(url, path)

  const response = await fetch(url, {
    method: 'PUT',
    headers: {
      'Content-Type': 'application/json',
      ...headers
    },
    body: JSON.stringify(body)
  })

  const { ok, status, statusText } = response

  if (ok) {
    const data = await response.json()
    return {
      ok,
      status,
      statusText,
      data
    }
  }

  throw new Error(`ok: ${ok} , status: ${status} , statusText: ${statusText}`)
}

/**
 * delete
 */
async function _delete (url = '', path = {}, body = {}, headers = {}) {
  // url and path
  url = urlTemplate(url, path)

  const response = await fetch(url, {
    method: 'DELETE',
    headers: {
      'Content-Type': 'application/json',
      ...headers
    },
    body: JSON.stringify(body)
  })

  const { ok, status, statusText } = response

  if (ok) {
    const data = await response.json()
    return {
      ok,
      status,
      statusText,
      data
    }
  }

  throw new Error(`ok: ${ok} , status: ${status} , statusText: ${statusText}`)
}

export default {
  get,
  post,
  put,
  delete: _delete
}
