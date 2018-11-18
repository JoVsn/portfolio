import React, { Component } from 'react';
import './Home.scss';

import Main from '../Main/Main';
import ContactBar from '../../shared/ContactBar/ContactBar';
import ProjectGallery from '../ProjectGallery/ProjectGallery';

class Home extends Component {

    render() {
        return (
            <div className="Home">

                <div className="background-jumbo"></div>
                <Main />
                <ProjectGallery />

                <div className="other-works">
                    <h1>Other works</h1>
                    <div className="other-projects-section">
                        <h2>Web Design</h2>
                        <ul>
                            <li><a href=""><strong>La Kaz</strong> | 2018 | Photoshop</a></li>
                            <li><a href=""><strong>Adaggio Store</strong> | 2018 | Photoshop</a></li>
                        </ul>
                    </div>
                    <div className="other-projects-section">
                        <h2>Programming</h2>
                        <ul>
                            <li><a href=""><strong>CaptchaPokemon</strong> | 2018 | Java</a></li>
                            <li><a href=""><strong>PacBreak</strong> | 2018 | C++, OpenGL 3</a></li>
                            <li><a href=""><strong>Piano Beep</strong> | 2018 | C++</a></li>
                            <li><a href=""><strong>Arkanopong</strong> | 2017 | C, OpenGL 2</a></li>
                        </ul>
                    </div>
                    <div className="other-projects-section">
                        <h2>Video & Motion Design</h2>
                        <ul>
                            <li><a href=""><strong>La Défense - Rêve Psyché</strong> | 2018 | After Effects, Sony Vegas</a></li>
                            <li><a href=""><strong>Wonder Woman</strong> | 2017 | After Effects</a></li>
                        </ul>
                    </div>
                    <div className="other-projects-section">
                        <h2>Graphism & Print</h2>
                        <ul>
                            <li><a href=""><strong>Faible & Puissant</strong> | 2016 | Photoshop, Indesign</a></li>
                        </ul>
                    </div>
                    <div className="other-projects-section">
                        <h2>Music</h2>
                        <ul>
                            <li><a href=""><strong>Traveller Journey</strong> | 2017 | FL Studio, Pro Tools</a></li>
                        </ul>
                    </div>
                </div>

                <ContactBar />
            </div>
        );
    }
}

export default Home;
