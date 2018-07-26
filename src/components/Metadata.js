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