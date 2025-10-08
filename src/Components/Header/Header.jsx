import React, { useContext } from "react";
import { NavLink } from "react-router";
import Logo from "../../assets/logo.png";
import GithubLogo from "../../assets/github.png";
import { SeacrhContext } from "../../Root/Root";

const Header = () => {
  const {setSearch} = useContext(SeacrhContext);
  return (
    <div className="px-4 shadow-sm">
      <div className="navbar container mx-auto">
        <div className="navbar-start">
          <div className="dropdown">
            <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                {" "}
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h8m-8 6h16"
                />{" "}
              </svg>
            </div>
            <ul
              tabIndex={0}
              className="menu menu-sm dropdown-content bg-base-100 rounded-box z-1 mt-3 w-52 p-2 shadow"
            >
              <li>
                <NavLink to={`/`} className={`navLink text-lg font-semibold`}>
                  Home
                </NavLink>
              </li>
              <li>
                <NavLink
                  to={`/apps`}
                  onClick={() => setSearch("")}
                  className={`navLink text-lg font-semibold`}
                >
                  Apps
                </NavLink>
              </li>
              <li>
                <NavLink
                  to={`/installations`}
                  className={`navLink text-lg font-semibold`}
                >
                  Installation
                </NavLink>
              </li>
            </ul>
          </div>
          <NavLink to={`/`} className="flex items-center sm:gap-2 gap-0.5 cursor-pointer">
            <img src={Logo} className="sm:w-15 w-7 sm:h-15 h-7" alt="Logo" />
            <p className="sm:text-2xl text-xl font-bold bg-gradient-to-r from-[#632EE3] to-[#9F62F2] bg-clip-text text-transparent">
              HERO.IO
            </p>
          </NavLink>
        </div>
        <div className="navbar-center hidden lg:flex">
          <ul className="menu menu-horizontal px-1">
            <li>
              <NavLink to={`/`} className={`navLink text-lg font-semibold`}>
                Home
              </NavLink>
            </li>
            <li>
              <NavLink to={`/apps`}
               onClick={()=>setSearch("")} 
               className={`navLink text-lg font-semibold`}>
                Apps
              </NavLink>
            </li>
            <li>
              <NavLink
                to={`/installations`}
                className={`navLink text-lg font-semibold`}
              >
                Installation
              </NavLink>
            </li>
          </ul>
        </div>
        <div className="navbar-end">
          <a href="https://github.com/TanijRoy1" target="_blank" className="flex items-center sm:gap-2 gap-1 cursor-pointer sm:px-4 px-2.5 py-2 text-white font-semibold rounded-lg bg-[linear-gradient(125.07deg,rgba(99,46,227,1),rgba(159,98,242,1)_100%)] hover:opacity-90 transition">
            <img src={GithubLogo} alt="Github" />
            Contribute
          </a>
        </div>
      </div>
    </div>
  );
};

export default Header;
