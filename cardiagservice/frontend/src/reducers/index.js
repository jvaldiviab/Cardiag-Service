import { combineReducers } from "redux";
import doctors from "./doctors";
import errors from "./errors";
import messages from "./messages";
import auth from "./auth";

export default combineReducers({
    doctors,
    errors,
    messages,
    auth
});