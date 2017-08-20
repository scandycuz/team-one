import React from 'react';
import ReactDOM from 'react-dom';

const Root = () => (
  <main>
    React is live!
  </main>
)

document.addEventListener('DOMContentLoaded', () => {
  const container = document.getElementById('container');
  ReactDOM.render(<Root/>, container);
});