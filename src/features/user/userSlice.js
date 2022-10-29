import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";
import status from "../../status";

const USERS_URL = "https://jsonplaceholder.typicode.com/users";

const initialState = {
  users: [
    { id: 1, name: "Anand" },
    { id: 2, name: "Suresh" },
    { id: 3, name: "Elon" },
    { id: 4, name: "Mark" },
  ],
  status:status.IDLE,
  error:""
};

export const userSlice = createSlice({
  name: "users",
  initialState,
  reducers: {},
  extraReducers(builder) {
    builder
      .addCase(fetchUsers.pending, (state, action) => {
        state.status = status.LOADING;
      })
      .addCase(fetchUsers.fulfilled, (state, action) => {
        state.status = status.SUCCESS;
        state.users = action.payload;
        console.log("the payload is ---->>", action.payload);
      })
      .addCase(fetchUsers.rejected, (state, action) => {
        state.status = status.ERROR;
        state.error = action.payload;
      });
  },
});

export const fetchUsers = createAsyncThunk("user/fetchUsers", async () => {
  const response = await axios.get(USERS_URL);
  // console.log("the response is-------->", response);
  return response.data;
});

export const getUsers = (state) => {
  return state.users.users;
};
export default userSlice.reducer;
