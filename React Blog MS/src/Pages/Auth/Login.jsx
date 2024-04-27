import React from "react";
import Form from "./Components/Form/Form";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { baseUrl } from "../../config";

const Login = () => {
  const navigate = useNavigate();
  const handelLogin = async (newData) => {
    // Hitting API for connecting with the backend
    try {
      // console.log("hand");
      const responsee = await axios.post(`${baseUrl}/login`, newData); //importing baseurl which store .env
      if (responsee.status === 200) {
        localStorage.setItem("token", responsee.data.token); //adding token of login in the localstorage
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
