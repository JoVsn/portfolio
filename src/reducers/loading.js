import { HIDE_LOADING, SHOW_LOADING } from "../actions/loading";

const loading = (state = null, action) => {
    switch (action.type) {
        case HIDE_LOADING:
            return false;
        case SHOW_LOADING:
            return true;
        default:
            return state;
    }
};

export default loading;
