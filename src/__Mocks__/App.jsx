import React from 'react'; 
import { MemoryRouter } from 'react-router-dom';
import Header from './../components/Header.jsx'; 
import MyRoutes from './../components/parts/MyRoutes.jsx';
import './../styles/reset.css';
import './../styles/fonts.css';
import './../styles/App.css'; 

export default function MockApp({pathname = "/"}) {  
	/* allow users to set initial path externally */

	return (
		<MemoryRouter initialEntries={[pathname]}>
			<Header/>
        
      <MyRoutes/>
		</MemoryRouter>
	)
} 