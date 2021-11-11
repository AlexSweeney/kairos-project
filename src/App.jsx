import React from 'react';
 
import screenIconOne from './imgs/screen-icon-1.svg';
import screenIconTwo from './imgs/screen-icon-2.svg';
import screenIconThree from './imgs/screen-icon-3.svg';
import screenIconFour from './imgs/screen-icon-4.svg';
import screenIconFive from './imgs/screen-icon-5.svg';
import screenIconSix from './imgs/screen-icon-6.svg';

// import Header from './components/Header.jsx';
import MainView from './components/MainView.jsx';

import './styles/reset.css';
import './styles/fonts.css';
import './styles/App.css'; 
 
function App() { 
  

  // ==================== Alert Bar Styles */
  /*const alertBarStyle = {
    background: pinkBackground,
  };

  const alertBarTextStyle = {
    fontFamily: 'Noto Sans, sans-serif',
    fontSize: '24px',
    fontStyle: 'normal',
    fontWeight: '400',
    lineHeight: '33px',
    letterSpacing: '0em',
    textAlign: 'center',
  };

  const alertBarTextBoldStyle = {
    ...alertBarTextStyle,
    fontWeight: '700',
  };*/

  // ==================== Icon View Styles */
  /*const infoBoxHeadingStyle = {
    fontFamily: 'Manrope, sans-serif',
    fontSize: '32px',
    fontStyle: 'normal',
    fontWeight: '700',
    lineHeight: '44px',
    textAlign: 'center',
    color: darkBlueText,
  };

  const infoBoxTextStyle = {
    fontFamily: 'Noto Sans, sans-serif',
    fontSize: '16px',
    fontStyle: 'normal',
    fontWeight: '400',
    lineHeight: '22px',
    textAlign: 'center',
    color: greyText,
  }; 

  const infoBoxButtonStyle = {
    // button 
    borderRadius: '8px',
    padding: '8px',
    background: '#181949',

    // text
    fontFamily: 'Noto Sans, sans-serif',
    fontSize: '16px',
    fontStyle: 'normal',
    fontWeight: '600',
    lineHeight: '16px',
    letterSpacing: '0px',
    textAlign: 'center',
    color: '#FFFFFF',
  }; 

  const screenIconStyle = {
    width: '280px',
    height: '235px',
  }; */
  
  const mainViewLeftWidth = '36.5%';
  const headerHeight = '100px';

  return (
  	<div className="background">
      <div className="container"> 
      	<MainView leftWidth={mainViewLeftWidth} headerHeight={headerHeight}/>
      </div>
    </div>
  );
}

