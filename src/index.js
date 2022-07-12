import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import  HouseContextProvider  from './HouseContext';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <HouseContextProvider>
      <App />
    </HouseContextProvider>
  </React.StrictMode>
);

