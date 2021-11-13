import React, { useState, useEffect } from 'react';
import './../styles/MainView.css';
import {
  mainViewLeftStyle, 
  mainViewLeftHeaderStyle,
  mainViewRightStyle, 
  mainViewButtonSelectedStyle,
  mainViewButtonDeselectedStyle,
  mainViewInfoNumberStyle,
  mainViewInfoTextStyle, 
} from './../styles/MainView.js';

export default function MainView() {  
  const data = {
    'now-button' : [6, 32, 4],
    'future-button' : [7, 50, 6],
  };

  const [selectedButton, setSelectedButton] = useState('now-button');
  
  const [nowButtonStyle, setNowButtonStyle] = useState(mainViewButtonSelectedStyle);
  const [futureButtonStyle, setFutureButtonStyle] = useState(mainViewButtonDeselectedStyle);

  function onButtonClick(buttonId) {
    setSelectedButton(buttonId)
  }

  function updateButtonStyles(selectedButton) {
    const newNowButtonStyle = (selectedButton === 'now-button') ? mainViewButtonSelectedStyle : mainViewButtonDeselectedStyle;
    const newFutureButtonStyle = (selectedButton === 'future-button') ? mainViewButtonSelectedStyle : mainViewButtonDeselectedStyle;

    setNowButtonStyle(newNowButtonStyle)
    setFutureButtonStyle(newFutureButtonStyle)
  }

  useEffect(() => {
    updateButtonStyles(selectedButton)
  }, [selectedButton])

  return (
    <>
      <section className="main-view"> 
        <div className="main-view-left" style={mainViewLeftStyle}>   
          <h2 className="main-view-left-header" style={mainViewLeftHeaderStyle}>Asia IT Market Place</h2>
        </div>
       
        <div className="main-view-right" style={mainViewRightStyle}>
          <div className="main-view-buttons">
            <button className={`main-view-button`}
              style={nowButtonStyle}
              id="now-button"
              onClick={() => onButtonClick('now-button')}>Now</button>
            <button className={`main-view-button`} 
              style={futureButtonStyle}
              id="future-button"
              onClick={() => onButtonClick('future-button')}>Future</button>
          </div> 
           <div className="main-view-info-container">
            <div className="main-view-info">
              <h3 className="main-view-info-number" style={mainViewInfoNumberStyle}>{data[selectedButton][0]}</h3>
              <h3 className="main-view-info-text" style={mainViewInfoTextStyle}>different IT Software Networks</h3>
            </div>
            <div className="main-view-info">
              <h3 className="main-view-info-number" style={mainViewInfoNumberStyle}>{data[selectedButton][1]}</h3>
              <h3 className="main-view-info-text" style={mainViewInfoTextStyle}>partners</h3>
            </div>
            <div className="main-view-info">
              <h3 className="main-view-info-number" style={mainViewInfoNumberStyle}>{data[selectedButton][2]}</h3>
              <h3 className="main-view-info-text" style={mainViewInfoTextStyle}>countries</h3>
            </div>
          </div> 
        </div>
      </section>  
    </>
  )
}