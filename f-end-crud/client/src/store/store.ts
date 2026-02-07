import { combineReducers, configureStore } from "@reduxjs/toolkit";
import userReducer from "../components/User/userSlice";
import applicationReducer from "../components/Applications/appSlice";

const reducers = combineReducers({
  user: userReducer,
  apps: applicationReducer,
});

const store = configureStore({
  reducer: reducers,
});

export type RootState = ReturnType<typeof reducers>;
export type AppDispatch = typeof store.dispatch;
export default store;
