import React, { useContext, useState } from "react";
import { FriendContext } from "../../context/FriendContext";
import DisplayTImeLine from "./DisplayTImeLine";

const TimeLine = () => {
  const { savedFriend } = useContext(FriendContext);
  
  const [filterType, setFilterType] = useState("");

  const filteredFriends = savedFriend.filter((frnd) => {
    if (filterType === "") {
      return true; 
    }
    return frnd.type.toLowerCase() === filterType.toLowerCase();
  });

  return (
    <div className="min-h-[50vh] container mx-auto shadow-sm bg-gray-200  p-10">
      <h2 className="font-bold text-2xl pt-5 pb-3">TimeLine</h2>
      <div>
        <input
          type="text"
          className="input border p-2 mb-4"
          placeholder="Filter TimeLine"
          list="browsers"
          value={filterType} 
          onChange={(e) => setFilterType(e.target.value)}
        />
        <datalist id="browsers">
          <option value="Text"></option>
          <option value="Call"></option>
          <option value="Video"></option>
        </datalist>
      </div>
      
      <div>
        {filteredFriends.length > 0 ? (
          filteredFriends.map((frnd, ind) => (
            <DisplayTImeLine key={ind} frnd={frnd} />
          ))
        ) : (
          <p className="">No interactions found for this filter.</p>
        )}
      </div>
    </div>
  );
};

export default TimeLine;