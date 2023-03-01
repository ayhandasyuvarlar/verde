import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";

const initialState = {
  loading: false,
  posts: [],
  details: {},
  error: "",
};
//     state.posts.splice(index, 1);
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
export const addNewPost = createAsyncThunk(
  "posts/newPost",
  async (initialPost) => {
    try {
      const response = await axios.post(
        "https://jsonplaceholder.typicode.com/posts",
        initialPost
      );
      return response.data;
    } catch (error) {
      return error.message;
    }
  }
);
export const updatePost = (post) => ({
  type: "posts/updatePost",
  payload: post,
});
export const createNewPost = (post) => ({
  type: "posts/createNewPost",
  payload: post,
});

export const deletePost = createAsyncThunk(
  "posts/deletePost",
  async (initialPost) => {
    const deletePost = initialPost;
    try {
      const response = await axios.delete(
        `https://jsonplaceholder.typicode.com/posts/${deletePost.id}`
      );
      return response.data;
    } catch (error) {
      return error.message;
    }
  }
);
const postSlice = createSlice({
  name: "posts",
  initialState,
  reducers: {
    updatePost: (state, action) => {
      const updatedPost = action.payload;
      const index = state.posts.findIndex((post) => post.id === updatedPost.id);

      try {
        if (index !== -1) {
          state[index] = updatedPost;
          fetch(
            `https://jsonplaceholder.typicode.com/posts/${updatedPost.id}`,
            {
              method: "PUT",
              body: JSON.stringify(updatedPost),
              headers: {
                "Content-type": "application/json; charset=UTF-8",
              },
            }
          )
            .then((response) => response.json())
            .then((json) => console.log(json));
        }
      } catch (err) {
        state.error = err.message;
      }
    },
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
    builder.addCase(addNewPost.fulfilled, (state, action) => {
      state.loading = false;
      state.posts.push(action.payload);
      state.error = "";
      console.log(action.payload);
    });
    builder.addCase(deletePost.fulfilled, (state, action) => {
      state.posts.splice(action.payload.id, 1);
      state.error = "";
    });
  },
});

export default postSlice.reducer;
