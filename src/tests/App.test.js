import React from 'react';
import { render, unmountComponentAtNode } from 'react-dom';
import { act } from 'react-dom/test-utils';
import App from './../App.jsx';

let container;
const navLinkNames = ['Home', 'Auto Homepage', 'Sales', 'CRM', 'Electronic office', 'Cloud ERP', 'SSL'];
const optionNames = ['EN', 'Company', 'Partner Market Place'];

function hexToRGB(hex) {
	hex = hex.replace('#', '');
	const aRgbHex = hex.match(/.{1,2}/g);
	const a =  parseInt(aRgbHex[0], 16);
	const b =  parseInt(aRgbHex[1], 16);
  const c = parseInt(aRgbHex[2], 16);

  return `rgb(${a}, ${b}, ${c})`;
}

function containsTextContent(nodes, text) {
	return Array.from(nodes).some(node => node.textContent === text);
} 

beforeEach(() => {
	container = document.createElement('div');
	document.body.appendChild(container)
	act(() => { render(<App/>, container)}) 
})

afterEach(() => {
	unmountComponentAtNode(container)
})

test.todo('check font loads')
test.todo('test hexToRGB fn')
test.todo('test elements ordered correctly')
test.todo('test containsTextContent')

describe('<App/>', () => {
	/* ======================================= Header ======================================= */
	describe('<Header/>', () => {
		it('should render header', () => {
			const header = container.querySelector('header'); 
			expect(header).not.toEqual(null)
		}) 

		describe('header-left', () => {
			it('should have "background": "#FFFFFF"', () => {
				const optionsBar = document.querySelector('.header-left');
				const res = hexToRGB('#FFFFFF');

				expect(optionsBar.style.background).toEqual(res)
			}) 
		})

		describe('header-right', () => {
			it('should have "background": "transparent"', () => {
				const optionsBar = document.querySelector('.header-right'); 
				expect(optionsBar.style.background).toEqual('transparent')
			}) 
		})

		describe('logo', () => {
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

		describe('home icon', () => {
			it('home icon should render', () => {
				const homeIcon = container.querySelector('.home-icon');
				expect(homeIcon).not.toEqual(null)
			})  

			it('home icon should have "width" : "16.03px" ', () => {
				const homeIcon = container.querySelector('.home-icon');
				expect(homeIcon.style.width).toEqual('16.03px')
			})

			it('home icon should have "height" : "16.72px" ', () => {
				const homeIcon = container.querySelector('.home-icon');
				expect(homeIcon.style.height).toEqual('16.72px')
			})
		})

		describe('nav links', () => {
			it('should render all nav links', () => {
				const navLinks = container.querySelectorAll('.nav-link');
				expect(navLinks.length).toEqual(navLinkNames.length) 

				navLinkNames.forEach(navLinkName => {
					const check = containsTextContent(navLinks, navLinkName); 
					expect(check).toEqual(true)
				})
			})

			describe('nav links', () => {
				describe('left nav link', () => {
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

		describe('options-bar', () => {
			it('should render all options', () => {
				const options = document.querySelectorAll('.option');
				expect(options.length).toEqual(optionNames.length) 
 
				optionNames.forEach(optionName => {
					const check = containsTextContent(options, optionName);
					expect(check).toEqual(true)
				}) 
			})

			it('should have "background": "#181949"', () => {
				const optionsBar = document.querySelector('.options-bar');
				const res = hexToRGB('#181949');

				expect(optionsBar.style.background).toEqual(res)
			})
 
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

			it('options should have chevron-icon', () => {
				const options = document.querySelectorAll('.option');

				options.forEach(option => {
					const check = option.querySelector('.chevron-icon');
					expect(check).not.toEqual(null)
				})
			}) 
		})

		describe('chevron-icons', () => {
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

				chevronIcons.forEach(chevronIcon => {
					const target = hexToRGB('#CFE5FF');
					expect(chevronIcon.style.color).toEqual(target)
				})
			})
		})
	})

	/* ======================================= Main View ==================================== */
	/* ==================== Main View Left */
	describe('.main-view-left', () => {
		describe('background', () => {
			it('should have "background": "#FFFFFF"', () => {
				const mainViewLeft = document.querySelector('.main-view-left');
				const res = hexToRGB('#FFFFFF');
				expect(mainViewLeft.style.background).toEqual(res)
			})
		})

		describe('header', () => {
			it('should have "fontFamily": "Noto Sans, sans-serif"', () => {
				const header = document.querySelector('.main-view-left-header');
				expect(header.style.fontFamily).toEqual('Noto Sans, sans-serif')
			})

			it('should have "fontSize": "56px"', () => {
				const header = document.querySelector('.main-view-left-header');
				expect(header.style.fontSize).toEqual('56px')
			})

			it('should have "fontStyle": "normal"', () => {
				const header = document.querySelector('.main-view-left-header');
				expect(header.style.fontStyle).toEqual('normal')
			})

			it('should have "fontWeight": "700"', () => {
				const header = document.querySelector('.main-view-left-header');
				expect(header.style.fontWeight).toEqual('700')
			})

			it('should have "lineHeight": "76px"', () => {
				const header = document.querySelector('.main-view-left-header');
				expect(header.style.lineHeight).toEqual('76px')
			})

			it('should have "letterSpacing": "0.01em"', () => {
				const header = document.querySelector('.main-view-left-header');
				expect(header.style.letterSpacing).toEqual('0.01em')
			})

			it('should have "color": "#181949"', () => {
				const header = document.querySelector('.main-view-left-header');
				const res = hexToRGB('#181949');
				expect(header.style.color).toEqual(res)
			})
		})
	}) 


	/* ==================== Main View Right */
	describe('.main-view-right', () => {

	})

	/* ======================================= Alert Bar ==================================== */
})