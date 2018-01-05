import React, { Component } from 'react';
import map from 'lodash/map';
import timezones from '../../utils/timezones';
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
      timezone: ''
    };
    this.onChange = this.onChange.bind(this);
    this.onSubmit = this.onSubmit.bind(this);
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
  /**
   *
   * @return {void}
   * @param {any} event
   * @memberof SignUpForm
   */
  onSubmit(event) {
    event.preventDefault();
    this.props.userSignUpRequest(this.state);
    console.log(this.state);
  }
  /**
   *
   *
   * @returns {void}
   * @memberof SignUpForm
   */
  render() {
    const option = map(timezones, (value, key) =>
      <option key={value} value={value}>{key}</option>);
    return (
      <form onSubmit={this.onSubmit}>
        <h2>Join our Community</h2>
        <div className="form-group">
          <label htmlFor="username">Username</label>
          <input
            type="text"
            className="form-control"
            id="username"
            name="username"
            aria-describedby="usernameNote"
            placeholder="Enter username"
            value={this.state.username}
            onChange={this.onChange}
            required
          />
          <small id="usernameNote" className="form-text text-muted">Your username is unique</small>
        </div>
        <div className="form-group">
          <label htmlFor="email">Email</label>
          <input
            type="email"
            className="form-control"
            id="email"
            name="email"
            placeholder="Enter email address"
            value={this.state.email}
            onChange={this.onChange}
            required
          />
        </div>
        <div className="form-group">
          <label htmlFor="password">Password</label>
          <input
            type="password"
            className="form-control"
            name="password"
            value={this.state.password}
            onChange={this.onChange}
            id="password"
            placeholder="Password"
            required
          />
        </div>
        <div className="form-group">
          <label htmlFor="confirmPassword">confirm Password</label>
          <input
            type="password"
            className="form-control"
            name="confirmPassword"
            value={this.state.confirmPassword}
            onChange={this.onChange}
            id="confirmPassword"
            placeholder="confirm Password"
            required
          />
        </div>
        <div className="form-group">
          <label htmlFor="timeZone">Select Time zone</label>
          <select
            id="timeZone"
            className="form-control"
            name="timezone"
            value={this.state.timezone}
            onChange={this.onChange}
          >
            <option value="" disabled>Choose your timezone</option>
            {option}
          </select>

        </div>
        <button type="submit" className="btn btn-primary">Submit</button>
      </form>
    );
  }
}
// SignUpForm.propTypes = {
//   userSignUpRequest: React.PropTypes.func.isRequired
// }
export default SignUpForm;

