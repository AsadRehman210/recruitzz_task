import React, { useState } from "react";
import { Routes, Route } from "react-router-dom";
import Header from "./components/common/Header";
import SideBar from "./components/common/SideBar";
import Settings from "./pages/Settings";
import Dashboard from "./pages/Dashboard";
import Inbox from "./pages/Inbox";
import Reviews from "./pages/Reviews";
import Schedule from "./pages/Schedule";

function App() {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  const toggleSidebar = () => {
    setIsSidebarOpen(!isSidebarOpen);
  };

  return (
    <div className="bg-[#F9F9FB] font-['Montserrat',serif]">
      <Header toggleSidebar={toggleSidebar} />
      <div className="flex">
        <SideBar
          isSidebarOpen={isSidebarOpen}
          toggleSidebar={toggleSidebar}
          setSidebarOpen={setIsSidebarOpen}
        />
        <div className="flex-1 overflow-auto">
          <Routes>
            <Route path="/" element={<Dashboard />} />
            <Route path="/inbox" element={<Inbox />} />
            <Route path="/reviews" element={<Reviews />} />
            <Route path="/schedule" element={<Schedule />} />
            <Route path="/" element={<Dashboard />} />
            <Route path="/settings" element={<Settings />} />
            {/* Add other routes as needed */}
          </Routes>
        </div>
      </div>
    </div>
  );
}

export default App;
