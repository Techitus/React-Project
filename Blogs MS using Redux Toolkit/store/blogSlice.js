import { createSlice } from "@reduxjs/toolkit";
import statuses from "../src/globals/status/statuses";
import API from "../src/http";
const blogSlice = createSlice({
  name: "blog",
  initialState: {
    data: null,
    status: null,
  },
  reducers: {
    setBlog(state, action) {
      state.data = action.payload;
    },

    setStatus(state, action) {
      state.status = action.payload;
    },
  },
});
export const { setStatus, setBlog } = blogSlice.actions;
export default blogSlice.reducer;
export function addBlog(data) {
  return async function addBlogThunk(dispatch) {
    dispatch(setStatus(statuses.LOADING));
    try {
      const response = await API.post("blog", data, {
        headers: {
          "Content-Type": "multipart/form.data",
        },
      });
      if (response.status === 201) {
        dispatch(setStatus(statuses.SUCCESS));
      } else {
        dispatch(setStatus(statuses.ERROR));
      }
    } catch (error) {
      dispatch(setStatus(statuses.ERROR));
    }
  };
}
export function fetchBlog() {
  return async function fetchBlogThunk(dispatch) {
    dispatch(setStatus(statuses.LOADING));
    try {
      const response = await API.get("blog");
      if (response.status === 200 && response.data.blog.length > 0) {
        // console.log("Setting token:", response.data.token);
        console.log("test");
        dispatch(setBlog(response.data.blog));
        dispatch(setStatus(statuses.SUCCESS));
      } else {
        dispatch(setStatus(statuses.ERROR));
      }
    } catch (error) {
      // console.log(error);
      dispatch(setStatus(statuses.ERROR));
    }
  };
}
export function deletBlog(id, token) {
  return async function deleteBlogThunk(dispatch) {
    dispatch(setStatus(statuses.LOADING));
    try {
      const response = await API.delete("blog/${id}", {
        headers: {
          token: token,
        },
      });
      if (response.status === 200) {
        // console.log("Setting token:", response.data.token);
        console.log("test");
        dispatch(setToken(response.data.token));
        dispatch(setStatus(statuses.SUCCESS));
      } else {
        dispatch(setStatus(statuses.ERROR));
      }
    } catch (error) {
      // console.log(error);
      dispatch(setStatus(statuses.ERROR));
    }
  };
}
