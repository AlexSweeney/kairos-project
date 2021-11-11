import React from 'react';
import { render, unmountComponentAtNode } from 'react-dom';
import { act } from 'react-dom/test-utils';
import App from './../App.jsx';

let container;
// header
const navLinkNames = ['Home', 'Auto Homepage', 'Sales', 'CRM', 'Electronic office', 'Cloud ERP', 'SSL'];
const optionNames = ['EN', 'Company', 'Partner Market Place'];

// .main-view-left
const mainViewLeftText = 'Asia IT Market Place';

// .main-view-right
const optionsButtonsText = ['Now', 'Future'];
const optionsInfoText = [
	{number: '6', text: 'different IT Software Networks'},
	{number: '32', text: 'partners'},
	{number: '4', text: 'countries'}
];

// .alert-bar
const alertBarText = 'You are now viewing an IT Software that has been verified by over 1 million users.';

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
test.todo('page loading options - prevent jerky background picture load')

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
			it(`should have text ${mainViewLeftText}`, () => {
				const header = document.querySelector('.main-view-left-header');
				expect(header.textContent).toEqual(mainViewLeftText)
			})

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
		describe('background', () => {
			it('should have "backgroundImage": "url(background-image.jpg)"', () => {
				const mainViewRight = document.querySelector('.main-view-right');

				expect(mainViewRight.style.backgroundImage).toEqual('url(background-image.jpg)')
			})

			it('should have "backgroundSize": "cover"', () => {
				const mainViewRight = document.querySelector('.main-view-right');

				expect(mainViewRight.style.backgroundSize).toEqual('cover')
			})
		}) 

		describe('options-buttons', () => {
			it(`options-buttons should have text "${optionsButtonsText}"`, () => {
				const optionButtons = document.querySelectorAll('.option-button');
				expect(optionButtons.length).toEqual(optionsButtonsText.length)

				optionsButtonsText.forEach(optionButtonText => {
					const res = containsTextContent(optionButtons, optionButtonText)
					expect(res).toEqual(true)
				})
			})

			it('should have "fontFamily" : "Noto Sans, sans-serif" ', () => {
				const optionButtons = document.querySelectorAll('.option-button');

				optionButtons.forEach(optionButton => {
					expect(optionButton.style.fontFamily).toEqual('Noto Sans, sans-serif')
				})
			})

			it('should have "fontSize" : "22px" ', () => {
				const optionButtons = document.querySelectorAll('.option-button');

				optionButtons.forEach(optionButton => {
					expect(optionButton.style.fontSize).toEqual('22px')
				})
			})

			it('should have "fontStyle" : "SemiBold" ', () => {
				const optionButtons = document.querySelectorAll('.option-button');

				optionButtons.forEach(optionButton => {
					expect(optionButton.style.fontStyle).toEqual('SemiBold')
				})
			})  

			it('should have "fontWeight" : "600" ', () => {
				const optionButtons = document.querySelectorAll('.option-button');

				optionButtons.forEach(optionButton => {
					expect(optionButton.style.fontWeight).toEqual('600')
				})
			})   

			it('should have "lineHeight" : "30px" ', () => {
				const optionButtons = document.querySelectorAll('.option-button');

				optionButtons.forEach(optionButton => {
					expect(optionButton.style.lineHeight).toEqual('30px')
				})
			})  

			it('should have "background" : "transparent" ', () => {
				const optionButtons = document.querySelectorAll('.option-button');

				optionButtons.forEach(optionButton => {
					expect(optionButton.style.background).toEqual('transparent')
				})
			})  

			it('should have "width" : "124.42px" ', () => {
				const optionButtons = document.querySelectorAll('.option-button');

				optionButtons.forEach(optionButton => {
					expect(optionButton.style.width).toEqual('124.42px')
				})
			})  

			it('should have "paddingBottom" : "16px" ', () => {
				const optionButtons = document.querySelectorAll('.option-button');

				optionButtons.forEach(optionButton => {
					expect(optionButton.style.paddingBottom).toEqual('16px')
				})
			})  

			describe('selected option button', () => {
				it('should have "opacity": "1"', () => {
					const optionButtons = document.querySelectorAll('.option-button-selected');

					optionButtons.forEach(optionButton => {
						expect(optionButton.style.opacity).toEqual('1')
					})
				})

				it('should have "borderBottom": "1.5px solid #CFE5FF"', () => {
					const optionButtons = document.querySelectorAll('.option-button-selected');

					optionButtons.forEach(optionButton => {
						expect(optionButton.style.borderBottom).toEqual('1.5px solid #CFE5FF')
					})
				})
			})

			describe('unselected option button', () => {
				it('should have "opacity": "0.5"', () => {
					const optionButtons = document.querySelectorAll('.option-button-deselected');

					optionButtons.forEach(optionButton => {
						expect(optionButton.style.opacity).toEqual('0.5')
					})
				})
			})
		})

		describe('options-info', () => {
			it(`options-info should have number and text pairings : "${optionsInfoText.map(option => {
				return `${option.number} : ${option.text}`;
			})}"`, () => {
				const optionInfoDivs = document.querySelectorAll('.option-info');
				expect(optionInfoDivs.length).toEqual(optionsInfoText.length)

				optionInfoDivs.forEach((optionInfoDiv, i) => {
					const number = optionInfoDiv.querySelector('.option-number').textContent;
					const text = optionInfoDiv.querySelector('.option-text').textContent;

					expect(number).toEqual(optionsInfoText[i].number)
					expect(text).toEqual(optionsInfoText[i].text)
				})
			})

			describe('number', () => { 
				it('should have "fontFamily: Noto Sans, sans-serif"', () => {
					const numbers = document.querySelectorAll('.option-number');

					numbers.forEach(number => {
						expect(number.style.fontFamily).toEqual('Noto Sans, sans-serif')
					})
				})

				it('should have "fontSize: 64px"', () => {
					const numbers = document.querySelectorAll('.option-number');

					numbers.forEach(number => {
						expect(number.style.fontSize).toEqual('64px')
					})
				}) 

				it('should have "fontStyle: normal"', () => {
					const numbers = document.querySelectorAll('.option-number');

					numbers.forEach(number => {
						expect(number.style.fontStyle).toEqual('normal')
					})
				}) 

				it('should have "fontWeight: 700"', () => {
					const numbers = document.querySelectorAll('.option-number');

					numbers.forEach(number => {
						expect(number.style.fontWeight).toEqual('700')
					})
				})    

				it('should have "lineHeight: 87px"', () => {
					const numbers = document.querySelectorAll('.option-number');

					numbers.forEach(number => {
						expect(number.style.lineHeight).toEqual('87px')
					})
				})

				it('should have "color: #CFE5FF"', () => {
					const numbers = document.querySelectorAll('.option-number');
					const res = hexToRGB('#CFE5FF')

					numbers.forEach(number => {
						expect(number.style.color).toEqual(res)
					})
				}) 
			})

			describe('text', () => {
				it('should have "fontFamily: Noto Sans, sans-serif', () => {
					const optionText = document.querySelectorAll('.option-text');

					optionText.forEach(el => {
						expect(el.style.fontFamily).toEqual('Noto Sans, sans-serif')
					})
				})

				it('should have "fontSize: 20px', () => {
					const optionText = document.querySelectorAll('.option-text');

					optionText.forEach(el => {
						expect(el.style.fontSize).toEqual('20px')
					})
				})

				it('should have "fontStyle: normal', () => {
					const optionText = document.querySelectorAll('.option-text');

					optionText.forEach(el => {
						expect(el.style.fontStyle).toEqual('normal')
					})
				})

				it('should have "fontWeight: 400', () => {
					const optionText = document.querySelectorAll('.option-text');

					optionText.forEach(el => {
						expect(el.style.fontWeight).toEqual('400')
					})
				})

				it('should have "lineHeight: 27px', () => {
					const optionText = document.querySelectorAll('.option-text');

					optionText.forEach(el => {
						expect(el.style.lineHeight).toEqual('27px')
					})
				})

				it('should have "textAlign: center', () => {
					const optionText = document.querySelectorAll('.option-text');

					optionText.forEach(el => {
						expect(el.style.textAlign).toEqual('center')
					})
				})

				it('should have "color: #FFFFFF', () => {
					const optionText = document.querySelectorAll('.option-text');
					const res = hexToRGB('#FFFFFF');

					optionText.forEach(el => {
						expect(el.style.color).toEqual(res)
					})
				})
			}) 
		})
	}) 
	/* ======================================= Alert Bar ==================================== */
	describe('.alert-bar', () => {
		describe('background', () => {
			it('should have "background: #FFD1E8"', () => {
				const alertBar = document.querySelector('.alert-bar');
				const res = hexToRGB('#FFD1E8');

				expect(alertBar.style.background).toEqual(res)
			})
		})

		describe('text', () => {
			it(`should have heading ${alertBarText}`, () => {

			})

			describe('non bold', () => {
				
			})

			describe('non bold styles', () => {

			})
		})
	})
})