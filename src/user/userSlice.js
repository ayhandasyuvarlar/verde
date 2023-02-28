import {createSlice } from "@reduxjs/toolkit";

import data from "./user.json";
const initialState = data;

const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {},
});

export const selectUser = (state) => state.user;
export default userSlice.reducer;
