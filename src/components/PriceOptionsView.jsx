import React from 'react';
import {
	priceOptionsViewStyle,
	priceOptionsBoxStyle,
	priceOptionsBorderBoxStyle,
	priceOptionsHighlightBoxStyle,
	priceOptionBoxHeadingStyle,
	priceOptionBoxHighlightHeadingStyle,
	priceOptionBoxSubHeadingStyle,
	priceOptionBoxHighlightSubHeadingStyle,
	priceNumberStyle,
	priceNumberHighlightStyle,
	priceZeroStyle,
	priceUnitStyle,
	priceUnitHightLightStyle,
	priceLabelStyle,
	priceLabelHighlightStyle,
} from './../styles/PriceOptionsView.js';
import './../styles/PriceOptionsView.css';

export default function PriceOptionsView() {
	return (
		<section className="price-options-view" style={priceOptionsViewStyle}>
      <div className="price-option-box" style={priceOptionsBoxStyle}>
        <div className="price-option-box-row-1">
          <h3 className="price-option-box-heading" style={priceOptionBoxHeadingStyle}>Free Test</h3>
          <h5 className="price-option-box-subheading" style={priceOptionBoxSubHeadingStyle}>Organize across all apps by hand</h5>
        </div>
        <div className="price-option-box-row-2">  
          <div className="price-left-col">
            <h3 className="price-number price-number-big" style={priceZeroStyle}>0</h3>
          </div>
          <div className="price-right-col">
            <h3 className="price-unit" style={priceUnitStyle}>$</h3>
            <h5 className="price-label" style={priceLabelStyle}>Per Month</h5>
          </div>
        </div> 
      </div>
      <div className="price-option-box" style={priceOptionsBoxStyle}>
        <div className="price-option-box-row-1">
          <h3 className="price-option-box-heading"  style={priceOptionBoxHeadingStyle}>Low Price</h3>
          <h5 className="price-option-box-subheading" style={priceOptionBoxSubHeadingStyle}>Monthly Fixed Amount</h5>
        </div>
        <div className="price-option-box-row-2">  
          <div className="price-left-col">
            <h3 className="price-number" style={priceNumberStyle}>200.000</h3>
          </div>
          <div className="price-right-col">
            <h3 className="price-unit" style={priceUnitStyle}>$</h3>
            <h5 className="price-label" style={priceLabelStyle}>Per Month</h5>
          </div>
        </div> 
      </div>
      <div className="price-option-box price-option-box-border" style={priceOptionsBorderBoxStyle}>
        <div className="price-option-box-row-1">
          <h3 className="price-option-box-heading"  style={priceOptionBoxHeadingStyle}>Easy Using Methods</h3>
          <h5 className="price-option-box-subheading" style={priceOptionBoxSubHeadingStyle}>Various Manuals</h5>
        </div>
        <div className="price-option-box-row-2">  
          <div className="price-left-col">
            <h3 className="price-number" style={priceNumberStyle} >200.000</h3>
          </div>
          <div className="price-right-col">
            <h3 className="price-unit" style={priceUnitStyle}>$</h3>
            <h5 className="price-label" style={priceLabelStyle}>Per Month</h5>
          </div>
        </div> 
      </div>
      <div className="price-option-box price-option-box-highlight" style={priceOptionsHighlightBoxStyle}>
        <div className="price-option-box-row-1">
          <h3 className="price-option-box-heading" style={priceOptionBoxHighlightHeadingStyle}>Verified IT Service</h3>
          <h5 className="price-option-box-subheading" style={priceOptionBoxHighlightSubHeadingStyle}>On sale in 4 countries</h5>
        </div>
        <div className="price-option-box-row-2">  
          <div className="price-left-col">
            <h3 className="price-number" style={priceNumberHighlightStyle}>300.000</h3>
          </div>
          <div className="price-right-col">
            <h3 className="price-unit" style={priceUnitHightLightStyle}>VND</h3>
            <h5 className="price-label" style={priceLabelHighlightStyle}>Per Month</h5>
          </div>
        </div> 
      </div>
    </section>
	)
} 
