import { createSlice } from "@reduxjs/toolkit";
import statuses from "../src/globals/status/statuses";
import axios from "axios";

const authSlice = createSlice({
  name: "auth",
  initialState: {
    user: null,
    token: null,
    status: null,
  },
  reducers: {
    setUser(state, action) {
      state.user = action.payload;
    },
    setToken(state, action) {
      state.token = action.payload;
    },
    setStatus(state, action) {
      state.status = action.payload;
    },
  },
});
export const { setUser, setToken, setStatus } = authSlice.actions;
export default authSlice.reducer;
export function register(data) {
  return async function registerThunk(dispatch) {
    // console.log("run");
    dispatch(setStatus(statuses.LOADING));
    try {
      const response = await axios.post(
        `https://react30.onrender.com/api/user/register`,
        data
      );
      // console.log("hello");
      if (response.status === 201) {
        dispatch(setUser(data));
        dispatch(setStatus(statuses.SUCCESS));
      } else {
        dispatch(setStatus(statuses.ERROR));
      }
    } catch (error) {
      // console.log(error); to find any error put log inside the catch in the name of the error

      dispatch(setStatus(statuses.ERROR));
    }
  };
}

export function login(data) {
  return async function loginThunk(dispatch) {
    dispatch(setStatus(statuses.LOADING));
    try {
      const response = await axios.post(
        `https://react30.onrender.com/api/user/login`,
        data
      );
      if (response.status === 200 && response.data.token) {
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
