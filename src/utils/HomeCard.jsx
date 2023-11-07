import React from "react";

const HomeCard = () => {
  return (
    <div className="fixed inset-0 flex items-center justify-end p-20 z-50">
      <div className="w-full max-w-md p-6 bg-transparent rounded-lg shadow-lg">
        <div className="p-5 border-b border-gray-300">
          <h3 className="text-5xl font-semibold text-blue-600">HYSCLAER</h3>
        </div>
        <div className="p-6 bg-blue-400 shadow-md rounded">
          <h3 className="text-2xl font-semibold text-white">Employee Room </h3>
          <h3 className="text-2xl font-semibold text-white">Allocation Application</h3>
        </div>
        <div className="p-6 border-t ">
        <h1 className="text-2xl font-semibold">To allocate rooms 
        <a href="/home/dashboard" className="text-blue-700"> Click Here!!</a>
        </h1>
        </div>
      </div>
    </div>
  );
};

export default HomeCard;
