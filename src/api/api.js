'use strict';

import axios from 'axios';
import config from '../config/base';

export default {
  // Alpha Vantage API
  getDemoData() {
    let url = `${config.apiBaseURL}?function=${config.timeSeriesIntraday}&symbol=AMD&interval=1min&apikey=${config.apiKey}`;

    return axios.get(url);
  },

  getDataBySymbol(symbol) {
    let url = `${config.apiBaseURL}?function=${config.timeSeriesIntraday}&symbol=${symbol}&interval=1min&apikey=${config.apiKey}`;

    return axios.get(url);
  },

  getHistorialDataBySymbol(symbol) {
    let url = `${config.apiBaseURL}?function=${config.timeSeriesDaily}&symbol=${symbol}&outputsize=full&interval=1min&apikey=${config.apiKey}`;

    return axios.get(url);
  },

  getWeeklyDataBySymbol(symbol) {
    let url = `${config.apiBaseURL}?function=${config.timeSeriesWeekly}&symbol=${symbol}&outputsize=full&interval=1min&apikey=${config.apiKey}`;

    return axios.get(url);
  },

  getMonthlyDataBySymbol(symbol) {
    let url = `${config.apiBaseURL}?function=${config.timeSeriesMonthly}&symbol=${symbol}&outputsize=full&interval=1min&apikey=${config.apiKey}`;

    return axios.get(url);
  },

  // FullContact API

  // Slack OAuth API
  getUserInfo(code) {
    let url = `${config.slackOauthAccessURL}&code=${code}&redirect_uri=http%3A%2F%2Flocalhost%3A8000`

    console.log(url);

    return axios.get(url);
  }
}
