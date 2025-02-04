export default {
  url: process.env.NEXT_PUBLIC_API,
  methods: {
    getUsers: 'GET /user',
    getUser: 'GET /user/:id',
    createUser: 'POST /user',
    updateUser: 'PUT /user/:id',
    deleteUser: 'DELETE /user/:id'
  }
}
