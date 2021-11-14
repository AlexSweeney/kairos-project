import React from 'react'; 
import { BrowserRouter } from 'react-router-dom';
import Header from './components/Header.jsx'; 
import MyRoutes from './components/parts/MyRoutes.jsx';
import './styles/reset.css';
import './styles/fonts.css';
import './styles/App.css'; 
 
function App() {   
  return (
  	<div className="container">  
      <BrowserRouter> 
        <Header/>
        
        <MyRoutes/>
      </BrowserRouter>
    </div>
  );
} 
export default App;

