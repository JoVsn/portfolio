import { useEffect } from "react";
import { showLoading, hideLoading } from "../actions/loading";
import { TRANSITION_TIME } from "../constants";

const useTransition = (dispatch) => {
    useEffect(() => {
        dispatch(showLoading());
        document.title = "Jordan — Web developer";
        const id = setTimeout(() => dispatch(hideLoading()), TRANSITION_TIME);
        return () => clearTimeout(id);
    }, [dispatch]);
};

export default useTransition;
