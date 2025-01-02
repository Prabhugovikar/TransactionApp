import React, { useState } from "react";
import './sidebar.css'
import { MenuItems } from "./SidebarData";
import { Link, useLocation, useNavigate } from 'react-router-dom';
export default function Sidebar({isOpen,toggleSidebar}) {
    const location = useLocation();
  //   const [isOpen, setIsOpen] = useState(false);

  // const toggleSidebar = () => {
  //   setIsOpen(!isOpen);
  // };
    return (
      <>
      <div className={`sidebar ${isOpen ? "open" : ""}`}>
        <div className="sidebar-header">
          <img src={require("../../Assets/logo.png")} width={23} height={28} alt="Logo" />
          <span>Soar Task</span>
        </div>

        <div className="sideritems-conatiner">
          {MenuItems.map((items, index) => (
            <Link
              key={index}
              to={items.path}
              className={`menu-items ${location.pathname === items.path ? "active" : ""}`}
            >
              <img
                src={location.pathname === items.path ? items.icon : items.inactiveIcon}
                width={25}
                height={25}
                alt={items.title}
              />
              <span
                className={`menu-items-title ${
                  location.pathname === items.path ? "active" : ""
                }`}
              >
                {items.title}
              </span>
            </Link>
          ))}
        </div>
      </div>

      <button className="toggle-button" onClick={toggleSidebar}>
        <img src={isOpen ? require("../../Assets/close.png") : require("../../Assets/toggle.png")} width={14} height={18} />
      </button>

      {/* Overlay for smaller screens */}
      {isOpen && <div className="sidebar-overlay" onClick={toggleSidebar}></div>}
    </>

    )
}
