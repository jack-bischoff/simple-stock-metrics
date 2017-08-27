require('normalize.css/normalize.css');
require('styles/App.css');

import React from 'react';
import Home from '../views/Home';

class AppComponent extends React.Component {
  render() {
    return (
      <div>
          <Home />
      </div>
    );
  }
}

AppComponent.defaultProps = {
};

export default AppComponent;
