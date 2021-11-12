import React from 'react';
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
  return (
    <header className="header">
      <div className="options-bar-background" style={optionsBarStyle}></div> 
      
      <div className="header-left" style={headerLeftStyle}>
        <img className="logo" style={logoStyle} src={logo} alt="daoukiwoom logo"/>

        <nav className="nav-left">
          <ul>
            <li className="home-container">
              <img className="home-icon" style={homeIconStyle} src={home} alt="home icon"/>
              <a className="home-text nav-link nav-link-left" style={navLinkLeftStyle}>Home</a>
            </li>
          </ul>
        </nav> 
      </div>

      <div className="header-right" style={headerRightStyle}>  
        <div className="header-right-content-container">
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

          <nav className="nav-right-container">
            <ul className="nav-right">
              <li><a className="nav-link nav-link-right-first" style={navLinkRightStyle}>Auto Homepage</a></li>
              <li><a className="nav-link nav-link-right" style={navLinkRightStyle}>Sales</a></li>
              <li><a className="nav-link nav-link-right" style={navLinkRightStyle}>CRM</a></li>
              <li><a className="nav-link nav-link-right" style={navLinkRightStyle}>Electronic office</a></li>
              <li><a className="nav-link nav-link-right" style={navLinkRightStyle}>Cloud ERP</a></li>
              <li><a className="nav-link nav-link-right" style={navLinkRightStyle}>SSL</a></li>
            </ul>
          </nav>
        </div>
      </div>
    </header>
  )
}

