import React, {Component} from 'react';
import logo from "./logo.svg";
import AboutPage from './components/about/about'
import CoursePage from './components/course/course'
import "./App.css";

// import {Bootstrap} from 'bootstrap'

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to React</h1>
        </header>
        <p className="App-intro">
          To get started, edit <code>src/App.js</code> and save to reload.
        </p>
        <div className="container container-fluid ">
          <CoursePage/>
          <AboutPage/>
        </div>
      </div>
    );
  }
}


export default App;
