import React, { useState } from 'react';
import { Link } from 'react-router-dom';
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
              <Link to="/" className={`home-text nav-link nav-link-left ${homeHeadingClass}`} style={navLinkLeftStyle}>Home</Link>
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
          </ul> 
        </div> 
        <nav className="nav-right-container">
          <ul className="nav-right">
            <li><Link to="/auto_home" className="nav-link nav-link-right" style={navLinkRightStyle}>Auto Homepage</Link></li>
            <li><Link to="/sales" className="nav-link nav-link-right" id="sales-link" style={navLinkRightStyle}>Sales</Link></li>
            <li><Link to="/crm" className="nav-link nav-link-right" style={navLinkRightStyle}>CRM</Link></li>
            <li><Link to="/electronic_office" className="nav-link nav-link-right" style={navLinkRightStyle}>Electronic office</Link></li>
            <li><Link to="/cloud_erp" className="nav-link nav-link-right" style={navLinkRightStyle}>Cloud ERP</Link></li>
            <li><Link to="/ssl" className="nav-link nav-link-right" style={navLinkRightStyle}>SSL</Link></li> 
          </ul>
        </nav>
      </div> 
    </header>
  )
}

