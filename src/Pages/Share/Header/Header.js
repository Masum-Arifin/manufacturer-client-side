import { signOut } from "firebase/auth";
import React from "react";
import { useAuthState } from "react-firebase-hooks/auth";
import { Link } from "react-router-dom";
import auth from "../../../firebase.init";
import logo from "../../../images/logo.png";
import randomUser from "../../../images/favicon.png";

const Header = () => {
  // color gradient bg-gradient-to-r from-secondary to-primary
  const [user] = useAuthState(auth);

  const logout = () => {
    signOut(auth);
    localStorage.removeItem("accessToken");
  };
  return (
    <div className="navbar bg-gray-100 shadow-2xl">
      <div className="navbar-start">
        <div className="dropdown">
          <label tabIndex="0" className="btn btn-ghost lg:hidden">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h8m-8 6h16"
              />
            </svg>
          </label>

          <ul
            tabIndex="0"
            className="menu menu-compact dropdown-content mt-2 p-2 shadow bg-base-100 rounded-box w-52 font-extrabold"
          >
            <li>
              <Link to="home">HOME</Link>
            </li>
            <li>
              <Link to="/portfolio">PORTFOLIO</Link>
            </li>
            <li>
              <Link to="/blog">BLOGS</Link>
            </li>
            {user && (
              <li>
                <Link to="/dashboard">Dashboard</Link>
              </li>
            )}
          </ul>
        </div>
        <Link to="/">
          <img className="w-40" src={logo} alt="" />
        </Link>
      </div>
      <div className="navbar-center hidden lg:flex font-extrabold">
        <ul className="menu menu-horizontal p-0">
          <li>
            <Link to="home">HOME</Link>
          </li>
          <li>
            <Link to="/portfolio">PORTFOLIO</Link>
          </li>
          <li>
            <Link to="/blog">BLOGS</Link>
          </li>
          {user && (
            <li>
              <Link to="/dashboard">DASHBOARD</Link>
            </li>
          )}
        </ul>
      </div>
      <div className="navbar-end">
        <span>
          {user ? (
            <button className="btn btn-outline " onClick={logout}>
              Sign Out
              <img
                className="w-8 ml-1 rounded-full "
                src={
                  user.reloadUserInfo.photoUrl
                    ? user.reloadUserInfo.photoUrl
                    : randomUser
                }
                alt=""
              />
            </button>
          ) : (
            <Link className="btn btn-secondary" to="/login">
              Login
            </Link>
          )}
        </span>
      </div>
    </div>
  );
};

export default Header;
