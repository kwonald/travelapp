import React, { Component } from 'react';
import { Root, Tabs, Onboarding } from './config/router';

// var HockeyApp = require('react-native-hockeyapp');

class App extends Component {


// componentWillMount() {
//     HockeyApp.configure('ba609f89acad4c4eb55793e9991c30e2', true);
// }

// componentDidMount() {
//     HockeyApp.start();
//     HockeyApp.checkForUpdate(); // optional
// }
  render() {
    return <Onboarding />;
  }
}

export default App;
