//import logo from './logo.svg';
import './App.css';


import Myself from './components/Myself';
import React from 'react';
import "./components/Background.css"
import Portafolio from './components/Portafolio';
import Links from './components/Links';

class Background extends React.Component{
  render(){
    return (
      <div className="background">
        <Myself />
        <Links />
        <Portafolio />
        
      </div>
    )
  }
}



function App() {
  return (
    <div>
      <Background />
    </div>
    
    
    /*
    <div className="App">
      
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>*/
  );
}

export default App;
