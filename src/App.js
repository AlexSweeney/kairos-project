import './reset.css';
import './App.css'; 
import logo from './imgs/logo-icon.png';
import home from './imgs/home-icon.svg';

function App() {
  return (
  	<div className="background">
     <div className="container">
     	<section className="main-view white-background">
     		<header>
     			<div className="header-left">
     				<img className="logo" src={logo} alt="daoukiwoom logo"/>

     				<span className="home-container">
     					<img className="home-icon" src={home} alt="home icon"/>
     					<h2>Home</h2>
     				</span>
     			</div>
     			<div className="header-right">

     			</div>
     		</header>
     		<div className="main-view-left"></div>
     		<div className="main-view-right">
     			<div className="options-bar">

     			</div> 
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
