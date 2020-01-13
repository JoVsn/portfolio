import { RECEIVE_PROJECTS } from "../actions/projects";

const projects = (state = null, action) => {
    switch (action.type) {
        case RECEIVE_PROJECTS:
            return action.projects;
        default:
            return state;
    }
};

export default projects;