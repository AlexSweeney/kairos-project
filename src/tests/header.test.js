import React from 'react';
import { render, unmountComponentAtNode } from 'react-dom';
import { BrowserRouter } from 'react-router-dom';
import { act } from 'react-dom/test-utils';
import { hexToRGB, getAllChildren } from './../utils/testUtils.js';
import Header from './../components/Header.jsx';

/* ======================================= Consts / Vars ================================ */
let container;
const navLinkNames = ['Home', 'Auto Homepage', 'Sales', 'CRM', 'Electronic office', 'Cloud ERP', 'SSL'];
const optionNames = ['EN', 'Company', 'Partner Market Place'];

const navLinkLeftNames = ['Home'];
const navLinkRightNames = ['Auto Homepage', 'Sales', 'CRM', 'Electronic office', 'Cloud ERP', 'SSL'];

/* ======================================= Fns ========================================== */
function HeaderWrapper() {
	return (
		<>
			<BrowserRouter>
				<Header/>
			</BrowserRouter>
		</>
	)
}

/* ======================================= Setup / Teardown ============================= */
beforeEach(() => {
	container = document.createElement('div');
	document.body.appendChild(container)
	act(() => { render(<HeaderWrapper/>, container)}) 
})

afterEach(() => {
	unmountComponentAtNode(container)
	container = null;
})

/* ======================================= Header ======================================= */
describe('<Header/>', () => {
	it('should render header', () => {
		const header = container.querySelector('header'); 
		expect(header).not.toEqual(null)
	}) 
})

/* ======================================= Header Left ================================= */
describe('.header-left', () => { 
	it('should have "background": "transparent"', () => {
		const optionsBar = document.querySelector('.header-left'); 

		expect(optionsBar.style.background).toEqual('transparent')
	})  
})

/* ======================================= Header Right ================================ */
describe('.header-right', () => {
	it('should have "background": "transparent"', () => {
		const optionsBar = document.querySelector('.header-right'); 
		expect(optionsBar.style.background).toEqual('transparent')
	}) 
})

/* ======================================= Logo ======================================= */
describe('.logo', () => {
	it('should render logo', () => {
		const logo = container.querySelector('.logo');
		expect(logo).not.toEqual(null)
	})

	it('logo should have "width" : "176px"', () => {
		const logo = container.querySelector('.logo');
		expect(logo.style.width).toEqual('176px');
	})

	it('logo should have "height" :"30px"', () => {
		const logo = container.querySelector('.logo');
		expect(logo.style.height).toEqual('30px');
	})
})

/* ======================================= Home Icon =================================== */
describe('home icon', () => {
	it('home icon should render', () => {
		const homeIcon = container.querySelector('.home-icon');
		expect(homeIcon).not.toEqual(null)
	})  

	it('home icon should have "width" : "18px" ', () => {
		const homeIcon = container.querySelector('.home-icon');
		expect(homeIcon.style.width).toEqual('18px')
	})

	it('home icon should have "height" : "18px" ', () => {
		const homeIcon = container.querySelector('.home-icon');
		expect(homeIcon.style.height).toEqual('18px')
	})
})

/* ======================================= Nav Links =================================== */
describe('.nav-link', () => {
	it('should render all nav links', () => {
		const navLinks = container.querySelectorAll('.nav-link');
		expect(navLinks.length).toEqual(navLinkNames.length) 

		navLinks.forEach((navLink, i) => {
			expect(navLink.textContent).toEqual(navLinkNames[i])
		})
	})

	describe('nav links', () => {
		describe('left nav link', () => {  
			it('should render left nav link', () => {
				const navLink = container.querySelectorAll('.nav-link-left');
				expect(navLink.length).toEqual(navLinkLeftNames.length)
			})

			it('left nav link should have "fontFamily" : "Noto Sans, sans-serif"', () => {
				const navLink = container.querySelector('.nav-link-left');
				expect(navLink.style.fontFamily).toEqual('Noto Sans, sans-serif')
			}) 

			it('left nav link should have "fontStyle" : "normal"', () => {
				const navLink = container.querySelector('.nav-link-left');
				expect(navLink.style.fontStyle).toEqual('normal')
			})

			it('left nav link should have "fontWeight" : "700"', () => {
				const navLink = container.querySelector('.nav-link-left');
				expect(navLink.style.fontWeight).toEqual('700')
			})

			it('left nav link should have "lineHeight" : "19px"', () => {
				const navLink = container.querySelector('.nav-link-left');
				expect(navLink.style.lineHeight).toEqual('19px')
			})  

			it('left nav link should have "color" : "#181949"', () => {
				const navLink = container.querySelector('.nav-link-left'); 
				const res = hexToRGB('#181949');
				expect(navLink.style.color).toEqual(res)
			})      
		})
 
		describe('right nav links', () => {
			it('should render', () => {
				const navLinks = container.querySelectorAll('.nav-link-right');
				expect(navLinks.length).toEqual(navLinkRightNames.length)
			})

			it('right nav links should have "fontFamily" : "Noto Sans, sans-serif"', () => {
				const navLinks = container.querySelectorAll('.nav-link-right');
				navLinks.forEach(navLink => {
					expect(navLink.style.fontFamily).toEqual('Noto Sans, sans-serif')
				})
			})

			it('right nav links should have "fontSize" : "14px"', () => {
				const navLinks = container.querySelectorAll('.nav-link-right');
				navLinks.forEach(navLink => {
					expect(navLink.style.fontSize).toEqual('14px')
				})
			})

			it('right nav links should have "fontStyle" : "normal"', () => {
				const navLinks = container.querySelectorAll('.nav-link-right');
				navLinks.forEach(navLink => {
					expect(navLink.style.fontStyle).toEqual('normal')
				})
			})

			it('right nav links should have "fontWeight" : "400"', () => {
				const navLinks = container.querySelectorAll('.nav-link-right');
				navLinks.forEach(navLink => {
					expect(navLink.style.fontWeight).toEqual('400')
				})
			})

			it('right nav links should have "lineHeight" : "19px"', () => {
				const navLinks = container.querySelectorAll('.nav-link-right');
				navLinks.forEach(navLink => {
					expect(navLink.style.lineHeight).toEqual('19px')
				})
			})
		})  
	})
})  

