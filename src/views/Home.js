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
      company: {},
      metadata: {
        latestPrice: 0.00
      }
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
      api.getQuoteData(event.target.value).then(res => {
        console.log(res.data);
        this.setState({
          metadata: res.data
        });
      })
    }
  }

  render() {
    if (this.state.metadata) {
      return (
        <div>
          <Header company={this.state.company} metadata={this.state.metadata} handleSubmit={this.handleSymbolSearch}/>
          <Metadata company={this.state.company} metadata={this.state.metadata}/>
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