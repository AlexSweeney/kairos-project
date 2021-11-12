import React from 'react';
import MainView from './components/MainView.jsx';
import ServicesView from './components/ServicesView.jsx';
import PriceOptionsView from './components/PriceOptionsView.jsx';
import OfficeAddressView from './components/OfficeAddressView.jsx';
import './styles/reset.css';
import './styles/fonts.css';
import './styles/App.css'; 
 
function App() {  
  const mainViewLeftWidth = '38%'; 

  return (
  	<div className="container"> 
    	<MainView leftWidth={mainViewLeftWidth}/>
      {/*<ServicesView/>
      <PriceOptionsView/>
      <OfficeAddressView/>*/}
    </div>
  );
}

export default App;