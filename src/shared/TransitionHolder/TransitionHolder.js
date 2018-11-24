import React, { Component } from 'react';

import './TransitionHolder.scss';
import transitionGif from '../../assets/animated/test.gif';

class TransitionHolder extends Component {
  constructor(props) {
    super(props);
    this.state = {
      show: true,
    }
  }

  componentDidMount() {
    console.log("mounted");
    this.timeoutId = setTimeout(function () {
      this.setState({ show: false });
    }.bind(this), 800);
  }

  componentWillUnmount() {
    if (this.timeoutId) {
      clearTimeout(this.timeoutId);
    }
  }

  render() {
    return (
      <div className={this.state.show ? 'TransitionHolder show' : 'TransitionHolder hide'}>
        <img src={transitionGif} alt="Transition" />
      </div>
    );
  }
}

export default TransitionHolder;
