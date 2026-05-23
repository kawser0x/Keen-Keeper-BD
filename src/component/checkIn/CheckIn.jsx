import React from 'react';
import { IoIosVideocam } from 'react-icons/io';
import { MdAddCall, MdOutlineTextsms } from 'react-icons/md';

const CheckIn = () => {
    return (
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
    );
};

export default CheckIn;