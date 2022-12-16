import React, { useState } from "react";
import {
  AiOutlineCar,
  AiOutlineClose,
  AiOutlineHome,
  AiOutlineMenu,
  AiOutlineQuestion,
  AiOutlineSearch,
  AiOutlineShoppingCart,
  AiOutlineStar,
  AiOutlineWallet,
  AiOutlineWarning,
} from "react-icons/ai";
import { Link } from "react-router-dom";

function Navbar({ searchTerm, setSearchTerm }) {
  const [nav, setNav] = useState(false);

  return (
    <>
    <div className="max-w-[1640px]  mx-auto items-center p-4 sticky top-0 z-10 bg-white">
      <div className="flex items-center space-x-4 ">
        <div className="cursor-pointer " onClick={() => setNav(true)}>
          <AiOutlineMenu size={30} />
        </div>
        {/* to make mobile friend design */}
        
        <Link to="/">
        <h1 className="text-5px sm:text-3xl lg:text-4xl sm:px-1 md:px-2  p-0">
          Best <span className="font-bold">Eats</span>
        </h1>
        </Link>
        
        <div className="flex bg-gray-200 items-center  rounded-full ">
          <p className="px-2 bg-black rounded-full w-13 sm:w-full md:w-full lg:w-full text-white text-xs sm:text-sm md:text-base lg:text-lg">Delivery</p>
          <p className="px-2 w-12 text-xs sm:text-sm md:text-base lg:text-lg sm:w-full md:w-full lg:w-full">Pickup</p>
        </div>
        <div className="flex flex-1 bg-gray-200 rounded-full px-2 w-[200px] lg:w-[500px] sm:w-[400px] h-10 items-center">
          <AiOutlineSearch size={20}  />
          {/*focus:outline-none --- to get rid of ugly box inside input  */}
          <input
            type="text"
            className="bg-transparent focus:outline-none w-10 sm:w-full md:w-full lg:w-full"
            placeholder="Search foods"
            onChange={(event) => {
              setSearchTerm(event.target.value);
            }}
          />
        </div>
        <button className="bg-black text-white flex rounded-lg sm:px-2 md:px-3 lg:px-4 items-center ">
          <AiOutlineShoppingCart size={20} />
          <h1>cart</h1>
        </button>
      </div>

      {/* burgermenu structure */}

      {/* is nav = active(true) show me black background */}
      <div
        className={
          nav ? "bg-black/80 fixed w-full h-screen z-10 top-0 left-0" : ``
        }
      ></div>

      {/* left-[-100%] makes div invisible */}
      <div
        className={
          nav
            ? "bg-white fixed top-0 left-0 w-[300px] h-screen z-10 "
            : "bg-white fixed top-0 left-[-100%] w-[300px] h-screen z-10 "
        }
      >
        <h2 className="text-2xl p-4">
          Best <span className="font-bold">Eats</span>
        </h2>
        {/* {()=>setNav(!nav)} is the same as  {()=>setNav(false) is the same as : make nav inactive} */}
        <AiOutlineClose
          onClick={() => setNav(!nav)}
          className="right-4 top-4 cursor-pointer absolute duration-300"
          size={30}
        />
        <nav>
          <ul className="flex flex-col p-4 text-gray-800">
            <li className="flex py-2">
              <AiOutlineCar size={25} />
              <h2 className="px-4">Orders</h2>
            </li>
            <li className="flex py-2">
              <AiOutlineStar size={25} />
              <h2 className="px-4">Favorites</h2>
            </li>
            <li className="flex py-2">
              <AiOutlineWallet size={25} />
              <h2 className="px-4">Wallet</h2>
            </li>
            <li className="flex py-2">
              <AiOutlineQuestion size={25} />
              <h2 className="px-4">Help</h2>
            </li>
            <li className="flex py-2">
              <AiOutlineWarning size={25} />
              <h2 className="px-4">Promotions</h2>
            </li>
            <li className="flex py-2">
              <AiOutlineStar size={25} />
              <h2 className="px-4">Best One</h2>
            </li>
            <li className="flex py-2">
              <AiOutlineHome size={25} />
              <h2 className="px-4">Invite Friends</h2>
            </li>
          </ul>
        </nav>
      </div>
    </div>
    </>
  );
}

export default Navbar;
