import { combineReducers } from "redux";

import authReducer from "./authReducer";
import postReducer from "./PostReducer";
import chatReducer from "./ChatUserReducer";
import projectReducer from "./ProjectReducer"
import AnnouncementReducer from "./AnnouncReducer"

export const reducers = combineReducers({authReducer,postReducer, chatReducer , projectReducer , AnnouncementReducer})