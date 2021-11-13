import React from 'react'; 
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Header from './components/Header.jsx';
import Home from './pages/Home.jsx'; 
import AutoHome from './pages/AutoHome.jsx'; 
import Sales from './pages/Sales.jsx';
import CloudErp from './pages/CloudErp.jsx';
import CRM from './pages/CRM.jsx';
import ElectronicOffice from './pages/ElectronicOffice.jsx';
import SSL from './pages/SSL.jsx';
import './styles/reset.css';
import './styles/fonts.css';
import './styles/App.css'; 
 
function App() {   
  return (
  	<div className="container">  
      <BrowserRouter>
        <Header/>
        
        <Routes> 
          <Route path="/" exact    element={<Home/>}/>
          <Route path="/auto_home" element={<AutoHome/>}/> 
          <Route path="/sales"     element={<Sales/>}/>
          <Route path="/cloud_erp" element={<CloudErp/>}/>
          <Route path="/crm"       element={<CRM/>}/>
          <Route path="/electronic_office" element={<ElectronicOffice/>}/> 
          <Route path="/ssl"       element={<SSL/>}/>  
        </Routes> 
      </BrowserRouter>
    </div>
  );
}

export default App;

