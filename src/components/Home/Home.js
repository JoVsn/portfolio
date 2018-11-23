import React, { Component } from 'react';
import { Link, Element , Events, animateScroll as scroll, scrollSpy, scroller } from 'react-scroll';

import './Home.scss';

import Main from '../Main/Main';
import ContactBar from '../../shared/ContactBar/ContactBar';
import ProjectGallery from '../ProjectGallery/ProjectGallery';

import la_kaz_file from '../../assets/files/la_kaz.pdf';
import adaggio_file from '../../assets/files/adaggio.pdf';
import faible_puissant_file from '../../assets/files/faible_puissant.pdf';


class Home extends Component {

    componentWillMount() {
        document.title = "Jordan — Portfolio";
    }

    render() {
        return (
            <div className="Home">
                <Main />
                <ProjectGallery />

                <Element name="works" className="other-works">
                    <h1>Others</h1>
                    <div className="other-projects-section">
                        <h2>Web Design</h2>
                        <ul>
                            <li><a href={adaggio_file} target="_blank" rel="noopener noreferrer"><strong>Adaggio Store</strong> | 2018 | Photoshop</a></li>
                            <li><a href={la_kaz_file} target="_blank" rel="noopener noreferrer"><strong>La Kaz</strong> | 2018 | Photoshop</a></li>
                        </ul>
                    </div>
                    <div className="other-projects-section">
                        <h2>Programming</h2>
                        <ul>
                            <li><a href="https://github.com/JoVsn/captchaPokemon" target="_blank" rel="noopener noreferrer"><strong>CaptchaPokemon</strong> | 2018 | Java</a></li>
                            <li><a href="https://github.com/oeuvrayjoris/pacman" target="_blank" rel="noopener noreferrer"><strong>PacBreak</strong> | 2018 | C++, OpenGL 3</a></li>
                            <li><a href="https://github.com/JoVsn/pianobeep" target="_blank" rel="noopener noreferrer"><strong>Piano Beep</strong> | 2018 | C++</a></li>
                            <li><a href="https://github.com/oeuvrayjoris/arkanopong" target="_blank" rel="noopener noreferrer"><strong>Arkanopong</strong> | 2017 | C, OpenGL 2</a></li>
                        </ul>
                    </div>
                    <div className="other-projects-section">
                        <h2>Video & Motion Design</h2>
                        <ul>
                            <li><a href="https://www.youtube.com/watch?v=D-gO6o7oG_o" target="_blank" rel="noopener noreferrer"><strong>La Défense - Rêve Psyché</strong> | 2018 | After Effects, Sony Vegas</a></li>
                            <li><a href="https://youtu.be/vxT3-irHST0" target="_blank" rel="noopener noreferrer"><strong>Wonder Woman</strong> | 2017 | After Effects</a></li>
                        </ul>
                    </div>
                    <div className="other-projects-section">
                        <h2>Graphism & Print</h2>
                        <ul>
                            <li><a href={faible_puissant_file} target="_blank" rel="noopener noreferrer"><strong>Faible & Puissant</strong> | 2016 | Photoshop, Indesign</a></li>
                        </ul>
                    </div>
                    <div className="other-projects-section">
                        <h2>Music</h2>
                        <ul>
                            <li><a href="https://soundcloud.com/user-358686712/traveler-journey" target="_blank" rel="noopener noreferrer"><strong>Traveler Journey</strong> | 2017 | FL Studio, Pro Tools</a></li>
                        </ul>
                    </div>
                </Element>

                <ContactBar />
            </div>
        );
    }
}

export default Home;
