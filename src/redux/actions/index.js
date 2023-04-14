// Coloque aqui suas actions

// Types
export const EMAIL_INPUT = 'GET_EMAIL';

export const CURRENCIES_INPUT = 'INPUT_CURRENCIES';

export const EXPENSES_INPUT = 'INPUT_EXPENSES';

export const EXPENSES_VALUE = 'EXPENSES_VALUES';

export const DELETE_EXPENSE = 'DELETE_EXPENSE';

// Creators

export const emailAction = (email) => ({
  type: EMAIL_INPUT,
  payload: email,
});

export const currenciesAction = (currency) => ({
  type: CURRENCIES_INPUT,
  payload: currency,
});

export const expensesAction = (expenses) => ({
  type: EXPENSES_INPUT,
  payload: expenses,
});

// Thunk Creators
export function fetchCurrencies() {
  const BASE_URL = 'https://economia.awesomeapi.com.br/json/all';
  return async (dispatch) => {
    const response = await fetch(BASE_URL);
    const data = await response.json();
    const dataFilter = Object.keys(data).filter((currency) => currency !== 'USDT');
    // console.log(data);
    // console.log(dataFilter);
    dispatch(currenciesAction(dataFilter));
  };
}

export function fetchExpensesRates(expenseObject) {
  const BASE_URL = 'https://economia.awesomeapi.com.br/json/all';
  return async (dispatch) => {
    const response = await fetch(BASE_URL);
    const data = await response.json();
    // console.log(data);
    // console.log(expenseObject);

    const finalData = {
      ...expenseObject,
      exchangeRates: data,
    };

    // console.log(finalData);

    dispatch(expensesAction(finalData));
  };
}

export const deleteExpenseAction = (actualState, idExpense) => {
  console.log('Estado global:', actualState);
  console.log('Estado global:', idExpense);

  const state = actualState;

  const deletedExpense = state.filter((expense) => expense.id !== idExpense);

  console.log('Estado global atualizado:', deletedExpense);

  return {
    type: DELETE_EXPENSE,
    payload: deletedExpense,
  };
};
