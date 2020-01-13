import React, { useEffect } from "react";
import "./About.scss";
import { connect } from "react-redux";
import useTransition from "../../hooks/useTransition";

import { ContactBar } from "../../common";

import profile_pic from "../../assets/imgs/profile.jpg";

const About = ({ dispatch }) => {
    useTransition(dispatch);

    useEffect(() => {
        document.title = `Jordan Vilsaint — About`;
        window.scrollTo(0, 0);
    }, []);

    return (
        <>
            <div className="About">
                <h1 className="mobile-title">About</h1>
                <div className="img-container">
                    <img
                        className="profile-img"
                        src={profile_pic}
                        alt="Profile"
                    />
                </div>
                <div className="presentation-content-container">
                    <h1 className="desktop-title">About</h1>
                    <p>
                        Being a creative engineer, passionate by digital arts
                        and audiovisual works, I'm looking forward to be a
                        modern numeric artist, and to be able to work on
                        innovative projects !
                    </p>
                </div>
            </div>
            <ContactBar />
        </>
    );
};

const mapStateToProps = ({ loading, project }) => ({
    loading,
    project
});

export default connect(mapStateToProps)(About);
