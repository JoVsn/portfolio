import React, { Component } from 'react';
import './Home.scss';

import img_01 from '../../assets/imgs/01.jpg';
import img_02 from '../../assets/imgs/02.jpg';

import projects from '../../assets/datas/projects.json'

import Main from '../Main/Main'
import ProjectTmb from '../ProjectTmb/ProjectTmb'

class Home extends Component {

    render() {
        return (
            <div className="Home">
                <Main />
                <div className="works" id="works">        
                    <ProjectTmb title="Projet 1" imgSrc={img_01} />
                    <ProjectTmb title="Projet 2" imgSrc={img_02} />
                    <ProjectTmb title="Projet 1" imgSrc={img_02} />
                    <ProjectTmb title="Projet 2" imgSrc={img_02} />

                </div>
            </div>
        );
    }
}

export default Home;
