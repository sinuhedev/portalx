const initialState = {
  channel: 5,
  i18n: null
}

function increment ({ state, set }) {
  set({ channel: state.channel + 1 })
}

function decrement ({ state, set }) {
  set({ channel: state.channel - 1 })
}

export default {
  initialState,
  increment,
  decrement
}
