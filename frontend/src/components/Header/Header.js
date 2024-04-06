import React from "react";
import "./Header.css";
import { useNavigate } from "react-router-dom";
import logo from "../img/logo-krishiDoot.png";

const Header = () => {
  const navigate = useNavigate();

  return (
    <div className="h-10 inPhone my-2">
      <div className="flex content-center">
        <div className="flex items-center cursor-pointer ml-auto lg:ml-16">
          <img
            
            src={logo}
            className="logoWeb"
            onClick={() => navigate("/")}
            alt=""
          />
          <h3 onClick={() => navigate("/")} className="text-md font-bold opacity-[.70]">KRISHI Doot</h3>
        </div>
        <div className="flex-2 w-6/12 mx-auto">
          <ul className="flex mt-4 items-around">
            <li
              className="text-sm cursor-pointer font-semibold text-[#219653] hover:opacity-90 ml-6 mr-1.5 "
              onClick={() => navigate("/crop")}
            >
              Crop 
            </li>
            <li
              onClick={() => navigate("/fertilizer")}
              className="text-sm cursor-pointer font-semibold text-[#219653] hover:opacity-90 ml-6 mr-1.5"
            >
              Fertilizer 
            </li>

            <li
              onClick={() => navigate("/disease")}
              className="text-sm cursor-pointer font-semibold text-[#219653] hover:opacity-90 ml-6 mr-1.5"
            >
              Disease 
            </li>
             <li
              onClick={() => navigate("/disease")}
              className="text-sm cursor-pointer font-semibold text-[#219653] hover:opacity-90 ml-6 mr-1.5"
            >
              Market Price
            </li>
            <li
              onClick={() => navigate("/sms")}
              className="text-sm cursor-pointer font-semibold text-[#219653] hover:opacity-90 ml-6 mr-1.5"
            >
              SMS 
            </li>
            <li
              className="text-sm cursor-pointer font-semibold text-[#219653] hover:opacity-90 ml-6 mr-1.5"
              onClick={() => navigate("/voice")}
            >
              Book Slot
            </li>
            <li
              className="text-sm cursor-pointer font-semibold text-[#219653] hover:opacity-90 ml-6 mr-1.5 "
              onClick={() => navigate("/GovSchem")}
            >
              Government Schemes
             </li> 
             <li
              className="text-sm cursor-pointer font-semibold text-[#219653] hover:opacity-90 ml-6 mr-1.5 "
              onClick={() => navigate("/register")}
            >
              SignUp
             </li> 
             <li
              className="text-sm cursor-pointer font-semibold text-[#219653] hover:opacity-90 ml-6 mr-1.5 "
              onClick={() => navigate("/login")}
            >
              login
             </li> 
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Header;
