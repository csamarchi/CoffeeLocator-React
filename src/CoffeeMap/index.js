import React, { Component } from 'react';
import { Card, Button } from 'semantic-ui-react';



 import { GoogleApiWrapper, InfoWindow, Map, Marker, Content } from 'google-maps-react';

  class GoogleMapsContainer extends React.Component {
  constructor(props) {
    super(props);
    console.log(props, 'CONSTRUCTOR PROPS')
    this.state = {
      info: []
    }

  }

  onMarkerClick = (props, marker, e) => {

    console.log(props)
    this.setState({
      selectedPlace: props,
      activeMarker: marker,
      showingInfoWindow: true,
      info: props

    });
  }
  onMapClick = (props) => {
    if (this.state.showingInfoWindow) {
      this.setState({
        showingInfoWindow: false,
        activeMarker: null
      });
    }
  }


    handleOnClick = (e) => {
      e.preventDefault();
      console.log('Mirza')
    }





    render() {

      const coffeeLocations = this.props.coffee.results.items.map((item) => {
        return (
          <Marker
          onClick = { this.onMarkerClick }
          title = { item.title }
          address = { item.vicinity }
          category = { item.category.title }
          distance = { item.distance }
          openingHours = { item.openingHours }
          position = {{ lat: item.position[0], lng: item.position[1] }}
        />
      )
      });



    const style = {
      width: '100%',
      height: '100%',
      position: 'absolute',
      zIndex: '1',
    }
    const orderStyle = {
      position: 'absolute',
      zIndex: 2,
      left: '43%',
      fontSize:'40px',
      top: '4%',
      width: '20%',
      borderRadius: '50%',
      background: 'rgba(0,0,0,.8)',
      color: 'white',
      height: '8%',
    }

    return (
      <div>
      <Map
        item
        xs = { 12 }
        style = { style }
        google = { this.props.google }
        onClick = { this.onMapClick }
        zoom = {18 }
        initialCenter = {{ lat: this.props.location[0], lng: this.props.location[1] }}
      >

      <button style={orderStyle} secondary onClick={this.handleOnClick}>Order Now</button>
      {coffeeLocations}

      <InfoWindow

        marker = { this.state.activeMarker }
        visible = { this.state.showingInfoWindow }
      >
      <content>
      <div>
      <Card>
      <Card.Content>
        <Card.Header>{this.state.info.title}</Card.Header>
        { this.state.info.address } <br/>
        { this.state.info.category } <br/>
        { this.state.info.distance } <br/>

        <Card.Description>

        </Card.Description>
        </Card.Content>
        <Card.Content extra>
        <div id="aTour" />
        </Card.Content>
        </Card>
        </div>
      </content>

      </InfoWindow>
      </Map>

      </div>
    );
  }
}
export default GoogleApiWrapper({
    apiKey: "AIzaSyDRUpBESMbs6306QTg9QeIvQmbhApYl2Qw"
})(GoogleMapsContainer)