export default App;


       

      {/* ========================== Alert Bar ========================== */}
      {/*<section className="alert-bar" style={alertBarStyle}>
        <h3 className="alert-bar-heading" style={alertBarTextStyle}>You are now viewing an <em style={alertBarTextBoldStyle}>IT Software</em> that has been verified by <em style={alertBarTextBoldStyle}>over 1 million users.</em></h3>
      </section>*/}

      {/* ========================== IT cloud view ====================== */}
      {/*<section className="it-cloud-view white-background">
        <div className="icon-view-title-container">
          <h2>IT CLOUD SEA’S IT SERVICE</h2>
        </div> 
        <div className="icon-view icon-view-wide">
          <img className="screen-icon" src={screenIconOne} alt="computer screen icon"/>
          <div className="info-box">
            <h3 className="info-box-heading" style={infoBoxHeadingStyle}>ASSETS</h3>
            <p className="info-box-text" style={infoBoxTextStyle}>Inventory Management</p>
            <button className="info-button" style={infoBoxButtonStyle}>G-Book</button>
          </div> 
        </div>
      </section>*/}

      {/* ========================== Accounting view =================== */}
     {/*  <section className="accounting-view icon-view icon-view-slim grey-background"> 
        <div className="info-box">
          <h3 className="info-box-heading" style={infoBoxHeadingStyle}>ACCOUNTING</h3>
          <p className="info-box-text" style={infoBoxTextStyle}>Accounting</p>
          <button className="info-button" style={infoBoxButtonStyle}>G-Book</button>
        </div>
        <img className="screen-icon" src={screenIconTwo} alt="computer screen icon"/>
      </section>*/}

      {/* ========================== HR Admin View =================== */}
      {/*<section className="hr-admin-view icon-view icon-view-wide white-background">
        <img className="screen-icon" src={screenIconThree} alt="computer screen icon"/>
        <div className="info-box">
          <h3 className="info-box-heading" style={infoBoxHeadingStyle}>HR & ADMIN</h3>
          <div className="info-box-row info-box-row-1">
            <div className="info-button-container">
              <p className="info-box-text" style={infoBoxTextStyle}>Webmail</p>
              <button className="info-button" style={infoBoxButtonStyle}>E-office</button>
            </div>
            <div className="info-button-container">
              <p className="info-box-text" style={infoBoxTextStyle}>E-Approval</p>
              <button className="info-button" style={infoBoxButtonStyle}>E-office</button>
            </div>
            <div className="info-button-container">
              <p className="info-box-text" style={infoBoxTextStyle}>E-Document</p>
              <button className="info-button" style={infoBoxButtonStyle}>E-office</button>
            </div>
          </div>
          <div className="info-box-row info-box-row-2">
            <div className="info-button-container">
              <p className="info-box-text" style={infoBoxTextStyle}>E-Check in.out</p>
              <button className="info-button" style={infoBoxButtonStyle}>E-office</button>
            </div>
            <div className="info-button-container">
              <p className="info-box-text" style={infoBoxTextStyle}>Co-work/Project</p>
              <button className="info-button" style={infoBoxButtonStyle}>E-office</button>
            </div>
          </div>
        </div>
      </section>*/}

      {/* ========================== Sales View =================== */}
      {/*<section className="sales-view icon-view icon-view-slim grey-background">
        <div className="info-box">
          <h3 className="info-box-heading" style={infoBoxHeadingStyle}>SALES</h3>
          <p className="info-box-text" style={infoBoxTextStyle}>Create Homepage</p>
          <p className="info-box-text" style={infoBoxTextStyle}>Youtube & Instagram</p>
          <button className="info-button" style={infoBoxButtonStyle}>Fieldmake</button>
        </div>
        <img className="screen-icon" src={screenIconFour} alt="computer screen icon"/>
      </section>*/}

      {/* ========================== Customer View ================ */}
      {/*<section className="customer-view icon-view icon-view-wide white-background">
        <img className="screen-icon" src={screenIconFive} alt="computer screen icon"/>
        <div className="info-box">
          <h3 className="info-box-heading" style={infoBoxHeadingStyle}>CUSTOMER</h3>
          <p className="info-box-text" style={infoBoxTextStyle}>Customer Request Management</p>
          <button className="info-button" style={infoBoxButtonStyle}>OQUFIE</button>
        </div>
      </section>*/}

      {/* ========================== Security View ================ */}
     {/*  <section className="security-view icon-view icon-view-slim grey-background">
        <div className="info-box">
          <h3 className="info-box-heading" style={infoBoxHeadingStyle}>SECURITY</h3>
          <p className="info-box-text" style={infoBoxTextStyle}>SSL server</p>
          <button className="info-button" style={infoBoxButtonStyle}>SECTIGO</button>
        </div>
        <img className="screen-icon" src={screenIconSix} alt="computer screen icon"/>
      </section>*/}

      {/* ========================== Options View ================ */}
     {/*  <section className="options-view blue-background">
        <div className="option-box">
          <div className="option-box-row-1">
            <h3 className="option-box-heading" style={infoBoxHeadingStyle}>Free Test</h3>
            <h5 className="option-box-sub-heading">Organize across all apps by hand</h5>
          </div>
          <div className="option-box-row-2">  
            <div className="price-left-col">
              <h3 className="price-zero">0</h3>
            </div>
            <div className="price-right-col">
              <h3 className="price-dollar">$</h3>
              <h5 className="price-text">Per Month</h5>
            </div>
          </div> 
        </div>
        <div className="option-box">
          <div className="option-box-row-1">
            <h3 className="option-box-heading" style={infoBoxHeadingStyle}>Low Price</h3>
            <h5 className="option-box-sub-heading">Monthly Fixed Amount</h5>
          </div>
          <div className="option-box-row-2">  
            <div className="price-left-col">
              <h3 className="price-number">200.000</h3>
            </div>
            <div className="price-right-col">
              <h3 className="price-dollar">$</h3>
              <h5 className="price-text">Per Month</h5>
            </div>
          </div> 
        </div>
        <div className="option-box option-box-border">
          <div className="option-box-row-1">
            <h3 className="option-box-heading" style={infoBoxHeadingStyle}>Easy Using Methods</h3>
            <h5 className="option-box-sub-heading">Various Manuals</h5>
          </div>
          <div className="option-box-row-2">  
            <div className="price-left-col">
              <h3 className="price-number">200.000</h3>
            </div>
            <div className="price-right-col">
              <h3 className="price-dollar">$</h3>
              <h5 className="price-text">Per Month</h5>
            </div>
          </div> 
        </div>
        <div className="option-box option-box-highlight">
          <div className="option-box-row-1">
            <h3 className="option-box-heading" style={infoBoxHeadingStyle}>Verified IT Service</h3>
            <h5 className="option-box-sub-heading">On sale in 4 countries</h5>
          </div>
          <div className="option-box-row-2">  
            <div className="price-left-col">
              <h3 className="price-number">300.000</h3>
            </div>
            <div className="price-right-col">
              <h3 className="price-dollar">$</h3>
              <h5 className="price-text">Per Month</h5>
            </div>
          </div> 
        </div>
      </section>*/}

      {/* ========================== Offices View ================ */}
      {/*<section className="offices-view blue-background">
        <div className="address-box address-box-one">
          <div className="address-box-text-container">
            <h4 className="address-heading">Vietnam Office</h4>
            <p className="address-text">14F, APtower, Dien Bien Phu street, district 3, Ho Chi Minh city</p>
            <p className="address-text">Business resigtration: 0315421202</p>
            <p className="address-text address-row">Tel: 028-3520-2367</p>
            <p className="address-text address-row">sales@dkinno.com</p>
            <p className="address-text">Copyright 2021 DaouKiwoom Innocation C0., Ltd</p>
          </div>
        </div>
        <div className="address-box address-box-two">
          <div className="address-box-text-container">
            <h4 className="address-heading">Indonesia Office</h4>
            <p className="address-text">Menara Mandiri II, Jl. jend. Sudirman No.54-55,</p>
            <p className="address-text">South Jakarta, DKI Jakarta 12190, Indonsia</p>
            <p className="address-text">Tel: +62-21-5082-0038</p>
          </div>
        </div>
        <div className="address-box address-box-three">
          <div className="address-box-text-container">
            <h4 className="address-heading">Korea Office</h4>
            <p className="address-text">5th Fl, C-dong, PDC, 242, Pangyo-ro, Bundang-gu,</p>
            <p className="address-text">Seongnam-si, Gyeonggi-do, Korea</p>
          </div>
        </div>
      </section>
     </div>
    </div>*/}