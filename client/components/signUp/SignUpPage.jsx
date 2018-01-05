import React, { Component } from 'react';
import { connect } from 'react-redux';
import SignUpForm from './SignUpForm';
import { userSignUpRequest } from '../../actions/signUpActions';

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
    const { userSignUpRequest } = this.props;
    return (
      <div className="container">
        <div className="row">
          <div className="col-md-6 offset-md-3">
            <SignUpForm userSignUpRequest={userSignUpRequest} />
          </div>
        </div>
      </div>
    );
  }
}
// SignUpPage.propTypes = {
//   userSignUpRequest: React.PropTypes.func.isRequired
// }
export default connect(null, { userSignUpRequest })(SignUpPage);
