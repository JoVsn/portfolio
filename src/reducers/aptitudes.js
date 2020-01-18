import { RECEIVE_APTITUDES } from "../actions/aptitudes";

const aptitudes = (state = null, action) => {
    switch (action.type) {
        case RECEIVE_APTITUDES:
            return action.aptitudes;
        default:
            return state;
    }
};

export default aptitudes;