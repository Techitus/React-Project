import React, { useEffect, useState } from "react";
import Layout from "../../Components/Layout/Layout";
import Card from "./components/Card/Card";
import axios, { Axios } from "axios";
import { baseUrl } from "../../config";

const Home = () => {
  const [blogs, setBlog] = useState([]);
  const fetchBlogs = async () => {
    const response = await axios.get(`${baseUrl}/blog`);
    if (response.status === 200) {
      setBlog(response.data.data);
    }
  };
  useEffect(() => {
    fetchBlogs();
  }, []);
  return (
    <Layout>
      <div className="flex flex-wrap justify-center  ">
        {blogs.length > 0 &&
          blogs.map((blog) => {
            return <Card store={blog} />;
          })}
      </div>
    </Layout>
  );
};

export default Home;
