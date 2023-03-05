import React from 'react'
import Logo from '../../img/logo.png'
import {UilSearch} from '@iconscout/react-unicons'
import './LogoSearch.css'

const LogoSearch = () => {
    return (
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
    );
  };
  

export default LogoSearch
