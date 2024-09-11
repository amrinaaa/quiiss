import React from 'react';
import { Link, NavLink } from 'react-router-dom';
import logo from '../../assets/logo.png';

const Navbar = () => {
  return (
    <div className="fixed top-0 w-full bg-secondary text-black shadow-md">
      {/* Konten Navbar */}
      <div className="container py-3 sm:py-0">
        <div className="flex items-center justify-between">
          {/* Logo section */}
          <div className="mr-10">
            <Link to="/" onClick={() => window.scrollTo(0, 0)}>
              <img src={logo} alt="Logo" className="h-8" />
            </Link>
          </div>

          {/* Konten Navlinks */}
          <div className="flex-1 flex justify-center">
            <ul className="flex items-center gap-6">
              <li className="py-4">
                <NavLink to="/" onClick={() => window.scrollTo(0, 0)}>
                  Home
                </NavLink>
              </li>
              <li className="py-4">
                <NavLink to="/forstudent" onClick={() => window.scrollTo(0, 0)}>
                  For Student
                </NavLink>
              </li>
              <li className="py-4">
                <NavLink to="/resource" onClick={() => window.scrollTo(0, 0)}>
                  Resource
                </NavLink>
              </li>
              <li className="py-4">
                <NavLink to="/aboutus" onClick={() => window.scrollTo(0, 0)}>
                  About Us
                </NavLink>
              </li>
            </ul>
          </div>

          {/* Tombol Login dan Sign Up */}
          <div className="grid grid-cols-2 gap-4">
            <NavLink to="/login">
              <button className="bg-primary border border-primary text-black py-2 px-4 rounded-full hover:bg-primary hover:text-white transition">
                Login
              </button>
            </NavLink>
            <NavLink to="/registrasi">
              <button className="bg-primary border border-primary text-black py-2 px-4 rounded-full hover:bg-primary hover:text-white transition">
                Sign Up
              </button>
            </NavLink>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
