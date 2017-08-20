import React from 'react';
import ReactDOM from 'react-dom';

import configureStore from './store/Store';

const Root = ({ store }) => (
  <main>
    { store.getState().session.user }
    React is live!
  </main>
)

document.addEventListener('DOMContentLoaded', () => {
  let store;
  
  store = configureStore();
  const container = document.getElementById('container');
  ReactDOM.render(<Root store={store} />, container);
});