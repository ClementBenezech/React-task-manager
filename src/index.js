import React from 'react'
import ReactDOM from 'react-dom'
import './index.css'
import App from './components/App'
import store from './store/store'
import { Provider } from 'react-redux'
import { BrowserRouter } from "react-router-dom";
import {saveState} from "./utils/LocalStorage"

//Saving the store state into localStorage (saveState is declared in LocalSorage.js)
store.subscribe(() => {
  saveState(store.getState())
})

ReactDOM.render(
  <React.StrictMode>
      <Provider store={store}>
        <BrowserRouter>
            <App />
        </BrowserRouter>
      </Provider>
  </React.StrictMode>,
  document.getElementById('root')
);