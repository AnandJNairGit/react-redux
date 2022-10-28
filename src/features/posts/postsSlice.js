import { createSlice, nanoid } from "@reduxjs/toolkit";

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
    addPost: {
      reducer(state, action) {
        console.log(action);
        state.posts.push(action.payload);
      },
      prepare({ title, content, userId }) {
        return {
          payload: {
            id: nanoid(),
            title: title,
            content: content,
            userId: userId,
          },
        };
      },
    },
  },
});
export const { addPost } = postsSlice.actions;

export const getPosts = (state) => {
  return state.posts.posts;
};
export default postsSlice.reducer;
