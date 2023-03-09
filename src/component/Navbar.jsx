import React from "react";
import { Link, NavLink } from "react-router-dom";
import { GiFoodTruck } from "../../node_modules/react-icons/gi";

const Navbar = () => {
  return (
    <>
      <div className=" flex text-slate-600 font-bold justify-around items-center h-[50px] shadow-md ">
        <GiFoodTruck className=" text-4xl" />
        <div className=" flex gap-4 ">
          <NavLink to="/">
            <p>Meal</p>
          </NavLink>
        </div>
      </div>
    </>
  );
};

export default Navbar;
