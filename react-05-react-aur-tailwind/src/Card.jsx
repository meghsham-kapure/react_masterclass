import React from "react";

function Card({ dev }) {

  console.log(dev);

  return (
    <div className="m-4">
      <div className="max-w-md mx-auto bg-white rounded-xl shadow-md overflow-hidden md:max-w-2xl">
        <div className="flex items-center p-6">
          <div className="shrink-0">
            <img
              className="h-32 w-32 rounded-lg object-cover"
              src={dev.url}
              alt="Profile"
            />
          </div>
          <div className="ml-4">
            <h3 className="text-lg font-semibold text-gray-900">
              {dev.fullname}
            </h3>
            <p className="text-gray-600">{dev.position}</p>
            <p className="text-sm text-gray-500 mt-1">{dev.description}</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Card;
