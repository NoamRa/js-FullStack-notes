import React, { Component } from 'react';
import './App.css';
import Head from './components/Header/Header.jsx'
import Main from './components/Main/Main.jsx'
import Foot from './components/Footer/Footer.jsx'

class App extends Component {
  render() {
    return (
      <div className="App">
        <header>
          <Head title="app title"></Head>
        </header>
       
        <main>
          <Main/>
        </main>

       <footer>
          <Foot/>
        </footer>
      </div>
    );
  }
}

export default App;
