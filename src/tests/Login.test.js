import React from 'react';
// import { screen } from '@testing-library/react';
// import userEvent from '@testing-library/user-event';
import App from '../App';
import { renderWithRouter } from './helpers/renderWith';

describe('Testa o componente Login', () => {
  it('verifica se a rota é / ', () => {
    const { history } = renderWithRouter(<App />);
    const { location: { pathname } } = history;
    console.log(history);
    expect(pathname).toBe('/');
  });

  it('Verifica se existem os inputs de email e senha', () => {
  });

  it('Verifica se existe o botão existe com o texto Entrar', () => {
  });

  it('Verifica se o botão está desabilitado caso o email e senha não tenham formato valido', () => {
  });

  it('Verifica se o botão está habilitado com email e senhas validos', () => {
  });

  it('Verifica o email é salvo no estado global quando logado', () => {
  });

  it('Verifica o email é salvo no estado global quando logado', () => {
  });

  it('Verifica se a rota é alternada para /carteira após clickar no botão', () => {
  });

  //   it('Testa a existência de conjunto fixo de links de navegação', () => {
  //     renderWithRouter(<App />);
  //     const getHomeLink = screen.getByRole('link', { name: /home/i });
  //     const getAboutLink = screen.getByRole('link', { name: /about/i });
  //     const getFavoriteLink = screen.getByRole('link', { name: /favorite pokémon/i });

//     expect(getHomeLink).toBeInTheDocument();
//     expect(getAboutLink).toBeInTheDocument();
//     expect(getFavoriteLink).toBeInTheDocument();
//   });
});
