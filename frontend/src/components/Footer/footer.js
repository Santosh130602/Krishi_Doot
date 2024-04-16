import React from "react";
import "./footer.css";
import { useNavigate } from "react-router-dom";
import logo from "../img/logo-krishiDoot.png";
import Vector from "../img/Vector.png";
import Vector1 from "../img/Vector1.png";
import Vector2 from "../img/Vector2.png";
import Vector4 from "../img/linkedin02.png";


const Footer = () => {
  const navigate = useNavigate();
  return (
    <div className="bg-[#213c96] inPhone py-20">
      <div className="flex justify-center items-center">
        <div className="flex-1 border-r-2 border-black-600">
          <div
            className="flex justify-center items-center mx-8 cursor-pointer"
            onClick={() => navigate("/")} >
            <img src={logo} className="footerLogo" alt="" />
            <div className="ml-4">
              <h3 className="text-2xl text-white font-bold mt-4">KRISHI DOOT</h3>
              <p className="text-md font-normal text-white mt-2">
                {/* WeAreFarmerVoice */}
                Farmers We Are With You
              </p>
            </div>
          </div>
        </div>
        
        
              
        <div className="flex-1 px-16 border-r-2 border-black-600">
          <h1 className="text-xl ml-6 text-white font-bold w-2/3">
            Follow Us On Social Media
          </h1>
          <div className="flex my-5 ml-16 justify-left">
          <a href="https://www.instagram.com/8328sanu/" target="_blank" rel="noopener noreferrer">
            <img
              className="socialIcons mx-3 ml-6 cursor-pointer"
              src={Vector}
              alt="instagram"
            />
            </a>
            <a href="https://www.instagram.com/8328sanu/" target="_blank" rel="noopener noreferrer">

            <img
              className="socialIcons mx-3 ml-6 cursor-pointer"
              src={Vector1}
              alt="facebook"
              />
              </a>
              <a href="https://twitter.com/santosh_1306" target="_blank" rel="noopener noreferrer">
              <img
              className="socialIcons mx-3 ml-6 cursor-pointer"
              src={Vector2}
              alt="twitor"
              />
              </a>
              <a href="https://www.linkedin.com/in/santosh-pal-7b7b95253/" target="_blank" rel="noopener noreferrer">
              <img
              className="socialIcons mx-3 ml-6 w-10 h-10 cursor-pointer"
              src={Vector4}
              alt="linkedIn"
              />
              </a>
          </div> 
        </div>
      </div>
      <div className="subFooter">
      <p className="text-lg ml-6 text-white">
            Developed by : <strong><a href="https://portfolio-gamma-sepia-15.vercel.app/">@ code_roster</a></strong>
          </p>
      </div>
    </div>
  );
};

export default Footer;
