import { env } from 'utils'
import { GET, POST, PUT, DELETE } from './http'

const API = env.WEB_API

export default () => {
  return {
    getUser: p => GET(API + '/user/:id', p.path, p.body),
    createUser: p => POST(API + '/user', p.path, p.body),
    updateUser: p => PUT(API + '/user/:id', p.path, p.body),
    deleteUser: p => DELETE(API + '/user/:id', p.path, p.body)
  }
}
