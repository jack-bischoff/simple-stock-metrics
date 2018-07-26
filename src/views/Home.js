require('normalize.css/normalize.css');
require('styles/App.css');

import React from 'react';
import PropTypes from 'prop-types';
import api from '../api/api';
import Header from '../components/Header';
import Loading from '../components/Loading';
import Metadata from '../components/Metadata';
import ChartWrapper from '../components/ChartWrapper';

class Home extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      company: {}
    };

    this.handleSymbolSearch = this.handleSymbolSearch.bind(this);
  }

  componentWillMount() {
    this.setState({
      company: {
        symbol: 'n/a'
      }
    });
  }

  handleSymbolSearch(event) {
    if (event.key === 'Enter') {
      console.log('Fetching data by symbol: ' + event.target.value)
      api.getCompanyData(event.target.value).then(res => {
        console.log(res.data);
        this.setState({
          company: res.data
        });
      })
      event.target.reset();
    }
  }

  render() {
    if (this.state.timeseries) {
      return (
        <div>
          <ChartWrapper labels={this.state.labels} datasets={this.state.datasets} chartTitle={'Stock Performance'}/>
          <Metadata metadata={this.state.metadata}/>
          <ChartWrapper labels={this.state.labels} datasets={this.state.datasets} chartTitle={'Historal Data'}/>
        </div>
      );
    } else {
      return (
        <div>
          <Header company={this.state.company} handleSubmit={this.handleSymbolSearch}/>
          <Loading />
        </div>
      );
    }
  }
}

Home.propTypes = {
  user: PropTypes.object
};
Home.defaultProps = {
  user: null
};

export default Home;