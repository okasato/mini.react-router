import React, { Component } from 'react';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';
import Drawer from '@material-ui/core/Drawer';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import { BrowserRouter, Route, Link } from 'react-router-dom';

export default class Header extends Component {
  constructor(props) {
    super(props)
    this.state = {
      left: false
    }
    this.toggleDrawer = this.toggleDrawer.bind(this);
  }
  
  toggleDrawer(e) {
    e.preventDefault();
    if (this.state.left === false) {
      this.setState({
        left: true
      });
    } else {
      this.setState({
        left: false
      });
    }
  }

  render() {
    const sideList = (
      <div>
        <List>
          <ListItem button>
            <Link to='/'>
              <ListItemText primary="Home" />          
            </Link>
          </ListItem>
          <ListItem button>
            <Link to='/ourservices'>
              <ListItemText primary="Our Services" />
            </Link>
          </ListItem>
          <ListItem button>
            <Link to='/aboutus'>
              <ListItemText primary="About Us" />
            </Link>
          </ListItem>
          <ListItem button>
            <Link to='/schedule'>
              <ListItemText primary="Schedule" />
            </Link>
          </ListItem>
          <ListItem button>
            <Link to='/FAQ'>
              <ListItemText primary="FAQ" />
            </Link>
          </ListItem>
          <ListItem button>
            <Link to='/contactus'>
              <ListItemText primary="Contact Us" />
            </Link>
          </ListItem>
           
        </List>
      </div>
    );

    return (
      <div className='header'>
        <AppBar position='static' color='inherit'>
          <Toolbar>
            <IconButton onClick={this.toggleDrawer}>
              <MenuIcon />
            </IconButton>
            <Drawer open={this.state.left} onClose={this.toggleDrawer}>
              <div
                tabIndex={0}
                role="button"
                onClick={this.toggleDrawer}
                onKeyDown={this.toggleDrawer}
              >
                {sideList}
              </div>
            </Drawer>
            <Typography align='center' variant='headline' color='inherit' className='title'>
              mosmosfamily.com
            </Typography>
          </Toolbar>
        </AppBar>
      </div>
    )
  }
} 