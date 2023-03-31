import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import { BrowserRouter } from "react-router-dom";

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <BrowserRouter base='tradr-ui'>
    <React.StrictMode>
      <App />
    </React.StrictMode>
  </BrowserRouter>
);
