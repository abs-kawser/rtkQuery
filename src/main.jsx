import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
// import { Provider } from 'react-redux'
import { myApi } from './redux/api.js'
// import { ApiProvider } from '@reduxjs/toolkit/query/react'
import { store } from './redux/store.js'
import { Provider } from 'react-redux'

ReactDOM.createRoot(document.getElementById('root')).render(

  <Provider store={store}>
    <App />
  </Provider>



  // <ApiProvider api={myApi}>
  //   <App/>
  // </ApiProvider>,


  // <React.StrictMode>
  //   <App />
  // </React.StrictMode>,
)
