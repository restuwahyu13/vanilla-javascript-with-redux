import {
  createStore,
  applyMiddleware
} from 'redux';
import {
  composeWithDevTools
} from 'redux-devtools-extension';
import {
  logger
} from 'redux-logger';
import {
  reduxReducer
} from '../redux/reducer';

const store = createStore( reduxReducer, composeWithDevTools( applyMiddleware( logger ) ) );
export {
  store
};