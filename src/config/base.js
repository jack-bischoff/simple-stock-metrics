'use strict';

import keys from './keys';

// Settings configured here will be merged into the final config object.
export default {
  // This should probably be pulled from an env variable
  apiKey : '37QK7P1G8KTJ31ZA',

  // Eventually this URL will be split up
  apiBaseURL : 'https://www.alphavantage.co/query',

  // API Time Series settings
  timeSeriesDaily : 'TIME_SERIES_DAILY',
  timeSeriesIntraday : 'TIME_SERIES_INTRADAY',
  timeSeriesDailyAdjusted : 'TIME_SERIES_DAILY_ADJUSTED',
  timeSeriesWeekly : 'TIME_SERIES_WEEKLY',
  timeSeriesMonthly : 'TIME_SERIES_MONTHLY',

  // Slack Oauth Config
  slackOauthURL : `https://slack.com/oauth/authorize?scope=identity.basic&client_id=${keys.slackClientID}&redirect_uri=http%3A%2F%2Flocalhost%3A8000`
}
