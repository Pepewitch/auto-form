import { combineReducers } from "redux";
import { reducer as auth } from "features/auth/redux";
import { reducer as navigation } from "features/navigation/redux";

export const rootReducer = combineReducers({
  auth,
  navigation
});
