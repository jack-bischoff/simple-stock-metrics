require('normalize.css/normalize.css');
require('styles/App.css');

import React from 'react';
import api from '../api/api';
import Header from '../components/Header';
import Loading from '../components/Loading';
import Metadata from '../components/Metadata';

class Home extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      metadata: null,
      timeseries: null
    }

    this.handleSymbolSearch = this.handleSymbolSearch.bind(this);
  }

  componentWillMount() {
    api.getDemoData().then(res => {
      console.log(res.data['Meta Data']);
      console.log(res.data['Time Series (1min)']);
      this.setState({metadata: res.data['Meta Data'], timeseries: res.data['Time Series (1min)']});
    });
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
          <Metadata metadata={this.state.metadata}/>
        </div>
      );
    } else {
      return (<Loading/>);
    }
  }
}

Home.defaultProps = {};

export default Home;
