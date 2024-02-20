import React from "react";
import { Link, NavLink } from "react-router-dom";
import { socialLinks } from "../constants";

const Navbar = () => {
  return (
    <header className="header">
      <NavLink
        to="/"
        className=" w-10 h-10 rounded-lg bg-white items-center justify-center flex font-bold shadow-md"
      >
        <p className=" blue-gradient_text">ST</p>
      </NavLink>

      <div className="md:absolute md:bottom-2 md:left-4 flex justify-center items-center fixed bottom-0 w-full">
  {socialLinks.map((social) => {
    return (
      <div className="cursor-pointer m-2 w-7 h-7">
        <Link to={social.link} target="_blank"><img src={social.iconUrl} alt={social.name} /></Link>
      </div>
    );
  })}
</div>
      <nav className=" flex text-lg gap-7 font-medium">
        <NavLink
          to="/about"
          className={({ isActive }) =>
            isActive ? "text-blue-500" : " text-black-500"
          }
        >
          About
        </NavLink>
        <NavLink
          to="/projects"
          className={({ isActive }) =>
            isActive ? "text-blue-500" : " text-black-500"
          }
        >
          Projects
        </NavLink>
        <NavLink
          to="/contact"
          className={({ isActive }) =>
            isActive ? "text-blue-500" : " text-black-500"
          }
        >
          Contact
        </NavLink>
      </nav>
    </header>
  );
};

export default Navbar;
