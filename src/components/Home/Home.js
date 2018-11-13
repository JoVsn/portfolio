import React, { Component } from 'react';
import './Home.scss';


import Main from '../Main/Main';
import ContactBar from '../../shared/ContactBar/ContactBar';
import ProjectGallery from '../ProjectGallery/ProjectGallery';

class Home extends Component {

    render() {
        return (
            <div className="Home">
                <Main />
                <p>Pluridisciplinarity warning !</p>
                <p>On this portfolio, you will encounter various types of project, websites, video editing, motion design... but it's ok, just explore !</p>
                <ProjectGallery />
                <h1>Other works</h1>
                <ContactBar />
            </div>
        );
    }
}

export default Home;
