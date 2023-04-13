// Coloque aqui suas actions

// Types
export const EMAIL_INPUT = 'GET_EMAIL';

export const CURRENCIES_INPUT = 'INPUT_CURRENCIES';

export const EXPENSES_INPUT = 'INPUT_EXPENSES';

export const EXPENSES_FETCH = 'EXPENSES_RATES';

export const EXPENSES_VALUE = 'EXPENSES_VALUES';

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

export const expensesRatesFetch = (expensesRates) => ({
  type: EXPENSES_FETCH,
  payload: expensesRates,
});

export const expensesValue = (expensesValues) => ({
  type: EXPENSES_VALUE,
  payload: expensesValues,
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

export function fetchExpensesRates() {
  const BASE_URL = 'https://economia.awesomeapi.com.br/json/all';
  return async (dispatch) => {
    const response = await fetch(BASE_URL);
    const data = await response.json();
    console.log(data);
    dispatch(expensesRatesFetch(data));
  };
}
