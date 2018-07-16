import React, { Component } from 'react';
import classnames from 'classnames';
import Card from '@material-ui/core/Card';
import CardHeader from '@material-ui/core/CardHeader';
import CardContent from '@material-ui/core/CardContent';
import CardActions from '@material-ui/core/CardActions';
import Collapse from '@material-ui/core/Collapse';
import IconButton from '@material-ui/core/IconButton';
import Typography from '@material-ui/core/Typography';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';

export default class OurServices extends Component {
  constructor(props) {
    super(props)
    this.state = {
      expanded: false
    }
    this.handleExpandClick = this.handleExpandClick.bind(this);
  }
  
  handleExpandClick() {
    if (this.state.expanded === false) {
      console.log('Hi, expanded is false');
      this.setState({
        expanded: true
      });
    } else {
      console.log('Hi, expanded is true');
      this.setState({
        expanded: false
      });
    }
  };

  render() {
    console.log(this.state.expanded);
    console.log('@@@@@@', classnames('expand', { 'expandOpen': this.state.expanded }));
    return (
      <div className='services'>
        This is our services page.
        <Card className='cards'> 
          <CardHeader
            title='Maternity Yoga'
          />
          <CardContent>
            <Typography component='p'>
              This impressive paella is a perfect party dish and a fun meal to cook together with
              your guests. Add 1 cup of frozen peas along with the mussels, if you like.
            </Typography>
          </CardContent>
          <CardActions disableActionSpacing>
            <IconButton
              className={classnames('expand', { 'expandOpen': this.state.expanded })}
              onClick={this.handleExpandClick}
              aria-expanded={this.state.expanded}
              aria-label="Show more"
            >
              <ExpandMoreIcon />
            </IconButton>
          </CardActions>
          <Collapse in={this.state.expanded} timeout="auto" unmountOnExit>
            <CardContent>
              <Typography paragraph variant="body2">
                Method:
              </Typography>
              <Typography paragraph>
                Heat 1/2 cup of the broth in a pot until simmering, add saffron and set aside for 10
                minutes.
              </Typography>
            </CardContent>
          </Collapse>
        </Card>
      </div>
    )
  }
} 