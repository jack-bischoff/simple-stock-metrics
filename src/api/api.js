'use strict';

import axios from 'axios';
import config from '../config/base';

export default {
  getDemoData() {
    let url = `${config.apiBaseURL}&apikey=${config.apiKey}`;

    return axios.get(url);
  }
}
