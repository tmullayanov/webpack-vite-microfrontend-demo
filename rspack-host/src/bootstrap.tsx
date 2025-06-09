import React from 'react';
import ReactDOM from 'react-dom';
import App from './App.tsx';
import './index.css';

const root = document.getElementById('root') as HTMLElement;
ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  root,
);
