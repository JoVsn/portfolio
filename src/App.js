import React, { Component } from 'react';
import { Route, Switch } from 'react-router-dom';
import './App.scss';

import Header from './shared/Header/Header';

import Home from './components/Home/Home';
import About from './components/About/About';
import Project from './components/Project/Project';
import NotFound from './components/NotFound/NotFound';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Header />
        <Switch>
          <Route path="/" component={Home} exact />
          <Route path="/about" component={About} />
          <Route path="/project" component={Project} />
          <Route component={NotFound} />
        </Switch>
      </div>
    );
  };
}

export default App;
