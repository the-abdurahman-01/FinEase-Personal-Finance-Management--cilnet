import React from "react";
import { Link } from "react-router";
import { FaExclamationTriangle, FaHome, FaArrowLeft } from "react-icons/fa";

const PageNotFound = () => {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gradient-to-br from-blue-100 to-blue-200 px-4">
      <title> Error</title>
      <h1 className="text-9xl font-extrabold text-blue-600 mb-4 animate-pulse">
        404
      </h1>
      <p className="text-xl text-gray-700 mb-6">
        Oops! The page you are looking for does not exist.
      </p>
      <Link
        to="/"
        className="px-6 py-3 bg-blue-600 text-white rounded-lg font-semibold hover:bg-blue-800 transition duration-300 shadow-lg"
      >
        Go Back Home
      </Link>
      <div className="mt-10">
        <img
          src="https://cdn-icons-png.flaticon.com/512/564/564619.png"
          alt="Not Found"
          className="w-64 h-64 animate-bounce"
        />
      </div>
    </div>
  );
};


export default PageNotFound;
