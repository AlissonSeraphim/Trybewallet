import { combineReducers } from 'redux';
import { emailReducer } from './user';

// Configure os seus reducers.
// ATENÇÃO: você obrigatoriamente tem que utilizar as chaves "user" e "wallet" no seu estado global

const rootReducer = combineReducers({
  emailReducer,
});

export default rootReducer;
