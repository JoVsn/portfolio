import { getInitialData } from "../utils/api";
/* import { receiveUsers } from '../actions/users'
import { receiveTweets } from '../actions/tweets'
import { setAuthedUser } from '../actions/authedUser'
 */
import { showLoading, hideLoading } from "../actions/loading";
import { receiveProjects } from "../actions/projects";
import { receiveAptitudes } from "../actions/aptitudes";

export const handleInitialData = () => {
    return dispatch => {
        dispatch(showLoading());
        return getInitialData().then(({ projects, aptitudes }) => {
            dispatch(receiveProjects(projects));
            dispatch(receiveAptitudes(aptitudes));
            dispatch(hideLoading());
        });
    };
};
