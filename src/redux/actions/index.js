// Coloque aqui suas actions

// Types
export const EMAIL_INPUT = 'GET_EMAIL';

export const EXPENSE_INPUT = 'GET_EXPENSES';

// Creators

export const emailAction = (email) => ({
  type: EMAIL_INPUT,
  payload: email,
});

export const expensesAction = (expense) => ({
  type: EXPENSE_INPUT,
  payload: expense,
});
