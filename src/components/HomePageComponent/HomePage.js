import React, { Component } from 'react'
import logo from '../../images/logo.svg';
import './HomePage.css';

class HomePage extends Component {
    render () {
      return (
        <header className="App-header">
         <img src={logo} className="App-logo" alt="logo" />
         <a
           className="App-link"
           href="https://reactjs.org"
           target="_blank"
           rel="noopener noreferrer"
         >
           Learn React
         </a>
       </header>
      )
    }
}

export default HomePage