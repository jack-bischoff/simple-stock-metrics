# simple-stock-metrics
A basic webapp which displays and tracks metrics related to your stock portfolio

## Getting Started
1.  Install dependencies:
```
npm install
```
2.  Run Web server
```
npm run start
```

## Configuration
In the `src/config` directory you will need to create a file called `keys.js` which will look something like this:
```javascript
'use strict';

// Important API keys that should be kept secret
export default {
  alphaVantageKey : '{my_key}',
  slackClientID : '{my_key}'
};

```
It will hold all special API keys that should be kept secret
