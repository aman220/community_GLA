import React from 'react';
import './Navbar.css';
import Home from '../../img/home.png'
import Noti from '../../img/noti.png'
import Comment from '../../img/comment.png'
import { UilSetting } from '@iconscout/react-unicons'
import TrendCard from '../TrendCard/TrendCard'
import Logo from '../../img/logo.png'
import {UilSearch} from '@iconscout/react-unicons'

function NavBar() {
  return (
    <nav className="navbar">
      <div className="navbar-container">
      <div className="logo-search-container">
        <div className="logo-container">
          <img className="logo" src={Logo} alt="" />
        </div>
        <div className="Search">
          <input type="text" placeholder="#Search" />
          <div className="s-icon">
            <UilSearch />
          </div>
        </div>
      </div>
      <div className='Sitename'> Accha Sa Name</div>
        <div className="RightSide">
          <div className="navIcons">
            <div className="s-nav-icon active">
              <img src={Home} alt="" />
            </div>
            <div className="s-nav-icon">
              <UilSetting/>
            </div>
            <div className="s-nav-icon">
              <img src={Noti} alt="" />
            </div>
            <div className="s-nav-icon">
              <img src={Comment} alt="" />
            </div>
          </div>
        </div>
        <div className="navbar-icon">
          <i className="fas fa-bars"></i>
        </div>
      </div>
    </nav>
  );
}

export default NavBar;
