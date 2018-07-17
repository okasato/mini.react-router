import React, { Component } from 'react';
import { BrowserRouter, Route, Link } from 'react-router-dom';
import Home from './Home';
import AboutUs from './AboutUs';
import OurServices from './OurServices';
import ContactUs from './ContactUs';
import FAQ from './FAQ';
import Header from './Header';
import Footer from './Footer';
import BottomArea from './BottomArea';
import Schedule from './Schedule';

export default class App extends Component {
  constructor(props) {
    super(props)
  }
  
  render() {
    return (
      <div className='app'>
        <Header />        
        <Route exact path='/' component={Home} />
        <Route path='/aboutus' component={AboutUs} />
        <Route path='/contactus' component={ContactUs} />
        <Route path='/ourservices' component={OurServices} />
        <Route path='/schedule' component={Schedule} />
        <Route path='/faq' component={FAQ} />
        <BottomArea />
        <Footer />
      </div>
    )
  }
} 