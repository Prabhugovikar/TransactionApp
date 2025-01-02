import React from 'react'
import './Navbar.css'
import {useLocation,} from 'react-router-dom';
export default function Navbar() {
  const location = useLocation();
  return (
    <div className='navbar'>
      <div className='navbar-left'>
        <span>{location.pathname == '/' ? 'Overview' : location.pathname}</span>
      </div>
      <div className='navbar-right'>
        <div className='navbar-profile'>
          <img className='navbar-profileImg' src={require("../../Assets/profileImg.png")} />
        </div>
      </div>

    </div>
  )
}
