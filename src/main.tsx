import './index.css';

import React, { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';

import { App } from './components';

const rootEl = document.getElementById('root') as HTMLElement;
const root = createRoot(rootEl);
root.render(
  <StrictMode>
    <App />
  </StrictMode>
);
