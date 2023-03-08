import { configureStore } from "@reduxjs/toolkit";
import profileReducer from "../features/counter/profileSlice";
import userReducer from "../features/counter/userSlice";
import postReducer from "../features/counter/postSlice";
import modeReducer from "../features/counter/modeSlice";
export const store = configureStore({
  reducer: {
    profile: profileReducer,
    user: userReducer,
    post: postReducer,
    mode: modeReducer,
  },
});
