import React, { useEffect } from "react";
import { NavLink } from "react-router-dom";
import { RxDashboard } from "react-icons/rx";
import { HiOutlineEnvelope } from "react-icons/hi2";
import { BsCalendar4Week } from "react-icons/bs";
import { BiUserPin } from "react-icons/bi";
import { LuLogOut } from "react-icons/lu";
import { IoMdClose } from "react-icons/io";
import { IoSettingsOutline } from "react-icons/io5";

const SideBar = ({ isSidebarOpen, toggleSidebar, setSidebarOpen }) => {

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= 1024 && isSidebarOpen) {
        setSidebarOpen(false); // Ensure sidebar state is consistent
      }
    };

    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, [isSidebarOpen, setSidebarOpen]);
  const handleNavLinkClick = () => {
    if (window.innerWidth < 1024) {
      toggleSidebar();
    }
  };

  return (
    <>
      <div
        className={`bg-[#F9F9FB] min-h-screen lg:min-h-[calc(100vh-4.75rem)] w-24 fixed top-0 left-0 z-50 flex flex-col items-center py-5 transform ${
          isSidebarOpen ? "translate-x-0" : "-translate-x-full"
        } transition-transform duration-300 lg:translate-x-0 lg:relative lg:flex`}
      >
        {/* Close Icon for Mobile */}
        {isSidebarOpen && (
          <button
            className="absolute top-1 right-2 rounded-full text-[#6968EC] lg:hidden"
            onClick={toggleSidebar}
          >
            <IoMdClose className="text-xl" />
          </button>
        )}

        {/* Sidebar Links */}
        <div>
          <NavLink
            to="/"
            className={({ isActive }) =>
              `mb-6 mt-10 lg:mt-0 flex flex-col justify-between items-center ${
                isActive ? "text-[#6968EC]" : "text-[#8F95A9]"
              }`
            }
            onClick={handleNavLinkClick}
          >
            <RxDashboard className="text-xl" />

            <p className="text-[0.563rem] font-medium">Dashboard</p>
          </NavLink>
          <NavLink
            to="/inbox"
            className={({ isActive }) =>
              `relative mb-6 flex flex-col justify-between items-center ${
                isActive ? "text-[#6968EC]" : "text-[#8F95A9]"
              }`
            }
            onClick={handleNavLinkClick}
          >
            <HiOutlineEnvelope className="text-xl" />
            <span className="absolute -top-2 right-2 bg-red-500 text-white text-xs rounded-full px-1">
              2
            </span>
            <p className="text-[0.563rem] font-medium">Inbox</p>
          </NavLink>
          <NavLink
            to="/schedule"
            className={({ isActive }) =>
              `mb-6 flex flex-col justify-between items-center ${
                isActive ? "text-[#6968EC]" : "text-[#8F95A9]"
              }`
            }
            onClick={handleNavLinkClick}
          >
            <BsCalendar4Week className="text-xl" />
            <p className="text-[0.563rem] font-medium">Schedule</p>
          </NavLink>
          <NavLink
            to="/reviews"
            className={({ isActive }) =>
              `relative mb-6 flex flex-col justify-between items-center ${
                isActive ? "text-[#6968EC]" : "text-[#8F95A9]"
              }`
            }
            onClick={handleNavLinkClick}
          >
            <BiUserPin className="text-xl" />
            <span className="absolute -top-2 right-2 bg-red-500 text-white text-xs rounded-full px-1">
              6
            </span>
            <p className="text-[0.563rem] font-medium">Reviews</p>
          </NavLink>
          <NavLink
            to="/settings"
            className={({ isActive }) =>
              `mb-6 flex flex-col justify-between items-center ${
                isActive ? "text-[#6968EC]" : "text-[#8F95A9]"
              }`
            }
            onClick={handleNavLinkClick}
          >
            <IoSettingsOutline className="text-xl" />
            <p className="text-[0.563rem] font-medium">Settings</p>
          </NavLink>
        </div>

        {/* Logout */}
        <div className="mt-auto">
          <NavLink
            to="/logout"
            className={({ isActive }) =>
              `mb-6 flex flex-col justify-between items-center ${
                isActive ? "text-[#6968EC]" : "text-[#8F95A9]"
              }`
            }
            onClick={handleNavLinkClick}
          >
            <LuLogOut className="text-xl" />
            <p className="text-[0.563rem] font-medium">Logout</p>
          </NavLink>
        </div>
      </div>

      {/* Overlay for Mobile */}
      {isSidebarOpen && (
        <div
          className="fixed inset-0 bg-black bg-opacity-50 z-40 lg:hidden"
          onClick={toggleSidebar}
        ></div>
      )}
    </>
  );
};

export default SideBar;
