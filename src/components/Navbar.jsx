import React, { useState, useContext } from "react";
import { Link } from "react-router-dom";
import { AuthContext } from "../context/AuthContext"; // Import AuthContext

const Navbar = ({ onSearch }) => {
  const [searchTerm, setSearchTerm] = useState("");
  const { user } = useContext(AuthContext); // Access user from context

  const handleSearch = (e) => {
    e.preventDefault();
    onSearch(searchTerm);
  };

  return (
    <nav className="bg-gray-800 p-4 fixed w-full top-0 z-50 shadow-lg">
      <div className="container mx-auto flex justify-between items-center">
        {/* Left Section: Logo */}
        <Link to="/" className="text-white font-bold text-xl">
          Pintrast
        </Link>

        {/* Middle Section: Navigation Links and Search Bar */}
        <div className="flex items-center space-x-4">
          <Link to="/Home" className="text-white">
            Home
          </Link>
          <Link to="/explore" className="text-white">
            Explore
          </Link>
          <Link to="/create" className="text-white">
            Create
          </Link>

          {/* Search Bar */}
          <form onSubmit={handleSearch} className="flex">
            <input
              type="text"
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              placeholder="Search..."
              className="px-4 py-2 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
            <button
              type="submit"
              className="ml-2 px-4 py-2 bg-blue-500 text-white rounded-md"
            >
              Search
            </button>
          </form>
        </div>

        {/* Right Section: Profile with Greeting and Image */}
        <div className="flex items-center space-x-4">
          {/* Greeting */}
          <span className="text-white">Hi, {user?.username || "Guest"}</span>
          
          {/* Profile Image */}
          <Link to="/profile">
            <img
              src={user?.profileImage || "https://via.placeholder.com/40"}
              alt="Profile"
              className="w-10 h-10 rounded-full object-cover"
            />
          </Link>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
