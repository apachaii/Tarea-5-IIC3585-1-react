import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';

import App from './App';
import app_state from "./redux/app_state";

ReactDOM.render(
  <React.StrictMode>
    <Provider store={app_state}>
      <App/>
    </Provider>
  </React.StrictMode>,
  document.getElementById('root')
);
