const createStore = (reducer, initialState) => {
  var state = initialState
  var listeners = []

  return {
    getState: () => state,
    dispatch: action => {
      state = reducer(state, action)
      listeners.forEach(listener => listener())
    },
    store: (start, sink) => {
      if (start !== 0) return
      const handler = () => sink(1, state)
      sink(0, t => {
        if (t === 2) listeners = listeners.filter(listener => listener !== handler)
      })
      listeners.push(handler)
      sink(1, state)
    }
  }
}

module.exports = createStore
