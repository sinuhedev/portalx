const initialState = {
  users: {},
  user: {},
  form: {
    id: 0,
    name: ''
  }
}

async function getUser ({ payload, set, api }) {
  try {
    const { data } = await api.getUser({ path: { id: payload } })
    set({ users: data, user: {} })
  } catch (e) {
    console.error(e)
  }
}

async function createUser ({ state, set, api }) {
  try {
    const { data } = await api.createUser({
      body: {
        username: state.form.name,
        profile: {
          firstName: state.form.name,
          lastName: state.form.name
        }
      }
    })
    set({ users: {}, user: data })
  } catch (e) {
    console.error(e)
  }
}

async function updateUser ({ payload, state, set, api }) {
  try {
    const { data } = await api.updateUser({
      path: { id: payload },
      body: {
        username: state.form.name,
        profile: {
          firstName: state.form.name,
          lastName: state.form.name
        }
      }
    })
    set({ users: {}, user: data })
  } catch (e) {
    console.error(e)
  }
}

async function deleteUser ({ payload, api }) {
  try {
    const { data } = await api.deleteUser({ path: { id: payload } })
    console.info(data)
  } catch (e) {
    console.error(e)
  }
}

export default {
  initialState,
  getUser,
  createUser,
  updateUser,
  deleteUser
}
