import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { legacy_createStore as createStore } from 'redux';
import allReducer from './reducers';
import { Provider } from 'react-redux';

// Khai báo đối tượng store
const storeRedux = createStore(
  allReducer
);
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <Provider store={storeRedux}>
    <App />
  </Provider>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
