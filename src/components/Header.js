import React, { Component } from 'react';
import { connect } from 'react-redux';
import propTypes from 'prop-types';

class Header extends Component {
  render() {
    const { user } = this.props;
    return (
      <header>
        <h1
          data-testid="email-field"
        >
          { user.email }
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
      </header>
    );
  }
}

Header.propTypes = {
  user: propTypes.string.isRequired,
};

const mapStateToProps = (state) => ({
  ...state.emailReducer,
});

export default connect(mapStateToProps)(Header);
