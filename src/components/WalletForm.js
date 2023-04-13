import React, { Component } from 'react';
import { connect } from 'react-redux';
import propTypes from 'prop-types';

import {
  fetchCurrencies,
  expensesAction,
  fetchExpensesRates,
} from '../redux/actions';

class WalletForm extends Component {
  constructor() {
    super();

    this.state = {
      expenseID: 0,
      valueInput: 0,
      descriptionInput: '',
      currencyInput: 'USD',
      methodInput: 'Dinheiro',
      tagInput: 'Alimentação',
    };
  }

  componentDidMount() {
    const { dispatch } = this.props;
    dispatch(fetchCurrencies());
  }

  HandleClickExpensesAction = (data) => {
    const { dispatch } = this.props;
    dispatch(expensesAction(data));
  };

  onInputChange = ({ target }) => {
    const { name, value } = target;
    this.setState({
      [name]: value,
    });
  };

  render() {
    const {
      expenseID,
      valueInput,
      descriptionInput,
      currencyInput,
      methodInput,
      tagInput,
    } = this.state;

    const {
      currencies,
      dispatch,
    } = this.props;

    const data = {
      id: expenseID,
      value: valueInput,
      currency: currencyInput,
      method: methodInput,
      tag: tagInput,
      description: descriptionInput,
    };

    // Console log space

    // console.log(currencies);

    /// ///////////////////////////////////////////0//////////////////////////

    return (
      <form onSubmit={ (e) => e.preventDefault() }>
        <label>
          Valor da despesa:
          <input
            type="number"
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
              currencies.map((coin, index) => (
                <option
                  key={ coin + index }
                  value={ coin }
                >
                  { coin }
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
          type="button"
          name="submitButton"
          disabled={ false }
          onClick={ () => {
            this.HandleClickExpensesAction(data);
            dispatch(fetchExpensesRates(data));
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
  currencies: propTypes.arrayOf(propTypes.string).isRequired,
};

const mapStateToProps = (state) => ({
  ...state,
  currencies: state.wallet.currencies,
  expenses: state.wallet.expenses,
});

export default connect(mapStateToProps)(WalletForm);
