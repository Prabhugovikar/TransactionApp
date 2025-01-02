import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { Provider } from 'react-redux';
import { store } from './Redux/store';

// font family 
import './Fonts/Inter/Inter-Bold.ttf';
import './Fonts/Inter/Inter-Medium.ttf';
import './Fonts/Inter/Inter-Regular.ttf';
import './Fonts/Inter/Inter-SemiBold.ttf';
const { worker } = require('./MockApis/browser');
const root = ReactDOM.createRoot(document.getElementById('root'));


root.render(
  <Provider store={store}>
    <App />
  </Provider>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
worker.start();
