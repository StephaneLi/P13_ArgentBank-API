import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter  as Router } from 'react-router-dom'
import { Provider } from 'react-redux';
import store from './store/stores';

import './sass/main.scss'
import App from './App';



const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(
  <Provider store={store}>
    <React.StrictMode>
      <Router basename={process.env.PUBLIC_URL}>
        <App />
      </Router>
    </React.StrictMode>
  </Provider>
);

