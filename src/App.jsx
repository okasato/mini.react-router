import React, { Component } from 'react';
import { BrowserRouter, Route, Link } from 'react-router-dom';
import Home from './Home';
import About from './About';
import FAQ from './FAQ';
import Header from './Header';
import Footer from './Footer';

export default class App extends Component {
  constructor(props) {
    super(props)
  }
  
  render() {
    return (
      <div className='app'>
        <Header />
        
        <Route exact path='/' component={Home} />
        <Route path='/about' component={About} />
        <Route path='/faq' component={FAQ} />

        <Footer />
      </div>
    )
  }
} 