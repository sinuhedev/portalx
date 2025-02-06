'use server'

export async function getUser () {
  const response = await fetch('https://65fd14fb9fc4425c653119c5.mockapi.io/api/v1/user', { method: 'GET' })

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

// const API = {
//   url: 'https://65fd14fb9fc4425c653119c5.mockapi.io/api/v1',
//   methods: {
//     getUser: 'GET /user/:id',
//     createUser: 'POST /user',
//     updateUser: 'PUT /user/:id',
//     deleteUser: 'DELETE /user/:id'
//   }
// }

// export function getServices () {
//   const headers = {}

//   const api = {}
//   for (const e in API.methods) {
//     const service = API.methods[e].match(/\S+/g)
//     const method = service[0].toLowerCase()
//     const url = API.url + service[1]

//     api[e] = async (payload = {}) => {
//       const path = payload?.path ?? {}
//       const body = payload?.body ?? {}
//       // const loading = payload?.loading ?? true

//       // if (loading) show('loading')

//       const response = await http[method](url, path, body, headers)

//       // if (loading) hide('loading')

//       if (response.ok) return response
//       else throw response
//     }
//   }

//   return api
// }
