import React, { Component } from 'react';
import './App.css';
import Head from './components/Header/Header.jsx'
import Main from './components/Main/Main.jsx'
import Foot from './components/Footer/Footer.jsx'

class App extends Component {
  render() {
    return (
      <div className="App">
        
          <Head title="app title"/>
       
          <Main/>

          <Foot/>
          
      </div>
    );
  }
}

export default App;
