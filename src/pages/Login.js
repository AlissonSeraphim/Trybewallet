import React from 'react';
import propTypes from 'prop-types';
import { connect } from 'react-redux';

import { emailAction } from '../redux/actions';

import '../styles/login.css';

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
      <div className="login-block">
        <h1>Trybewallet</h1>
        <form onSubmit={ this.handleSubmit }>
          <div>
            <label>
              Email:
              <input
                type="email"
                id="emailUser"
                name="emailInput"
                placeholder="Email"
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
                id="password"
                placeholder="Password"
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
          </div>
        </form>
      </div>
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
