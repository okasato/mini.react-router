import React, { Component } from 'react';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';
import Typography from '@material-ui/core/Typography';

let id = 0;
const createData = (date, time1000am, time1215pm) => {
  id += 1;
  return { id, date, time1000am, time1215pm };
};

const data = [
  createData('MON', 'Maternity Hula', ''),
  createData('TUE', 'Start at 11am. Baby Massage', ''),
  createData('WED', '', ''),
  createData('THR', '', ''),
  createData('FRI', 'Maternity Yoga', 'Mother Coaching'),
  createData('SAT', 'Maternity Yoga', ''),
  createData('SUN', '', ''),
];

export default class TimeTable extends Component {
  constructor(props) {
    super(props)
  }

  render() {
    return (
      <div className='timeTable'>
        <Paper className='paper'>
          <Table className='table'>
            <TableHead>
              <TableRow>
                <TableCell className='time'>
                  DATE / TIME
                </TableCell>
                <TableCell className='cell'>
                  10:00am to 12:00pm
                </TableCell>
                <TableCell className='cell'>
                  12:15pm to 2:15pm
                </TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {data.map(element => {
                return (
                  <TableRow key={element.id}>
                    <TableCell>
                      {element.date}
                    </TableCell>
                    <TableCell>
                      {element.time1000am}
                    </TableCell>
                    <TableCell>
                      {element.time1215pm}
                    </TableCell>
                  </TableRow>
                )
              })}
            </TableBody>
          </Table>
        </Paper>
      </div>
    )
  }
} 