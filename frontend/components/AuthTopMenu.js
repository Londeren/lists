'use strict';
import React, { PropTypes } from 'react';
import { Link } from 'react-router';

export default function AuthTopMenu({ isAuthorized }) {
  return (
    <ul className="nav navbar-nav pull-xs-right">
      <li className="nav-item">
        {
          isAuthorized ?
          <Link to="/logout" className="nav-link" activeClassName="active" onlyActiveOnIndex={false}>Logout</Link> :
          <Link to="/signin" className="nav-link" activeClassName="active" onlyActiveOnIndex={false}>Sign in</Link>
        }
      </li>
    </ul>
  );
}

AuthTopMenu.propTypes = {
  isAuthorized: PropTypes.bool.isRequired
};

