import React, { Component } from 'react';
import { connect } from 'react-redux';
import propTypes from 'prop-types';

import { expensesAction } from '../redux/actions';

class WalletForm extends Component {
  state = {
    idValue: 0,
    valueInput: 0,
    descriptionInput: '',
    currencyInput: 'BRL',
    methodInput: 'Dinheiro',
    tagInput: 'Alimentação',
    arrayExample: [],
  };

  onInputChange = ({ target }) => {
    const { name, value } = target;
    this.setState({
      [name]: value,
    });
  };

  handleClickExpensesAction = (actualState) => {
    const { dispatch } = this.props;
    dispatch(expensesAction(actualState));
  };

  render() {
    const {
      valueInput,
      descriptionInput,
      currencyInput,
      arrayExample,
      methodInput,
      tagInput,
      idValue,
    } = this.state;

    const data = {
      id: idValue,
      value: valueInput,
      currency: currencyInput,
      method: methodInput,
      tag: tagInput,
      description: descriptionInput,
      exchangeRates: arrayExample,
    };

    return (
      <form>
        <label>
          Valor da despesa:
          <input
            type="text"
            name="valueInput"
            data-testid="value-input"
            value={ valueInput }
            onChange={ this.onInputChange }
            required
          />
        </label>
        <label>
          Descrição da despesa:
          <input
            type="textarea"
            name="descriptionInput"
            data-testid="description-input"
            value={ descriptionInput }
            onChange={ this.onInputChange }
            required
          />
        </label>
        <label>
          Moeda:
          <select
            data-testid="currency-input"
            name="currencyInput"
            value={ currencyInput }
            onChange={ this.onInputChange }
          >
            {
              arrayExample.map((coin) => (
                <option
                  key={ coin.code }
                  value={ coin.code }
                >
                  { coin.name }
                </option>
              ))
            }
          </select>
        </label>
        <label>
          Método de Pagamento:
          <select
            data-testid="method-input"
            name="methodInput"
            value={ methodInput }
            onChange={ this.onInputChange }
          >
            <option value="Dinheiro">Dinheiro</option>
            <option value="Cartão de crédito">Cartão de crédito</option>
            <option value="Cartão de débito">Cartão de débito</option>
          </select>
        </label>
        <label>
          Categoria de despesa:
          <select
            data-testid="tag-input"
            name="tagInput"
            value={ tagInput }
            onChange={ this.onInputChange }
          >
            <option value="Alimentação">Alimentação</option>
            <option value="Lazer">Lazer</option>
            <option value="Trabalho">Trabalho</option>
            <option value="Transporte">Transporte</option>
            <option value="Saúde">Saúde</option>
          </select>
        </label>
        <button
          type="submit"
          name="submitButton"
          disabled
          onClick={ () => {
            this.handleClickExpensesAction(data);
          } }

        >
          Adicionar despesa
        </button>
      </form>
    );
  }
}

WalletForm.propTypes = {
  dispatch: propTypes.func.isRequired,
};

export default connect()(WalletForm);
