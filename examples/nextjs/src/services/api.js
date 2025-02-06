'use server'

import http from './http'

const { API } = process.env

export async function getUser (p) { return http.get(API + '/user/:id', p.path, p.body) }
export async function createUser (p) { return http.post(API + '/user', p.path, p.body) }
export async function updateUser (p) { return http.put(API + '/user/:id', p.path, p.body) }
export async function deleteUser (p) { return http.delete(API + '/user/:id', p.path, p.body) }
