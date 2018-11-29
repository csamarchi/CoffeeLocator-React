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
      console.log(data, 'LOCATION')
      this.setState({
        location: data
      })
    });
   n
  render(){
    return(
      <div className="App">
        {this.state.location ? <CoffeeApi locationData={[this.state.location.coords.latitude, this.state.location.coords.longitude]} /> : null}
      </div>
      );
    }
  }
