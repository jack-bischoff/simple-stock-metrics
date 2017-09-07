require('normalize.css/normalize.css');
require('styles/Login.css');

import React from 'react';
import PropTypes from 'prop-types';
import config from '../config/base';

class Login extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      user: {}
    };
  }

  getCodeParam() {
    var searchParams = new URLSearchParams(window.location.search);
    return searchParams.get('code');
  }

  render() {
    var codeParam = this.getCodeParam();
    if (codeParam != null) {
      this.props.userCredsFunc(codeParam);
    }

    return (
      <div className="uk-flex uk-margin uk-text-center" data-uk-height-viewport>
        <div className="uk-margin-auto uk-margin-auto-vertical uk-width-1-3">
          <div className="uk-card uk-card-default">
            <div className="uk-card-header">
              <h1>{'Login'}</h1>
            </div>
            <div className="uk-card-body uk-text-left">
              <div>
                <p className="uk-text-meta uk-display-inline-block uk-margin-medium-left">{'New Users: '}</p>
                <a className="uk-button uk-button-primary signup-button uk-float-right" href={config.slackOauthURL}>{'Sign In With Slack'}</a>
              </div>
              <div className="uk-margin-top">
                <p className="uk-text-meta uk-display-inline-block uk-margin-medium-left">{'Existing Users: '}</p>
                <a className="uk-button uk-button-primary signup-button uk-float-right" href={config.slackOauthURL}>{'Sign In With Slack'}</a>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

Login.propTypes = {
  user: PropTypes.object
}
Login.defaultProps = {
  user: {}
};

export default Login;
