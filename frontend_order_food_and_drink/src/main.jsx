import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App.jsx';
import './App.scss';
import { Provider } from 'react-redux';
import { BrowserRouter } from 'react-router-dom';

import store from './store'

ReactDOM.createRoot(document.getElementById('root')).render(
  <BrowserRouter>
    <Provider store={store}>
      {/* <React.StrictMode> */}
        <App />
      {/* </React.StrictMode> */}
    </Provider>
  </BrowserRouter>
)
