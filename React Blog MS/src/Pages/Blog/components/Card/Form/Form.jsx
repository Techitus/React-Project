import React, { useState } from "react";

const Form = ({ type }) => {
  return (
    <div className="flex justify-center ml-16 w-screen h-screen bg-white">
      <div className="container mx-auto my-2 px-2 lg:px-2">
        <div className="w-full p-8 my-2  mx-24 md:px-12 lg:w-9/12 lg:pl-20 lg:pr-40 mr-auto rounded-2xl shadow-2xl bg-yellow-300">
          <div className="flex">
            <h1 className="font-bold uppercase text-5xl">
              {type}
              <br /> Blog
            </h1>
          </div>
          <div className="grid grid-cols-1 gap-1 md:grid-cols-2 mt-5">
            <input
              className="w-full bg-gray-100 text-gray-900 mt-2 p-2 rounded-lg focus:outline-none focus:shadow-outline"
              type="text"
              placeholder="Title*"
            />
            <input
              className="w-full bg-gray-100 text-gray-900 mt-2 p-2 rounded-lg focus:outline-none focus:shadow-outline"
              type="text"
              placeholder="Subtitle*"
            />
            <input
              className="w-full bg-gray-100 text-gray-900 mt-2 p-2 rounded-lg focus:outline-none focus:shadow-outline"
              type="file"
            />
            <input
              className="w-full bg-gray-100 text-gray-900 mt-2 p-2 rounded-lg focus:outline-none focus:shadow-outline"
              type="number"
              placeholder="Category*"
            />
          </div>
          <div className="my-2">
            <textarea
              placeholder="Discription*"
              className="w-full h-32 bg-gray-100 text-gray-900 mt-2 p-3 rounded-lg focus:outline-none focus:shadow-outline"
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
        </div>
      </div>
    </div>
  );
};

export default Form;
