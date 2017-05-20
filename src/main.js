import React from 'react'
import store from './store'
import { BrowserRouter } from 'react-router-dom'
import ReactDOM from 'react-dom'
import App from './components/App.jsx'
import { Provider } from 'react-redux'

ReactDOM.render((
      <Provider store={store}>
        <BrowserRouter>
            <App />
        </BrowserRouter>
      </Provider>
), document.getElementById('root'));
