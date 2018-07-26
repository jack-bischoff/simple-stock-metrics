'use strict';

import axios from 'axios';
import config from '../config/base';

export default {
  getCompanyData(companyName) {
    let url = `${config.apiBaseURL}/stock/${companyName}/company`;

    return axios.get(url)
  },

  getQuoteData(symbol) {
    let url = `${config.apiBaseURL}/stock/${symbol}/quote`;

    return axios.get(url)
  },

  getChartDataCurrent(symbol) {
    let url = `${config.apiBaseURL}/stock/${symbol}/chart/dynamic`;

    return axios.get(url);
  }
}