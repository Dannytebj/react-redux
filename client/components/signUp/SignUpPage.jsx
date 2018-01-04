import React, { Component } from 'react';
import SignUpForm from './SignUpForm';
/**
 *
 *
 * @class SignUpPage
 * @extends {Component}
 */
class SignUpPage extends Component {
  /**
   *
   *
   * @returns {void}
   * @memberof SignUpPage
   */
  render() {
    return (
      <div className="container">
        <div className="row">
          <div className="col-md-6 offset-md-3">
            <SignUpForm />
          </div>
        </div>
      </div>
    );
  }
}
export default SignUpPage;
