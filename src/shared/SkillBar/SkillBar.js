import React from 'react';

import './SkillBar.scss';

const SkillBar = (props) => {
    return (
        <div className="SkillBar">
            <span className="caption">{props.caption}</span>
            <div className="jauge-border">
                <div className="jauge-value">
                </div>
            </div>
        </div>
    );
}

export default SkillBar;
