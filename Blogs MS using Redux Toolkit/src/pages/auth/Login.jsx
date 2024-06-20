import React from "react";
import Form from "./components/form/Form";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import statuses from "../../globals/status/statuses";
import { login } from "../../../store/authSlice";

const Login = () => {
  //Destructure the and send as props to the form.jsx
  const { user, status } = useSelector((state) => state.auth);
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const handleLogin = (data) => {
    dispatch(login(data));
    // console.log("test");
    //check the status value
    if (status === statuses.SUCCESS) {
      return navigate("/");
    } else {
      return navigate("/login");
    }
  };
  return <Form type="Login" user={user} onSubmit={handleLogin} />;
};

export default Login;
