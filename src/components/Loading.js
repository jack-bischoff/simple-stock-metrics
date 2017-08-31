require('normalize.css/normalize.css');
require('styles/App.css');

import React from 'react';

class Loading extends React.Component {
  render() {
    return (
      <div className="uk-flex uk-margin uk-text-center" data-uk-height-viewport>
        <div className="uk-margin-auto uk-margin-auto-vertical uk-width-1-2@s">
          <h1 className="uk-heading-primary">Shaving Yaks...</h1>
          <div data-uk-spinner={'ratio: 2'}></div>
        </div>
      </div>
    );
  }
}

export default Loading;
