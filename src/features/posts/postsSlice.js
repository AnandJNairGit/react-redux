import { createAsyncThunk, createSlice, nanoid } from "@reduxjs/toolkit";
import axios from "axios";
import status from "../../status";

const POSTS_URL = "https://jsonplaceholder.typicode.com/posts";
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
  status: status.IDLE,
  error: "",
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
  extraReducers(builder) {
    builder
      .addCase(fetchPosts.pending, (state, action) => {
        state.status = status.LOADING;
      })
      .addCase(fetchPosts.fulfilled, (state, action) => {
        state.status = status.SUCCESS;
        console.log("the payload is ---->>", action.payload);
      })
      .addCase(fetchPosts.rejected, (state, action) => {
        state.status = status.ERROR;
      });
  },
});

export const fetchPosts = createAsyncThunk("posts/fetchPosts", async () => {
  const response = await axios.get(POSTS_URL);
  console.log("the response is-------->", response);
  return response;
});

fetchPosts();
export const { addPost } = postsSlice.actions;

export const getPosts = (state) => {
  return state.posts.posts;
};
export default postsSlice.reducer;
