import { combineReducers } from "redux";
import projects from "./projects";
import loading from "./loading";
import aptitudes from "./aptitudes";

export default combineReducers({ projects, loading, aptitudes });
