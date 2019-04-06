const {pipe, scan, skip, forEach} = require('callbag-basics')
const test = require('tape')
const {createStore} = require('./index')

test('store', t => {
  const { dispatch, store, getState } = createStore((state, action) => {
    switch (action.type) {
      case 'SET_FOOBAR':
        return { foobar: state.foobar + action.foobar }
      default:
        return state
    }
  }, { foobar: 1 })

  pipe(
    store,
    scan((prev, curr) => prev.concat([curr]), []),
    skip(2),
    forEach(states => {
      t.deepEqual(states, [{ foobar: 1 }, { foobar: 4 }, { foobar: 11 }])
      t.end()
    })
  )

  dispatch({ type: 'SET_FOOBAR', foobar: 3 })
  dispatch({ type: 'SET_FOOBAR', foobar: 7 })

  t.deepEqual(getState(), { foobar: 11 })
})
