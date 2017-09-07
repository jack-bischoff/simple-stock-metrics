require('normalize.css/normalize.css');
require('styles/App.css');

import React from 'react';
import Home from '../views/Home';
import Login from '../views/Login';
import api from '../api/api';

class AppComponent extends React.Component {

  constructor(props) {
    super(props);

    this.state = {
      user: null
    };

    this.retrieveUserLogin = this.retrieveUserLogin.bind(this);
  }

  retrieveUserLogin(code) {
    api.getUserInfo(code).then(res => {
      console.log(res);
      // If this error shows up we will need to render something conditionally that fails login
      if (res.data.error != null) {
        console.log(res.data.error);
      } else {
        var userObject = {};

        userObject.team = res.data.team;
        userObject.name = res.data.user.name;
        userObject.id = res.data.user.id;

        this.setState({user: userObject});
      }
    });
  }

  render() {
    console.log(this.state.user);
    if (this.state.user == null) {
      console.log('user object is empty');
      return (
        <div>
          <Login userCredsFunc={this.retrieveUserLogin}/>
        </div>
      )
    } else {
      console.log('user object is full');
      return (
        <div>
          <Home user={this.state.user}/>
        </div>
      );
    }
  }
}

AppComponent.defaultProps = {};

export default AppComponent;
