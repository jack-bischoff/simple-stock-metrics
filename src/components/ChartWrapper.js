require('normalize.css/normalize.css');
require('styles/Chart.css');

import React from 'react';
import PropTypes from 'prop-types';
import Chart from './Chart';

class ChartWrapper extends React.Component {
  render() {
    return (
      <div className="uk-section">
        <div className="uk-container">
          <Chart labels={this.props.labels} datasets={this.props.datasets}/>
        </div>
      </div>
    );
  }
}

ChartWrapper.propTypes = {
  labels: PropTypes.array,
  datasets: PropTypes.array
}

ChartWrapper.defaultProps = {
  labels: [],
  datasets: []
}

export default ChartWrapper;
