import React from "react";

const Hero = () => {
  return (
    <div className="text-center justify-center items-center space-y-2 p-5">
      <h2 className="text-3xl font-bold">Friends to keep close in your life</h2>
      <p className="text-sm font-light">
        Your personal shelf of meaningful connections. Browse, tend, and nurture{" "}
        <br />
        the relationships that matter most.
      </p>
      <button className="btn btn-primary">+ Add A Friend</button>
    </div>
  );
};

export default Hero;
