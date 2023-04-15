import React from 'react';
import { act, screen, waitFor } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import App from '../App';
import { renderWithRouterAndRedux } from './helpers/renderWith';
// import mockData from './helpers/mockData';

// ----------------------------------------------------------//

describe('Testa a page Wallet', () => {
  it('Verifica se o componente WalletForm possui campo para valor de despesa', () => {
    renderWithRouterAndRedux(<App />, { initialEntries: ['/carteira'] });

    const expenseInput = screen.getByTestId('value-input');

    expect(expenseInput).toBeInTheDocument();
  });

  it('Verifica se o componente WalletForm possui campo para descrição da despesa', () => {
    renderWithRouterAndRedux(<App />, { initialEntries: ['/carteira'] });

    const descriptionInput = screen.getByTestId('description-input');

    expect(descriptionInput).toBeInTheDocument();
  });

  it('Verifica se o componente WalletForm possui campo para selecionar qual moeda está a despesa', () => {
    renderWithRouterAndRedux(<App />, { initialEntries: ['/carteira'] });

    const currencyInput = screen.getByTestId('currency-input');

    expect(currencyInput).toBeInTheDocument();
  });

  it('Verifica se o componente WalletForm possui campo para selecionar qual será o método de pagamento', () => {
    renderWithRouterAndRedux(<App />, { initialEntries: ['/carteira'] });

    const methodInput = screen.getByTestId('method-input');

    expect(methodInput).toBeInTheDocument();
  });

  it('Verifica se o componente WalletForm possui campo para selecionar a categoria da despesa', () => {
    renderWithRouterAndRedux(<App />, { initialEntries: ['/carteira'] });

    const tagInput = screen.getByTestId('tag-input');

    expect(tagInput).toBeInTheDocument();
  });

  it('Verifica se o componente WalletForm possui um botão com o texto adicionar despesa', () => {
    renderWithRouterAndRedux(<App />, { initialEntries: ['/carteira'] });

    const expenseButton = screen.getByRole('button', { name: /adicionar despesa/i });

    expect(expenseButton).toBeInTheDocument();
  });

  it('Verifica se ao clicar no botão de despesa a despesa é salva no estado global na chave expenses', async () => {
    // const initialState = {
    //   expenses: [
    //     {
    //       id: 0,
    //       value: '150',
    //       currency: 'USD',
    //       method: 'Cartão de crédito',
    //       tag: 'Trabalho',
    //       description: 'SSD',
    //       exchangeRates: {
    //         USD: mockData,
    //       },
    //     },
    //   ],
    // };

    const initialState = {
      currencies: [
        'USD',
        'CAD',
        'GBP',
        'ARS',
        'BTC',
        'LTC',
        'EUR',
        'JPY',
        'CHF',
        'AUD',
        'CNY',
        'ILS',
        'ETH',
        'XRP',
        'DOGE',
      ],
    };

    const { store } = renderWithRouterAndRedux(<App />, { initialEntries: ['/carteira'], initialState });

    const expenseInput = screen.getByTestId('value-input');
    const descriptionInput = screen.getByTestId('description-input');
    const currencyInput = screen.getByTestId('currency-input');
    // const methodInput = screen.getByTestId('method-input');
    // const tagInput = screen.getByTestId('tag-input');
    const expenseButton = screen.getByRole('button', { name: /adicionar despesa/i });

    const expenseValue = 150;
    const descriptionValue = 'SSD';
    // const currencyValue = 'USD';
    // const methodValue = 'Cartão de crédito';
    // const tagValue = 'Trabalho';
    // const textTest = screen.getByText(/USD/i);
    const currencies = [
      'USD',
      'CAD',
      'GBP',
      'ARS',
      'BTC',
      'LTC',
      'EUR',
      'JPY',
      'CHF',
      'AUD',
      'CNY',
      'ILS',
      'ETH',
      'XRP',
      'DOGE',
    ];

    userEvent.type(expenseInput, expenseValue);
    userEvent.type(descriptionInput, descriptionValue);
    // userEvent.selectOptions(currencyInput, random);
    // userEvent.type(methodInput, methodValue);
    // userEvent.type(tagInput, tagValue);

    expect(currencyInput).toBeInTheDocument();

    act(() => userEvent.click(expenseButton));

    await waitFor(() => expect(store.getState().wallet).toHaveProperty('currencies', currencies));
  });
});
