import React from "react";
import Navbar from "../../component/navbar/Navbar";
import { Outlet, useNavigation } from "react-router";
import Footer from "../../component/footer/Footer";

const HomePage = () => {
  const navigation = useNavigation();
  const isLoading = navigation.state === "loading";
  return (
    <div>
      <Navbar></Navbar>
      {isLoading ? (
        <div className="flex justify-center items-center min-h-[60vh]">
          <div className="w-12 h-12 border-4 border-gray-300 border-t-green-500 rounded-full animate-spin">
            <span className="loading loading-spinner text-success"></span>
          </div>
        </div>
      ) : (
        <Outlet />
      )}
      <Footer></Footer>
    </div>
  );
};

export default HomePage;
