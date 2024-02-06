// index.js or your main file
import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import { LoadingProvider } from './LoadingContext';

ReactDOM.render(
  <React.StrictMode>
    <LoadingProvider>
      <App />
    </LoadingProvider>
  </React.StrictMode>,
  document.getElementById('root')
);
