require('normalize.css/normalize.css');
require('styles/App.css');

import React from 'react';

class Home extends React.Component {
  render() {
    return (
      <div>
          <h1>Hello World!</h1>
      </div>
    );
  }
}

Home.defaultProps = {
};

export default Home;
