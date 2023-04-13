// actions;
import { EXPENSES_VALUE } from '../actions';

// reducers
const INITIAL_STATE = {
  expensesTotal: 0,
};

const auxiliarReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
  case EXPENSES_VALUE:
    return {
      ...state,
      expensesTotal: action.payload,
    };

  default:
    return state;
  }
};

export default auxiliarReducer;
