import { _getProjects, _getAptitudes } from "./_DATA.js";

export const getInitialData = () => {
    return Promise.all([_getProjects(), _getAptitudes()]).then(
        ([projects, aptitudes]) => ({
            projects,
            aptitudes
        })
    );
};
