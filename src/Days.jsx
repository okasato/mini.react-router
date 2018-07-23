import React, { Component } from 'react';
import Modal from 'react-modal';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';
import Typography from '@material-ui/core/Typography/Typography';
import Button from '@material-ui/core/Button';

const customStyles = {
  content : {
    top                   : '50%',
    left                  : '50%',
    right                 : 'auto',
    bottom                : 'auto',
    marginRight           : '-50%',
    transform             : 'translate(-50%, -50%)'
  }
};

export default class Days extends Component {
  constructor(props) {
    super(props)
    this.state = {
      modalIsOpen: false
    };

    this.createTable = this.createTable.bind(this);
    this.openModal = this.openModal.bind(this);
    this.afterOpenModal = this.afterOpenModal.bind(this);
    this.closeModal = this.closeModal.bind(this);
  }

  openModal() {
    this.setState({
      modalIsOpen: true
    });
  }

  afterOpenModal() {
    // this.subtitle.style.color = '#f00';
  }

  closeModal() {
    this.setState({
      modalIsOpen: false
    });
  }

  createTable(year, month) {
    const startDate = new Date(year, month, 1);//e.g. June 1st 2018
    const endDate = new Date(year, month + 1, 0);//e.g. June 30th 2018
    const numberOfWeeks = Math.ceil(((endDate - startDate) / (24 * 3600 * 1000) + 1) / 7) + 1;

    const table = [];
    for (let i = 0; i < numberOfWeeks; i += 1) {
      table.push([]);
      for (let j = 0; j < 7; j += 1) {
        if (startDate.getMonth() === month && j === startDate.getDay()) {
          table[i].push(startDate.getDate());
          startDate.setDate(startDate.getDate() + 1);
        } else {
          table[i].push(null);
        }
      }
    }

    const dayOfWeeks = ['SUN', 'MON', 'TUE', 'WED', 'THR', 'FRI', 'SAT'];

    return (
      <Table>
        <TableHead>
          <TableRow>
            {dayOfWeeks.map((dayOfWeek, index) => {
              if (index === 0 || index === 6) {
                return (
                  <TableCell className='holidays' numeric>{dayOfWeek}</TableCell>
                )
              } else {
                return (
                  <TableCell numeric>{dayOfWeek}</TableCell>
                )
              }
            })}
          </TableRow>
        </TableHead>
        <TableBody>
          {table.map(line => {
            return (
              <TableRow>
                {line.map((day, index) => {
                  if (year === new Date().getFullYear() && month === new Date().getMonth() && day === new Date().getDate()) {
                    if (index === 0 || index === 6) {
                      return (
                        <TableCell className='today chosenDay' numeric>
                          <div className='holidays' onClick={this.openModal}>{day}</div>
                        </TableCell>
                      )
                    } else {
                      return (
                        <TableCell className='today chosenDay' numeric>
                          <div onClick={this.openModal}>{day}</div>
                        </TableCell>
                      )
                    }
                  } else {
                    if (index === 0 || index === 6) {
                      return (
                        <TableCell className='chosenDay' numeric>
                          <div className='holidays' onClick={this.openModal}>{day}</div>
                          {/* <Modal
                            isOpen={this.state.modalIsOpen}
                            onAfterOpen={this.afterOpenModal}
                            onRequestClose={this.closeModal}
                            style={customStyles}
                          >
                            <Typography variant="display1" gutterBottom>
                              Class Of the day
                            </Typography>
                            <Typography>Holiday class!</Typography>
                            <Button color='primary' onClick={this.closeModal}>Close</Button>
                          </Modal> */}
                        </TableCell>
                      )
                    } else {
                      return (
                        <TableCell className='chosenDay' numeric>
                          <div onClick={this.openModal}>{day}</div>
                          <Modal
                            isOpen={this.state.modalIsOpen}
                            onAfterOpen={this.afterOpenModal}
                            onRequestClose={this.closeModal}
                            style={customStyles}
                          >
                            <Typography variant="display1" gutterBottom>
                              Class Of the day
                            </Typography>
                            <Typography>Maternity Hula</Typography>
                            <Button color='primary' onClick={this.closeModal}>Close</Button>
                          </Modal>
                        </TableCell>
                      )
                    }
                  }
                })}
              </TableRow>
            )
          })}
        </TableBody>
      </Table>
    );
  }

  render() {
    return (
      <div className='days'>
        <Paper>
          {this.createTable(this.props.year, this.props.month)}
        </Paper>
      </div>
    )
  }
}