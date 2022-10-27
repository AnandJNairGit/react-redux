import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  posts: [
    {
      id: 1,
      title: "anand",
      content: "hi, I Am a React.js developer",
    },
    {
      id: 2,
      title: "suresh",
      content: "hi, I Am a Node.js developer",
    },
  ],
};

export const postsSlice = createSlice({
  name: "posts",
  initialState,
  reducers: {
    addPost: (state, action) => {
      console.log(action);
      state.posts.push(action.payload);
    },
  },
});

console.log(postsSlice);
export const {addPost} = postsSlice.actions;

export const getPosts = (state) => {
  return state.posts.posts;
};
export default postsSlice.reducer;
