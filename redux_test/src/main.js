import React from 'react'
import ReactDOM from 'react-dom'
import {AppContainer} from 'react-hot-loader'
import { createStore } from 'redux'
import { Provider } from 'react-redux'
import App from './components/App.jsx'
import todoApp from './reducers/reducers'

const store = createStore(todoApp)

ReactDOM.render(
  <AppContainer>
  <Provider store={store}>
    <App />
  </Provider>
  </AppContainer>,
  document.getElementById('root')
)

if (module.hot) {
  module.hot.accept();
}