import React from "react";

import "./Home.scss";

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
            <div className="ProjectsDisplayer">
                <ProjectsDisplayer />
            </div>
            <div className="Contact">
                <Contact />
            </div>

            {/*             <Fade bottom>
                <div className="home-cta-container">
                    <span className="home-cta-caption">EXPLORE. DISCOVER. IMMERSE.</span>
                </div>
            </Fade>
            <Fade bottom>
                <ProjectsDisplayer forHomepage />
            </Fade> */}
        </div>
    );
};

export default Home;
