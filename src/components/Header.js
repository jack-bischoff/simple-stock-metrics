require('normalize.css/normalize.css');
require('styles/Header.css');

import React from 'react';
import PropTypes from 'prop-types';

class Header extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div className="uk-section uk-padding-remove-top uk-margin-medium-top">
        <div className="uk-container uk-dark">
          <div className="uk-margin-bottom uk-margin-remove-top">
            <span className="label-soft uk-margin-small-right">Sector: {this.props.company.sector}</span>
            <span className="label-soft uk-margin-small-right">Industry: {this.props.company.industry}</span>
            <span className="label-soft">Exchange: {this.props.company.exchange}</span>
          </div>
          <h1 className="uk-heading-primary uk-margin-remove-bottom uk-margin-remove-top">{this.props.company.symbol}</h1>
          <input className="search-input uk-display-inline-block uk-width-1-6 uk-float-right" placeholder="Symbol" onKeyPress={(e) => {
            this.props.handleSubmit(e)
          }}/>
          <hr/>
      </div>
      </div>
    );
  }
}

Header.propTypes = {
  timeseries: PropTypes.object,
  metadata: PropTypes.object,
  user: PropTypes.object
};

Header.defaultProps = {
  timeseries: null,
  metadata: null,
  user: null
};

export default Header;