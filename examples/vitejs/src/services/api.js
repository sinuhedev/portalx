import { env } from 'util'
import http from './http'

const API = env.WEB_API

export default () => {
  return {
    getUser: (p) => http.get(API + '/user/:id', p.path, p.body),
    createUser: (p) => http.post(API + '/user', p.path, p.body),
    updateUser: (p) => http.put(API + '/user/:id', p.path, p.body),
    deleteUser: (p) => http.delete(API + '/user/:id', p.path, p.body)
  }
}
