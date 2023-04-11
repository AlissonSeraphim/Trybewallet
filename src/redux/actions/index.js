// Coloque aqui suas actions

// Types
export const EMAIL_INPUT = 'GET_EMAIL';

// Creators

export const emailAction = (email) => ({
  type: EMAIL_INPUT,
  payload: email,
});
