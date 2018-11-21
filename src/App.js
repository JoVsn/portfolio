import React, { Component } from 'react';
import { BrowserRouter } from 'react-router-dom';
import './App.scss';

import Header from './shared/Header/Header';
import Container from './components/Container/Container';
import Footer from './shared/Footer/Footer';

class App extends Component {
  render() {
    return (
      <div className="App">
        <BrowserRouter>
          <>
            <Header />
            <Container />
            <Footer />
          </>
        </BrowserRouter>
      </div>
    );
  };
}

export default App;
