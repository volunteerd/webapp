import React from 'react';
import { createRoot } from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';
import App from './App';
import './index.css';
import Context from './components/UserContext';

const root = createRoot(document.getElementById('root')!);
root.render(
<BrowserRouter>
  <Context>
    <App/>
  </Context>
</BrowserRouter>
);