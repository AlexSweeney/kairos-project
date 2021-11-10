import './reset.css';
import './fonts.css';
import './App.css'; 
import './header.css'; 
import logo from './imgs/logo-icon.png';
import home from './imgs/home-icon.svg';
import chevron from './imgs/chevron-icon.svg';
import screenIconOne from './imgs/screen-icon-1.svg';
import screenIconTwo from './imgs/screen-icon-2.svg';
import screenIconThree from './imgs/screen-icon-3.svg';
import screenIconFour from './imgs/screen-icon-4.svg';
import screenIconFive from './imgs/screen-icon-5.svg';
import screenIconSix from './imgs/screen-icon-6.svg';

function App() {
  return (
  	<div className="background">
     <div className="container">
     	{/* ========================== Main View ========================== */}
     	<section className="main-view white-background">
     	{/* ======== Header ====== */}
     		<header>
     			<div className="header-left">
     				<nav className="nav-left">
     					<ul>
	     					<li><img className="logo" src={logo} alt="daoukiwoom logo"/></li>
	     					<li className="home-container">
	     						<img className="home-icon" src={home} alt="home icon"/>
	     						<a className="home-text">Home</a>
	     					</li>
     					</ul>
     				</nav> 
     			</div>
     			<div className="header-right">
	     			<div className="options-bar">
	     				<ul className="options-container">
	     					<li><h3>EN</h3><img className="chevron-icon" src={chevron} alt="downward pointing chevron"/></li>
	     					<li><h3>Company</h3><img className="chevron-icon"  src={chevron} alt="downward pointing chevron"/></li>
	     					<li><h3>Partner Market Place</h3><img className="chevron-icon" src={chevron} alt="downward pointing chevron"/></li>
	     				</ul>
	     			</div> 
     				<nav className="nav-right">
     					<ul>
	     					<li><a>Auto Homepage</a></li>
	     					<li><a>Sales</a></li>
	     					<li><a>CRM</a></li>
	     					<li><a>Electronic Office</a></li>
	     					<li><a>Cloud ERP</a></li>
	     					<li><a>SSL</a></li>
     					</ul>
     				</nav>
     			</div>
     		</header>

     		{/* ======== Main View Left ====== */}
     		<div className="main-view-left">
     			<h2>Asia IT</h2>
     			<h2>Market Place</h2>
     		</div>

     		{/* ======== Main View Right ====== */}
     		<div className="main-view-right">
     			<div className="option-buttons">
     				<button className="option-button option-button-selected">Now</button>
     				<button className="option-button">Future</button>
     			</div> 
     			<div className="options-info">
     				<div className="option-info">
     					<h3 className="option-number">6</h3>
     					<h3 className="option-text">different<br/>IT Software<br/>Networks</h3>
     				</div>
     				<div className="option-info">
     					<h3 className="option-number">32</h3>
     					<h3 className="option-text">partners</h3>
     				</div>
     				<div className="option-info">
     					<h3 className="option-number">4</h3>
     					<h3 className="option-text">countries</h3>
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

     	</section>
     </div>
    </div>
  );
}

export default App;
