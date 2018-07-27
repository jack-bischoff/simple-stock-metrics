require('normalize.css/normalize.css');
require('styles/App.css');

import React from 'react';
import PropTypes from 'prop-types';
import About from './About';

class Metadata extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div className="uk-section uk-section-default uk-padding-remove-top">
        <div className="uk-container">
          <h2 className="text-highlighted">{'$'}{this.props.metadata.latestPrice}</h2>
          <div className="uk-grid-divider uk-flex-center uk-text-center uk-grid-large" data-uk-grid>
              <div>
                  <h3 className="">{'Open'}</h3>
                  <p className="text-highlighted uk-text-small">{'$'}{this.props.metadata.open}</p>
              </div>
              <div>
                  <h3 className="">{'Low'}</h3>
                  <p className="text-highlighted uk-text-small">{'$'}{this.props.metadata.low}</p>
              </div>
          </div>
          <About metadata={this.props.company}/>
        </div>
      </div>
    );
  }
}

Metadata.propTypes = {
  metadata: PropTypes.object,
  company: PropTypes.object
};

Metadata.defaultProps = {
  metadata: null,
  company: null
};

export default Metadata;