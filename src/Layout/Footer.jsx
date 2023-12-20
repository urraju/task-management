
import React from "react";
import logo from "../assets/logo/logo.svg";
import {
  FaFacebook,
  FaTwitter,
  FaInstagram,
  FaYoutube,
  FaLinkedin,
} from "react-icons/fa";
const Footer = () => {
  return (
    <div className="w-full mt-20 bg-gradient-to-tr  to-violet-950 from-black ">
      <footer className="footer grid grid-cols-2 md:grid-cols-4 w-9/12 mx-auto text-white p-10  font-philospar">
        <nav>
          <header className="footer-title border-b ">All Course</header>
          <a className="link link-hover">React</a>
          <a className="link link-hover">React Native</a>
          <a className="link link-hover">Python</a>
          <a className="link link-hover">GraphQL</a>
          <a className="link link-hover">Angular</a>
        </nav>
        <nav>
          <header className="footer-title border-b ">Contact</header>
          <a className="link link-hover">About us</a>
          <a className="link link-hover">Contact</a>
          <a className="link link-hover"></a>
          <a className="link link-hover">Get buy</a>
        </nav>
        <nav>
          <header className="footer-title border-b ">Offer</header>
          <a className="link link-hover">Special Day</a>
          <a className="link link-hover">Black Friaday</a>
          <a className="link link-hover">EID Moment</a>
          <a className="link link-hover">16 December</a>

          <div className="grid grid-flow-col gap-4"></div>
        </nav>
        <nav>
          <header className="footer-title flex border-b ">
            Online Buy And Follow Social
          </header>

          <div className="grid text-lg grid-flow-col gap-4">
            <FaFacebook />
            <FaInstagram />
            <FaTwitter />
            <FaLinkedin />
            <FaYoutube />
          </div>
          <div>
            <img className="w-40" src={logo} alt="" />
          </div>
        </nav>
      </footer>
    </div>
  );
};

export default Footer;
