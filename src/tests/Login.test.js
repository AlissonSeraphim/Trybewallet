import React from 'react';
import { screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
// import Login from '../pages/Login';
import App from '../App';
import { renderWithRouterAndRedux } from './helpers/renderWith';

// const Entries type
const wrongEmail = 'alissontassi.com';
const wrongPassword = '12345';

const validEmail = 'alissontassi@gmail.com';
const validPassword = '123456';

// ----------------------------------------------------------//

describe('Analisa a page Login', () => {
  it('verifica se a rota é / ', () => {
    const { history } = renderWithRouterAndRedux(<App />);
    const { location: { pathname } } = history;
    expect(pathname).toBe('/');
  });

  it('Verifica se existem os inputs de email e senha', () => {
    renderWithRouterAndRedux(<App />);

    const getInputEmail = screen.getByRole('textbox', { name: /email:/i });
    const getInputPassword = screen.getByLabelText(/senha:/i);

    expect(getInputEmail).toBeInTheDocument();
    expect(getInputPassword).toBeInTheDocument();
  });

  it('Verifica se existe o botão existe com o texto Entrar e está desabilitado inicialmente', () => {
    renderWithRouterAndRedux(<App />);

    const getButton = screen.getByRole('button', { name: /entrar/i });

    expect(getButton).toBeInTheDocument();
    expect(getButton).toBeDisabled();
  });

  it('Verifica se o botão está desabilitado caso o email e senha não tenham formato valido', () => {
    renderWithRouterAndRedux(<App />);

    const getInputEmail = screen.getByRole('textbox', { name: /email:/i });
    const getInputPassword = screen.getByLabelText(/senha:/i);
    const getButton = screen.getByRole('button', { name: /entrar/i });

    userEvent.type(getInputEmail, wrongEmail);
    expect(getButton).toBeDisabled();

    userEvent.type(getInputPassword, wrongPassword);
    expect(getButton).toBeDisabled();
  });

  it('Verifica se o botão está habilitado com email e senhas validos', () => {
    renderWithRouterAndRedux(<App />);

    const getInputEmail = screen.getByRole('textbox', { name: /email:/i });
    const getInputPassword = screen.getByLabelText(/senha:/i);
    const getButton = screen.getByRole('button', { name: /entrar/i });

    userEvent.type(getInputEmail, validEmail);
    userEvent.type(getInputPassword, validPassword);

    expect(getButton).not.toBeDisabled();
  });

  it('Verifica o email é salvo no estado global quando logado', () => {
    const { store } = renderWithRouterAndRedux(<App />);

    const getInputEmail = screen.getByRole('textbox', { name: /email:/i });
    const getInputPassword = screen.getByLabelText(/senha:/i);
    const getButton = screen.getByRole('button', { name: /entrar/i });

    userEvent.type(getInputEmail, validEmail);
    userEvent.type(getInputPassword, validPassword);

    userEvent.click(getButton);

    // verificando estado global
    const { user } = store.getState();

    expect(user.email).toBe(validEmail);
  });

  it('Verifica se a rota é alternada para /carteira após clickar no botão', () => {
    const { history } = renderWithRouterAndRedux(<App />);

    const getInputEmail = screen.getByRole('textbox', { name: /email:/i });
    const getInputPassword = screen.getByLabelText(/senha:/i);
    const getButton = screen.getByRole('button', { name: /entrar/i });

    userEvent.type(getInputEmail, validEmail);
    userEvent.type(getInputPassword, validPassword);

    userEvent.click(getButton);

    const { location: { pathname } } = history;
    expect(pathname).toBe('/carteira');
  });
});
