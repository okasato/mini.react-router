import React, { Component } from 'react';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';
import Typography from '@material-ui/core/Typography';
import Calendar from './Calendar';

let id = 0;
const createData = (time, mon, tue, wed, thr, fri, sat, sun) => {
  id += 1;
  return { id, time, mon, tue, wed, thr, fri, sat, sun };
};

const data = [
  createData('10:00am - 12:00pm', 'Maternity Hula', 'Start at 11am.\nBaby Massage', '', '', 'Maternity Yoga', 'Maternity Yoga', ''),
  createData('12:15pm - 2:15pm', '', '', '', '', 'Mother Coaching', '', '')
];

export default class Schedule extends Component {
  constructor(props) {
    super(props)
  }

  render() {
    return (
      <div className='schedule'>
        <Paper className='paper'>
          <Table className='table'>
            <TableHead>
              <TableRow>
                <TableCell className='time'>
                  Time
                </TableCell>
                <TableCell className='cell'>
                  Mon
                </TableCell>
                <TableCell className='cell'>
                  Tue
                </TableCell>
                <TableCell className='cell'>
                  Wed
                </TableCell>
                <TableCell className='cell'>
                  Thr
                </TableCell>
                <TableCell className='cell'>
                  Fri
                </TableCell>
                <TableCell className='cell'>
                  Sat
                </TableCell>
                <TableCell className='cell'>
                  Sun
                </TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {data.map(element => {
                return (
                  <TableRow key={element.id}>
                    <TableCell>
                      {element.time}
                    </TableCell>
                    <TableCell>
                      {element.mon}
                    </TableCell>
                    <TableCell>
                      {element.tue}
                    </TableCell>
                    <TableCell>
                      {element.wed}
                    </TableCell>
                    <TableCell>
                      {element.thr}
                    </TableCell>
                    <TableCell>
                      {element.fri}
                    </TableCell>
                    <TableCell>
                      {element.sat}
                    </TableCell>
                    <TableCell>
                      {element.sun}
                    </TableCell>
                  </TableRow>
                )
              })}
            </TableBody>
          </Table>
        </Paper>
        <Calendar />
      </div>
    )
  }
} 