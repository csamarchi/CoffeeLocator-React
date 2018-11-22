import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Auth from './Auth';
import { Route, Switch } from 'react-router-dom';
import MainComponent from './MainComponent';
import Welcome from './Welcome';
import Signup from './Signup';
import Aboutyou from './Aboutyou';
import { Button } from 'semantic-ui-react';


class App extends Component {




  render() {

    return (

      <div className="App">
        <Switch>
          <Route exact path="/login" component={Auth} />
          <Route exact path='/welcome' component={Welcome} />
          <Route exact path="/" component={MainComponent} />
          <Route exact path='/signup' component={Signup} />
          <Route exact path='/aboutyou' component={Aboutyou} />
        </Switch>
      </div>
    );
  }
}

export default App;
