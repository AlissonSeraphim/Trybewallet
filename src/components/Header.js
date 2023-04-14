import React, { Component } from 'react';
import { connect } from 'react-redux';
import propTypes from 'prop-types';

class Header extends Component {
  state = {
    expensesTotal: 0,
  };

  componentDidUpdate(prevProps) {
    const { expenses } = this.props;
    if (prevProps.expenses.length !== expenses.length) {
      // console.log('atualizei');
      // console.log(prevProps.expenses.length);
      this.sumExpenses();
    }
  }

  sumExpenses = () => {
    const { expenses } = this.props;

    // console.log(expenses);
    // console.log('fui executado');

    // pegando array de asks e somando com o valor da despesa(value)
    // console.log('entrei no array');
    const arrayAsks = expenses.map((expense) => {
      const exchangeRates = expense.exchangeRates[expense.currency];
      if (exchangeRates) {
        return exchangeRates.ask * expense.value;
      }
      return null;
    });
    // console.log(arrayAsks);
    /// //////// ----------------- ////////////////////////

    //  soma do array construido

    const sumArrayAsks = arrayAsks.reduce((acc, curr) => acc + curr, 0);
    // console.log(sumArrayAsks.toFixed(2));

    if (sumArrayAsks) {
      this.setState({
        expensesTotal: +sumArrayAsks.toFixed(2),
      });
    }
  };

  render() {
    const { email } = this.props;
    const { expensesTotal } = this.state;
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
          {
            expensesTotal
          }
        </p>
        <h3
          data-testid="header-currency-field"
        >
          BRL
        </h3>
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
