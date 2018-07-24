import React, { Component } from 'react';
import Modal from 'react-modal';
import Typography from '@material-ui/core/Typography/Typography';
import Button from '@material-ui/core/Button';
import Icon from "@material-ui/core/Icon";
import IconButton from "@material-ui/core/IconButton";

const customStyles = {
  content: {
    top: '50%',
    left: '50%',
    right: 'auto',
    bottom: 'auto',
    marginRight: '-50%',
    transform: 'translate(-50%, -50%)'
  }
};

export default class ClassOfTheDay extends Component {
  constructor(props) {
    super(props)
  }

  render() {
    console.log(this.props.classOfTheDay);
    return (
      <div className='classOfTheDay'>
        <Modal
          isOpen={this.props.isOpen}
          onAfterOpen={this.props.onAfterOpen}
          onRequestClose={this.props.onRequestClose}
          style={customStyles}
        >
          <IconButton className='clear' onClick={this.props.onRequestClose}>
            <Icon>clear</Icon>
          </IconButton>
          <Typography variant="display1" gutterBottom>
            Class Of the day
          </Typography>
          <Typography>{this.props.classOfTheDay}</Typography>
        </Modal>
      </div>
    )
  }
} 