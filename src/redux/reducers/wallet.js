// Esse reducer será responsável por tratar o todas as informações relacionadas as despesas

// actions;
import { EXPENSE_INPUT } from '../actions';

// reducers
const INITIAL_STATE = {
  email: '',
  user: {
    email: '', // string que armazena o email da pessoa usuária
  },
  wallet: {
    currencies: [], // array de string
    expenses: [], // array de objetos, com cada objeto tendo as chaves id, value, currency, method, tag, description e exchangeRates
    editor: false, // valor booleano que indica de uma despesa está sendo editada
    idToEdit: 0, // valor numérico que armazena o id da despesa que esta sendo editada
  },
};

const wallet = (state = INITIAL_STATE, action) => {
  switch (action.type) {
  case EXPENSE_INPUT:
    return {
      ...state,
      wallet: {
        expenses: [...action.payload],
      },
    };

  default:
    return state;
  }
};

export default wallet;
