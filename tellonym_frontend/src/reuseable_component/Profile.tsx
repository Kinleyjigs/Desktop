import React from 'react';

const ProfileCard = () => {
  return (
    <div className="flex flex-col items-center bg-white p-4 rounded-lg shadow-md w-80">
      <div className="relative">
        <img
          src="/path/to/profile.jpg" // Replace with the actual path to the profile image
          alt="Profile"
          className="w-32 h-32 rounded-full border-2 border-blue-500"
        />
        <span className="absolute bottom-0 right-0 bg-yellow-400 text-black p-1 rounded-full text-xs">
          ★
        </span>
      </div>
      <h2 className="mt-4 text-xl font-semibold">tandiom</h2>
      <div className="flex space-x-4 mt-2">
        <div className="text-center">
          <p className="text-gray-500">Followers</p>
          <p className="font-semibold">16</p>
        </div>
        <div className="text-center">
          <p className="text-gray-500">Tells</p>
          <p className="font-semibold">740</p>
        </div>
        <div className="text-center">
          <p className="text-gray-500">Followings</p>
          <p className="font-semibold">13</p>
        </div>
      </div>
      <div className="flex mt-4 space-x-2 w-full">
        <button className="flex-1 bg-gray-300 text-gray-700 py-2 rounded-lg">Unfollow</button>
        <button className="flex-1 bg-blue-500 text-white py-2 rounded-lg">Message</button>
      </div>
      <div className="mt-4 w-full">
        <input
          type="text"
          placeholder="Send anonymous Tell..."
          className="w-full border border-gray-300 p-2 rounded-lg"
        />
      </div>
    </div>
  );
};

export default ProfileCard;