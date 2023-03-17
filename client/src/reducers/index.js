import { combineReducers } from "redux";

import authReducer from "./authReducer";
import postReducer from "./PostReducer";
import chatReducer from "./ChatUserReducer";
import projectsReducer from "./ProjectReducer"

export const reducers = combineReducers({authReducer,postReducer, chatReducer , projectsReducer})