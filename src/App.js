import React, { Component } from 'react';
import {
  BrowserRouter as Router,
  Route,
} from 'react-router-dom';
import LayoutContainer from './Layout/LayoutContainer';
import './App.css';

class App extends Component {
  render() {
    return (
      <Router>
        <Route path='/' component={LayoutContainer} />
      </Router>
    );
  }
}

export default App;
