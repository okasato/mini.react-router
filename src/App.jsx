import React, { Component } from 'react';
import { BrowserRouter, Route, Link } from 'react-router-dom';
import Home from './Home';
import About from './About';

export default class App extends Component {
  constructor(props) {
    super(props)
  }
  
  render() {
    return (
      <div className='app'>
        <header>mosmosfamily.com</header>
        <hr/>
        <BrowserRouter>
          <div>
            <ul className='navbar'>
              <li><Link to='/'>Home</Link></li>
              <li><Link to='/about'>About</Link></li>
              <li><Link to='/FAQ'>FAQ</Link></li>
            </ul>
            <hr />
            <Route exact path='/' component={Home} />
            <Route path='/about' component={About} />
          </div>
        </BrowserRouter>
      </div>
    )
  }
} 