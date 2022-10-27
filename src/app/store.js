import { configureStore } from "@reduxjs/toolkit";
import counterSlice from "../features/counter/counterSlice";
import postsSlice from "../features/posts/postsSlice";
import userSlice from "../features/user/userSlice";

export const store = configureStore({
  reducer: {
    counter: counterSlice,
    posts: postsSlice,
    user: userSlice
  },
});
