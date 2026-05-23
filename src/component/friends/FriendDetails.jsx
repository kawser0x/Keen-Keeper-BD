import React from "react";
import { AiFillBell } from "react-icons/ai";
import { IoIosArchive, IoIosVideocam } from "react-icons/io";
import { MdAddCall, MdOutlineTextsms } from "react-icons/md";
import { RiDeleteBin5Line } from "react-icons/ri";
import { useLocation } from "react-router";

const FriendDetails = () => {
  const location = useLocation();
  const friend = location.state?.friend;
  const {
    name,
    picture,
    status,
    tags,
    days_since_contact,
    next_due_date,
    goal,
  } = friend;

  const getStatusColor = () => {
    if (status === "almost due") {
      return "bg-yellow-400";
    } else if (status === "overdue") {
      return "bg-red-400";
    } else {
      return "bg-green-400";
    }
  };

  return (
    <div className="sm:flex-row md:flex  container mx-auto  m-10 gap-5">
      <div className="sm:w-[70%] md:w-[30%] mx-auto ">
        <div className="card shadow-sm p-5 space-y-5">
          <div className="w-[70px] h-[70px] mx-auto">
            <img
              className="w-60px h-60px  mx-auto rounded-3xl"
              src={picture}
              alt=""
            />
          </div>
          <div className="text-center justify-center items-center space-y-1">
            <h2 className="font-bold text-2xl">{name}</h2>

            <p
              className={`font-semibold badge text-center text-white ${getStatusColor()}`}>
              {status}
            </p>
            <p className="flex gap-1 justify-center items-center">
              {tags.map((tag, index) => (
                <span
                  key={index}
                  className="badge bg-green-400 text-center text-white">
                  {tag}
                </span>
              ))}
            </p>
          </div>
        </div>
        <button className="flex flex-row justify-center items-center text-center gap-2 card shadow-sm w-full mx-auto p-2">
          <AiFillBell /> Snooze 2 weeks
        </button>
        <button className="flex flex-row justify-center items-center text-center gap-2     card shadow-sm w-full mx-auto p-2">
          <IoIosArchive /> Archive
        </button>
        <button className="flex flex-row justify-center items-center text-center gap-2  card shadow-sm w-full mx-auto p-2 text-red-500">
          <RiDeleteBin5Line /> Delete
        </button>
      </div>
      <div className="w-[70%] mx-auto ">
        <div className="sm:flex-row md:flex  justify-between gap-3">
          <div className="card shadow-sm p-5 w-full mx-auto justify-center items-center">
            <h2 className="font-bold text-2xl">{days_since_contact}</h2>
            <h3>Days Since Contact</h3>
          </div>
          <div className="card shadow-sm p-5 w-full mx-auto justify-center items-center">
            <h2 className="font-bold text-2xl">{goal}</h2>
            <h3>Goal (Days)</h3>
          </div>
          <div className="card shadow-sm p-5 w-full mx-auto justify-center items-center">
            <h2 className="font-bold text-2xl">{next_due_date}</h2>
            <h3>Next Due</h3>
          </div>
        </div>
        <div className="card shadow-sm p-5">
          <h2>
            Relationship Goal <span>edit</span>
          </h2>
          <h3>Connect every 30 days</h3>
        </div>
        <div className="card shadow-sm p-5">
          <h2>Quick Check-In</h2>
          <div className="flex justify-between gap-3">
            <div className="card bg-gray-200 shadow-sm w-full items-center text-center m-1 p-6">
              <MdAddCall /> Call
            </div>
            <div className="card bg-gray-200 shadow-sm w-full items-center text-center m-1 p-6">
              <MdOutlineTextsms /> Text
            </div>
            <div className="card bg-gray-200 shadow-sm w-full items-center text-center m-1 p-6">
              <IoIosVideocam /> Video
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FriendDetails;
