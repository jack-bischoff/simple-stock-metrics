require('normalize.css/normalize.css');
require('styles/Chart.css');

import React from 'react';
import PropTypes from 'prop-types';
import {
  Line
} from 'react-chartjs-2';

class Chart extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      data: {}
    };
  }

  componentWillMount() {
    // Format the data before component mount
    this.formatData(this.props.labels, this.props.datasets);
  }

  // Format the data into an object that chart.js expects
  formatData(labels, datasets) {
    var data = {
      labels: labels,
      datasets: datasets
    };

    this.setState({
      data: data
    });
  }

  render() {
    return (
      <div>
        <h1 className="uk-text-center uk-heading-line uk-margin-remove-top">
          <span>{this.props.title}</span>
        </h1>
        <Line data={this.state.data}/>
      </div>
    );
  }
}

Chart.propTypes = {
  labels: PropTypes.array,
  datasets: PropTypes.array,
  title: PropTypes.string
}

Chart.defaultProps = {
  labels: [],
  datasets: [],
  title: ''
}

export default Chart;