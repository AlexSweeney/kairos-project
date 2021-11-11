import React from 'react'; 
import './../styles/ServicesView.css';
import { 
	servicesViewHeadingStyle,
	whiteServiceViewStyle,
	greyServiceViewStyle,
	serviceInfoBoxHeadingStyle,
	serviceInfoBoxTextStyle,
	serviceInfoBoxButtonStyle,
	serviceIconStyle,
} from './../styles/ServicesView.js';

import itCloudIcon from './../imgs/it-cloud-icon.svg';
import accountingIcon from './../imgs/accounting-icon.svg';
import hrAdminIcon from './../imgs/hr-admin-icon.svg';
import salesIcon from './../imgs/sales-icon.svg';
import customerIcon from './../imgs/customer-icon.svg';
import securityIcon from './../imgs/security-icon.svg';

export default function ServicesView() { 
	return (
		<>
			{/* ========================== Header ====================== */}
			<section className="services-view-heading-container" style={servicesViewHeadingStyle}>
        <h2>IT CLOUD SEA’S IT SERVICE</h2>
      </section> 

			{/* ========================== IT cloud view ====================== */}
			<section className="service-view service-view-wide" style={whiteServiceViewStyle}>
        <img className="service-icon" src={itCloudIcon} style={serviceIconStyle} alt="it cloud icon"/>
        <div className="service-info-box">
          <h3 className="service-info-box-heading" style={serviceInfoBoxHeadingStyle}>ASSETS</h3>
          <p className="service-info-box-text" style={serviceInfoBoxTextStyle}>Inventory Management</p>
          <button className="service-info-button" style={serviceInfoBoxButtonStyle}>G-Book</button>
        </div> 
	    </section>

	    {/* ========================== Accounting view =================== */}
     	<section className="service-view service-view-slim" style={greyServiceViewStyle}> 
        <div className="service-info-box">
          <h3 className="service-info-box-heading" style={serviceInfoBoxHeadingStyle}>ACCOUNTING</h3>
          <p className="service-info-box-text" style={serviceInfoBoxTextStyle}>Accounting</p>
          <button className="service-info-button" style={serviceInfoBoxButtonStyle}>G-Book</button>
        </div>
        <img className="service-icon" src={accountingIcon} style={serviceIconStyle} alt="accounting icon"/>
      </section> 

      {/* ========================== HR Admin View =================== */}
      <section className="service-view service-view-wide" style={whiteServiceViewStyle}>
        <img className="service-icon" src={hrAdminIcon} style={serviceIconStyle} alt="hr and admin icon"/>
        <div className="service-info-box">
          <h3 className="service-info-box-heading" style={serviceInfoBoxHeadingStyle}>HR & ADMIN</h3>
          <div className="rows-container">
          	<div className="two-row">
          		<div className="service-info-button-container">
          			<p className="service-info-box-text" style={serviceInfoBoxTextStyle}>Webmail</p>
              	<button className="service-info-button" style={serviceInfoBoxButtonStyle}>E-office</button>
          		</div>
          		<div className="service-info-button-container">
          			<p className="service-info-box-text" style={serviceInfoBoxTextStyle}>E-Approval</p>
              	<button className="service-info-button" style={serviceInfoBoxButtonStyle}>E-office</button>
          		</div>
          		<div className="service-info-button-container">
          			<p className="service-info-box-text" style={serviceInfoBoxTextStyle}>E-Document</p>
              <button className="service-info-button" style={serviceInfoBoxButtonStyle}>E-office</button>
          		</div>
          	</div>
          	<div className="two-row center">
          		<div className="service-info-button-container">
          			<p className="service-info-box-text" style={serviceInfoBoxTextStyle}>E-Check in.out</p>
              	<button className="service-info-button" style={serviceInfoBoxButtonStyle}>E-office</button>
          		</div>
          		<div className="service-info-button-container">
          			<p className="service-info-box-text" style={serviceInfoBoxTextStyle}>Co-work/Project</p>
              	<button className="service-info-button" style={serviceInfoBoxButtonStyle}>E-office</button>
          		</div>
          	</div>
          </div> 
        </div> 
      </section> 

      {/* ========================== Sales View =================== */}
      <section className="service-view service-view-slim" style={greyServiceViewStyle}> 
        <div className="service-info-box">
          <h3 className="service-info-box-heading" style={serviceInfoBoxHeadingStyle}>SALES</h3>
          <p className="service-info-box-text" style={serviceInfoBoxTextStyle}>Create Homepage</p>
          <p className="service-info-box-text" style={serviceInfoBoxTextStyle}>Youtube & Instagram</p>
          <button className="service-info-button" style={serviceInfoBoxButtonStyle}>Fieldmake</button>
        </div>
        <img className="screen-icon" src={salesIcon} alt="computer screen icon"/>
      </section>

      {/* ========================== Customer View ================ */}
      <section className="service-view service-view-wide" style={whiteServiceViewStyle}>
        <img className="screen-icon" src={customerIcon} alt="computer screen icon"/>
        <div className="service-info-box">
          <h3 className="service-info-box-heading" style={serviceInfoBoxHeadingStyle}>CUSTOMER</h3>
          <p className="service-info-box-text" style={serviceInfoBoxTextStyle}>Customer Request Management</p>
          <button className="service-info-button" style={serviceInfoBoxButtonStyle}>OQUFIE</button>
        </div>
      </section>

      {/* ========================== Security View ================ */}
     	<section className="service-view service-view-slim" style={greyServiceViewStyle}> 
        <div className="service-info-box">
          <h3 className="service-info-box-heading" style={serviceInfoBoxHeadingStyle}>SECURITY</h3>
          <p className="service-info-box-text" style={serviceInfoBoxTextStyle}>SSL server</p>
          <button className="service-info-button" style={serviceInfoBoxButtonStyle}>SECTIGO</button>
        </div>
        <img className="screen-icon" src={securityIcon} alt="computer screen icon"/>
      </section>
    </>
	)
}

     

      

      

      

      

