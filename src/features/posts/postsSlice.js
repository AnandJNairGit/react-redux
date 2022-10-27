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
  reducers: {},
});

export const getPosts = (state)=>{return state.posts.posts};
export default postsSlice.reducer;
