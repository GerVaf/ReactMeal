import React, { useState } from "react";
import { Link, NavLink, useNavigate } from "react-router-dom";
import { GiFoodTruck } from "../../node_modules/react-icons/gi";

const Navbar = () => {

  const nav = useNavigate()
  const submitHandler =e=>{
    nav("/search/"+item)

  }
  const [item,setItem] = useState("")
  

  return (
    <>
      <div className=" flex text-slate-600 font-bold justify-around items-center h-[50px] shadow-md ">
        <GiFoodTruck className=" text-4xl" />
        <div className=" flex align-middle items-center gap-5 ">
          <NavLink to="/">
            <p className="">Meal</p>
          </NavLink>
          <form onSubmit={submitHandler}>
            <input
              value={item}
              onChange={(e)=>setItem(e.target.value)}
              className=" border-blue-200 border-[3px] p-1 outline-none border-r-4 rounded-md"
              type="text"
            />
          </form>
        </div>
      </div>
    </>
  );
};

export default Navbar;
