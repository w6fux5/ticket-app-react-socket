import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';

import { UiProvider } from './context/UiContext';

ReactDOM.render(
  <React.StrictMode>
    <UiProvider>
      <App />
    </UiProvider>
  </React.StrictMode>,
  document.getElementById('root')
);
