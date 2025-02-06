'use server'

const { API } = process.env

export async function getUser () {
  const response = await fetch(API, { method: 'GET' })

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
