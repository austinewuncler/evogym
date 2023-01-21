import './index.css';

import React, { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';

import { App } from './components';
import { PageProvider } from './providers';

const rootEl = document.getElementById('root') as HTMLElement;
const root = createRoot(rootEl);
root.render(
  <StrictMode>
    <PageProvider>
      <App />
    </PageProvider>
  </StrictMode>
);
