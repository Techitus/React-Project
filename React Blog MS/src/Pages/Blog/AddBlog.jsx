import React from "react";

import Layout from "../../Components/Layout/Layout";
import Form from "./components/Form/form";
import axios from "axios";
import { baseUrl } from "../../config";
import { useNavigate } from "react-router-dom";

const AddBlog = () => {
  const navigate = useNavigate();
  const handelCreateBlog = async (data) => {
    try {
      const response = await axios.post(`${baseUrl}/blog`, data, {
        headers: {
          "Content-Type": "multipart/form-data",
          " Authorization": localStorage.getItem("token"), //retrive token from localstorage
        },
      });
      if (response.status === 201) {
        navigate("/");
      } else {
        alert("sorry");
      }
    } catch (error) {
      alert(error?.response?.data?.message);
    }
  };
  return (
    <Layout>
      <Form type="Add" adding={handelCreateBlog} />
    </Layout>
  );
};

export default AddBlog;
