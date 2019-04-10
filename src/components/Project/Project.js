import React, { Component } from 'react';
import { Redirect } from 'react-router'
import './Project.scss'

import ProjectNav from '../ProjectNav/ProjectNav';
import TransitionHolder from '../../shared/TransitionHolder/TransitionHolder';

import shopping_img from '../../assets/imgs/shopping.png'; // Remplacer par Shopping Assistant
import mobilites_img from '../../assets/imgs/mobilites.png';
import grdf_img from '../../assets/imgs/grdf.png';
import life_img from '../../assets/imgs/life.png';
import muse_img from '../../assets/imgs/muse.png';
import hoverboard_img from '../../assets/imgs/hoverboard.png';

import projects from '../../assets/datas/projects.json';

class Project extends Component {
    constructor(props) {
        super(props);
        this.state = {
            project: projects.find((element) => {
                return element.projectId === props.match.params.projectId;
            }),
            reload: false
        };
    }

    componentDidMount() {
        if (this.state.project) {
            document.title = `Jordan Vilsaint — ${this.state.project.name}`;
            window.scrollTo(0, 0);
        }
    }

    static getDerivedStateFromProps(props, state) {
        if (state.project) {
            if (props.match.params.projectId !== state.project.projectId) {
                return {
                    project: projects.find((element) => {
                        return element.projectId === props.match.params.projectId;
                    }),
                    reload: true
                }
            }
        }
        return null;
    }

    componentDidUpdate() {
        if (this.state.project) {
            document.title = `Jordan — ${this.state.project.name}`;
            window.scrollTo(0, 0);
        }
    }

    // Return the image corresponding to the current project
    getImage() {
        const imgs = {
            "shopping_img": shopping_img,
            "mobilites_img": mobilites_img,
            "grdf_img": grdf_img,
            "life_img": life_img,
            "muse_img": muse_img,
            "hoverboard_img": hoverboard_img
        }
        const imgSrc = `${this.state.project.projectId}_img`;
        return imgs[imgSrc];
    }

    // Return the Id of the project based on the current one
    getProjectIdFromThis(relativePosition) {
        const projectPosition = projects.findIndex((element) => {
            return element.projectId === this.state.project.projectId;
        });

        return projects[projectPosition + relativePosition] ? projects[projectPosition + relativePosition].projectId : undefined;
    }

    // Create html links to the projects
    createLinks() {
        let res = [];
        for (let i = 0; i < this.state.project.links.length; i++) {
            const elem =
                (
                    <a href={this.state.project.links[i].link} target="_blank" rel="noopener noreferrer" key={this.state.project.links[i].link}><button>{this.state.project.links[i].caption}</button></a>
                );
            if (this.state.project.links[i].active === true)
                res.push(elem);
        }
        return res;
    }

    render() {
        if (this.state.project === undefined) {
            return (
                <Redirect to="/project-not-found"></Redirect>
            );
        }
        return (
            <div className="Project">
                <TransitionHolder show={true} reload={this.state.reload} />
                <div className="project-title">
                    <h1>{this.state.project.name}</h1>
                    <h2>{this.state.project.year} | {this.state.project.technologies}</h2>
                </div>
                <div className="img-container">
                    <img src={this.getImage()} alt={this.state.project.name} />
                </div>
                <div className="content">
                    <p>{this.state.project.description}</p>
                    <div className="button-container">
                        {this.createLinks()}
                    </div>
                </div>
                <ProjectNav previousProjectId={this.getProjectIdFromThis(-1)} nextProjectId={this.getProjectIdFromThis(1)} />
            </div>
        );
    }
}

export default Project;
