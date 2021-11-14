import React, {useState} from 'react';
import { 
  mainViewLeftHeaderStyle,  
} from './../styles/MainView.js';
import { serviceInfoBoxButtonStyle } from './../styles/ServicesView.js';
import useStatus from './../components/useStatus.jsx';
import './../styles/PrivateFrame.css';

export default function PrivateFrame({setLoggedIn}) { 
	function onLogoutClick() {
		setLoggedIn(false)
	}

	return (
		<div className="private-frame">
      <h3 className="private-frame-header" style={mainViewLeftHeaderStyle}>Private Area</h3>
      <div className="logout-button-container">
      	<button onClick={onLogoutClick} className="logout-button" style={serviceInfoBoxButtonStyle}>Log Out</button>
      </div> 
    </div>
	)
}