import React from "react";
import { RiCustomerService2Line } from "react-icons/ri";
import { Link } from "react-router-dom";
import { useAuth } from "../Plans/Auth/auth";
import "./Navbar.css";
import logo from "../../image/images/logo.png"; // Import the logo image

const Navbar = () => {
  const { user, logout } = useAuth(); // Destructure user and logout from useAuth hook

  const handleLogout = () => {
    logout();
  };

  return (
    <div className="navbar shadow-md w-full fixed top-0 left-0 z-50">
      <nav className="flex justify-between items-center">
        {/* Logo and Title */}
        <div className="flex items-center space-x-4">
          <img src={logo} alt="Logo" className="logo" />
          <h1 className="title">Eternity Cover</h1>
        </div>

        <ul className="hidden lg:flex items-center space-x-6">
          <li>
            <Link className="nav-link text-sm font-bold" to="/">
              Home
            </Link>
            </li>
            <li>
            <Link className="nav-link text-sm font-bold" to="/renew">
              Renew
            </Link>
          </li>
          <li>
            <Link className="nav-link text-sm font-bold" to="/claims">
              Claims
            </Link>
          </li>
          <li>
            <Link className="nav-link text-sm font-bold" to="/car-insurance">
              Car
            </Link>
          </li>
          <li>
            <Link className="nav-link text-sm font-bold" to="/house">
              House
            </Link>
          </li>
          <li>
            <Link className="nav-link text-sm font-bold" to="/calculation">
              Calculation
            </Link>
          </li>
          <li>
            <Link className="nav-link text-sm font-bold" to="/about">
              About Us
            </Link>
          </li>
          <li>
            <Link className="nav-link text-sm font-bold" to="/chatbot">
              AI help??
            </Link>
          </li>
          <li>
            <Link className="nav-link text-sm font-bold" to="/login">
              Logout
            </Link>
          </li>
        </ul>
        <div className="flex items-center space-x-4">
          <a
            href="tel:+91 9442942775"
            className="call-button text-white font-medium rounded-lg text-sm px-4 py-2 text-center flex items-center"
          >
            <RiCustomerService2Line className="mr-1" />
            <span>Chat Us</span>
          </a>
          {user ? (
            <button
              className="logout-button text-white font-medium rounded-lg text-sm px-4 py-2 text-center flex items-center"
              onClick={handleLogout}
            >
              Log Out
            </button>
          ) : (
            <Link className="nav-link text-sm font-bold" to="/login">
              Login
            </Link>
          )}
        </div>
      </nav>
    </div>
  );
};

export default Navbar;
