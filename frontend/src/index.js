import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';

import { SocketProvider } from './context/SocketContext';
import { UiProvider } from './context/UiContext';

ReactDOM.render(
  <React.StrictMode>
    <SocketProvider>
      <UiProvider>
        <App />
      </UiProvider>
    </SocketProvider>
  </React.StrictMode>,
  document.getElementById('root')
);
