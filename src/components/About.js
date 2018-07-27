require('normalize.css/normalize.css');
require('styles/App.css');

import React from 'react';
import PropTypes from 'prop-types';

class About extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div className="uk-text-left uk-margin-top">
          <h2>About</h2>
          <div className="uk-child-width-1-2" data-uk-grid>
              <div>
                  <p className="uk-text-small">{this.props.metadata.description}</p>
              </div>
              <div>
                  <p className="uk-margin-remove-bottom"><span className="uk-text-meta">Name: </span>{this.props.metadata.companyName}</p>
                  <p className="uk-margin-remove-top"><span className="uk-text-meta">CEO: </span>{this.props.metadata.CEO}</p>
              </div>
          </div>
      </div>
    );
  }
}

About.propTypes = {
  metadata: PropTypes.object
};

About.defaultProps = {
  metadata: null
};

export default About;