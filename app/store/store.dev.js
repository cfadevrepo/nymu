import { createStore } from 'redux';
import { devToolsEnhancer } from 'redux-devtools-extension'; // eslint-disable-line import/no-extraneous-dependencies
import reducer from '../reducers';

export default function configureStore(initialState = {}) {
  return createStore(reducer, initialState, devToolsEnhancer());
}
