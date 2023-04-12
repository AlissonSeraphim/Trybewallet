import React from 'react';
import propTypes from 'prop-types';
import { connect } from 'react-redux';

import { emailAction } from '../redux/actions';

class Login extends React.Component {
  state = {
    emailInput: '',
    passwordInput: '',
  };

  handleSubmit = (event) => {
    event.preventDefault();
  };

  handleClickEmailAction = () => {
    const { emailInput } = this.state;
    const { dispatch } = this.props;
    dispatch(emailAction(emailInput));
  };

  verifyEntries = () => {
    const {
      emailInput,
      passwordInput,
    } = this.state;

    const emailRegex = /^\S+@\S+\.\S+$/;
    const minimumPassword = 5;

    return !(emailRegex.test(emailInput)
    && passwordInput.length > minimumPassword);
  };

  onInputChange = ({ target }) => {
    const { name, value } = target;
    this.setState({
      [name]: value,
    });
  };

  render() {
    const {
      emailInput,
      passwordInput,
    } = this.state;

    const { history } = this.props;

    return (
      <form onSubmit={ this.handleSubmit }>
        <label>
          Email:
          <input
            type="email"
            name="emailInput"
            data-testid="email-input"
            value={ emailInput }
            onChange={ this.onInputChange }
            required
          />
        </label>
        <label>
          Senha:
          <input
            type="password"
            name="passwordInput"
            data-testid="password-input"
            value={ passwordInput }
            onChange={ this.onInputChange }
            required
          />
        </label>
        <button
          type="submit"
          name="submitButton"
          disabled={ this.verifyEntries() }
          onClick={ () => {
            this.handleClickEmailAction();
            history.push('/carteira');
          } }

        >
          Entrar
        </button>
      </form>
    );
  }
}

Login.propTypes = {
  history: propTypes.shape({
    push: propTypes.func.isRequired,
  }).isRequired,
  dispatch: propTypes.func.isRequired,
};

export default connect()(Login);
