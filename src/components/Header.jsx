import React, { useState } from 'react';
import logo from './../imgs/logo-icon.png';
import home from './../imgs/home-icon.svg';
import chevron from './../imgs/chevron-icon.svg';
import backgroundImage from './../imgs/background-image.jpg';
import {
  headerLeftStyle, 
  logoStyle, 
  homeIconStyle, 
  headerRightStyle, 
  optionsBarStyle,
  optionHeadingStyle,
  chevronIconStyle,
  navLinkLeftStyle,
  navLinkRightStyle,
} from './../styles/Header.js'; 
import './../styles/Header.css'; 

export default function Header() {   
  const [homeContainerClass, setHomeContainerClass] = useState('');
  const [isOverHome, setIsOverHome] = useState(false);

  function onOverHome() {
    setIsOverHome(true)
    setHomeContainerClass('nav-link-hover')
  }

  function onOutHome() {
    setIsOverHome(false)
    setHomeContainerClass('')
  }

  function onDownHome() {
    setHomeContainerClass('nav-link-down')
  }

  function onUpHome() {
    if(isOverHome)  setHomeContainerClass('nav-link-hover')
    if(!isOverHome) setHomeContainerClass('')
  }

  return (
    <header className="header">  
      <div className="header-left" style={headerLeftStyle}>
        <img className="logo" style={logoStyle} src={logo} alt="daoukiwoom logo"/>
        <nav className="nav-left">
          <ul>
            <li className={`home-container`} 
                onMouseOver={onOverHome} 
                onMouseOut={onOutHome}
                onMouseDown={onDownHome}
                onMouseUp={onUpHome}>
              <img className={`home-icon ${homeContainerClass}`} style={homeIconStyle} src={home} alt="home icon"/>
              <a className={`home-text nav-link nav-link-left ${homeContainerClass}`} style={navLinkLeftStyle}>Home</a>
            </li>
          </ul>
        </nav> 
      </div>

      <div className="header-right" style={headerRightStyle}>  
        <div className="options-bar" style={optionsBarStyle}>
          <ul className="options-container">
            <li className="option">
              <h3 className="option-heading" style={optionHeadingStyle}>EN</h3>
              <img className="chevron-icon" style={chevronIconStyle} src={chevron} alt="downward pointing chevron"/>
            </li>
            <li className="option">
              <h3 className="option-heading" style={optionHeadingStyle}>Company</h3>
              <img className="chevron-icon" style={chevronIconStyle} src={chevron} alt="downward pointing chevron"/>
            </li>
            <li className="option">
              <h3 className="option-heading" style={optionHeadingStyle}>Partner Market Place</h3>
              <img className="chevron-icon" style={chevronIconStyle} src={chevron} alt="downward pointing chevron"/>
            </li>
          </ul> 
        </div> 
        <nav className="nav-right-container">
          <ul className="nav-right">
            <li><a className="nav-link nav-link-right" style={navLinkRightStyle}>Auto Homepage</a></li>
            <li><a className="nav-link nav-link-right" style={navLinkRightStyle}>Sales</a></li>
            <li><a className="nav-link nav-link-right" style={navLinkRightStyle}>CRM</a></li>
            <li><a className="nav-link nav-link-right" style={navLinkRightStyle}>Electronic office</a></li>
            <li><a className="nav-link nav-link-right" style={navLinkRightStyle}>Cloud ERP</a></li>
            <li><a className="nav-link nav-link-right" style={navLinkRightStyle}>SSL</a></li>
          </ul>
        </nav>
      </div>
    </header>
  )
}

