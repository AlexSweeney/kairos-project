import React, { useState, useEffect } from 'react';
import {
  optionHeadingStyle,
  chevronIconStyle,
} from './../../styles/OptionMenu.js';
import './../../styles/OptionMenu.css';

export default function OptionMenu({options, handleOptionClick = () => {} }) { 
  /* 
    * head shows selected option
    * menu options = all other options

    * on render
      * set selected option as first option
      * show selected option at head
      * hide menu options

    * on over 
      * show menu options

    * on out
      * hide menu options

    * on click
      * set selection option at head to clicked option
      * hide menu options

  */

	/* =========================================== Consts ===================================== */ 
  const [selectedOption, setSelectedOption] = useState(options[0]);
  const [menuOptions, setMenuOptions] = useState(options.slice(1));

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
    updateMenuOptions(option)
  }

  /* =========================================== Option Updater ============================= */ 
  function updateMenuOptions(selectedOption) {
    const newMenuOptions = options.filter(option => option !== selectedOption).filter(el => el);
    setMenuOptions(newMenuOptions)
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
    // console.log('updateMenuClass')
  	if(isOverMenu || isOverHead) {
      // console.log('--> open')
  		setOptionBodyClass('option-menu-open')
  	}

  	if(!isOverMenu && !isOverHead) {
      // console.log('--> close')
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
		  		menuOptions.map(option => {
		  				return (<h4 className="option"
                          key={option} 
	  											style={optionHeadingStyle} 
	  											onClick={() => onOptionClick(option)}>{option}</h4>)
		  		})
		  	} 
		  </div>
		</li>
	)
}