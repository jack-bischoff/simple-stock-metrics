require('normalize.css/normalize.css');
require('styles/App.css');

import React from 'react';
import PropTypes from 'prop-types';

class Metadata extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div className="uk-section uk-section-muted">
        <div className="uk-container">
          <h1 className="uk-text-center">{'Meta Data'}</h1>
          <div className="uk-grid-divider" data-uk-grid>
            <div>
              <p className="uk-text-meta uk-margin-remove-bottom">Information Type</p>
              <hr className="uk-margin-small"/>
              <p className="uk-margin-remove-top">{this.props.metadata['1. Information']}</p>
            </div>
            <div>
              <p className="uk-text-meta uk-margin-remove-bottom">Share Symbol</p>
              <hr className="uk-margin-small"/>
              <p className="uk-margin-remove-top">{this.props.metadata['2. Symbol']}</p>
            </div>
            <div>
              <p className="uk-text-meta uk-margin-remove-bottom">Last Refresh</p>
              <hr className="uk-margin-small"/>
              <p className="uk-margin-remove-top">{this.props.metadata['3. Last Refreshed']}</p>
            </div>
            <div>
              <p className="uk-text-meta uk-margin-remove-bottom">Refresh Interval</p>
              <hr className="uk-margin-small"/>
              <p className="uk-margin-remove-top">{this.props.metadata['4. Interval']}</p>
            </div>
            <div>
              <p className="uk-text-meta uk-margin-remove-bottom">Data Output Type</p>
              <hr className="uk-margin-small"/>
              <p className="uk-margin-remove-top">{this.props.metadata['5. Output Size']}</p>
            </div>
            <div>
              <p className="uk-text-meta uk-margin-remove-bottom">Time Zone</p>
              <hr className="uk-margin-small"/>
              <p className="uk-margin-remove-top">{this.props.metadata['6. Time Zone']}</p>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

Metadata.propTypes = {
  metadata: PropTypes.object
};

Metadata.defaultProps = {
  metadata: null
};

export default Metadata;
