import React from "react";
import Navbar from "../NavBar/Navbar";

const Layout = ({ children }) => {
  // we  use children as a props and when in other pages we call something it inside the layout tag the it will be the props like in home page inside the layout tag we use card tag which which will be pass the props
  return (
    <>
      <Navbar />
      {/* Accepting the props */}
      {children}
    </>
  );
};

export default Layout;
