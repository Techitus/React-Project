import React from "react";
import Form from "./Components/Form/Form";
import axios, { Axios } from "axios";
import { useNavigate } from "react-router-dom";

const Register = () => {
  const navigate = useNavigate();
  const handelResister = async (hii) => {
    // Hitting API for connecting with the backend
    try {
      const responsee = await axios.post(
        "https://react30.onrender.com/api/user/register",
        hii
      );
      if (responsee.status === 201) {
        navigate("/login");
      } else {
        alert("Geeting error");
      }
    } catch (error) {
      alert(error?.response?.data?.message);
    }
  };
  return <Form area="Register" adding={handelResister} />;
};

export default Register;
