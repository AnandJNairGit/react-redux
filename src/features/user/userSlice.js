import { createSlice } from "@reduxjs/toolkit";

const initialState = [
  { id: 1, name: "Anand" },
  { id: 1, name: "Suresh" },
  { id: 1, name: "Elon" },
  { id: 1, name: "Mark" },
];

export const userSlice = createSlice({
  name: "users",
  initialState,
  reducers: {},
});

export const getUsers = (state) => {
  return state.users;
};
export default userSlice.reducer;
