import React from "react";
import { IoIosVideocam } from "react-icons/io";
import { MdAddCall, MdOutlineTextsms } from "react-icons/md";

const DisplayTImeLine = ({ frnd }) => {
  const { name, type, timestamp } = frnd;

  const handleImage = (type) => {
    if (type === "call") {
      return <MdAddCall />;
    } else if (type === "text") {
      return <MdOutlineTextsms />;
    } else if (type === "video") {
      return <IoIosVideocam />;
    }
  };

  const formatTime = (timeString) => {
    if (!timeString) return "";
    const date = new Date(timeString);
    return date.toLocaleString([], {
      month: "short", 
      day: "numeric", 
      year: "numeric",
    });
  };

  return (
    <div className="flex flex-row w-full card shadow-sm items-center gap-4 p-3  m-5 text-center justify-start bg-gray-100">
      <div className="pl-8 m-3">{handleImage(type)}</div>
      <div>
        <h2 className=" text-xl">
          <span className="font-extrabold text-2xl">{type}</span> With {name}
        </h2>
        <p>{formatTime(timestamp)}</p>
      </div>
    </div>
  );
};

export default DisplayTImeLine;
