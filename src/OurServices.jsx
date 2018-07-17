import React, { Component } from 'react';
import Service from './Service';
import Typography from '@material-ui/core/Typography';

export default class OurServices extends Component {
  constructor(props) {
    super(props)
    this.state = {
      expandedOfMaternity: false,
      expandedOfPostpartum: false,      
      expandedOfDoula: false,      
    }
    this.handleExpandClickMaternity = this.handleExpandClickMaternity.bind(this);
    this.handleExpandClickPostpartum = this.handleExpandClickPostpartum.bind(this);
    this.handleExpandClickDoula = this.handleExpandClickDoula.bind(this);
  }
  
  handleExpandClickMaternity() {
    if (this.state.expandedOfMaternity === false) {
      this.setState({
        expandedOfMaternity: true
      });
    } else {
      this.setState({
        expandedOfMaternity: false
      });
    }
  };

  handleExpandClickPostpartum() {
    if (this.state.expandedOfPostpartum === false) {
      this.setState({
        expandedOfPostpartum: true
      });
    } else {
      this.setState({
        expandedOfPostpartum: false
      });
    }
  };

  handleExpandClickDoula() {
    if (this.state.expandedOfDoula === false) {
      this.setState({
        expandedOfDoula: true
      });
    } else {
      this.setState({
        expandedOfDoula: false
      });
    }
  };

  render() {
    return (
      <div className='services'>
        <Typography className='headline' variant='display1' gutterBottom>
          Our Services
        </Typography>
        
        <Service 
          title={'Maternity Yoga'}
          generalInfo={'This impressive paella is a perfect party dish and a fun meal to cook together with your guests. Add 1 cup of frozen peas along with the mussels, if you like.'}
          detailedInfo={'Heat 1/2 cup of the broth in a pot until simmering, add saffron and set aside for 10 minutes.'}
          expanded={this.state.expandedOfMaternity}
          handleExpandClick={this.handleExpandClickMaternity}
          image={'../dist/maternity_yoga.jpg'}
          imageTitle={'Maternity Yoga'}
        />

        <Service 
          title={'Postpartum Yoga'}
          generalInfo={'This impressive paella is a perfect party dish and a fun meal to cook together with your guests. Add 1 cup of frozen peas along with the mussels, if you like.'}
          detailedInfo={'Heat 1/2 cup of the broth in a pot until simmering, add saffron and set aside for 10 minutes.'}
          expanded={this.state.expandedOfPostpartum}
          handleExpandClick={this.handleExpandClickPostpartum}
          image={'../dist/postnatal_yoga.jpg'}
          imageTitle={'Postpartum Yoga'}
        />

        <Service 
          title={'Doula'}
          generalInfo={'This impressive paella is a perfect party dish and a fun meal to cook together with your guests. Add 1 cup of frozen peas along with the mussels, if you like.'}
          detailedInfo={'Heat 1/2 cup of the broth in a pot until simmering, add saffron and set aside for 10 minutes.'}
          expanded={this.state.expandedOfDoula}
          handleExpandClick={this.handleExpandClickDoula}
          image={'../dist/doula.jpg'}
          imageTitle={'Doula'}
        />
        
      </div>
    )
  }
} 