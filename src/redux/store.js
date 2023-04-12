// configure aqui sua store
import { legacy_createStore as createStore } from 'redux';
import { composeWithDevTools } from '@redux-devtools/extension';
// import thunk from 'redux-thunk';
// import { Reducer } from 'redux';

import rootReducer from './reducers';

const store = createStore(rootReducer, composeWithDevTools());

if (window.Cypress) {
  window.store = store;
}

export default store;
