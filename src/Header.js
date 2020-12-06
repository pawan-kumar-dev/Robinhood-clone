import React from "react";
import logo from "./assets/logo.png";
import SearchIcon from "@material-ui/icons/Search";
const Header = () => {
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
                    <div className="flex w-11/12 items-center border-2 mr-2 rounded-md border-border ">
                         <SearchIcon color="inherit" />
                         <input
                              type="text"
                              className=" focus:outline-none p-2 flex-1 bg-transparent border-none "
                              placeholder="Search"
                         />
                    </div>
                    <div className="flex justify-between col-span-2 items-center">
                         <a
                              href="#free"
                              className="hover:text-robin font-bold "
                         >
                              Free Stocks
                         </a>
                         <a
                              href="#port"
                              className="hover:text-robin font-bold "
                         >
                              Portfolio
                         </a>
                         <a
                              href="#cash"
                              className="hover:text-robin font-bold "
                         >
                              Cash
                         </a>
                         <a href="#msg" className="hover:text-robin font-bold ">
                              Messages
                         </a>
                         <a href="#acc" className="hover:text-robin font-bold ">
                              Account
                         </a>
                    </div>
               </div>
          </div>
     );
};

export default Header;
