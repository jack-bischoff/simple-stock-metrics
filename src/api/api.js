'use strict';

import axios from 'axios';
import config from '../config/base';

export default {
  getDemoData() {
    let url = `${config.apiBaseURL}&symbol=AMD&interval=1min&apikey=${config.apiKey}`;

    return axios.get(url);
  },

  getDataBySymbol(symbol) {
    let url = `${config.apiBaseURL}&symbol=${symbol}&interval=1min&apikey=${config.apiKey}`;

    return axios.get(url);
  }
}
