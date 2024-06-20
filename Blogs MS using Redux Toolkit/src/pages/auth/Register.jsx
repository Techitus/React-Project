import React from "react";
import Form from "./components/form/Form";
import { useDispatch, useSelector } from "react-redux";
import { register } from "../../../store/authSlice";
import statuses from "../../globals/status/statuses";
import { useNavigate } from "react-router-dom";

const Register = () => {
  const { status } = useSelector((state) => state.auth);

  const navigate = useNavigate();
  const dispatch = useDispatch();
  const handleRegister = (data) => {
    dispatch(register(data));
    // console.log("test");
    //check the status value
    if (status === statuses.SUCCESS) {
      return navigate("/login");
    } else {
      return navigate("/register");
    }
  };
  return <Form type="Register" onSubmit={handleRegister} />;
};

export default Register;
