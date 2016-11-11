'use strict';

import 'styles/main.scss'

import React from 'react'
import { render } from 'react-dom'

import { createStore } from 'redux'
import { Provider } from 'react-redux'

import todoApp from './reducers'
import App from './components/App'

//import Index from 'components/Index/Index';

//let store = createStore(todoApp)
const store = createStore(todoApp, window.__REDUX_DEVTOOLS_EXTENSION__
  && window.__REDUX_DEVTOOLS_EXTENSION__());

render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('js-main')
);
