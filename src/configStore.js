import { createStore, applyMiddleware, compose } from 'redux';
import createSagaMiddleware from 'redux-saga';
import axios from 'axios';
import reducer from './RootReducer';
import rootSaga from './RootSaga';
import LocalStorageManager from './LocalStorageManager';

const sagaMiddleware = createSagaMiddleware();

const composeEnhancers =
  typeof window === 'object' &&
  window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ ?
    window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__({
      // Specify extension’s options like name, actionsBlacklist, actionsCreators, serialize...
    }) : compose;

const initialState = LocalStorageManager.load();
const store = createStore(
  reducer,
  initialState,
  composeEnhancers(
    applyMiddleware(sagaMiddleware),
  ),
);
axios.defaults.baseURL = process.env.NODE_ENV === 'production' ? 'https://palatable-api.herokuapp.com/api/' : '';
console.log(axios.defaults.baseURL);
axios.defaults.headers.common['Content-Type'] = 'application/json';
store.subscribe(() => {
  const auth = store.getState().auth;
  axios.defaults.headers.common['Authorization'] = `Bearer ${auth.jwt}`;
  LocalStorageManager.save({ auth });
});

sagaMiddleware.run(rootSaga);

export default store;
