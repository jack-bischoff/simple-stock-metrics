require('normalize.css/normalize.css');
require('styles/App.css');

import React from 'react';

class AppComponent extends React.Component {
  render() {
    return (
      <div>
          <h1>Hello World!</h1>
      </div>
    );
  }
}

AppComponent.defaultProps = {
};

export default AppComponent;
