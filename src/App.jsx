import React from 'react';
import MainView from './components/MainView.jsx';
import ServicesView from './components/ServicesView.jsx';
import PriceOptionsView from './components/PriceOptionsView.jsx';
import './styles/reset.css';
import './styles/fonts.css';
import './styles/App.css'; 
 
function App() {  
  const mainViewLeftWidth = '36.5%'; 

  return (
  	<div className="background">
      <div className="container"> 
      	<MainView leftWidth={mainViewLeftWidth}/>
        <ServicesView/>
        <PriceOptionsView/>
      </div>
    </div>
  );
}

export default App;
 

     

      {/* ========================== Offices View ================ */}
      {/*<section className="offices-view blue-background">
        <div className="address-box address-box-one">
          <div className="address-box-text-container">
            <h4 className="address-heading">Vietnam Office</h4>
            <p className="address-text">14F, APtower, Dien Bien Phu street, district 3, Ho Chi Minh city</p>
            <p className="address-text">Business resigtration: 0315421202</p>
            <p className="address-text address-row">Tel: 028-3520-2367</p>
            <p className="address-text address-row">sales@dkinno.com</p>
            <p className="address-text">Copyright 2021 DaouKiwoom Innocation C0., Ltd</p>
          </div>
        </div>
        <div className="address-box address-box-two">
          <div className="address-box-text-container">
            <h4 className="address-heading">Indonesia Office</h4>
            <p className="address-text">Menara Mandiri II, Jl. jend. Sudirman No.54-55,</p>
            <p className="address-text">South Jakarta, DKI Jakarta 12190, Indonsia</p>
            <p className="address-text">Tel: +62-21-5082-0038</p>
          </div>
        </div>
        <div className="address-box address-box-three">
          <div className="address-box-text-container">
            <h4 className="address-heading">Korea Office</h4>
            <p className="address-text">5th Fl, C-dong, PDC, 242, Pangyo-ro, Bundang-gu,</p>
            <p className="address-text">Seongnam-si, Gyeonggi-do, Korea</p>
          </div>
        </div>
      </section>
     </div>
    </div>*/}