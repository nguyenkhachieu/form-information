import React from 'react';
import ReactDOM from 'react-dom';
import createSagaMiddleware from 'redux-saga';
import { createStore, applyMiddleware } from 'redux';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';
import appReducers from './reducers';
import { Provider } from 'react-redux';
import mySaga from './sagas';

const sagaMiddleware = createSagaMiddleware();
const store = createStore(
  appReducers,
  applyMiddleware(sagaMiddleware)
);

sagaMiddleware.run(mySaga);

ReactDOM.render(
<Provider store={store}>
    <App />
</Provider>, 
document.getElementById('root'));
serviceWorker.unregister();