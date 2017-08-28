require('normalize.css/normalize.css');
require('styles/App.css');

import React from 'react';
import PropTypes from 'prop-types';

class Metadata extends React.Component {
  render() {
    return (
      <div className="uk-section uk-section-muted">
        <div className="uk-container">
          <h1>{'Meta Data'}</h1>
          <p>{this.props.metadata['1. Information']}</p>
          <p>{this.props.metadata['2. Symbol']}</p>
          <p>{this.props.metadata['3. Last Refreshed']}</p>
          <p>{this.props.metadata['4. Interval']}</p>
          <p>{this.props.metadata['5. Output Size']}</p>
          <p>{this.props.metadata['6. Time Zone']}</p>
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
