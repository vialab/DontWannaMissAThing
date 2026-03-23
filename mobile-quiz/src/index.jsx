import React from 'react';
import { createRoot } from 'react-dom/client';
import './index.css';
import App from './App';

// 1. Grab the root element from your index.html
const container = document.getElementById('root');

// 2. Create a React root
const root = createRoot(container);

// 3. Render your App inside the root
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);