import React from 'react';
import { screen } from '@testing-library/react';
import App from '../App';
import { renderWithRouterAndRedux } from './helpers/renderWith';

// ----------------------------------------------------------//

describe('Testa o componente Header', () => {
  it('Verifica se o componente Header está dentro do componente Wallet na rota /carteira', () => {
    renderWithRouterAndRedux(<App />, { initialEntries: ['/carteira'] });

    const headingHeader = screen.getByRole('heading', { level: 1 });

    expect(headingHeader).toBeInTheDocument();
  });

  it('Verifica se existe um elemento que exiba o e-mail da pessoa usuária logada', () => {
    const initialState = {
      user: {
        email: 'alissontassi@gmail.com',
      },
    };

    renderWithRouterAndRedux(<App />, { initialEntries: ['/carteira'], initialState });

    const emailTest = /alissontassi@gmail.com/i;

    const emailElement = screen.getByTestId('email-field');
    const userEmail = screen.getByText(emailTest);

    expect(emailElement).toBeInTheDocument();
    expect(emailElement).toBe(userEmail);
  });

  it('Verifica se existe um elemento com a despesa total gerada pela lista de gastos', () => {
    renderWithRouterAndRedux(<App />, { initialEntries: ['/carteira'] });

    const expensesElement = screen.getByTestId('total-field');

    expect(expensesElement).toBeInTheDocument();
  });

  it('Verifica se um elemento que mostre qual câmbio está sendo utilizado, BRL', () => {
    renderWithRouterAndRedux(<App />, { initialEntries: ['/carteira'] });

    const expensesElement = screen.getByTestId('header-currency-field');
    const containText = screen.getByText(/brl/i);

    expect(expensesElement).toBeInTheDocument();
    expect(expensesElement).toBe(containText);
  });
});
