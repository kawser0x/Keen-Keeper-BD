import React from "react";
import { Link } from "react-router";

const NotFound = () => {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gray-50 px-4 sm:px-6 lg:px-8">
      <div className="max-w-md w-full space-y-8 text-center relative">
        <h1 className="text-9xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-blue-500 to-green-400 tracking-widest drop-shadow-sm">
          404
        </h1>
        <div className="bg-gray-900 px-3 py-1 text-sm font-semibold rounded-md rotate-12 absolute text-white shadow-lg top-14 right-10 sm:right-16 md:right-10">
          Page Not Found
        </div>
        <h2 className="mt-8 text-3xl font-bold text-gray-900 tracking-tight sm:text-4xl">
          Oops! You look lost.
        </h2>
        <p className="mt-4 text-gray-500 text-lg">
          The page you are looking for might have been removed, had its name
          changed, or is temporarily unavailable.
        </p>
        <div className="mt-8 flex justify-center">
          <Link
            to="/"
            className="inline-flex items-center justify-center px-8 py-3 text-base font-medium text-white bg-gray-900 hover:bg-gray-800 rounded-xl shadow-md transition-all duration-200 ease-in-out transform hover:-translate-y-1 hover:shadow-lg">
            Take Me Home
          </Link>
        </div>
      </div>
    </div>
  );
};

export default NotFound;
