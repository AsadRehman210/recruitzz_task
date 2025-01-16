import React, { useState } from "react";
import logo from "../../assets/images/logo.svg";
import search from "../../assets/images/search.svg";
import dropdown from "../../assets/images/dropdown.svg";
import profile from "../../assets/images/profile.svg";
import bell from "../../assets/images/bell.svg";

const Header = ({ toggleSidebar }) => {
  const [dropdownOpen, setDropdownOpen] = useState(false);

  return (
    <header className="flex flex-col gap-2">
      <div className="bg-[#F9F9FB] flex gap-4 w-full h-[4.75rem] flex items-center justify-between px-4 lg:px-8">
        {/* Logo */}
        <div className="text-xl font-bold text-black w-[7rem] h-[1.1rem] sm:w-[9.375rem] sm:h-[1.438rem]">
          <img src={logo} alt="logo" className="w-full h-full" />
        </div>

        {/* Search Bar */}
        <div className="relative hidden md:block w-full max-w-[20rem] lg:max-w-[28.75rem]">
          <img
            src={search}
            alt="search"
            className="absolute top-4 left-4 text-[#AEB2BF]"
          />
          <input
            type="text"
            placeholder="Search"
            className="w-full border border-[#DADAFC] rounded-lg pl-10 pr-4 py-3.5 bg-[#F9F9FB] text-[#8F95A9] text-sm font-normal focus:outline-none focus:border-[#6968EC]"
          />
        </div>

        <div className="flex items-center space-x-4">
          <div className="text-[#6968EC] w-[16px] h-[18px] relative">
            <span className="absolute -top-[1px] right-0 bg-red-500 text-white text-xs rounded-full w-2 h-2"></span>
            <img src={bell} alt="bell" className="w-full h-full" />
          </div>

          {/* Profile Section */}
          <div className="flex items-center space-x-2 relative">
            <div className="w-[2rem] h-[2rem] rounded-full">
              <img src={profile} alt="Profile" className="w-full h-full" />
            </div>
            <div className="hidden sm:block">
              <p className="text-sm font-normal text-[#444753]">Tim Bouwman</p>
              <p className="text-[#8F95A9] text-[0.688rem] font-medium">
                Aēstec Amsterdam
              </p>
            </div>
            <button
              onClick={() => setDropdownOpen(!dropdownOpen)}
              className="relative focus:outline-none w-[10px] h-[5px] text-[#AEB2BF]"
            >
              <img src={dropdown} alt="dropdown" className="w-full h-full" />
            </button>

            {/* Dropdown Menu */}
            {dropdownOpen && (
              <div className="absolute right-0 top-[3.35rem] w-40 bg-white border rounded shadow-lg z-10">
                <ul>
                  <li className="px-4 py-2 hover:bg-[#F9F9FB] cursor-pointer">
                    Profile
                  </li>
                  <li className="px-4 py-2 hover:bg-[#F9F9FB] cursor-pointer">
                    Settings
                  </li>
                  <li className="px-4 py-2 hover:bg-[#F9F9FB] cursor-pointer">
                    Logout
                  </li>
                </ul>
              </div>
            )}
          </div>
        </div>
      </div>

      {/* Menu Icon Below Header */}
      <div className="w-full px-4 lg:hidden mb-2">
        <button
          className="w-12 h-12 mt-2 rounded-full bg-[#6968EC] text-white flex justify-center items-center text-xl shadow-md"
          onClick={toggleSidebar}
        >
          <i className="fa-solid fa-bars"></i>
        </button>
      </div>
    </header>
  );
};

export default Header;
