import React, { Component } from 'react';
import { NavLink } from 'react-router-dom';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { logout } from '../actions/login';


/**
 *
 *
 * @class Navigation
 * @extends {Component}
 */
class Navigation extends Component {
  logout(event) {
    event.preventDefault();
    this.props.logout();
  }
  render() {
    const { isAuthenticated } = this.props.auth;
    const userLinks = (
      <ul className="navbar-nav">
        <li className="nav-item active">
          <NavLink to="/dashboard" className="nav-link">Home</NavLink>
        </li>
        <li className="nav-item">
          <a className="btn btn-outline-success my-2 my-sm-0" href="#" onClick={this.logout.bind(this)}>Log Out</a>
        </li>
      </ul>
    );
    const guestLinks = (
      <ul className="navbar-nav">
        <li className="nav-item active">
          <NavLink to="/login" className="nav-link">Sign In</NavLink>
        </li>
        <li className="nav-item active">
          <NavLink to="/signUp" className="nav-link">Sign Up</NavLink>
        </li>
      </ul>
    );

    return (
      <div>
        <nav className="navbar  navbar-expand-lg navbar-light bg-light">
          <a className="navbar-brand" href="#">Nee Bees</a>
          <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon" />
          </button>

          <div className="collapse navbar-collapse justify-content-end" id="navbarSupportedContent">
            {isAuthenticated ? userLinks : guestLinks}
          </div>
        </nav>
      </div>
    );
  }
}

Navigation.propTypes = {
  auth: PropTypes.object.isRequired,
  logout: PropTypes.func.isRequired
};

function mapStateToProps(state) {
  return {
    auth: state.auth
  };
}
export default connect(mapStateToProps, { logout })(Navigation);
