import React from "react";
import { connect } from "react-redux";

import "./TransitionHolder.scss";
import transitionGif from "../../assets/animated/final.gif";

const TransitionHolder = props => {
    const { loading } = props;
    return (
        <div
            className={
                loading ? "TransitionHolder show" : "TransitionHolder hide"
            }
        >
            <img src={transitionGif} alt="Transition" />
        </div>
    );
};

const mapStateToProps = ({loading}) => ({loading});

export default connect(mapStateToProps)(TransitionHolder);
