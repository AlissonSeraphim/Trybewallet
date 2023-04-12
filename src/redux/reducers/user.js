// Esse reducer será responsável por tratar as informações da pessoa usuária

// actions;
import { EMAIL_INPUT } from '../actions';

// reducers
const INITIAL_STATE = {
  email: '',
};

const user = (state = INITIAL_STATE, action) => {
  switch (action.type) {
  case EMAIL_INPUT:
    return {
      ...state,
      email: action.payload, // efetuado um segundo email de armazenamento pois o teste do cypress não identifica o email de dentro do chave user
    };

  default:
    return state;
  }
};

export default user;
