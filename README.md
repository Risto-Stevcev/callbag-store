# callbag-store

[![Build Status](https://travis-ci.org/Risto-Stevcev/callbag-store.svg?branch=master)](https://travis-ci.org/Risto-Stevcev/callbag-store)
[![Latest release](https://img.shields.io/npm/v/callbag-store.svg?style=flat)](https://www.npmjs.com/package/callbag-store)
[![License](https://img.shields.io/npm/l/callbag-store.svg?style=flat)](https://github.com/Risto-Stevcev/callbag-store/blob/master/LICENSE)

A callbag implementation of a redux-like store

`npm install callbag-store`

## example

```js
const {createStore} = require('callbag-store')
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
