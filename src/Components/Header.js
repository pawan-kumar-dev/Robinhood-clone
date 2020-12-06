import React from "react";
import logo from "../assets/logo.png";
import SearchIcon from "@material-ui/icons/Search";
import { IconButton } from "@material-ui/core";
import MenuIcon from "@material-ui/icons/Menu";
const Header = ({ onOpen }) => {
     return (
          <div className="flex justify-between items-center p-4">
               <a href="/">
                    <img
                         src={logo}
                         alt="logo"
                         className="w-28 object-contain cursor-pointer "
                    />
               </a>

               <div className="flex-1 grid justify-between grid-cols-3 ">
                    <div className="flex w-11/12 md:w-full md:col-span-2 items-center border-2 mr-2 rounded-md border-border ">
                         <SearchIcon color="inherit" />
                         <input
                              type="text"
                              className=" focus:outline-none p-2 flex-1 bg-transparent border-none "
                              placeholder="Search"
                         />
                    </div>
                    <div className="flex justify-between md:hidden  col-span-2  items-center">
                         <span
                              href="#free"
                              className="hover:text-robin cursor-pointer font-bold "
                         >
                              Free Stocks
                         </span>
                         <span
                              href="#port"
                              className="hover:text-robin cursor-pointer font-bold "
                         >
                              Portfolio
                         </span>
                         <span
                              href="#cash"
                              className="hover:text-robin cursor-pointer font-bold "
                         >
                              Cash
                         </span>
                         <span
                              href="#msg"
                              className="hover:text-robin cursor-pointer font-bold "
                         >
                              Messages
                         </span>
                         <span
                              href="#acc"
                              className="hover:text-robin cursor-pointer font-bold "
                         >
                              Account
                         </span>
                    </div>
                    <div className="hidden md:block focus:outline-none text-right ">
                         <IconButton color="inherit" onClick={onOpen}>
                              <MenuIcon />
                         </IconButton>
                    </div>
               </div>
          </div>
     );
};

export default Header;
