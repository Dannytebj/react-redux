import React, { Component } from 'react';
import TextFields from '../commons/TextFields';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import appHistory from '../../utils/AppHistory.js';
import { login } from '../../actions/login';
import validateInput from '../../../server/utils/validators/loginValidator';


/**
 *
 *
 * @class LoginForm
 * @extends {Component}
 */
class LoginForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      identifier: '',
      password: '',
      errors: {},
      isLoading: false
    };
    this.onSubmit = this.onSubmit.bind(this);
    this.onChange = this.onChange.bind(this);
  }
  /**
   *
   * @returns {void}
   * @param {any} event
   * @memberof LoginForm
   */
  onChange(event) {
    this.setState({
      [event.target.name]: event.target.value
    });
  }

  /**
   *
   * @returns {void}
   * @param {any} event
   * @memberof LoginForm
   */
  onSubmit(event) {
    event.preventDefault();
    if (this.isValid()) {
      this.setState({
        errors: {},
        isLoading: true
      });
      this.props.login(this.state).then((response) => {
        appHistory.push('/dashboard');
      }).catch((errors) => {
        console.log(errors.response.data.errors, '>>>>> ERRROR ');
        this.setState({
          errors: errors.response.data.errors,
          isLoading: false
        });
      });
    }
  }
  /**
   *
   *
   * @returns {void}
   * @memberof LoginForm
   */
  isValid() {
    const { errors, isValid } = validateInput(this.state);
    if (!isValid) {
      this.setState({ errors });
    }
    return isValid;
  }
  render() {
    const {
      errors, isLoading
    } = this.state;
    // console.log(errors,'>>>> Render Errors!!')
    return (
      <form onSubmit={this.onSubmit}>
        <h1>Login</h1>
        {errors.form && <div className="alert alert-danger">{errors.form}</div>}
        <TextFields
          label="Username/Email"
          error={errors.identifier}
          placeholder="Enter username/email"
          onChange={this.onChange}
          value={this.state.identifier}
          id="identifier"
          field="identifier"
        />
        <TextFields
          label="Password"
          error={errors.password}
          placeholder="Enter your password"
          onChange={this.onChange}
          value={this.state.password}
          id="password"
          field="password"
          type="password"
        />
        <button disabled={isLoading} type="submit" className="btn btn-primary">Login</button>
      </form>
    );
  }
}
LoginForm.propTypes = {
  login: PropTypes.func.isRequired
};
export default connect(null, { login })(LoginForm);
