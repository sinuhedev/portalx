import { getUser } from 'services/api'

const initialState = {
  i18n: '',
  loading: false,
  services: {
    api: {}
  },
  num: 0
}

function init ({ set }) {
  set({
    i18n: window.localStorage.getItem('i18n')
  })
}

function changeI18n ({ set, payload }) {
  const { value } = payload.target
  set({
    i18n: value
  })
  window.localStorage.setItem('i18n', value)
}

function setServices ({ set, show, hide }) {
  set({
    services: {
      api: {
        getUser
      }
    }
  })
}

function increment ({ state, set }) {
  set({ num: state.num + 1 })
}

function decrement ({ state, set }) {
  set({ num: state.num - 1 })
}

function zero ({ payload, set }) {
  set({ num: payload.value })
}

export default {
  initialState,
  init,
  changeI18n,
  setServices,
  increment,
  decrement,
  zero
}
