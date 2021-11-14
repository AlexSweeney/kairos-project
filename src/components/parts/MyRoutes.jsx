import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Home from './../../pages/Home.jsx'; 
import AutoHome from './../../pages/AutoHome.jsx'; 
import Sales from './../../pages/Sales.jsx';
import CloudErp from './../../pages/CloudErp.jsx';
import CRM from './../../pages/CRM.jsx';
import ElectronicOffice from './../../pages/ElectronicOffice.jsx';
import SSL from './../../pages/SSL.jsx';

export default function MyRoutes() {
	return (
		<Routes> 
	    <Route path="/" exact    element={<Home/>}/>
	    <Route path="/auto_home" element={<AutoHome/>}/> 
	    <Route path="/sales"     element={<Sales/>}/>
	    <Route path="/cloud_erp" element={<CloudErp/>}/>
	    <Route path="/crm"       element={<CRM/>}/>
	    <Route path="/electronic_office" element={<ElectronicOffice/>}/> 
	    <Route path="/ssl"       element={<SSL/>}/>  
	    <Route path="*"          element={<Home/>}/>
	  </Routes>
	) 
}