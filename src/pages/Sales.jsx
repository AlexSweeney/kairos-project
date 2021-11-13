import React, { useState, useEffect } from 'react';
import './../styles/MainView.css';
import {
  mainViewLeftStyle, 
  mainViewLeftHeaderStyle,
  mainViewRightStyle,   
} from './../styles/MainView.js';

export default function Sales() {
	return (
		<section className="main-view"> 
      <div className="main-view-left" style={mainViewLeftStyle}>   
        <h2 className="main-view-left-header" style={mainViewLeftHeaderStyle}>Sales</h2>
      </div>
     
      <div className="main-view-right" style={mainViewRightStyle}> 
      </div>
    </section>  
	)
}