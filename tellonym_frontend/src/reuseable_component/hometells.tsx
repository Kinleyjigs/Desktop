import React from 'react';

const Tell = ({ message, username, timeAgo, avatarUrl, answer }) => {
  return (
    <div className="border-b border-gray-200 py-4 px-2 w-full">
      <div className="flex items-center mb-2">
        <div className="w-12 h-12 bg-gray-200 rounded-full flex-shrink-0 mr-3">
          <img className="w-12 h-12 object-cover rounded-full" src={avatarUrl} alt={`${username}'s avatar`} />
        </div>
        <div>
          <h4 className="text-sm font-semibold">{username}</h4>
          <p className="text-xs text-gray-500">{timeAgo}</p>
        </div>
      </div>
      <p className="text-sm">{message}</p>
      {answer && (
        <div className="border-t border-gray-200 mt-4 pt-4">
          <p className="text-sm font-semibold">Answer:</p>
          <p className="text-sm">{answer}</p>
        </div>
      )}
    </div>
  );
};

export default Tell;
