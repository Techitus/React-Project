import React from "react";

import Layout from "../../components/layout/Layout";
import Form from "./components/form/Form";
import { useDispatch, useSelector } from "react-redux";

const AddBlog = () => {
  const { status } = useSelector((state) => state.blog);
  console.log(status);
  const dispatch = useDispatch();
  return (
    <Layout>
      <Form type="Create" />
    </Layout>
  );
};

export default AddBlog;
