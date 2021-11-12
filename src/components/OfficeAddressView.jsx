import React from 'react';
import {
	officeAddressViewStyle,
	officeAddressBoxStyle,
	officeAddressBoxHeadingStyle,
	officeAddressTextStyle,
} from './../styles/OfficeAddressView.js';
import './../styles/OfficeAddressView.css';

export default function OfficeAddressView() {
	return ( 
		<section className="offices-address-view" style={officeAddressViewStyle}>
      <div className="office-address-box office-address-box-one" style={officeAddressBoxStyle}>
        <div className="office-address-box-text-container">
          <h4 className="address-heading" style={officeAddressBoxHeadingStyle}>Vietnam Office</h4>
          <p className="address-text" style={officeAddressTextStyle}>14F, APtower, Dien Bien Phu street, district 3,
          <br/>Ho Chi Minh city</p>
          <p className="address-text" style={officeAddressTextStyle}>Business resigtration: 0315421202</p>
          <p className="address-text address-row" style={officeAddressTextStyle}>Tel: 028-3520-2367</p>
          <p className="address-text address-row" style={officeAddressTextStyle}>sales@dkinno.com</p>
          <p className="address-text" style={officeAddressTextStyle}>Copyright 2021 DaouKiwoom Innocation C0., Ltd</p>
        </div>
      </div>
      <div className="office-address-box office-address-box-two" style={officeAddressBoxStyle}>
        <div className="address-box-text-container">
          <h4 className="address-heading" style={officeAddressBoxHeadingStyle}>Indonesia Office</h4>
          <p className="address-text" style={officeAddressTextStyle}>Menara Mandiri II, Jl. jend. Sudirman No.54-55,
          <br/>South Jakarta, DKI Jakarta 12190, Indonsia</p>
          <p className="address-text" style={officeAddressTextStyle}>Tel: +62-21-5082-0038</p>
        </div>
      </div>
      <div className="office-address-box office-address-box-three">
        <div className="address-box-text-container">
          <h4 className="address-heading" style={officeAddressBoxHeadingStyle}>Korea Office</h4>
          <p className="address-text" style={officeAddressTextStyle}>5th Fl, C-dong, PDC, 242, Pangyo-ro, Bundang-gu,
          <br/>Seongnam-si, Gyeonggi-do, Korea</p>
        </div>
      </div>
 		</section>
	)
} 