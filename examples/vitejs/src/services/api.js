import { env } from 'util'
import { http } from 'portalx'

const methods = {
  getUser: 'GET /user/:id',
  createUser: 'POST /user',
  updateUser: 'PUT /user/:id',
  deleteUser: 'DELETE /user/:id'
}

export default () => {
  const headers = {}

  const api = {}
  for (const e in methods) {
    const service = methods[e].match(/\S+/g)
    const method = service[0].toLowerCase()
    const url = env.WEB_API + service[1]

    api[e] = async (payload = {}) => {
      const path = payload?.path ?? {}
      const body = payload?.body ?? {}

      const response = await http[method](url, path, body, headers)

      if (response.ok) return response
      else throw response
    }
  }

  return api
}
