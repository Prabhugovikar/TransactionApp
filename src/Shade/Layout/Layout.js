import React, { useState } from 'react'
import './layout.css'
import Sidebar from '../Sidebar/Sidebar'
import Navbar from '../Navbar/Navbar'
import { Outlet } from 'react-router-dom';
export default function Layout() {
    const [isSidebarOpen, setIsSidebarOpen] = useState(false);

    const toggleSidebar = () => {
        setIsSidebarOpen(!isSidebarOpen);
    };

    return (
        <div className='layout'>
            <Sidebar isOpen={isSidebarOpen} toggleSidebar={toggleSidebar} />
            <div
                className={`layout-navbar-content ${isSidebarOpen ? "sidebar-open" : "" }`}
            >
                <div className='layout-navbar'>
                    <Navbar />
                </div>
                <div className='layout-content'>
                    <div className='layout-conatnet-wrapper'>
                        <Outlet />
                    </div>
                </div>
            </div>
        </div>
    )
}
