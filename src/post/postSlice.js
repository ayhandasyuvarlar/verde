import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";

const initialState = {
  loading: false,
  posts: [],
  details: {},
  error: "",
};

export const fetchPost = createAsyncThunk("posts/fetchPosts", () => {
  return axios.get(process.env.REACT_APP_GET_POST).then((response) => {
    return response.data;
  });
});
export const fetchPostDetails = createAsyncThunk(
  "posts/fetchPostDetails",
  (id) => {
    return axios
      .get(`${process.env.REACT_APP_GET_POST}/${id}`)
      .then((response) => {
        return response.data;
      });
  }
);
const postSlice = createSlice({
  name: "posts",
  initialState,
  reducers: {
    // detailsPost: (state) =>{
    //   axios.get(`${process.env.REACT_APP_GET_POST}/${state}`)
    // }
  },
  extraReducers: (builder) => {
    builder.addCase(fetchPost.pending, (state) => {
      state.loading = true;
    });
    builder.addCase(fetchPost.fulfilled, (state, action) => {
      state.loading = false;
      state.posts = action.payload;

      state.error = "";
    });
    builder.addCase(fetchPost.rejected, (state, action) => {
      state.loading = false;
      state.details = [];
      state.error = action.error.message;
    });
    builder.addCase(fetchPostDetails.pending, (state) => {
      state.loading = true;
    });
    builder.addCase(fetchPostDetails.fulfilled, (state, action) => {
      state.loading = false;
      state.details = action.payload;

      state.error = "";
    });
    builder.addCase(fetchPostDetails.rejected, (state, action) => {
      state.loading = false;
      state.details = {};
      state.error = action.error.message;
    });
  },
});

export default postSlice.reducer;
