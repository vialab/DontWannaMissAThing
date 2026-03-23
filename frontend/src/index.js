import React from 'react';
import { createRoot } from 'react-dom/client';
import { Provider } from 'react-redux';

import Routes from './Routes';
import store from './redux/store';

// Create root element
const rootElement = document.createElement('div');
rootElement.id = 'root';
document.body.appendChild(rootElement);

// Create root and render
const root = createRoot(rootElement);
root.render(
  <Provider store={store}>
    <Routes />
  </Provider>
);
