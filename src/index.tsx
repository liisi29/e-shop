import './index.scss';

import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';

import App from './App';
import { initFireBase } from './firebase/init';
import { Provider } from 'react-redux';
import store from './store/store';

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
initFireBase();
root.render(
  <React.StrictMode>
    <Provider store={store}>
      <BrowserRouter>
        <App />
      </BrowserRouter>
    </Provider>
  </React.StrictMode>
);
