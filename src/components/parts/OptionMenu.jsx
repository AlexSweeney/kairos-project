import React, { useState, useEffect } from 'react';
import {
  optionHeadingStyle,
  chevronIconStyle,
} from './../../styles/OptionMenu.js';
import './../../styles/OptionMenu.css';

export default function OptionMenu({options, handleOptionClick = () => {} }) {
	const [selectedOption, setSelectedOption] = useState(options[0]);

	/* =========================================== Consts ===================================== */ 
  const [optionHeadingClass, setOptionHeadingClass] = useState('');
  const [chevronIconClass, setChevronIconClass] = useState('');
  const [optionBodyClass, setOptionBodyClass] = useState('option-body-open');
 
  const [isOverHead, setIsOverHead] = useState(false);
  const [isOverMenu, setIsOverMenu] = useState(false);

  /* =========================================== Event handlers ============================= */ 
  function onEnterHead() { 
  	setIsOverHead(true) 
  }

  function onLeaveHead() { 
  	setIsOverHead(false)
  }

  function onEnterMenu() {
  	setIsOverMenu(true)
  }

  function onLeaveMenu() {
  	setIsOverMenu(false) 
  }

  function onOptionClick(option) {
   	setIsOverMenu(false)
   	handleOptionClick(option)
   	setSelectedOption(option) 
  }

  /* =========================================== Class Updaters ============================= */ 
  function updateHeadingClasses(isOverHead, isOverMenu) {
  	if(isOverHead) {
  		setOptionHeadingClass('option-heading-hover')
    	setChevronIconClass('chevron-icon-hover')
  	} 

  	if(!isOverHead && !isOverMenu) {
  		setOptionHeadingClass('')
    	setChevronIconClass('')
  	}
  }

  function updateMenuClass(isOverHead, isOverMenu) {
  	if(isOverMenu || isOverHead) {
  		setOptionBodyClass('option-menu-open')
  	}

  	if(!isOverMenu && !isOverHead) {
  		setOptionBodyClass('option-menu-closed')
  	}
  }

 	/* =========================================== Listen / Trigger ============================= */ 
  useEffect(() => {
  	updateHeadingClasses(isOverHead, isOverMenu)
  	updateMenuClass(isOverHead, isOverMenu)
  }, [isOverHead, isOverMenu]) 

  /* =========================================== Output ======================================= */ 
	return (
		<li className="option-container">
		  <div className="option-head"
		  	onMouseEnter={onEnterHead} 
			  onMouseLeave={onLeaveHead}>
		   	<h3 className={`option-heading ${optionHeadingClass}`}
		    		style={optionHeadingStyle}>{selectedOption}</h3>
		    <div className={`chevron-icon ${chevronIconClass}`} 
		    		style={chevronIconStyle}></div> 
		  </div> 
		  <div className={`option-menu ${optionBodyClass}`} 
		  		onMouseEnter={onEnterMenu}
		  		onMouseLeave={onLeaveMenu}>
		  	{
		  		options.map(option => {
		  			if(option !== selectedOption) {
		  				return (<h4 className="option option-menu-open"
                          key={option} 
	  											style={optionHeadingStyle} 
	  											onClick={() => { onOptionClick(option)}}>{option}</h4>)
		  			} 
		  		})
		  	} 
		  </div>
		</li>
	)
}