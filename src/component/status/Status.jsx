import React, { useContext } from "react";
import { FriendContext } from "../../context/FriendContext";
import { Legend, Pie, PieChart, Tooltip, ResponsiveContainer } from "recharts";

const Status = () => {
  const { savedFriend } = useContext(FriendContext);

  let callCount = 0;
  let textCount = 0;
  let videoCount = 0;

  savedFriend.forEach((friend) => {
    if (friend.type === "call") callCount++;
    if (friend.type === "text") textCount++;
    if (friend.type === "video") videoCount++;
  });

  const data = [
    { name: "Call", value: callCount, fill: "#0088FE" },
    { name: "Text", value: textCount, fill: "#00C49f" },
    { name: "Video", value: videoCount, fill: "#FF8042" },
  ].filter((item) => item.value > 0);

  return (
    <div className="flex flex-col items-center text-center justify-center p-8 w-[50%] min-h-[50vh] container mx-auto shadow-sm bg-gray-200 ">
      <h2 className="font-bold text-2xl mb-4">Status</h2>

      {data.length === 0 ? (
        <p className="text-gray-500 mt-10">
          No interaction data available yet.
        </p>
      ) : (
        <div style={{ width: "100%", height: 300, maxWidth: "500px" }}>
          <ResponsiveContainer width="100%" height="100%">
            <PieChart>
              <Pie
                data={data}
                innerRadius="60%"
                outerRadius="90%"
                cornerRadius={5}
                paddingAngle={5}
                dataKey="value"
                isAnimationActive={true}
              />
              <Legend />
              <Tooltip />
            </PieChart>
          </ResponsiveContainer>
        </div>
      )}
    </div>
  );
};

export default Status;
