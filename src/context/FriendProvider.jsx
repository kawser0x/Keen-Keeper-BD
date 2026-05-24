import React, { useState } from "react";
import { FriendContext } from "./FriendContext";

const FriendProvider = ({ children }) => {
  const [savedFriend, setSavedFriend] = useState([]);

  const data = {
    savedFriend,
    setSavedFriend,
  };

  return (
    <FriendContext.Provider value={data}>{children}</FriendContext.Provider>
  );
};

export default FriendProvider;
