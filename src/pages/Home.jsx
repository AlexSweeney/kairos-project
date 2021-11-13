import React from 'react'; 
import MainView from './../components/MainView.jsx';
import AlertBar from './../components/AlertBar.jsx';
import ServicesView from './../components/ServicesView.jsx';
import PriceOptionsView from './../components/PriceOptionsView.jsx';
import OfficeAddressView from './../components/OfficeAddressView.jsx'; 
 
function Home() {   
  return (
    <>
    	<MainView/>
      <AlertBar/>
      <ServicesView/>
      <PriceOptionsView/>
      <OfficeAddressView/>
    </>
  );
}

export default Home;