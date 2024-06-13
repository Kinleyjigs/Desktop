import React from 'react';
import reaction from "../reuseable_component/reaction"
import { BiLike } from "react-icons/bi";
import { FaRegLaughSquint } from "react-icons/fa";
import { FaRegSadCry } from "react-icons/fa";
import { TbMessageCircle } from "react-icons/tb";
import { IoShareOutline } from "react-icons/io5";
import { Button } from "@/components/ui/button"


const Tells = ({ message, replies }) => {
    return (
        <div>
      <p>{message}hello</p>
      <p>{replies}hi</p>
      <div className="ml-auto flex items-center space-x-4">
        <div>
          <button  className="focus:outline-none flex space-x-2">
            <BiLike className="text-xl cursor-pointer" />
            <FaRegLaughSquint className="text-xl cursor-pointer" />
            <FaRegSadCry className="text-xl cursor-pointer" />
          </button>
          </div>
          <div className="flex text-xl cursor-pointer">
          <TbMessageCircle />
          <IoShareOutline />
            <Button>Send Tells</Button>
          </div>
        </div>
      </div>
      
    );
  };
  
  export default Tells;
  