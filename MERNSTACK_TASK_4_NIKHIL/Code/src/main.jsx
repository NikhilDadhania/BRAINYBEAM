import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { store } from './store';
import ChessBoard from './component/ChessBoard';

ReactDOM.render(
  <Provider store={store}>
    <ChessBoard />
  </Provider>,
  document.getElementById('root')
);
