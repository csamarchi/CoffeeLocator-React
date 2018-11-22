import React, { Component } from 'react';
import { Button } from 'semantic-ui-react';
import { Link } from 'react-router-dom';

export default class Welcome extends Component {
  constructor() {
    super();
    this.state = {
      data: []
    }
  }

  render(){
    const buttonStyle = {
      marginTop: '40%'
    }
    return(
      <div>
        <div className='buttons' >
          <Link to='/login'>
            <Button inverted color='green' style={buttonStyle}>
              Log in w/ Email
            </Button>
          </Link>

          <Link to='/signup'>
            <Button inverted color='red' style={buttonStyle}>
              Sign up w/ Email
            </Button>
          </Link>
        </div>
      </div>
    );
  }
}
