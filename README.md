# callbag-store

A callbag implementation of a redux-like store

`npm install callbag-store`

## example

```js
const observe = require('callbag-observe')

const { dispatch, store } = createStore((state, action) => {
  switch (action.type) {
    case 'SET_FOOBAR':
      return { foobar: state.foobar + action.foobar }
    default:
      return state
  }
}, { foobar: 1 })

observe(console.log)(store)

dispatch({ type: 'SET_FOOBAR', foobar: 3 })
dispatch({ type: 'SET_FOOBAR', foobar: 7 })
```
