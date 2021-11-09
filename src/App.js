import './reset.css';
import './App.css'; 
import logo from './imgs/logo-icon.png';
import home from './imgs/home-icon.svg';
import chevron from './imgs/chevron-icon.svg';

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
     		</div> 
     	</section>

     	<section className="alert-bar pink-background" alt="background-image">

     	</section>

     	<section className="it-cloud-view icon-view white-background">

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
