import React, { Component } from 'react';
import { connect } from 'react-redux';
import propTypes from 'prop-types';

import { deleteExpenseThunk } from '../redux/actions';

class Table extends Component {
  // componentDidUpdate(prevProps) {
  //   const { expenses } = this.props;
  //   if (prevProps.expenses.length !== expenses.length) {
  //     console.log('atualizei');
  //     // console.log(prevProps.expenses.length);
  //     this.tableObject();
  //   }
  // }

  tableObject = () => {
    const { expenses } = this.props;

    const arrayExpenses = expenses.map((expense) => {
      const exchangeRate = expense.exchangeRates[expense.currency];
      if (exchangeRate) {
        return {
          description: expense.description,
          tag: expense.tag,
          method: expense.method,
          value: Number(expense.value).toFixed(2),
          currency: exchangeRate.name,
          ask: Number(exchangeRate.ask).toFixed(2),
          convertedValue: Number(exchangeRate.ask * expense.value).toFixed(2),
          currentCurrency: 'Real',
          id: expense.id,
        };
      }
      return null;
    });
    return arrayExpenses;
  };

  render() {
    const arrayReturned = this.tableObject();

    return (
      <table>
        <thead>
          <tr>
            <th>Descrição</th>
            <th>Tag</th>
            <th>Método de pagamento</th>
            <th>Valor</th>
            <th>Moeda</th>
            <th>Câmbio utilizado</th>
            <th>Valor convertido</th>
            <th>Moeda de conversão</th>
            <th>Editar/Excluir</th>
          </tr>
        </thead>
        {
          arrayReturned && (
            arrayReturned.map((parameter) => (
              <tbody key={ parameter.id }>
                <tr>
                  <td>{ parameter.description }</td>
                  <td>{ parameter.tag }</td>
                  <td>{ parameter.method }</td>
                  <td>{ parameter.value }</td>
                  <td>{ parameter.currency }</td>
                  <td>{ parameter.ask }</td>
                  <td>{ parameter.convertedValue }</td>
                  <td>{ parameter.currentCurrency }</td>
                  <td>
                    <button
                      type="button"
                      data-testid="delete-btn"
                      onClick={ deleteExpenseThunk }
                    >
                      Excluaaa
                    </button>
                  </td>
                </tr>
              </tbody>
            ))
          )
        }
      </table>
    );
  }
}

Table.propTypes = {
  expenses: propTypes.arrayOf(propTypes.shape({
  })).isRequired,
  // dispatch: propTypes.func.isRequired,
  // id: propTypes.number.isRequired,
  // value: propTypes.number.isRequired,
  // currency: propTypes.string.isRequired,
  // method: propTypes.string.isRequired,
  // tag: propTypes.string.isRequired,
  // description: propTypes.string.isRequired,
};

const mapStateToProps = (state) => ({
  ...state,
  expenses: state.wallet.expenses,
  id: state.wallet.expenses.id,
  value: state.wallet.expenses.value,
  currency: state.wallet.expenses.currency,
  method: state.wallet.expenses.method,
  tag: state.wallet.expenses.tag,
  description: state.wallet.expenses.description,
});

export default connect(mapStateToProps)(Table);
