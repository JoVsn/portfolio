import React, { Component } from 'react';

import './TransitionHolder.scss';
import transitionGif from '../../assets/animated/final.gif';

class TransitionHolder extends Component {
  constructor(props) {
    super(props);
    this.state = {
      show: props.show
    }
  }

  componentDidMount() {
    this.timeoutId = setTimeout(function () {
      this.setState({
        show: false
      });
    }.bind(this), 950);
  }

/*   static getDerivedStateFromProps(props, state) {
    console.log(props);
    console.log(state);

    if (props.reload && state.reload && !state.show) {
      console.log("reloaded");
      return {
        show: true,
        reload: false
      };
    }
    return null;
  }

  componentDidUpdate() {
    if (this.state.show) {
      this.timeoutId = setTimeout(function () {
        this.setState({
          show: false,
          reload: true
        });
      }.bind(this), 800);
    }
  } */

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
