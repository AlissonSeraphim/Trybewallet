// Coloque aqui suas actions

// Types
export const EMAIL_INPUT = 'GET_EMAIL';

export const CURRENCIES_INPUT = 'INPUT_CURRENCIES';

// Creators

export const emailAction = (email) => ({
  type: EMAIL_INPUT,
  payload: email,
});

export const currenciesAction = (currency) => ({
  type: CURRENCIES_INPUT,
  payload: currency,
});

// Request Type

const requestCurrency = () => ({
  type: CURRENCIES_INPUT,
});

// Thunk Creators
export function fetchCurrencies() {
  const BASE_URL = 'https://economia.awesomeapi.com.br/json/all';
  return async (dispatch) => {
    dispatch(requestCurrency());
    const response = await fetch(BASE_URL);
    const data = await response.json();
    const dataFilter = Object.keys(data).filter((currency) => currency !== 'USDT');
    // console.log(data)
    // console.log(dataFilter);
    dispatch(currenciesAction(dataFilter));
  };
}
