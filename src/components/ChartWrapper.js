require('normalize.css/normalize.css');
require('styles/Chart.css');

import React from 'react';
import PropTypes from 'prop-types';
import Chart from './Chart';

class ChartWrapper extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div className="uk-section">
        <div className="uk-container">
          <Chart labels={this.props.labels} datasets={this.props.datasets} title={this.props.chartTitle}/>
        </div>
      </div>
    );
  }
}

ChartWrapper.propTypes = {
  labels: PropTypes.array,
  datasets: PropTypes.array,
  chartTitle: PropTypes.string
}

ChartWrapper.defaultProps = {
  labels: [],
  datasets: [],
  chartTile: ''
}

export default ChartWrapper;