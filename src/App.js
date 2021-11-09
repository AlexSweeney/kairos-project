import './reset.css';
import './App.css';
import backgroundImage from './imgs/background-image.jpg';

function App() {
  return (
     <div className="container">
     	<section className="main-view white-background">
     		<div className="main-view-left"></div>
     		<div className="main-view-right">
     			<header>

     			</header>
     			<img src={backgroundImage} alt="background-image"/>
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
  );
}

export default App;
