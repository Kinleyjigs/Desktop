// import React from 'react';
// import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";

// // Reply component for displaying individual tells
// // const Reply = ({ message, username, timeAgo, avatarUrl }) => {
// //   return (
// //     <div className="border-b border-gray-200 py-4 px-2 w-full">
// //       <div className="flex items-center mb-2">
// //         <Avatar className="mr-3">
// //           <AvatarImage src={avatarUrl || "/default-avatar.png"} alt={username || "Anonymous"} />
// //           <AvatarFallback>{username? username[0] : "?"}</AvatarFallback>
// //         </Avatar>
// //         <div>
// //           <h4 className="text-sm font-semibold">{username}</h4>
// //           <p className="text-xs text-gray-500">{timeAgo}</p>
// //         </div>
// //       </div>
// //       <p className="text-sm">{message}</p>
// //     </div>
// //   );
// // };

// const HomePage = () => {
//     const tells = [
 

//   return (
//     <div className="flex justify-center items-start h-screen bg-gray-100">
//       <main className="flex flex-col items-center justify-start h-full max-w-md w-full p-4 border border-gray-300 bg-white shadow-md rounded-lg">
//         <div className="w-full flex justify-center border-b border-gray-300 py-2">
//           <h1 className="m-0">Tellonym</h1>
//         </div>
//         {/* <div className="w-full">
//           {tells.map((tell, index) => (
//             // <Reply 
//             //   key={index}
//             //   {...tell}
//             // />
//           ))}
//         </div> */}
//       </main>
//     </div>
//   );
// };

// export default HomePage;

import React from 'react';
import TellonymHeader from "../../reuseable_component/homepageheader";

const HomePage = () => {
  return (
    <div>
      <TellonymHeader />
      
      {/* Other content of your main page */}
    </div>
  );
};

export default HomePage;
