import React, {useState} from 'react';
import {
  mainViewLeftStyle, 
  mainViewLeftHeaderStyle,
  mainViewRightStyle,   
  mainViewInfoTextStyle,
} from './../styles/MainView.js';
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
      	<button onClick={onLogoutClick}>Log Out</button>
      </div> 
    </div>
	)
}