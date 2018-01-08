import React, { Component } from 'react';
import map from 'lodash/map';
import classnames from 'classnames';
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
      timezone: '',
      errors: {},
      isLoading: false
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
    this.setState({ errors: {}, isLoading: true });
    event.preventDefault();
    this.props.userSignUpRequest(this.state)
    .then(() =>{
      console.log('>>>>????<<<<<');
    },
    (errors) => 
    this.setState({ errors: errors.response.data.errors, isLoading: false })
    )
    console.log(this.state);
  }
  /**
   *
   *
   * @returns {void}
   * @memberof SignUpForm
   */
  render() {
    const { errors, isLoading } = this.state;
    const option = map(timezones, (value, key) =>
      <option key={value} value={value}>{key}</option>);
    return (
      <form onSubmit={this.onSubmit}>
        <h2>Join our Community</h2>
        <div className="form-group">
          <label htmlFor="username">Username</label>
          <input
            type="text"
            className={classnames("form-control",{ 'has-error': errors.username})}
            id="username"
            name="username"
            aria-describedby="usernameNote"
            placeholder="Enter username"
            value={this.state.username}
            onChange={this.onChange}
          />
          {errors.username && <small className="form-text text-muted">{errors.username}</small>}
        </div>
        <div className="form-group">
          <label htmlFor="email">Email</label>
          <input
            type="email"
            className={classnames("form-control",{ 'has-error': errors.email})}
            id="email"
            name="email"
            placeholder="Enter email address"
            value={this.state.email}
            onChange={this.onChange}
          />
        {errors.email && <small className="form-text text-muted">{errors.email}</small>}
        </div>
        <div className="form-group">
          <label htmlFor="password">Password</label>
          <input
            type="password"
            className={classnames("form-control",{ 'has-error': errors.password})}
            name="password"
            value={this.state.password}
            onChange={this.onChange}
            id="password"
            placeholder="Password"
          />
        {errors.password && <small className="form-text text-muted">{errors.password}</small>}
        </div>
        <div className="form-group">
          <label htmlFor="confirmPassword">confirm Password</label>
          <input
            type="password"
            className={classnames("form-control",{ 'has-error': errors.confirmPassword})}
            name="confirmPassword"
            value={this.state.confirmPassword}
            onChange={this.onChange}
            id="confirmPassword"
            placeholder="confirm Password"
          />
        {errors.confirmPassword && <small className="form-text text-muted">{errors.confirmPassword}</small>}
        </div>
        <div className="form-group">
          <label htmlFor="timeZone">Select Time zone</label>
          <select
            id="timeZone"
            className={classnames("form-control",{ 'has-error': errors.timezone})}
            name="timezone"
            value={this.state.timezone}
            onChange={this.onChange}
          >
            <option value="" disabled>Choose your timezone</option>
            {option}
          </select>
          {errors.timezone && <small className="form-text text-muted">{errors.timezone}</small>}
        </div>
        <button disabled={isLoading} type="submit" className="btn btn-primary">Submit</button>
      </form>
    );
  }
}
// SignUpForm.propTypes = {
//   userSignUpRequest: React.PropTypes.func.isRequired
// }
export default SignUpForm;

