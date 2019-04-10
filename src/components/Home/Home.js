import React, { Component } from 'react';

import './Home.scss';

import Main from '../Main/Main';
import ContactBar from '../../shared/ContactBar/ContactBar';
import ProjectGallery from '../ProjectGallery/ProjectGallery';
import TransitionHolder from '../../shared/TransitionHolder/TransitionHolder';

import la_kaz_file from '../../assets/files/la_kaz.pdf';
import adaggio_file from '../../assets/files/adaggio.pdf';
import faible_puissant_file from '../../assets/files/faible_puissant.pdf';


class Home extends Component {

    componentDidMount() {
        document.title = "Jordan Vilsaint — Web developer";
    }

    createProjectLink = (link, projectName, date, techs) => {
        return (
            <a href={link} target="_blank" rel="noopener noreferrer"><strong>{projectName}</strong> | {date} | {techs}</a>
        );
    }

    render() {
        return (
            <div className="Home">
                <TransitionHolder show={true} />
                <Main />
                <ProjectGallery className="works" />

                <div className="other-works">
                    <h1>More works ...</h1>
                    <div className="other-projects-section">
                        <h2>Web Design</h2>
                        <ul>
                            <li>{this.createProjectLink(adaggio_file, 'Adaggio Store', '2018', 'Photoshop')}</li>
                            <li>{this.createProjectLink(la_kaz_file, 'La Kaz', '2018', 'Photoshop')}</li>
                        </ul>
                    </div>
                    <div className="other-projects-section">
                        <h2>Programming</h2>
                        <ul>

                            <li>{this.createProjectLink("https://github.com/JoVsn/captchaPokemon", 'Captcha Pokemon', '2018', 'Java')}</li>
                            <li>{this.createProjectLink("https://github.com/oeuvrayjoris/pacman", 'PacBreak', '2018', 'C++, OpenGL 3')}</li>
                            <li>{this.createProjectLink("https://github.com/JoVsn/pianobeep", 'Piano Beep', '2018', 'C++')}</li>
                            <li>{this.createProjectLink("https://github.com/oeuvrayjoris/arkanopong", 'Arkanopong', '2017', 'C, OpenGL 2')}</li>

                        </ul>
                    </div>
                    <div className="other-projects-section">
                        <h2>Video & Motion Design</h2>
                        <ul>

                            <li>{this.createProjectLink("https://youtu.be/D-gO6o7oG_o", 'La Défense - Rêve Psyché', '2018', 'After Effects, Sony Vegas')}</li>
                            <li>{this.createProjectLink("https://youtu.be/4xZ4OdotxTA", 'LEGO', '2018', 'Sony Vegas, After Effects, 3DS Max')}</li>
                            <li>{this.createProjectLink("https://youtu.be/dxCK7rNngLM", 'Magman', '2018', 'Sony Vegas, After Effects')}</li>
                            <li>{this.createProjectLink("https://youtu.be/vxT3-irHST0", 'Wonder Woman', '2017', 'After Effects')}</li>

                        </ul>
                    </div>
                    <div className="other-projects-section">
                        <h2>Graphism & Print</h2>
                        <ul>
                            <li>{this.createProjectLink(faible_puissant_file, 'Faible & Puissant', '2016', 'Photoshop, Indesign')}</li>
                        </ul>
                    </div>
                    <div className="other-projects-section">
                        <h2>Music</h2>
                        <ul>
                            <li>{this.createProjectLink("https://soundcloud.com/user-358686712/traveler-journey", 'Traveler Journey', '2017', 'FL Studio, Pro Tools')}</li>
                        </ul>
                    </div>
                </div>

                <ContactBar />
            </div>
        );
    }
}

export default Home;
