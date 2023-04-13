import React, { Component } from 'react';
import { connect } from 'react-redux';
import propTypes from 'prop-types';

class Header extends Component {
  state = {
    teste: 0,
  };

  componentDidUpdate(prevProps) {
    const { expenses } = this.props;
    if (prevProps.expenses.length !== expenses.length) {
      console.log('atualizei');
      console.log(prevProps.expenses.length);
      this.sumExpenses();
    }
  }

  sumExpenses = () => {
    const { expenses } = this.props;

    const firstValue = expenses[0].value;

    console.log(expenses);
    console.log('fui executado');
    console.log(firstValue);

    // pegando array de asks e somando com o valor da despesa(value)
    if (expenses.length > 1) {
      console.log('entrei no array');
      const arrayAsks = expenses.map((expense) => {
        const exchangeRates = expense.exchangeRates[expense.currency];
        if (exchangeRates) {
          return exchangeRates.ask * expense.value;
        }
        return null;
      });
      console.log(arrayAsks);
      /// //////// ----------------- ////////////////////////

      //  soma do array construido

      const sumArrayAsks = arrayAsks.reduce((acc, curr) => acc + curr, 0);
      console.log(sumArrayAsks.toFixed(2));

      if (sumArrayAsks) {
        this.setState({
          teste: sumArrayAsks,
        });
        return sumArrayAsks;
      }
    }

    if (expenses.length === 1) {
      console.log('teste aqui');
      this.setState({
        teste: firstValue,
      });
    }
  };

  render() {
    const { email } = this.props;
    const { teste } = this.state;
    return (
      <header>
        <h1
          data-testid="email-field"
        >
          { email }
        </h1>
        <p
          data-testid="total-field"
        >
          0
        </p>
        <h3
          data-testid="header-currency-field"
        >
          BRL
        </h3>
        <h4
          data-testid="total-field"
        >
          {
            teste || 0
          }
        </h4>
        <button type="button" onClick={ this.sumExpenses }>TESTE</button>
      </header>
    );
  }
}

Header.propTypes = {
  email: propTypes.string.isRequired,
  expenses: propTypes.arrayOf(propTypes.shape({
    value: propTypes.string.isRequired,
  })).isRequired,
};

const mapStateToProps = (state) => ({
  ...state.user,
  expenses: state.wallet.expenses,
});

export default connect(mapStateToProps)(Header);
