import React from 'react';
import Tell from "../../reuseable_component/hometells"; // Import the Tell component


// pages/index.tsx

const HomePage = () => {
  return (
    
    <div className="flex justify-center items-start h-screen bg-gray-100">
      <main className="flex flex-col items-center justify-start h-full max-w-md w-full p-4 border border-gray-300 bg-white shadow-md rounded-lg">
        <div className="w-full flex justify-center border-b border-gray-300 py-2">
          <h1 className="m-0">tellonym</h1>
        </div>

        <Tell
        message="This is a sample message."
        username="JohnDoe"
        timeAgo="2 hours ago"
        avatarUrl="/path/to/avatar.jpg"
      />
      </main>
    </div>
  );
};

export default HomePage;
