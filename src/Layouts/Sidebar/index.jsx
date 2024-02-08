import React, { useState } from 'react';
import '../../Assets/Styles/Sidebar.css'; 
import { Link } from 'react-router-dom';
import "../../App.css";

const Sidebar = () => {
  const [theme, setTheme] = useState('default');

  const handleThemeChange = (selectedTheme) => {
    setTheme(selectedTheme);
  };

  return (
    <div className={`sidebar ${theme}`}>
      <div className="sidebar-top">
        <i className="logo fab fa-sketch"></i>
        <span className="brand">Love</span>
      </div>
      <div className="sidebar-center">
        <ul className="list">
        <li className={`list-item hover-list-item ${theme === 'default' ? 'active' : ''}`}>
            <Link className="list-item " to="Main">
              <i className="list-item-icon fas fa-home"></i>
              <span className="list-item-text">Overview</span>
            </Link>
          </li>
          <li className="list-item hover-list-item">
            <Link className="list-item" to="ToDo">
              <i className="list-item-icon fas fa-search"></i>
              <span className="list-item-text">Tasks</span>
            </Link>
            
          </li>
          <li className="list-item hover-list-item">
            <Link className="list-item" to="Notes">
              <i className="list-item-icon fas fa-stream"></i>
              <span className="list-item-text">Notes</span>
            </Link>
          </li>

        </ul>
        
      </div>

      <div className="sidebar-bottom">
      <button className="color-box dark" onClick={() => handleThemeChange('default')}>
      
      </button>
      <button className="color-box night" onClick={() => handleThemeChange('night')}>
       
      </button>
      <button className="color-box light" onClick={() => handleThemeChange('light')}>
      
      </button>
      </div>


    </div>
  );
};

export default Sidebar;