const initialState = {
  i18nLocale: window.localStorage.getItem('i18n'),
  loading: false,
  //
  num: 0
}

function changeI18n ({ set, payload }) {
  const { value } = payload.target
  set({
    i18nLocale: value
  })
  window.localStorage.setItem('i18n', value)
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
  changeI18n,
  increment,
  decrement,
  zero
}
