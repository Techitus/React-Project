import React from "react";

import Layout from "../../Components/Layout/Layout";
import Form from "./components/Form/form";
import axios from "axios";
import { baseUrl } from "../../config";

const AddBlog = () => {
  const handelCreateBlog = async (data) => {
    const response = await axios.post(`${baseUrl}/blog`, data);
  };
  return (
    <Layout>
      <Form type="Add" onAdd={handelCreateBlog} />
    </Layout>
  );
};

export default AddBlog;
