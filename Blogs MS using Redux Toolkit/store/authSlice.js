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
    setTOken(state, action) {
      state.token = action.payload;
    },
    setStatus(state, action) {
      state.status = action.payload;
    },
  },
});
export const { setStatus, setTOken, setUser } = authSlice.actions;
export default authSlice.reducer;
export function register(data) {
  return async function registerThunk(dispatch) {
    console.log("run");
    // dispatch(setUser(data));
    dispatch(setStatus(statuses.LOADING));
    try {
      const response = await axios.post(
        `https://react30.onrender.com/api/user/register`,
        data
      );
      // console.log("hello");
      if (response === 201) {
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
      if (response === 200 && response.data.token) {
        dispatch(setTOken(response.data.token));
        dispatch(setStatus(statuses.SUCCESS));
      } else {
        dispatch(setStatus(statuses.ERROR));
      }
    } catch (error) {
      dispatch(setStatus(statuses.ERROR));
    }
  };
}
