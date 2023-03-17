import { combineReducers } from "redux";

import authReducer from "./authReducer";
import postReducer from "./PostReducer";
import chatReducer from "./ChatUserReducer";
import projectReducer from "./ProjectReducer";
import announcReducer from "./AnnouncReducer"


export const reducers = combineReducers({authReducer,postReducer, chatReducer , projectReducer , announcReducer })