import React, { Component } from 'react';
import CoffeeApi from '../CoffeePlacesApi';
import { Button } from 'semantic-ui-react';

export default class MainComponent extends Component {
  constructor(){
    super();

      this.state = {
        coffeeData: [],
      }
    }


    getLoc = navigator.geolocation.getCurrentPosition((data) => {
      this.setState({
        location: data
      })
    });
   
  render(){
    return(
      <div className="App">
        {this.state.location ? <CoffeeApi locationData={[this.state.location.coords.latitude, this.state.location.coords.longitude]} /> : null}
      </div>
      );
    }
  }
