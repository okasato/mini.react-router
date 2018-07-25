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

export default class Question extends Component {
  constructor(props) {
    super(props)
  }
  
  render() {
    return (
      <div className='question'>
        <Card className='cards'> 
          <CardHeader
            title={this.props.number}
          />
          <CardContent>
            <Typography component='p'>
              {this.props.question}
            </Typography>
          </CardContent>
          <CardActions disableActionSpacing>
            <IconButton
              className={classnames('expand', { 'expandOpen': this.props.expanded })}
              onClick={this.props.handleExpandClick}
              aria-expanded={this.props.expanded}
              aria-label="Show more"
            >
              <ExpandMoreIcon />
            </IconButton>
          </CardActions>
          <Collapse in={this.props.expanded} timeout="auto" unmountOnExit>
            <CardContent>
              <Typography paragraph variant="body2">
                Answer:
              </Typography>
              <Typography paragraph>
                {this.props.answer}
              </Typography>
            </CardContent>
          </Collapse>
        </Card>
      </div>
    )
  }
} 