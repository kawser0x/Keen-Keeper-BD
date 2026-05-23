import React from "react";
import { useLoaderData } from "react-router";
import ShowFriends from "./ShowFriends";

const Friends = () => {
  const friends = useLoaderData();
  return (
    <div className="container mx-auto pb-5">
      <h2 className="font-bold text-2xl pb-2">Friends :</h2>
      <div className="grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-5 ">
        {friends.map((friend) => (
          <ShowFriends key={friend.id} friend={friend} />
        ))}
      </div>
    </div>
  );
};

export default Friends;
