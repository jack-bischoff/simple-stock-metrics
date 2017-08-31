require('normalize.css/normalize.css');
require('styles/App.css');

import React from 'react';
import api from '../api/api';
import Header from '../components/Header';
import Loading from '../components/Loading';
import Metadata from '../components/Metadata';
import ChartWrapper from '../components/ChartWrapper';

class Home extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      metadata: null,
      labels: [],
      datasets: []
    }

    this.handleSymbolSearch = this.handleSymbolSearch.bind(this);
  }

  componentWillMount() {
    api.getDemoData().then(res => {
      // Compute the necessary data to pass to chart.js
      this.computeDataSets(res.data['Time Series (1min)']);

      //   Set state proper state after api call has succeeded
      this.setState({metadata: res.data['Meta Data'], timeseries: res.data['Time Series (1min)']});
    });
  }

  computeDataSets(obj) {
    // Compute labels for chart
    var labels = [];
    Object.keys(obj).forEach(function(key) {
      // key: the name of the object key
      labels.push(key);
    });

    // Compute datasets for chart
    var data = [];
    for (var i = 0; i < labels.length; i++) {
      // Add the closing price to the graph data
      data.push(obj[labels[i]]['4. close'])
    }

    var datasets = [];
    var dataset = {
      borderColor: '#1e87f0',
      backgroundColor: 'rgba(0,0,0,0)',
      pointBackgroundColor: '#1e87f0',
      label: 'Share Prices',
      data: data
    };
    datasets.push(dataset);

    // Set react state to these computed items
    this.setState({labels: labels, datasets: datasets});
  }

  handleSymbolSearch(event) {
    console.log('called handle symbol search callback')
    if (event.key === 'Enter') {
      console.log('Fetching data by symbol: ' + event.target.value)
      api.getDataBySymbol(event.target.value).then(res => {
        console.log(res.data['Meta Data']);
        console.log(res.data['Time Series (1min)'])
        this.setState({metadata: res.data['Meta Data'], timeseries: res.data['Time Series (1min)']});
      })
    }
  }

  render() {
    if (this.state.timeseries) {
      return (
        <div>
          <Header timeseries={this.state.timeseries} metadata={this.state.metadata} handleSubmit={this.handleSymbolSearch}/>
          <ChartWrapper labels={this.state.labels} datasets={this.state.datasets} chartTitle={'Stock Performance'}/>
          <Metadata metadata={this.state.metadata}/>
          <ChartWrapper labels={this.state.labels} datasets={this.state.datasets} chartTitle={'Historal Data'}/>
        </div>
      );
    } else {
      return (<Loading/>);
    }
  }
}

Home.defaultProps = {};

export default Home;
