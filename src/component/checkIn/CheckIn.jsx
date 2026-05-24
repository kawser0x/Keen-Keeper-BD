import React, { useContext } from "react";
import { IoIosVideocam } from "react-icons/io";
import { MdAddCall, MdOutlineTextsms } from "react-icons/md";
import { FriendContext } from "../../context/FriendContext";

const CheckIn = ({ friend }) => {
  const { savedFriend, setSavedFriend } = useContext(FriendContext);
  console.log(savedFriend);

  const handleFriend = (friend, type) => {
    const fnd = {
      name: friend.name,
      type: type,
      timestamp: new Date().toISOString(),
    };
    setSavedFriend([...savedFriend, fnd]);
  };

  return (
    <div className="flex justify-between gap-3">
      <div
        onClick={() => handleFriend(friend, "call")}
        className="card bg-gray-200 shadow-sm w-full items-center text-center m-1 p-6 hover:bg-gray-400">
        <MdAddCall /> Call
      </div>
      <div
        onClick={() => handleFriend(friend, "text")}
        className="card bg-gray-200 shadow-sm w-full items-center text-center m-1 p-6 hover:bg-gray-400">
        <MdOutlineTextsms /> Text
      </div>
      <div
        onClick={() => handleFriend(friend, "video")}
        className="card bg-gray-200 shadow-sm w-full items-center text-center m-1 p-6 hover:bg-gray-400">
        <IoIosVideocam /> Video
      </div>
    </div>
  );
};

export default CheckIn;
