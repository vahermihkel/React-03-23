import React from 'react';
import ReactDOM from 'react-dom/client';
import 'react-toastify/dist/ReactToastify.css';
import './index.css';
import App from './App';
import { BrowserRouter } from 'react-router-dom';

// navigeerimiseks - URL vahetuseks
// 1. npm install react-router-dom
// 2. BrowserRouter ümbritseb App tagi
// 3. App.js failis <Routes>, mille sees ükshaaval <Route/>

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </React.StrictMode>
);
