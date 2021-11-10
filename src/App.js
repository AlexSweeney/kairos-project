import './reset.css';
import './fonts.css';
import './App.css'; 
import './header.css'; 
import logo from './imgs/logo-icon.png';
import home from './imgs/home-icon.svg';
import chevron from './imgs/chevron-icon.svg';
import screenIconOne from './imgs/screen-icon-1.svg';

function App() {
  return (
  	<div className="background">
     <div className="container">
     	<section className="main-view white-background">
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

     		<div className="main-view-left">
     			<h2>Asia IT</h2>
     			<h2>Market Place</h2>
     		</div>

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

     	<section className="alert-bar pink-background" alt="background-image">
     		<p>You are now viewing an <em>IT Software</em> that has been verified by <em>over 1 million users.</em></p>
     	</section>

     	<section className="it-cloud-view icon-view white-background">
     		<div className="icon-view-title-container">
     			<h2>IT CLOUD SEA’S IT SERVICE</h2>
     		</div> 
     		<div className="icon-view-container">
     			<img className="screen-icon" src={screenIconOne} alt="computer screen icon"/>
	     		<div className="info-box">
	     			<h3 className="info-box-heading">ASSETS</h3>
	     			<p className="info-box-text">Inventory Management</p>
	     			<button className="info-button">G-Book</button>
	     		</div>
     		</div> 
     	</section>

     	<section className="accounting-view icon-view grey-background">

     	</section>

     	<section className="hr-admin-view icon-view white-background">

     	</section>

     	<section className="sales-view icon-view grey-background">

     	</section>

     	<section className="customer-view icon-view white-background">

     	</section>

     	<section className="security-view icon-view grey-background">

     	</section>

     	<section className="options-view blue-background">

     	</section>

     	<section className="offices-view blue-background">

     	</section>
     </div>
    </div>
  );
}

export default App;
