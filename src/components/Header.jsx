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
} from './../styles/header.js'; 
import './../styles/header.css'; 

export default function Header({leftWidth = '36.5%', height='100px'}) { 
  headerLeftStyle.width = leftWidth;

  return (
    <header className="header" style={{height: height}}>
      {/* ========================= Header Left ========================= */}
      <div className="header-left" style={headerLeftStyle}>
        <img className="logo" style={logoStyle} src={logo} alt="daoukiwoom logo"/>

        {/* ======================= Nav Left ========================== */}
        <nav className="nav-left">
          <ul>
            <li className="home-container">
              <img className="home-icon" style={homeIconStyle} src={home} alt="home icon"/>
              <a className="home-text nav-link nav-link-left" style={navLinkLeftStyle}>Home</a>
            </li>
          </ul>
        </nav> 
      </div>

      {/* ========================= Header Right ========================= */}
      <div className="header-right" style={headerRightStyle}>

        {/* ======================= Options Bar ========================== */}
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

        {/* ======================= Nav Right ========================== */}
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

