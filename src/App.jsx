import './styles/reset.css';
import './styles/fonts.css';
import './styles/App.css'; 
import './styles/header.css'; 
import logo from './imgs/logo-icon.png';
import home from './imgs/home-icon.svg';
import chevron from './imgs/chevron-icon.svg';
import backgroundImage from './imgs/background-image.jpg';
import screenIconOne from './imgs/screen-icon-1.svg';
import screenIconTwo from './imgs/screen-icon-2.svg';
import screenIconThree from './imgs/screen-icon-3.svg';
import screenIconFour from './imgs/screen-icon-4.svg';
import screenIconFive from './imgs/screen-icon-5.svg';
import screenIconSix from './imgs/screen-icon-6.svg';

function App() { 
  // ==================== Colors */
  const whiteBackground = '#FFFFFF';
  const darkBlueBackground = '#181949';

  const darkBlueText = '#181949';
  const lightBlueText = '#CFE5FF';
  const whiteText = '#FFFFFF';

  // ==================== Icon Styles */
  const logoStyle = {
    width : '176px',
    height: '30px', 
  };  

  const homeIconStyle = {
    width : '16.03px',
    height: '16.72px',
  };

  const chevronIconStyle = {
    width: '8px',
    height: '6px',
    color: lightBlueText,
  }; 

  // ==================== Header Styles */
  const headerLeftStyle = {
    background : whiteBackground,
  };

  const headerRightStyle = {
    background : 'transparent',
  };

  // ==================== Option Styles */
  const optionsBarStyle = {
    background : darkBlueBackground,
  };

  const optionHeadingStyle = {
    fontFamily: 'Roboto, sans-serif',
    fontSize: '14px',
    fontStyle: 'normal',
    fontWeight: '400',
    lineHeight: '16px',
    color: lightBlueText,
  }; 

  // ==================== Nav Styles */
  const navLinkLeftStyle = {
    fontFamily: 'Noto Sans, sans-serif',
    fontSize: '14px',
    fontStyle: 'normal',
    fontWeight: '700',
    lineHeight: '19px',  
    color: darkBlueText,
  };

  const navLinkRightStyle = {
    fontFamily: 'Noto Sans, sans-serif', 
    fontSize: '14px',
    fontStyle: 'normal',
    fontWeight: '400',
    lineHeight: '19px', 
    color: whiteBackground,
  };

  // ==================== Main-View left Styles */
  const mainViewLeftStyle = {
    background: whiteBackground,
  };

  const mainViewLeftHeaderStyle = {
    fontFamily: 'Noto Sans, sans-serif',
    fontSize: '56px',
    fontStyle: 'normal',
    fontWeight: '700',
    lineHeight: '76px',
    letterSpacing: '0.01em',
    color: darkBlueText,
  };   

  // ==================== Main-View Right Styles */
  const mainViewRightStyle = {
    backgroundImage: `url(${backgroundImage})`,
    backgroundSize: 'cover',
  };

  const optionButtonStyle = {
    background: 'transparent',
    width: '124.42px',
    paddingBottom: '16px',
    fontFamily: 'Noto Sans, sans-serif',
    fontStyle: 'SemiBold',
    fontSize: '22px',
    fontWeight: '600',
    lineHeight: '30px',
    color: whiteText,
  };

  const optionButtonSelectedStyle = {
    ...optionButtonStyle,
    opacity: 1,
    borderBottom: `1.5px solid ${lightBlueText}`,
  };

  const optionButtonDeselectedStyle = {
    ...optionButtonStyle,
    opacity: 0.5,
  }; 

  const optionNumberStyle = {
    fontFamily: 'Noto Sans, sans-serif',
    fontStyle: 'normal',
    fontSize: '64px',
    fontWeight: '700',
    lineHeight: '87px',
    color: '#CFE5FF',
  }; 

  const optionTextStyle = {
    fontFamily: 'Noto Sans, sans-serif',
    fontSize: '20px',
    fontStyle: 'normal',
    fontWeight: '400',
    lineHeight: '27px', 
    textAlign: 'center',
    color: '#FFFFFF',
  };

  return (
  	<div className="background">
     <div className="container">
     	{/* ========================== Main View ========================== */}
     	<section className="main-view">
     	{/* ======== Header ====== */}
     		<header>
     			<div className="header-left" style={headerLeftStyle}>
     				<nav className="nav-left">
     					<ul>
	     					<li><img className="logo" style={logoStyle} src={logo} alt="daoukiwoom logo"/></li>
	     					<li className="home-container">
	     						<img className="home-icon" style={homeIconStyle} src={home} alt="home icon"/>
	     						<a className="home-text nav-link nav-link-left" style={navLinkLeftStyle}>Home</a>
	     					</li>
     					</ul>
     				</nav> 
     			</div>
     			<div className="header-right" style={headerRightStyle}>
	     			<div className="options-bar" style={optionsBarStyle}>
	     				<ul className="options-container">
	     					<li className="option">
                  <h3 className="option-heading" style={optionHeadingStyle}>EN</h3>
                  <img className="chevron-icon" style={chevronIconStyle} src={chevron} alt="downward pointing chevron"/>
                </li>
	     					<li className="option">
                  <h3 className="option-heading" style={optionHeadingStyle}>Company</h3>
                  <img className="chevron-icon" style={chevronIconStyle} src={chevron} alt="downward pointing chevron"/>
                </li>
	     					<li className="option">
                  <h3 className="option-heading" style={optionHeadingStyle}>Partner Market Place</h3>
                  <img className="chevron-icon" style={chevronIconStyle} src={chevron} alt="downward pointing chevron"/>
                </li>
	     				</ul>
	     			</div> 
     				<nav className="nav-right">
     					<ul>
	     					<li><a className="nav-link nav-link-right" style={navLinkRightStyle}>Auto Homepage</a></li>
	     					<li><a className="nav-link nav-link-right" style={navLinkRightStyle}>Sales</a></li>
	     					<li><a className="nav-link nav-link-right" style={navLinkRightStyle}>CRM</a></li>
	     					<li><a className="nav-link nav-link-right" style={navLinkRightStyle}>Electronic office</a></li>
	     					<li><a className="nav-link nav-link-right" style={navLinkRightStyle}>Cloud ERP</a></li>
	     					<li><a className="nav-link nav-link-right" style={navLinkRightStyle}>SSL</a></li>
     					</ul>
     				</nav>
     			</div>
     		</header>

     		{/* ======== Main View Left ====== */}
     		<div className="main-view-left" style={mainViewLeftStyle}>
     			<h2 className="main-view-left-header" style={mainViewLeftHeaderStyle}>Asia IT Market Place</h2>
     		</div>

     		{/* ======== Main View Right ====== */}
     		<div className="main-view-right" style={mainViewRightStyle}>
     			<div className="option-buttons">
     				<button className="option-button option-button-selected" style={optionButtonSelectedStyle}>Now</button>
     				<button className="option-button option-button-deselected" style={optionButtonDeselectedStyle}>Future</button>
     			</div> 
     			<div className="options-info">
     				<div className="option-info">
     					<h3 className="option-number" style={optionNumberStyle}>6</h3>
     					<h3 className="option-text" style={optionTextStyle}>different<br/>IT Software<br/>Networks</h3>
     				</div>
     				<div className="option-info">
     					<h3 className="option-number" style={optionNumberStyle}>32</h3>
     					<h3 className="option-text" style={optionTextStyle}>partners</h3>
     				</div>
     				<div className="option-info">
     					<h3 className="option-number" style={optionNumberStyle}>4</h3>
     					<h3 className="option-text" style={optionTextStyle}>countries</h3>
     				</div>
     			</div>
     		</div> 
     	</section>

     	{/* ========================== Alert Bar ========================== */}
     	<section className="alert-bar pink-background" alt="background-image">
     		<p>You are now viewing an <em>IT Software</em> that has been verified by <em>over 1 million users.</em></p>
     	</section>

     	{/* ========================== IT cloud view ====================== */}
     	<section className="it-cloud-view white-background">
     		<div className="icon-view-title-container">
     			<h2>IT CLOUD SEA’S IT SERVICE</h2>
     		</div> 
     		<div className=" icon-view icon-view-wide">
     			<img className="screen-icon" src={screenIconOne} alt="computer screen icon"/>
	     		<div className="info-box">
	     			<h3 className="info-box-heading">ASSETS</h3>
	     			<p className="info-box-text">Inventory Management</p>
	     			<button className="info-button">G-Book</button>
	     		</div> 
	     	</div>
     	</section>

     	{/* ========================== Accounting view =================== */}
     	<section className="accounting-view icon-view icon-view-slim grey-background"> 
     		<div className="info-box">
     			<h3 className="info-box-heading">ACCOUNTING</h3>
     			<p className="info-box-text">Accounting</p>
     			<button className="info-button">G-Book</button>
     		</div>
     		<img className="screen-icon" src={screenIconTwo} alt="computer screen icon"/>
     	</section>

     	{/* ========================== HR Admin View =================== */}
     	<section className="hr-admin-view icon-view icon-view-wide white-background">
     		<img className="screen-icon" src={screenIconThree} alt="computer screen icon"/>
     		<div className="info-box">
     			<h3 className="info-box-heading">HR & ADMIN</h3>
     			<div className="info-box-row info-box-row-1">
     				<div className="info-button-container">
     					<p className="info-box-text">Webmail</p>
	     				<button className="info-button">E-office</button>
     				</div>
     				<div className="info-button-container">
     					<p className="info-box-text">E-Approval</p>
	     				<button className="info-button">E-office</button>
     				</div>
     				<div className="info-button-container">
     					<p className="info-box-text">E-Document</p>
	     				<button className="info-button">E-office</button>
     				</div>
     			</div>
     			<div className="info-box-row info-box-row-2">
     				<div className="info-button-container">
     					<p className="info-box-text">E-Check in.out</p>
	     				<button className="info-button">E-office</button>
     				</div>
     				<div className="info-button-container">
     					<p className="info-box-text">Co-work/Project</p>
	     				<button className="info-button">E-office</button>
     				</div>
     			</div>
     		</div>
     	</section>

     	{/* ========================== Sales View =================== */}
     	<section className="sales-view icon-view icon-view-slim grey-background">
     		<div className="info-box">
     			<h3 className="info-box-heading">SALES</h3>
     			<p className="info-box-text">Create Homepage</p>
     			<p className="info-box-text">Youtube & Instagram</p>
     			<button className="info-button">Fieldmake</button>
     		</div>
     		<img className="screen-icon" src={screenIconFour} alt="computer screen icon"/>
     	</section>

     	{/* ========================== Customer View ================ */}
     	<section className="customer-view icon-view icon-view-wide white-background">
     		<img className="screen-icon" src={screenIconFive} alt="computer screen icon"/>
     		<div className="info-box">
     			<h3 className="info-box-heading">CUSTOMER</h3>
     			<p className="info-box-text">Customer Request Management</p>
     			<button className="info-button">OQUFIE</button>
     		</div>
     	</section>

     	{/* ========================== Security View ================ */}
     	<section className="security-view icon-view icon-view-slim grey-background">
     		<div className="info-box">
     			<h3 className="info-box-heading">SECURITY</h3>
     			<p className="info-box-text">SSL server</p>
     			<button className="info-button">SECTIGO</button>
     		</div>
     		<img className="screen-icon" src={screenIconSix} alt="computer screen icon"/>
     	</section>

     	{/* ========================== Options View ================ */}
     	<section className="options-view blue-background">
     		<div className="option-box">
     			<div className="option-box-row-1">
	     			<h3 className="option-box-heading">Free Test</h3>
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
	     			<h3 className="option-box-heading">Low Price</h3>
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
	     			<h3 className="option-box-heading">Easy Using Methods</h3>
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
	     			<h3 className="option-box-heading">Verified IT Service</h3>
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
     	</section>

     	{/* ========================== Offices View ================ */}
     	<section className="offices-view blue-background">
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
    </div>
  );
}

export default App;
