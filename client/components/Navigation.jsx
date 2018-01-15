import React from 'react';
import { NavLink } from 'react-router-dom';

export default () => (
  <nav className="navbar navbar-expand-lg navbar-light bg-light">
    <a className="navbar-brand" href="#">Nee Bees</a>
    <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon" />
    </button>

    <div className="collapse navbar-collapse" id="navbarSupportedContent">
      <ul className="navbar-nav mr-auto">
        <li className="nav-item active">
          <NavLink to="/" className="nav-link">Home</NavLink>
        </li>
        <li className="nav-item">
          <NavLink to="/dashboard" className="nav-link">DashBoard</NavLink>
        </li>
      </ul>
      <a className="btn btn-outline-success my-2 my-sm-0" href="/signUp">SignUp</a>
    </div>
  </nav>
);
