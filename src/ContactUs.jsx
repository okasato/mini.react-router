import React, { Component } from 'react';
import Typography from '@material-ui/core/Typography/Typography';
import Map from './Map';
import ContactInfo from './ContactInfo';

export default class ContactUs extends Component {
  constructor(props) {
    super(props)
  }
  
  render() {
    return (
      <div className='contact'>
        <Typography className='headline' variant='display1' gutterBottom>Contact us</Typography>
        <div className='infoContainer'>
          <Map />
          <ContactInfo />
        </div>
      </div>
    )
  }
} 