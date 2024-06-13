import React from 'react';
import { GoHome } from "react-icons/go";
import { LuInbox } from "react-icons/lu";
import { BsChatLeftText } from "react-icons/bs";
import { CgProfile } from "react-icons/cg";

const navigation = () => {
    return (
        <div className="flex">
          <GoHome className="flex text-xl cursor-pointer"/>
          <LuInbox className="flex text-xl cursor-pointer"/>
          <BsChatLeftText className="flex text-xl cursor-pointer"/>
          <CgProfile className="flex text-xl cursor-pointer"/>
      </div>
      
    );
  };

  export default navigation;
  