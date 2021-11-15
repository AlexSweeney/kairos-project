import React, { useState, useEffect } from 'react';
import useStatus from './../utils/useStatus.jsx';
import LoginFrame from './../pages/LoginFrame.jsx';
import PrivateFrame from './../pages/PrivateFrame.jsx';
import {
  mainViewLeftStyle, 
  mainViewLeftHeaderStyle,
  mainViewRightStyle,   
  mainViewInfoTextStyle,
} from './../styles/MainView.js';
import './../styles/MainView.css';

export default function ElectronicOffice() {
  const {loggedIn, setLoggedIn} = useStatus(); 

  return (
    <section className="main-view"> 
      <div className="main-view-left" style={mainViewLeftStyle}>   
        { loggedIn !== true && <h2 className="main-view-left-header" style={mainViewLeftHeaderStyle}>Electronic Office</h2> }
      </div>
     
      <div className="main-view-right" style={mainViewRightStyle}> 
        { 
          (loggedIn !== true) ?
            <LoginFrame setLoggedIn={setLoggedIn}/>
          : <PrivateFrame setLoggedIn={setLoggedIn}/>
        }
      </div>
    </section>  
  )
}