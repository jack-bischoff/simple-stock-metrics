require('normalize.css/normalize.css');
require('styles/Header.css');

import React from 'react';
import PropTypes from 'prop-types';

class Header extends React.Component {
  render() {
    return (
      <div className="uk-section uk-section-primary uk-light">
        <div className="uk-container">
          <h1 className="uk-heading-primary uk-margin-remove-bottom uk-display-inline-block">{this.props.metadata['2. Symbol']}</h1>
          <input className="uk-input uk-display-inline-block uk-width-1-6 uk-float-right" placeholder="Symbol" onKeyPress={(e) => {
            this.props.handleSubmit(e)
          }}/>
          <p className="uk-text-meta uk-margin-remove-top">{this.props.metadata['6. Time Zone']}</p>
          <hr/>

          <div className="uk-text-center">
            <p className="uk-display-inline-block uk-text-large">
              <span className="uk-text-meta uk-margin-right">Opening:</span>{'$'}{this.props.timeseries['2017-08-25 16:00:00']['1. open']}
            </p>
            <p className="uk-display-inline-block uk-text-large">
              <span className="uk-text-meta uk-margin-right uk-margin-large-left">Closing:</span>{'$'}{this.props.timeseries['2017-08-25 16:00:00']['4. close']}
            </p>
            <p className="uk-display-inline-block uk-margin-large-left uk-text-large">
              <span className="uk-text-meta uk-margin-right">High:</span>{'$'}{this.props.timeseries['2017-08-25 16:00:00']['2. high']}
            </p>
            <p className="uk-display-inline-block uk-margin-large-left uk-text-large">
              <span className="uk-text-meta uk-margin-right">Low:</span>{'$'}{this.props.timeseries['2017-08-25 16:00:00']['3. low']}
            </p>
          </div>
        </div>
      </div>
    );
  }
}

Header.propTypes = {
  timeseries: PropTypes.object,
  metadata: PropTypes.object
};

Header.defaultProps = {
  timeseries: null,
  metadata: null
};

export default Header;
