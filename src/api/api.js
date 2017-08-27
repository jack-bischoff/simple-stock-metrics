import axios from 'axios';

'use strict';

import axios from 'axios';
import config from '../config/base';

export default {
    getDemoData() {
        let url = `${config.apiBaseURL}`;

        return axios.get(url);
    }
}
