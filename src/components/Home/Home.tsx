import React from "react";

import "./Home.scss";
import { projects } from "../../assets/datas/projects";

import ProjectsDisplayer from "./ProjectsDisplayer/ProjectsDisplayer";
import Main from "./Main/Main";
import About from "./About/About";
import Contact from "./Contact/Contact";

const Home = () => {
    return (
        <div className="Home">
            <Main />
            <div className="About">
                <About />
            </div>
            <div className="ProjectsDisplayer" data-aos="fade-up" data-aos-once="true">
                <ProjectsDisplayer projects={projects} />
            </div>
            <div className="Contact" data-aos="fade-right" data-aos-once="true">
                <Contact />
            </div>

            {/*             <Fade bottom>
                <div className="home-cta-container">
                    <span className="home-cta-caption">EXPLORE. DISCOVER. IMMERSE.</span>
                </div>
            </Fade>*/}
        </div>
    );
};

export default Home;
