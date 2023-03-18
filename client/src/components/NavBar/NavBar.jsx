import React, { useState, useEffect } from 'react';
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
import { UilTimes } from '@iconscout/react-unicons'
import TrendingToggle from '../../img/trending.png'
import TrendCard from '../TrendCard/TrendCard'
import { Link } from 'react-router-dom'
import { useSelector } from "react-redux";


function NavBar() {

  const [show, setShow] = useState(false);

  const [showNavBar, setShowNavBar] = useState(false);

  const auth = useSelector((state) => state.authReducer.authData);
  const user = auth && auth.user;
  const serverPublic = process.env.REACT_APP_PUBLIC_FOLDER;

  const [open, setOpen] = useState(false);

  useEffect(() => {
    let handler = () => {
      setOpen(false);
    };

    document.addEventListener("mousedown", handler);

    return () => {
      document.removeEventListener("mousedown", handler);
    };
  }, []);
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
              <div className='s-nav-icon active'>
                <Link to='/home' className='navbar-icons'>
                  <img src={Home} alt="" />
                </Link>
              </div>
              <div className='s-nav-icon'>
                <Link to='/company' className='navbar-icons'>
                  <UilSearch/>
                </Link>
              </div>
              <div className='s-nav-icon'>
                <Link to={`/profile/${user?._id}`}>
                  <UilSetting className="navbar-icons" />
                </Link>
              </div>
              <div className="s-nav-icon">
                <img src={Noti} alt="" onClick={() => setShowNavBar(!showNavBar)} />
              </div>
              <div className="s-nav-icon">
                <Link to='/chat' className='navbar-icons'>
                  <img src={Comment} alt="" />
                </Link>
              </div>
            </div>
            {/* notification division */}
            {
              showNavBar && <div className="notification-view">
                <div className='close-btn'>
                  <a href="javascript:;" onClick={() => setShowNavBar(!showNavBar)}><UilTimes /></a>
                  <button href="javascript:;" className='button'>View All</button>
                </div>
                <div className="NotificationDiv">
                  <h6>You have some notification from Gaurav</h6>
                  <h6>hi</h6>
                </div>
              </div>
            }
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
          <div className='s-nav-icon'>
            <Link to='/home' className='navbar-icons'>
              <img src={Home} alt="" />
            </Link>
          </div>
          <div className="s-nav-icon">
            <Link to='/chat' className='navbar-icons'>
              <img src={Comment} alt="" />
            </Link>
          </div>
          <div className="s-nav-icon">
            <Link to='/home' className='navbar-icons'>
              <img src={Noti} alt="" onClick={() => setShowNavBar(!showNavBar)} />
            </Link>
          </div>
          <div className="s-nav-icon" onClick={() => { setOpen(!open) }}>
            <Link to={`/profile/${user?._id}`} className="s-nav-icon">
              {/* <img src={user.profilePicture? serverPublic + user.profilePicture : serverPublic + "defaultProfile.png"} alt="" className='profile-icon' /> */}
              <img src={serverPublic + "defaultProfile.png"} alt="" className='profile-icon' />

            </Link>
          </div>
          {/* <div className={`dropdown-menu ${open ? 'active' : 'inactive'}`}>
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
          </div> */}
        </div>
        {/* trending toggle only for mobile view */}

        <div className="trending-toggle">
          <img src={TrendingToggle} alt="" onClick={() => setShow(!show)} />
        </div>

        {
          show && <div className="trending-mobile-view">
            <div className='close-btn'>
              <a href="javascript:;" onClick={() => setShow(!show)}><UilTimes /></a>
            </div>
            <div className="TrendCardDiv">
              <TrendCard />
            </div>
          </div>
        }

        {/* notification division */}

        {
          showNavBar && <div className="notification-view">
            <div className='close-btn'>
              <a href="javascript:;" onClick={() => setShowNavBar(!showNavBar)}><UilTimes /></a>
              <button href="javascript:;" className='button'>View All</button>
            </div>
            <div className="NotificationDiv">
              <h6>You have some notification from Gaurav</h6>
              <h6>hi</h6>
            </div>
          </div>
        }
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
