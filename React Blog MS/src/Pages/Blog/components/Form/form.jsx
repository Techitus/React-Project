import React, { useState } from "react";

const Form = ({ type, adding, newhandel }) => {
  const [data, setData] = useState({
    title: "",
    subtitle: "",
    description: "",
    subtitle: "",
    image: "",
  });
  const handleChange = (e) => {
    const { name, value } = e.target;
    setData({
      ...data,
      [name]: name === "image" ? e.target.files[0] : value, //for image we use file n0t value
    });
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    adding(data);
  };

  return (
    <div className="flex justify-center  w-screen h-screen bg-white">
      <div className="container mx-auto my-3 px-4 lg:px-20">
        <div className="w-full p-8 my-2  md:px-12 lg:w-9/12 lg:pl-20 lg:pr-40 mr-auto rounded-2xl shadow-2xl bg-yellow-300">
          <div className="flex">
            <h1 className="font-bold uppercase text-5xl">
              {type}
              <br /> Blog
            </h1>
          </div>

          <form onSubmit={handleSubmit}>
            <div className="grid grid-cols-1 gap-1 md:grid-cols-2 mt-5">
              <input
                className="w-full bg-gray-100 text-gray-900 mt-2 p-2 rounded-lg focus:outline-none focus:shadow-outline"
                type="text"
                placeholder="Title*"
                name="title"
                onChange={handleChange}
                required
              />
              <input
                className="w-full bg-gray-100 text-gray-900 mt-2 p-2 rounded-lg focus:outline-none focus:shadow-outline"
                type="text"
                placeholder="Subtitle*"
                name="subtitle"
                onChange={handleChange}
                required
              />
              <input
                className="w-full bg-gray-100 text-gray-900 mt-2 p-2 rounded-lg focus:outline-none focus:shadow-outline"
                type="file"
                name="image"
                onChange={handleChange}
              />
              <input
                className="w-full bg-gray-100 text-gray-900 mt-2 p-2 rounded-lg focus:outline-none focus:shadow-outline"
                type="text"
                placeholder="Category*"
                name="category"
                onChange={handleChange}
                required
              />
            </div>
            <div className="my-2">
              <textarea
                placeholder="Discription*"
                name="description"
                className="w-full h-32 bg-gray-100 text-gray-900 mt-2 p-3 rounded-lg focus:outline-none focus:shadow-outline"
                onChange={handleChange}
                required
              ></textarea>
            </div>
            <div className="my-2 w-1/2 lg:w-1/4">
              <button
                className="uppercase text-sm font-bold tracking-wide bg-blue-900 text-gray-100 p-3 rounded-lg w-full 
                focus:outline-none focus:shadow-outline"
              >
                Submit
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Form;
