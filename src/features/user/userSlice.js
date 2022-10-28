import { createSlice } from "@reduxjs/toolkit";

const initialState = [
  { id: 1, name: "Anand" },
  { id: 2, name: "Suresh" },
  { id: 3, name: "Elon" },
  { id: 4, name: "Mark" },
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
