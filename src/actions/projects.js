export const RECEIVE_PROJECTS = 'RECEIVE_PROJECTS';

export const receiveProjects = projects => {
    return {
        type: RECEIVE_PROJECTS,
        projects
    }
}

