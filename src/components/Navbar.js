require('normalize.css/normalize.css');
require('styles/App.css');
require('styles/Nav.css');

import React from 'react';
import PropTypes from 'prop-types';
import config from '../config/base';

class Navbar extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <nav className="uk-navbar-container uk-navbar-transparent uk-margin-medium-bottom navbar-divider" data-uk-navbar>
        <div className="uk-navbar-left">
          <ul className="uk-navbar-nav">
            <li className="uk-active">
              <a href="#">Home</a>
            </li>
            <li>
              <a href="#">My Portfolio</a>
            </li>
          </ul>
        </div>
        <div className="uk-navbar-right">
          {!this.props.user
            ? (
              <a className="uk-button uk-button-default uk-margin-right tm-login-button" href={config.slackOauthURL}>{'Sign In With Slack'}</a>
            )
            : (
              <div className="uk-navbar-item uk-margin-right user-display">
                <div>Logged In As:
                  <hr className="uk-margin-remove-bottom"/>
                  <p className="uk-text-uppercase uk-margin-remove-top uk-margin-remove-bottom">{this.props.user.name}</p>
                </div>
              </div>
            )}
        </div>
      </nav>
    );
  }
}

Navbar.propTypes = {
  user: PropTypes.object
}

Navbar.defaultProps = {}

export default Navbar;
