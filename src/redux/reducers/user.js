// Esse reducer será responsável por tratar as informações da pessoa usuária

// actions;
import { EMAIL_INPUT } from '../actions';

// reducers
const INITIAL_STATE = {
  user: {
    email: '',
  },
  wallet: {},
};

export const emailReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
  case EMAIL_INPUT:
    return {
      ...state,
      user: {
        email: action.payload,
      },
    };

  default:
    return state;
  }
};
