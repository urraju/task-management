
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
          <header className="footer-title border-b ">Task</header>
          <a className="link link-hover">React Developer</a>
          <a className="link link-hover">React Native</a>
          <a className="link link-hover">Python Developer</a>
          <a className="link link-hover">Front end Developer</a>
          <a className="link link-hover">Angular developer</a>
        </nav>
        <nav>
          <header className="footer-title border-b ">Contact</header>
          <a className="link link-hover">About us</a>
          <a className="link link-hover">Contact</a>
          <a className="link link-hover"></a>
          <a className="link link-hover">Create Task</a>
        </nav>
        <nav>
          <header className="footer-title border-b ">Make your career</header>
          <p className="text-3xl">Development</p>

          <div className="grid grid-flow-col gap-4"></div>
        </nav>
        <nav>
          <header className="footer-title flex border-b ">
            Online Buy And Follow Social
          </header>

          <div className="grid  grid-flow-col gap-4">
            <a  href=""><FaFacebook className="h-7 w-7  backdrop-blur bg-white/30 rounded-full p-1" /></a>
            <a href=""><FaInstagram className="h-7 w-7  backdrop-blur bg-white/30 rounded-full p-1" /></a>
            <a href=""><FaLinkedin className="h-7 w-7  backdrop-blur bg-white/30 rounded-full p-1" /></a>
            <a href=""><FaYoutube  className="h-7 w-7  backdrop-blur bg-white/30 rounded-full p-1"/></a>
            
          </div>
          <div>
            <img className="w-36" src={logo} alt="" />
          </div>
        </nav>
      </footer>
    </div>
  );
};

export default Footer;
