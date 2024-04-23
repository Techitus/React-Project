import React from "react";
import Layout from "../../Components/Layout/Layout";
import Card from "./components/Card/Card";

const Home = () => {
  return (
    <Layout>
      <div className="flex flex-wrap justify-center ">
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
      </div>
    </Layout>
  );
};

export default Home;
