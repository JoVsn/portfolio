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
                <h1>What can I do ?</h1>
                <p>As a creative engineer, I can ...</p>
                <ProjectGallery />
                <h1>Works</h1>
                <ContactBar />
            </div>
        );
    }
}

export default Home;
