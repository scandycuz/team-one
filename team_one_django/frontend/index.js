import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { Route, HashRouter } from 'react-router-dom';

import configureStore from './store/Store';

import '../assets/scss/App.scss';

document.addEventListener('DOMContentLoaded', () => {
  let store;

  class TempApp extends React.Component {
    render() {
      return (
        <div>Hello World!</div>
      );
    }
  }

  store = configureStore();
  const container = document.getElementById('container');
  ReactDOM.render(
    <Provider store={store}>
      <HashRouter>
        <Route path="/" component={TempApp} />
      </HashRouter>
    </Provider>,
    container
  );
});
