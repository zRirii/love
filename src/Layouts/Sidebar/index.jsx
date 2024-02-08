import React, { useState } from 'react';
import '../../Assets/Styles/Sidebar.css';
import { Link } from 'react-router-dom';
import "../../App.css";
import DarkMode from "../../Assets/Images/1664849-200.png";
import LightMode from "../../Assets/Images/4759750-200.png"

import LightModeHeart from "../../Assets/Images/h3.png";
import DarkModeHeart from "../../Assets/Images/h5.png";

import LightModeHeart2 from "../../Assets/Images/800px-Eo_circle_purple_heart.svg.png";
import DarkModeHeart2 from "../../Assets/Images/Eo_circle_indigo_heart.svg.png";

import LightModeHeart3 from "../../Assets/Images/Eo_circle_blue_heart.svg.png";
import DarkModeHeart3 from "../../Assets/Images/Eo_circle_cyan_heart.svg.png";

const Sidebar = () => {
  const [theme, setTheme] = useState("dark");

  const handleToggleTheme = () => {
    switch (theme) {
      case "dark":
        setLight();
        setTheme("light");
        break;
      case "light":
        setDark();
        setTheme("dark");
        break;
      default:
        break;
    }
  };

  const setLight = () => {
    // Implement your light theme styles
    document.body.style = "background-color: linear-gradient(318.32deg, #c3d1e4 0%, #dde7f3 55%, #d4e0ed 100%); transition: 0.5s;";
  };

  const setDark = () => {
    // Implement your dark theme styles
    document.body.style = "background-color: #212529; transition: 0.5s;";
  };

  return (
    <div className={`sidebar ${theme}`}>
      <div className="sidebar-top">
        <Link className='list-item' to="Main">
        <i className="logo fab fa-sketch"></i>
        <span className="brand">Love</span>
        </Link>
      </div>
      <div className="sidebar-center">
        <ul className="list">
          <li className={`list-item hover-list-item ${theme === 'default' ? 'active' : ''}`}>
            <Link className="list-item " to="Calendar">
              <img className='img-mode' src={theme === 'dark' ? DarkModeHeart : LightModeHeart} alt="" />
              <i className="list-item-icon fas fa-home"></i>
              <span className="list-item-text">Calendar</span>
            </Link>
          </li>
          <li className="list-item hover-list-item">
            <Link className="list-item" to="Pictures">
              <img className='img-mode' src={theme === 'dark' ? DarkModeHeart2: LightModeHeart2} alt="" />
              <i className="list-item-icon fas fa-search"></i>
              <span className="list-item-text">Pictures</span>
            </Link>
          </li>
          <li className="list-item hover-list-item">
            <Link className="list-item" to="Notes">
              <img className='img-mode' src={theme === 'dark' ? DarkModeHeart3 : LightModeHeart3} alt="" />
              <i className="list-item-icon fas fa-stream"></i>
              <span className="list-item-text">Notes</span>
            </Link>
          </li>
        </ul>
      </div>

      {/* Dark/Light Mode Toggle Button */}
      <div className={`theme-container shadow-${theme} change`} onClick={handleToggleTheme}>
      <img className='img-mode' src={theme === 'dark' ? DarkMode : LightMode} alt="" />
      </div>
    </div>
  );
};

export default Sidebar;