import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { Route, HashRouter } from 'react-router-dom';

import configureStore from './store/Store';
import App from './components/App';
import injectTapEventPlugin from 'react-tap-event-plugin';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';

document.addEventListener('DOMContentLoaded', () => {
  injectTapEventPlugin();
  let store;
  store = configureStore();
  const container = document.getElementById('container');
  ReactDOM.render(
    <MuiThemeProvider>
      <Provider store={store}>
        <HashRouter>
          <Route path="/" component={App} />
        </HashRouter>
      </Provider>
    </MuiThemeProvider>,
    container
  );
});
