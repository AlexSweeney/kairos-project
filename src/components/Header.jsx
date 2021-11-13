import React, { useState } from 'react';
import logo from './../imgs/logo-icon.png';  
import backgroundImage from './../imgs/background-image.jpg';
import {
  headerLeftStyle, 
  logoStyle, 
  homeIconStyle, 
  headerRightStyle, 
  optionsBarStyle,
  chevronIconStyle,
  navLinkLeftStyle,
  navLinkRightStyle,
} from './../styles/Header.js'; 
import OptionMenu from './parts/OptionMenu.jsx';
import './../styles/Header.css'; 

export default function Header() { 
  const languageOptions = ['EN', 'KO', 'VN']; 
  const companyOptions = ['Company', 'option-2', 'option-3'];
  const partnerOptions = ['Partner Market Place', 'option-2', 'option-3'];

  /* =========================================== Consts ===================================== */ 
  const [homeIconClass, setHomeIconClass] = useState('');
  const [homeHeadingClass, setHomeHeadingClass] = useState('');
  
  const [isOverHome, setIsOverHome] = useState(false);

  /* =========================================== Event handlers ============================= */ 
  function onOverHome() {
    setIsOverHome(true)
    setHomeIconClass('home-icon-hover')
    setHomeHeadingClass('home-heading-hover')
  }

  function onOutHome() {
    setIsOverHome(false)
    setHomeIconClass('')
    setHomeHeadingClass('')
  }

  function onDownHome() {
    setHomeIconClass('home-icon-down')
    setHomeHeadingClass('home-heading-down')
  }

  function onUpHome() {
    if(isOverHome)  {
      setHomeIconClass('home-icon-hover')
      setHomeHeadingClass('home-heading-hover')
    }  
    if(!isOverHome) {
      setHomeIconClass('')
      setHomeHeadingClass('')
    }
  }
     
  /* =========================================== Output ============================= */ 
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
              <div className={`home-icon ${homeIconClass}`} style={homeIconStyle}></div> 
              <a className={`home-text nav-link nav-link-left ${homeHeadingClass}`} style={navLinkLeftStyle}>Home</a>
            </li>
          </ul>
        </nav> 
      </div>

      <div className="header-right" style={headerRightStyle}>  
        <div className="options-bar" style={optionsBarStyle}>
          <ul className="options-container">
            <OptionMenu options={languageOptions}/>
            <OptionMenu options={companyOptions}/>
            <OptionMenu options={partnerOptions}/>
           {/* <li className="option">
              <h3 className="option-heading" style={optionHeadingStyle}>Company</h3>
              <img className="chevron-icon" style={chevronIconStyle} src={chevron} alt="downward pointing chevron"/>
            </li>
            <li className="option">
              <h3 className="option-heading" style={optionHeadingStyle}>Partner Market Place</h3>
              <img className="chevron-icon" style={chevronIconStyle} src={chevron} alt="downward pointing chevron"/>
            </li>*/}
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

