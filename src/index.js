import React from 'react'
import ReactDom from 'react-dom'
import { Provider } from 'react-redux'

import './index.css'

import App from './app'
import store from './modules'

ReactDom.render(
  <Provider store={ store }>
    <App />
  </Provider>,
  document.getElementById('app')
)