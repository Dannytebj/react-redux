import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import SignUpForm from './SignUpForm';
import { userSignUpRequest, isUserExists } from '../../actions/signUpActions';
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
    const { userSignUpRequest, addFlashMessage, isUserExists } = this.props;
    return (
      <div className="container">
        <div className="row">
          <div className="col-md-6 offset-md-3">
            <SignUpForm
              userSignUpRequest={userSignUpRequest}
              addFlashMessage={addFlashMessage}
              isUserExists={isUserExists}
            />
          </div>
        </div>
      </div>
    );
  }
}
SignUpPage.propTypes = {
  userSignUpRequest: PropTypes.func.isRequired,
  addFlashMessage: PropTypes.func.isRequired,
  isUserExists: PropTypes.func.isRequired
}
export default connect(null, { userSignUpRequest, addFlashMessage, isUserExists })(SignUpPage);
