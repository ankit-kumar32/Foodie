import { useState } from "react";
import { LOGO_URL } from "../utils/constants";
import { Link } from "react-router-dom";
import useOnlineStatus from "../utils/useOnlineStatus";
import { useSelector } from "react-redux";
const Header=()=>{
    const [btnName,setBtName]=useState("Login");

   const OnlineStatus=useOnlineStatus();

  const cartItems=useSelector((store)=>store.cart.items)
   console.log(cartItems);
    return (
        <div className="flex justify-between bg-pink-100 shadow-lg m-2">
          <div className="logo-containers">
            <img className="w-56" src={LOGO_URL}/>
          </div>
          <div className="flex items-center">
      
              <ul className="flex p-4 m-4">
                <li className=" px-4 py-2 m-2 font-bold text-lg rounded-lg"> OnlineStatus:{OnlineStatus?"🟢":"🔴"} </li>

                <li className=" bg-gray-400 px-4 py-2 m-2 font-bold text-lg rounded-lg">
                  <Link to={"/"}>Home</Link> 
                </li>
                <li className=" bg-gray-400 px-4 py-2 m-2 font-bold text-lg rounded-lg">
                  <Link to={"/about"}>About Us</Link>
                </li>
                <li className=" bg-gray-400 px-4 py-2 m-2 font-bold text-lg rounded-lg">
                  <Link to={"/contact"}> Contact Us</Link>
                  </li>
                <li className=" bg-gray-400 px-4 py-2 m-2 font-bold text-lg rounded-lg">
                 <Link to={"/cart"}>  Cart-({cartItems.length} items)</Link>
                 </li>
                <button className=" bg-gray-400 px-4 m-2 py-2 font-bold text-lg rounded-lg" 
                onClick={()=>{btnName==="Login"
                ?setBtName("Logout")
                :setBtName("Login");
                }}>
                  {btnName}</button>
              </ul>
          </div>
        </div>
    );
  }
  export default Header;