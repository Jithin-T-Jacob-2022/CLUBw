import React from "react";
import nav_1 from "../assets/nav_1.png";
import nav_2 from "../assets/nav_2.png";

const Navbar = () => {
  return (
    <div className="flex items-center justify-between gap-52 mx-12 pt-3">
      <div className="flex items-center mt-12 pl-8">
        <img src={nav_1} alt="nav_1" className="mb-4" />
        <img src={nav_2} alt="nav_2" className="mb-4" />
      </div>
      <div>
        <ul className="flex items-center pr-9 mt-6 gap-16 text-white font-inter font-semibold text-xl cursor-pointer">
          <li className="my-2 hover:bg-white hover:text-black hover:rounded-10 hover:p-3 hover:ease-in-out duration-150">
            About
          </li>
          <li className="my-2 hover:bg-white hover:text-black hover:rounded-10 hover:p-3 hover:ease-in-out duration-150">
            Membership
          </li>
          <li className="my-2 hover:bg-white hover:text-black hover:rounded-10 hover:p-3 hover:ease-in-out duration-150">
            Tours
          </li>
          <li className="my-2 hover:bg-white hover:text-black hover:rounded-10 hover:p-3 hover:ease-in-out duration-150">
            Contact
          </li>
          <li className="my-2 hover:bg-white hover:text-black hover:rounded-10 hover:p-3 hover:ease-in-out duration-150">
            Blog
          </li>
          <li className="my-2 hover:bg-white hover:text-black hover:rounded-10 hover:p-3 hover:ease-in-out duration-150">
            Major Brands
          </li>
          <button className="bg-buttonBg rounded-10 text-yellow-400 font-inter font-semibold text-lg w-32 h-10 flex-shrink-0 hover:text-yellow-300 hover:px-3 hover:bg-slate-900 hover:duration-150">
            Enquire
          </button>
        </ul>
      </div>
    </div>
  );
};

export default Navbar;
