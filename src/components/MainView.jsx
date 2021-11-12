import React from 'react';
import Header from './Header.jsx';
import './../styles/MainView.css';
import {
  mainViewLeftStyle, 
  mainViewLeftHeaderStyle,
  mainViewRightStyle, 
  mainViewButtonSelectedStyle,
  mainViewButtonDeselectedStyle,
  mainViewInfoNumberStyle,
  mainViewInfoTextStyle,
  alertBarStyle,
  alertBarTextStyle,
  alertBarTextBoldStyle,
} from './../styles/MainView.js';

export default function MainView({leftWidth}) { 
  const thisMainViewLeftStyle = {...mainViewLeftStyle, width : leftWidth};

  return (
    <>
      <section className="main-view-container"> 
        <Header leftWidth={leftWidth}/>

        {/*<section className=""> 
          <div className="main-view-left" style={thisMainViewLeftStyle}>
            <h2 className="main-view-left-header" style={mainViewLeftHeaderStyle}>Asia IT Market Place</h2>
          </div>
 
          <div className="main-view-right" style={mainViewRightStyle}>
            <div className="main-view-buttons">
              <button className="main-view-button main-view-button-selected" style={mainViewButtonSelectedStyle}>Now</button>
              <button className="main-view-button main-view-button-deselected" style={mainViewButtonDeselectedStyle}>Future</button>
            </div> 
            <div className="main-view-info-container">
              <div className="main-view-info">
                <h3 className="main-view-info-number" style={mainViewInfoNumberStyle}>6</h3>
                <h3 className="main-view-info-text" style={mainViewInfoTextStyle}>different IT Software Networks</h3>
              </div>
              <div className="main-view-info">
                <h3 className="main-view-info-number" style={mainViewInfoNumberStyle}>32</h3>
                <h3 className="main-view-info-text" style={mainViewInfoTextStyle}>partners</h3>
              </div>
              <div className="main-view-info">
                <h3 className="main-view-info-number" style={mainViewInfoNumberStyle}>4</h3>
                <h3 className="main-view-info-text" style={mainViewInfoTextStyle}>countries</h3>
              </div>
            </div> 
          </div> 
        </section> */}
        {/*<section className="alert-bar" style={alertBarStyle}>
          <h3 className="alert-bar-heading" style={alertBarTextStyle}>You are now viewing an <em style={alertBarTextBoldStyle}>IT Software</em> that has been verified by <em style={alertBarTextBoldStyle}>over 1 million users.</em></h3>
        </section>*/}
      </section>
    </>
  )
}