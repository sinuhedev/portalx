import { env } from 'util'

export default {
  url: env.WEB_API,
  methods: {
    getUsers: 'GET /user',
    getUser: 'GET /user/:id',
    createUser: 'POST /user',
    updateUser: 'PUT /user/:id',
    deleteUser: 'DELETE /user/:id'
  }
}
