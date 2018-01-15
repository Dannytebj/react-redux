import React, { Component } from 'react';
import map from 'lodash/map';
import classnames from 'classnames';
import PropTypes from 'prop-types';
import timezones from '../../utils/timezones';
import TextFields from '../commons/TextFields';
import appHistory from '../../utils/AppHistory';
import validateInput from '../../../server/utils/validators/SignUpValidator';
/**
 *
 *
 * @class SignUpForm
 * @extends {Component}
 */
class SignUpForm extends Component {
  /**
   * Creates an instance of SignUpForm.
   * @param {any} props
   * @memberof SignUpForm
   */
  constructor(props) {
    super(props);
    this.state = {
      username: '',
      email: '',
      password: '',
      confirmPassword: '',
      timezone: '',
      errors: {},
      invalid: false,
      isLoading: false
    };
    this.onChange = this.onChange.bind(this);
    this.onSubmit = this.onSubmit.bind(this);
    this.checkUserExists = this.checkUserExists.bind(this);
  }
  /**
   *
   * @return {void}
   * @param {any} event
   * @memberof SignUpForm
   */
  onChange(event) {
    this.setState({
      [event.target.name]: event.target.value
    });
  }
  checkUserExists(event) {
    const field = event.target.name;
    const val = event.target.value;
    if (val !== '') {
      this.props.isUserExists(val)
        .then(res => {
          let errors = this.state.errors;
          let invalid;
          if (res.data.user) {
            errors[field] = `A user already exists with this ${field}`;
            invalid = true;
          } else {
            errors[field] = '';
            invalid = false;
          }
          this.setState({ errors, invalid })
        })
    }
  }
  isValid() {
    const { isValid, errors } = validateInput(this.state);
    if (!isValid) {
      this.setState({ errors });
    }
    return isValid;
  }
  /**
   *
   * @return {void}
   * @param {any} event
   * @memberof SignUpForm
   */
  onSubmit(event) {
    event.preventDefault();
    if (this.isValid()) {
      this.setState({ errors: {}, isLoading: true });
      this.props.userSignUpRequest(this.state)
        .then(() => {
          this.props.addFlashMessage({
            type: 'success',
            text: 'You signed up successfully. Welcome!'
          })
          appHistory.push('/players');
        },
        (errors) =>
          this.setState({ errors: errors.response.data.errors, isLoading: false })
        );
    }
  }
  /**
   *
   *
   * @returns {void}
   * @memberof SignUpForm
   */
  render() {
    const { errors, isLoading, invalid } = this.state;
    const option = map(timezones, (value, key) =>
      <option key={value} value={value}>{key}</option>);
    return (
      <form onSubmit={this.onSubmit}>
        <h2>Join our Community</h2>
        <TextFields
          label="Username"
          error={errors.username}
          placeholder="Enter username"
          onChange={this.onChange}
          value={this.state.username}
          id="username"
          checkUserExists={this.checkUserExists}
          field="username"
        />
        <TextFields
          label="Email"
          error={errors.email}
          placeholder="Enter email address"
          onChange={this.onChange}
          value={this.state.email}
          checkUserExists={this.checkUserExists}
          id="email"
          field="email"
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
        <TextFields
          label="Confirm Password"
          error={errors.confirmPassword}
          placeholder="please confirm your password"
          onChange={this.onChange}
          value={this.state.confirmPassword}
          id="confirmPassword"
          field="confirmPassword"
          type="password"
        />
        <div className="form-group">
          <label htmlFor="timeZone">Select Time zone</label>
          <select
            id="timeZone"
            className={classnames("form-control", { 'has-error': errors.timezone })}
            name="timezone"
            value={this.state.timezone}
            onChange={this.onChange}
          >
            <option value="" disabled>Choose your timezone</option>
            {option}
          </select>
          {errors.timezone && <small className="form-text text-muted">{errors.timezone}</small>}
        </div>
        <button disabled={isLoading || invalid} type="submit" className="btn btn-primary">Submit</button>
      </form>
    );
  }
}
SignUpForm.propTypes = {
  userSignUpRequest: PropTypes.func.isRequired,
  addFlashMessage: PropTypes.func.isRequired,
  isUserExists: PropTypes.func.isRequired
}
export default SignUpForm;

