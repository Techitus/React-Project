import { createSlice } from "@reduxjs/toolkit";

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
function register(data) {
  return async function registerThunk(dispatch) {
    const response = await axios.post("https://react30.onrender.com/api/user/register",data);
    if (response === 200) {
    } else {
    }
  };
}

function login(data) {
  return async function loginThunk(dispatch) {
    const response = await axios.post("https://react30.onrender.com/api/user/login",data);
    if (response===200) {
    } else {
    }
  };
}
