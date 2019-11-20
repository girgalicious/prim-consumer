import React from 'react';
import { AppRegistry } from 'react-native';
import { Provider } from 'react-redux';
import promiseMiddleware from 'redux-promise';
import { createStore, applyMiddleware, compose } from 'redux';
import App from './app/index';
import { name as appName } from './app.json';
import reducers from './app/store/reducers';
console.disableYellowBox = true;
const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const createStoreWithMiddleware = createStore(reducers, composeEnhancers(
  applyMiddleware(promiseMiddleware)
));

const appRedux = () => (
  <Provider store={createStoreWithMiddleware}>
    <App />
  </Provider>
);

AppRegistry.registerComponent(appName, () => appRedux);
