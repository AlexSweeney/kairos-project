import React from 'react';
import Header from './components/Header.jsx';
import MainView from './components/MainView.jsx';
import AlertBar from './components/AlertBar.jsx';
import ServicesView from './components/ServicesView.jsx';
import PriceOptionsView from './components/PriceOptionsView.jsx';
import OfficeAddressView from './components/OfficeAddressView.jsx';
import './styles/reset.css';
import './styles/fonts.css';
import './styles/App.css'; 
 
function App() {   
  return (
  	<div className="container"> 
      <Header/>
    	<MainView/>
      <AlertBar/>
      <ServicesView/>
      <PriceOptionsView/>
      <OfficeAddressView/>
    </div>
  );
}

export default App;