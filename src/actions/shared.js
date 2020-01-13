import { getInitialData } from '../utils/api'
/* import { receiveUsers } from '../actions/users'
import { receiveTweets } from '../actions/tweets'
import { setAuthedUser } from '../actions/authedUser'
import { showLoading, hideLoading } from 'react-redux-loading'
 */
import { receiveProjects } from "../actions/projects";

export const handleInitialData = () => {
    return dispatch => {
        //dispatch(showLoading())
        return getInitialData().then(({ projects }) => {
            dispatch(receiveProjects(projects));
            //dispatch(hideLoading())
        });
    };
};
