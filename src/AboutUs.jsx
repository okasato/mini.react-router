import React, { Component } from 'react';
import Typography from '@material-ui/core/Typography/Typography';

export default class AboutUs extends Component {
  constructor(props) {
    super(props)
  }
  
  render() {
    return (
      <div className='about'>
        <Typography className='headline' variant='display1' gutterBottom>About Us</Typography>
      </div>
    )
  }
} 