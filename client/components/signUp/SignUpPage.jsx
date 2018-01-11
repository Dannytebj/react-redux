import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import SignUpForm from './SignUpForm';
import { userSignUpRequest } from '../../actions/signUpActions';
import { addFlashMessage } from '../../actions/flashMessages';

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
    const { userSignUpRequest, addFlashMessage } = this.props;
    return (
      <div className="container">
        <div className="row">
          <div className="col-md-6 offset-md-3">
            <SignUpForm userSignUpRequest={userSignUpRequest} addFlashMessage={addFlashMessage} />
          </div>
        </div>
      </div>
    );
  }
}
SignUpPage.propTypes = {
  userSignUpRequest: PropTypes.func.isRequired,
  addFlashMessage: PropTypes.func.isRequired
}
export default connect(null, { userSignUpRequest, addFlashMessage })(SignUpPage);
