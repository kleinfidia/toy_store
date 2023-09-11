import React from "react";
import { FaSearch } from "react-icons/fa";
import { MdShoppingCart } from "react-icons/md";
import { Logo } from "../assets/pictures";

const Navbar = () => {
  return (
    <>
      <div className=" justify-between flex w-full h-[5%] ">
        <div className=" w-[10%] h-full mb-2 items-center justify-center  ">
          <img src={Logo} alt="logo" className=" "/>
          <p className=" font-bold ml-1">Glo toys</p>
        </div>
        <div className="flex justify-between m-2 rounded-md border w-[80%] h-3/4 bg-white ">
          <div className="w-[97%] ">
            <input placeholder="Search..." className="w-full h-full border "></input>
          </div>
          <div className=" bg-yellow-300 rounded-r-md items-center justify-center">
            <FaSearch className=" w-9 h-6 mt-2" />
          </div>
        </div>

        <div className=" items-center w-[10%] ">
          <MdShoppingCart className=" w-9 h-9 mt-2" />
        </div>
      </div>
    </>
  );
};

export default Navbar;
