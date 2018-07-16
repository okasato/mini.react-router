import React, { Component } from 'react';
import Typography from '@material-ui/core/Typography';

export default class Footer extends Component {
  constructor(props) {
    super(props)
  }
  
  render() {
    return (
      <div className='footer'>
        <Typography align='center' variant='headline' color='inherit' gutterBottom>
          mosmosfamily.com
        </Typography>
        <Typography align='center' variant='caption' color='inherit' gutterBottom>
          <i className="material-icons md-9">copyright</i>
          <span>&nbsp;</span>
          2018
          mosmosfamily.com
        </Typography>
      </div>
    )
  }
} 