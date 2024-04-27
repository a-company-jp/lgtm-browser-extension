import '../global.css';
import React from 'react';
import { createRoot } from 'react-dom/client';
import { Provider } from 'react-redux';
import Popup from './Popup';
import { store } from '../app/store/index';

createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <Provider store={store}>
      <Popup />
    </Provider>
  </React.StrictMode>
);
