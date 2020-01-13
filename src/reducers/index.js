import { combineReducers } from "redux";
import projects from "./projects";
import loading from "./loading";

export default combineReducers({ projects, loading });
