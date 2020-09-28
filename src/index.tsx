import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware, compose } from 'redux';
import createSagaMiddleware from 'redux-saga';
import { Router } from "react-router";
import { createBrowserHistory } from 'history';

import App from './Containers/App';
import rootSaga from './State/Sagas/index';
import { rootReducer } from './State/Reducers';

export const history = createBrowserHistory();

const sagaMiddleware = createSagaMiddleware();

const store = createStore(rootReducer(), compose(
  applyMiddleware(sagaMiddleware)
));

sagaMiddleware.run(rootSaga);

ReactDOM.render(
  <Provider store={store}>
    <Router history={history}>
      <App />
    </Router >
  </Provider>, document.getElementById('root'));