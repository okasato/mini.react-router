import React, { Component } from 'react';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';
import Drawer from '@material-ui/core/Drawer';
import List from '@material-ui/core/List';

export default class Header extends Component {
  constructor(props) {
    super(props)
  }
  
  render() {
    return (
      <div className='header'>
        <AppBar position='static'>
          <Toolbar>
            <IconButton>
              <MenuIcon />
            </IconButton>
            <Typography align='center' variant='headline' color='inherit' className='title'>
              mosmosfamily.com
            </Typography>
          </Toolbar>
        </AppBar>
      </div>
    )
  }
} 