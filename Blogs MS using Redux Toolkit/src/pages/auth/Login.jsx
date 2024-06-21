import React, { useEffect } from "react";
import Form from "./components/form/Form";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import statuses from "../../globals/status/statuses";
import { login, setStatus } from "../../../store/authSlice";

const Login = () => {
  //Destructure the and send as props to the form.jsx
  const { user, status,token } = useSelector((state) => state.auth);
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const handleLogin = (data) => {
    dispatch(login(data));
  };
  useEffect(() => {
    // console.log("test");
    //check the status value
    if (status === statuses.SUCCESS) {
      localStorage.setItem("jwttoken",token)
      navigate("/");
      dispatch(setStatus(null));
    }
  }, [status]);
  return <Form type="Login" user={user} onSubmit={handleLogin} />;
};

export default Login;
