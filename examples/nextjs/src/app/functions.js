const initialState = {
  num: 0
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
  increment,
  decrement,
  zero
}
