import { _getProjects,  } from "./_DATA.js";

export const getInitialData = () => {
    return Promise.all([_getProjects()]).then(([projects]) => ({
        projects
    }));
};
