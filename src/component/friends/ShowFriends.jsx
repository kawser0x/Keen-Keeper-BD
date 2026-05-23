import React from "react";
import { Link } from "react-router";

const ShowFriends = ({ friend }) => {
  const { name, picture, status, tags, days_since_contact } = friend;

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
    <>
      <Link to="/details" state={{ friend: friend }} className="shadow-sm p-5 rounded-2xl space-y-2">
        <div className="w-[50%] mx-auto">
          <img
            className="w-50px h-50px  mx-auto rounded-full"
            src={picture}
            alt=""
          />
        </div>
        <div className="text-center justify-center items-center space-y-1">
          <h2 className="font-bold text-2xl">{name}</h2>
          <p className="font-extralight text-sm">{days_since_contact}d ago</p>
          <p className="flex gap-1 justify-center items-center">
            {tags.map((tag, index) => (
              <span
                key={index}
                className="badge bg-green-400 text-center text-white">
                {tag}
              </span>
            ))}
          </p>
          <p
            className={`font-semibold badge text-center text-white ${getStatusColor()}`}>
            {status}
          </p>
        </div>
      </Link>
    </>
  );
};

export default ShowFriends;
