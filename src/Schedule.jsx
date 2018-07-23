import React, { Component } from 'react';
import Typography from '@material-ui/core/Typography';
import Calendar from './Calendar';
import TimeTable from './TimeTable';

export default class Schedule extends Component {
  constructor(props) {
    super(props)
  }

  render() {
    return (
      <div className='schedule'>
        <Typography className='headline' variant='display1' gutterBottom>
          Time Table
        </Typography>
        <TimeTable />
        <Typography className='headline' variant='display1' gutterBottom>
          Calendar
        </Typography>
        <Calendar />
      </div>
    )
  }
} 