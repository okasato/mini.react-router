import React, { Component } from 'react';
import Typography from '@material-ui/core/Typography/Typography';
import Question from './Qusetion';

export default class FAQ extends Component {
  constructor(props) {
    super(props)
    this.state = {
      expandedOfQ1: false,
      expandedOfQ2: false,
    }
    this.handleExpandClickQ1 = this.handleExpandClickQ1.bind(this);
    this.handleExpandClickQ2 = this.handleExpandClickQ2.bind(this);
  }
  
  handleExpandClickQ1() {
    if (this.state.expandedOfQ1 === false) {
      this.setState({
        expandedOfQ1: true
      });
    } else {
      this.setState({
        expandedOfQ1: false
      });
    }
  };

  handleExpandClickQ2() {
    if (this.state.expandedOfQ2 === false) {
      this.setState({
        expandedOfQ2: true
      });
    } else {
      this.setState({
        expandedOfQ2: false
      });
    }
  };

  render() {
    return (
      <div className='faq'>
        <Typography className='headline' variant='display1' gutterBottom>FAQ</Typography>
        <Question 
          number={'Q1'}
          question={'What is this?'}
          answer={'Answer1'}
          expanded={this.state.expandedOfQ1}
          handleExpandClick={this.handleExpandClickQ1}
        />
        <Question 
          number={'Q2'}
          question={'What is this?'}
          answer={'Answer2'}
          expanded={this.state.expandedOfQ2}
          handleExpandClick={this.handleExpandClickQ2}
        />
      </div>
    )
  }
} 