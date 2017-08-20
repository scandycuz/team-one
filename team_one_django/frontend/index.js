import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { Route, HashRouter } from 'react-router-dom';

import configureStore from './store/Store';
import App from './components/App';

document.addEventListener('DOMContentLoaded', () => {
  let store;

  store = configureStore();
  const container = document.getElementById('container');
  ReactDOM.render(
    <Provider store={store}>
      <HashRouter>
        <Route path="/" component={App} />
      </HashRouter>
    </Provider>,
    container
  );
});
