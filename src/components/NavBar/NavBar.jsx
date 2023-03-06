import React, { useState } from 'react';
import './Navbar.css';
import Home from '../../img/home.png'
import Noti from '../../img/noti.png'
import Comment from '../../img/comment.png'
import { UilSetting } from '@iconscout/react-unicons'
import Profile from "../../img/profileImg.jpg";
import Logo from '../../img/logo.png'
import { UilSearch } from '@iconscout/react-unicons'
import Edit from '../../img/edit.png'
import Logout from '../../img/log-out.png'
import Question from '../../img/question.png'
import Setting from '../../img/settings.png'
import User from '../../img/user.png'

function NavBar() {
  const [open, setOpen] = useState(false);
  return (
    <nav className="navbar">
      {/* navbar for desktop view */}
      <div className="desktop-view">
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
                <UilSetting />
              </div>
              <div className="s-nav-icon">
                <img src={Noti} alt="" />
              </div>
              <div className="s-nav-icon">
                <img src={Comment} alt="" />
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* navbar container for mobile */}
      <div className="mobile-view">
        <div className="mobile-container">
          <div className="logo-container">
            <img className="logo" src={Logo} alt="" />
          </div>
        </div>
        <div className='Sitename-mobile'> Accha Sa Name</div>
        <div className="mobile-nav-icons">
          <div className="s-nav-icon">
            <img src={Comment} alt="" />
          </div>
          <div className="s-nav-icon">
            <img src={Noti} alt="" />
          </div>
          <div className="s-nav-icon" onClick={() => { setOpen(!open) }}>
            <img src={Profile} alt="" className='profile-icon' />
          </div>
          <div className={`dropdown-menu ${open ? 'active' : 'inactive'}`}>
            <div className="dropdown-content">
              <h3>The Garvit<br /><span>Software Developer</span></h3>
              <ul>
                <DropdownItem img={User} text={"My profile"} />
                <DropdownItem img={Edit} text={"Edit profile"} />
                <DropdownItem img={Question} text={"Help"} />
                <DropdownItem img={Setting} text={"Settings"} />
                <DropdownItem img={Logout} text={"Logout"} />
              </ul>
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
}

function DropdownItem(props) {
  return (
    <li className='dropdownItem'>
      <img src={props.img}></img>
      <a> {props.text} </a>
    </li>
  );
}

export default NavBar;
