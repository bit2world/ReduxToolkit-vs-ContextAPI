import React from 'react';
import ReactDOM from 'react-dom';

import './index.css';
import reportWebVitals from './reportWebVitals';
import AppProvider from './context/AppProvider'
import { Provider } from 'react-redux'
import { store } from './app/store'
import AppRoutes from './routes/route';
import Layout from './components/Layout';

ReactDOM.render(
  <React.StrictMode>
    <AppProvider>
      <Provider store={store}>
        <AppRoutes />
      </Provider>
    </AppProvider>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