/* ======================================= Options Bar ================================ */
describe('.options-bar', () => {
	it('should render all options', () => {
		const options = document.querySelectorAll('.option-container');
		expect(options.length).toEqual(optionNames.length) 

		options.forEach((option, i) => {
			const heading = option.querySelector('.option-heading');
			expect(heading.textContent).toEqual(optionNames[i])
		})
	})

	describe('background', () => {
		it('should have "background": "#181949"', () => {
			const optionsBar = document.querySelector('.options-bar');
			const res = hexToRGB('#181949');

			expect(optionsBar.style.background).toEqual(res)
		})
	})
	
	describe('option heading styles', () => {
		it('option headings should have "fontFamily": "Roboto, sans-serif"', () => {
			const optionHeadings = document.querySelectorAll('.option-heading');

			optionHeadings.forEach(optionHeading => {
				expect(optionHeading.style.fontFamily).toEqual('Roboto, sans-serif')
			})
		})

		it('option headings should have "fontSize" : "14px"', () => {
			const optionHeadings = document.querySelectorAll('.option-heading');

			optionHeadings.forEach(optionHeading => {
				expect(optionHeading.style.fontSize).toEqual('14px')
			})
		})

		it('option headings should have "fontStyle" : "normal"', () => {
			const optionHeadings = document.querySelectorAll('.option-heading');

			optionHeadings.forEach(optionHeading => {
				expect(optionHeading.style.fontStyle).toEqual('normal')
			})
		})

		it('option headings should have "fontWeight" : "400"', () => {
			const optionHeadings = document.querySelectorAll('.option-heading');

			optionHeadings.forEach(optionHeading => {
				expect(optionHeading.style.fontWeight).toEqual('400')
			})
		})

		it('option headings should have "lineHeight" : "16px"', () => {
			const optionHeadings = document.querySelectorAll('.option-heading');

			optionHeadings.forEach(optionHeading => {
				expect(optionHeading.style.lineHeight).toEqual('16px')
			})
		}) 
	})
	
	it('options should have chevron-icon', () => {
		const options = document.querySelectorAll('.option-container');
		
		options.forEach(option => {
			const check = option.querySelector('.chevron-icon');
			expect(check).not.toEqual(null)
		})
	}) 
})

/* ======================================= Chevron Icons ================================ */
describe('.chevron-icon', () => {
	it('chevron-icon should have "width" : "8px"', () => {
		const chevronIcons = document.querySelectorAll('.chevron-icon');

		chevronIcons.forEach(chevronIcon => {
			expect(chevronIcon.style.width).toEqual('8px')
		})
	}) 

	it('chevron-icon should have "height" : "6px"', () => {
		const chevronIcons = document.querySelectorAll('.chevron-icon');

		chevronIcons.forEach(chevronIcon => {
			expect(chevronIcon.style.height).toEqual('6px')
		})
	})

	it('chevron-icon should have "background" : "#CFE5FF"', () => {
		const chevronIcons = document.querySelectorAll('.chevron-icon');
		const target = hexToRGB('#CFE5FF');

		chevronIcons.forEach(chevronIcon => {
			expect(chevronIcon.style.background).toEqual(target)
		})
	})
}) 