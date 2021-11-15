import React, {useState} from 'react';
import { 
  mainViewRightHeaderStyle,  
  mainViewRightButtonStyle,
} from './../styles/MainView.js';
import { serviceInfoBoxButtonStyle } from './../styles/ServicesView.js';
import useStatus from './../utils/useStatus.jsx';
import './../styles/PrivateFrame.css';

export default function PrivateFrame({setLoggedIn}) { 
	function onLogoutClick() {
		setLoggedIn(false)
	}

	return (
		<div className="private-frame">
      <h3 className="private-frame-header" style={mainViewRightHeaderStyle}>Private Area</h3>
      <div className="logout-button-container">
      	<button onClick={onLogoutClick} className="logout-button" style={mainViewRightButtonStyle}>Log Out</button>
      </div>
    </div>
	)
}