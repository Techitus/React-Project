import React from "react";
import Form from "./Components/Form/Form";
import axios from "axios";
import { useNavigate } from "react-router-dom";

const Login = () => {
  const navigate = useNavigate();
  const handelLogin = async (newData) => {
    // Hitting API for connecting with the backend
    try {
      // console.log("hand");
      const responsee = await axios.post(
        "https://react30.onrender.com/api/user/login",
        newData
      );
      if (responsee.status === 200) {
        navigate("/");
      } else {
        alert("Login Fail");
      }
    } catch (error) {
      alert(error?.response?.data?.message);
    }
  };

  return <Form area="Login" adding={handelLogin} />;
};
export default Login;
