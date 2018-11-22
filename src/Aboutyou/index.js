import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { Form, Button, Input } from 'semantic-ui-react';

export default class Aboutyou extends Component {
  constructor(){
    super();
    this.state = {
      data: [],
    }
  }
  handleChange = (e) => {
    this.setState({
      [e.currentTarget.name]: e.currentTarget.value
    })
  }
  handleSubmit = (e) => {
    e.preventDefault();
    console.log('IT WORKS')
  }
  render(){
    return(
      <div>
        <h2>ABOUT YOU PAGE</h2>
        <div className='Form'>
          <Form onSubmit={this.handleSubmit} >
            <Form.Input type='text' name='street' placeholder='street' onChange={this.handleChange} />
            <Form.Input type='text' name='city' placeholder='city' onChange={this.handleChange} />
            <Form.Input type='text' name='state' placeholder='state' onChange={this.handleChange} />
            <Form.Input type='text' name='zipcode' placeholder='zipcode' onChange={this.handleChange} />
            <Button type='submit'>Submit</Button>
          </Form>
        </div>
        <Button>Use Current Location</Button>
      </div>
    )
  }
}
