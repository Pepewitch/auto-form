import { combineReducers } from "redux";
import { reducer as authReducer } from "features/auth/redux";

export const rootReducer = combineReducers({
  auth: authReducer
});
