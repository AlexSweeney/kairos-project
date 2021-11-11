import React from 'react';
import { render, unmountComponentAtNode } from 'react-dom';
import { act } from 'react-dom/test-utils';
import { hexToRGB, containsTextContent, getAllChildren } from './../utils/testUtils.js';
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
const alertBarTextNonBold = ['You are now viewing an ', 'that has been verified by '];
const alertBarTextBold = ['IT Software', 'over 1 million users.'];

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
				const alertBarHeading = document.querySelector('.alert-bar-heading');
				expect(alertBarHeading.textContent).toEqual(alertBarText)
			})

			it('should have "fontFamily" : "Noto Sans, sans-serif"', () => {
				const alertBarHeading = document.querySelector('.alert-bar-heading');
				expect(alertBarHeading.style.fontFamily).toEqual('Noto Sans, sans-serif')
			})

			it('should have "fontSize" : "24px"', () => {
				const alertBarHeading = document.querySelector('.alert-bar-heading');
				expect(alertBarHeading.style.fontSize).toEqual('24px')
			})

			it('should have "fontStyle" : "normal"', () => {
				const alertBarHeading = document.querySelector('.alert-bar-heading');
				expect(alertBarHeading.style.fontStyle).toEqual('normal')
			})

			it('should have "lineHeight" : "33px"', () => {
				const alertBarHeading = document.querySelector('.alert-bar-heading');
				expect(alertBarHeading.style.lineHeight).toEqual('33px')
			})

			it('should have "textAlign" : "center"', () => {
				const alertBarHeading = document.querySelector('.alert-bar-heading');
				expect(alertBarHeading.style.textAlign).toEqual('center')
			})
     
			describe('non bold', () => {
				it(`The words "${alertBarTextNonBold}" should not be inside <em></em> tags`, () => {
					const alertBar = document.querySelector('.alert-bar');
					const boldTags = alertBar.querySelectorAll('em');

					alertBarTextNonBold.forEach(thisText => {
						const isBold = Array.from(boldTags).some(boldTag => {
							return boldTag.textContent === thisText;
						});

						expect(isBold).toEqual(false)
					}) 
				})

				it('non bold words should have "fontWeight" : "400"', () => {
					/* 
					** the <em></em> tags are inside heading tags, so the rules for the bold tags will override the heading styles 
					** => search for tags with text that are not in <em></em> tags
					*/
					const alertBar = document.querySelector('.alert-bar');
					const boldTags = alertBar.querySelectorAll('em');
					const nonBoldTags = getAllChildren(alertBar).filter(child => { 
						const thisText = child.textContent;
						const isBold = Array.from(boldTags).some(boldTag => {
							return boldTag.textContent === thisText
						});
						return thisText && !isBold;
					});

					nonBoldTags.forEach(nonBoldTag => { 
						expect(nonBoldTag.style.fontWeight).toEqual('400') 
					}) 
				})
			})

			describe('bold', () => {
				it(`The words "${alertBarTextBold}" should be inside <em></em> tags`, () => {
					const alertBarHeading = document.querySelector('.alert-bar-heading');
					const boldTags = alertBarHeading.getElementsByTagName('em');

					expect(boldTags.length).toEqual(alertBarTextBold.length)

					Array.from(boldTags).forEach((boldTag, i) => {
						expect(boldTag.textContent).toEqual(alertBarTextBold[i])
					})
				})

				it('should have "fontWeight" : "700"', () => {
					const alertBarHeading = document.querySelector('.alert-bar-heading');
					const boldTags = alertBarHeading.getElementsByTagName('em');

					Array.from(boldTags).forEach((boldTag, i) => {
						expect(boldTag.style.fontWeight).toEqual('700')
					}) 
				})
			})
		})
	})
	/* ======================================= Icon views =================================== */
	describe('.icon-view', () => {
		describe('.info-box-heading', () => {
			it('should have "fontFamily": "Manrope, sans-serif"', () => {
				const infoBoxHeadings = document.querySelectorAll('.info-box-heading');

				infoBoxHeadings.forEach(infoBoxHeading => {
					expect(infoBoxHeading.style.fontFamily).toEqual('Manrope, sans-serif')
				})
			})

			it('should have "fontSize": "32px"', () => {
				const infoBoxHeadings = document.querySelectorAll('.info-box-heading');

				infoBoxHeadings.forEach(infoBoxHeading => {
					expect(infoBoxHeading.style.fontSize).toEqual('32px')
				})
			})

			it('should have "fontStyle": "normal"', () => {
				const infoBoxHeadings = document.querySelectorAll('.info-box-heading');

				infoBoxHeadings.forEach(infoBoxHeading => {
					expect(infoBoxHeading.style.fontStyle).toEqual('normal')
				})
			})

			it('should have "fontWeight": "700"', () => {
				const infoBoxHeadings = document.querySelectorAll('.info-box-heading');

				infoBoxHeadings.forEach(infoBoxHeading => {
					expect(infoBoxHeading.style.fontWeight).toEqual('700')
				})
			})

			it('should have "lineHeight": "44px"', () => {
				const infoBoxHeadings = document.querySelectorAll('.info-box-heading');

				infoBoxHeadings.forEach(infoBoxHeading => {
					expect(infoBoxHeading.style.lineHeight).toEqual('44px')
				})
			})

			it('should have "textAlign": "center"', () => {
				const infoBoxHeadings = document.querySelectorAll('.info-box-heading');

				infoBoxHeadings.forEach(infoBoxHeading => {
					expect(infoBoxHeading.style.textAlign).toEqual('center')
				})
			})

			it('should have "color": "#181949"', () => {
				const infoBoxHeadings = document.querySelectorAll('.info-box-heading');
				const res = hexToRGB('#181949');

				infoBoxHeadings.forEach(infoBoxHeading => {
					expect(infoBoxHeading.style.color).toEqual(res)
				})
			})
		})      
   
		describe('.info-box-text', () => {
			it('should have "fontFamily : Noto Sans, sans-serif"', () => {
				const infoBoxTextElements = document.querySelectorAll('.info-box-text');

				infoBoxTextElements.forEach(infoBoxTextElement => {
					expect(infoBoxTextElement.style.fontFamily).toEqual('Noto Sans, sans-serif')
				})
			})

			it('should have "fontSize: 16px"', () => {
				const infoBoxTextElements = document.querySelectorAll('.info-box-text');

				infoBoxTextElements.forEach(infoBoxTextElement => {
					expect(infoBoxTextElement.style.fontSize).toEqual('16px')
				})
			})

			it('should have "fontStyle: normal"', () => {
				const infoBoxTextElements = document.querySelectorAll('.info-box-text');

				infoBoxTextElements.forEach(infoBoxTextElement => {
					expect(infoBoxTextElement.style.fontStyle).toEqual('normal')
				})
			})    

			it('should have "fontWeight : 400"', () => {
				const infoBoxTextElements = document.querySelectorAll('.info-box-text');

				infoBoxTextElements.forEach(infoBoxTextElement => {
					expect(infoBoxTextElement.style.fontWeight).toEqual('400')
				})
			})

			it('should have "lineHeight : 22px"', () => {
				const infoBoxTextElements = document.querySelectorAll('.info-box-text');

				infoBoxTextElements.forEach(infoBoxTextElement => {
					expect(infoBoxTextElement.style.lineHeight).toEqual('22px')
				})
			}) 

			it('should have "textAlign : center"', () => {
				const infoBoxTextElements = document.querySelectorAll('.info-box-text');

				infoBoxTextElements.forEach(infoBoxTextElement => {
					expect(infoBoxTextElement.style.textAlign).toEqual('center')
				})
			})

			it('should have "color : #666666"', () => {
				const infoBoxTextElements = document.querySelectorAll('.info-box-text');
				const res = hexToRGB('#666666');

				infoBoxTextElements.forEach(infoBoxTextElement => {
					expect(infoBoxTextElement.style.color).toEqual(res)
				})
			})
		})

		describe('.info-button', () => {
			describe('button', () => {
				it('should have "height: 32px" ', () => {
					const infoButtons = document.querySelectorAll('.info-button');

					infoButtons.forEach(infoButton => {
						expect(infoButton.style.height).toEqual('32px')
					})
				}) 

				// different that figma specs to prevent text wrapping
				it('should have "width: 90px"', () => {
					const infoButtons = document.querySelectorAll('.info-button');

					infoButtons.forEach(infoButton => {
						expect(infoButton.style.width).toEqual('90px')
					})
				}) 

				it('should have "borderRadius: 8px"', () => {
					const infoButtons = document.querySelectorAll('.info-button');

					infoButtons.forEach(infoButton => {
						expect(infoButton.style.borderRadius).toEqual('8px')
					})
				})  

				it('should have "padding: 8px 16px"', () => {
					const infoButtons = document.querySelectorAll('.info-button');

					infoButtons.forEach(infoButton => {
						expect(infoButton.style.padding).toEqual('8px 16px')
					})
				}) 

				it('should have "background: #181949"', () => {
					const infoButtons = document.querySelectorAll('.info-button');
					const res = hexToRGB('#181949')

					infoButtons.forEach(infoButton => {
						expect(infoButton.style.background).toEqual(res)
					})
				}) 
			})

			describe.only('text', () => {
				it('should have "fontFamily: Noto Sans, sans-serif"', () => {
					const infoButtons = document.querySelectorAll('.info-button');

					infoButtons.forEach(infoButton => {
						expect(infoButton.style.fontFamily).toEqual('Noto Sans, sans-serif')
					})
				})

				it('should have "fontSize: 16px"', () => {
					const infoButtons = document.querySelectorAll('.info-button');

					infoButtons.forEach(infoButton => {
						expect(infoButton.style.fontSize).toEqual('16px')
					})
				})
				 
				it('should have "fontStyle: normal"', () => {
					const infoButtons = document.querySelectorAll('.info-button');

					infoButtons.forEach(infoButton => {
						expect(infoButton.style.fontStyle).toEqual('normal')
					})
				})
				 
				it('should have "fontWeight: 600"', () => {
					const infoButtons = document.querySelectorAll('.info-button');

					infoButtons.forEach(infoButton => {
						expect(infoButton.style.fontWeight).toEqual('600')
					})
				})
				 
				it('should have "lineHeight: 16px"', () => {
					const infoButtons = document.querySelectorAll('.info-button');

					infoButtons.forEach(infoButton => {
						expect(infoButton.style.lineHeight).toEqual('16px')
					})
				})

				it('should have "letterSpacing: 0px"', () => {
					const infoButtons = document.querySelectorAll('.info-button');

					infoButtons.forEach(infoButton => {
						expect(infoButton.style.letterSpacing).toEqual('0px')
					})
				})
				
				it('should have "textAlign: center"', () => {
					const infoButtons = document.querySelectorAll('.info-button');

					infoButtons.forEach(infoButton => {
						expect(infoButton.style.textAlign).toEqual('center')
					})
				})

				it('should have "color: #FFFFFF"', () => {
					const infoButtons = document.querySelectorAll('.info-button');
					const res = hexToRGB('#FFFFFF')

					infoButtons.forEach(infoButton => {
						expect(infoButton.style.color).toEqual(res)
					})
				}) 
			})  
		})
		
		describe('.screen-icon', () => {
			it('.screen-icon should have "width: "', () => {

			})

			it('.screen-icon should have "height: "', () => {
				
			})
		})
	})

	/* ======================================= IT cloud view ================================ */
	describe('.it-cloud-view', () => {
		describe('background', () => {

		})

		describe('icon', () => {
			
		})

		describe('heading', () => {
			
		})

		describe('buttons', () => {
			
		})
	}) 
})