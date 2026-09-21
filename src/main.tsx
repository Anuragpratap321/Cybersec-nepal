// Ensure window.fetch has both getter and setter in all execution contexts
try {
  const rawFetch = window.fetch ? window.fetch.bind(window) : undefined;
  let activeFetch = rawFetch;
  Object.defineProperty(window, 'fetch', {
    configurable: true,
    enumerable: true,
    get() {
      return activeFetch;
    },
    set(val) {
      activeFetch = val;
    }
  });
} catch {
  // Silent fallback if already defined or restricted
}

import {StrictMode} from 'react';
import {createRoot} from 'react-dom/client';
import App from './App.tsx';
import './index.css';

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <App />
  </StrictMode>,
);
