import React from 'react';

import './SkillBar.scss';

const SkillBar = (props) => {

    const divStyle = {
        width: `${props.value}%`
    };

    let skillCaption;
    if (props.value < 15) {
        skillCaption = 'Newbie'
    }
    else if (props.value < 40) {
        skillCaption = 'Novice'
    }
    else if (props.value < 60) {
        skillCaption = 'Pretty good'
    }
    else if (props.value < 75) {
        skillCaption = 'Intermediate'
    }
    else if (props.value < 90) {
        skillCaption = 'Advanced'
    }
    else if (props.value < 100) {
        skillCaption = 'Expert'
    }
    else {
        skillCaption = 'Perfect'
    }

    return (
        <div className="SkillBar">
            <span className="caption">{props.caption}</span>
            <div className="jauge-border">
                <div className="jauge-value" style={divStyle}>
                </div>
                <span>{skillCaption}</span>
            </div>
        </div>
    );
}

export default SkillBar;
