import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import './NotFound.scss';

class Home extends Component {
  render() {
    return (
      <div className="NotFound">
        <p>
          Oops, vous vous êtes trompé de page.
        </p>
        <Link to="/"><button className="button-bordered dark-purple">Retour à la page d'accueil</button></Link>
      </div>
    );
  }
}

export default Home;
