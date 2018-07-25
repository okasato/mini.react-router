import React, { Component } from 'react';
import Paper from '@material-ui/core/Paper';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import Icon from "@material-ui/core/Icon";

export default class ContactInfo extends Component {
  constructor(props) {
    super(props)
  }

  render() {
    return (
      <Paper className='contactInfo'>
        <List component="nav">
          <ListItem>
            <Icon>place</Icon>
            <ListItemText 
              primary={
                '200 Granville Street Mezzanine Floor Vancouver, BC V6C 1S4 Canada'
              } 
            />
          </ListItem>
          <ListItem>
            <Icon>call</Icon>
            <ListItemText 
              primary={
                '+1 604 XXX XXXX'
              } 
            />
          </ListItem>
          <ListItem>
            <Icon>directions_walk</Icon>
            <ListItemText 
              primary={
                '8-min walk from Oakridge-41st Avenue Station'
              } 
            />
          </ListItem>
        </List>
      </Paper>
    )
  }
} 