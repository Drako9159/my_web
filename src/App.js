//import logo from './logo.svg';
import "./App.css";

import Myself from "./components/Myself";
import React from "react";
import "./components/Background.css";
import Portafolio from "./components/Portafolio";
import Links from "./components/Links";

import { BrowserRouter, Routes, Route, Link } from "react-router-dom";

class Background extends React.Component {
  state = {
    portafolio: {
      title: "",
    },
  };
  
  changeTitle = (title) => {
    this.setState({
      [this.state.portafolio.title] : title 
      
    })

  }
  render() {
    return (
      <div id="background">
        <Myself />
        <div>
          <Links />
          <Portafolio changeTitle={this.changeTitle} 
          titles={this.state.portafolio.title} />
        </div>
      </div>
    );
  }
}

class Root extends React.Component {
  render() {
    return (
      <div>
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<Background />} />
          </Routes>
        </BrowserRouter>
      </div>
    );
  }
}

function App() {
  return (
    <div>
      <Root />
      
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
