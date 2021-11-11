import React from 'react';
import { render, unmountComponentAtNode } from 'react-dom';
import { act } from 'react-dom/test-utils';
import { hexToRGB, containsTextContent, getAllChildren } from './../utils/testUtils.js';

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
				const mainViewButtons = document.querySelectorAll('.main-view-button');
				expect(mainViewButtons.length).toEqual(optionsButtonsText.length)

				optionsButtonsText.forEach(mainViewButtonText => {
					const res = containsTextContent(mainViewButtons, mainViewButtonText)
					expect(res).toEqual(true)
				})
			})

			it('should have "fontFamily" : "Noto Sans, sans-serif" ', () => {
				const mainViewButtons = document.querySelectorAll('.main-view-button');

				mainViewButtons.forEach(mainViewButton => {
					expect(mainViewButton.style.fontFamily).toEqual('Noto Sans, sans-serif')
				})
			})

			it('should have "fontSize" : "22px" ', () => {
				const mainViewButtons = document.querySelectorAll('.main-view-button');

				mainViewButtons.forEach(mainViewButton => {
					expect(mainViewButton.style.fontSize).toEqual('22px')
				})
			})

			it('should have "fontStyle" : "SemiBold" ', () => {
				const mainViewButtons = document.querySelectorAll('.main-view-button');

				mainViewButtons.forEach(mainViewButton => {
					expect(mainViewButton.style.fontStyle).toEqual('SemiBold')
				})
			})  

			it('should have "fontWeight" : "600" ', () => {
				const mainViewButtons = document.querySelectorAll('.main-view-button');

				mainViewButtons.forEach(mainViewButton => {
					expect(mainViewButton.style.fontWeight).toEqual('600')
				})
			})   

			it('should have "lineHeight" : "30px" ', () => {
				const mainViewButtons = document.querySelectorAll('.main-view-button');

				mainViewButtons.forEach(mainViewButton => {
					expect(mainViewButton.style.lineHeight).toEqual('30px')
				})
			})  

			it('should have "background" : "transparent" ', () => {
				const mainViewButtons = document.querySelectorAll('.main-view-button');

				mainViewButtons.forEach(mainViewButton => {
					expect(mainViewButton.style.background).toEqual('transparent')
				})
			})  

			it('should have "width" : "124.42px" ', () => {
				const mainViewButtons = document.querySelectorAll('.main-view-button');

				mainViewButtons.forEach(mainViewButton => {
					expect(mainViewButton.style.width).toEqual('124.42px')
				})
			})  

			it('should have "paddingBottom" : "16px" ', () => {
				const mainViewButtons = document.querySelectorAll('.main-view-button');

				mainViewButtons.forEach(mainViewButton => {
					expect(mainViewButton.style.paddingBottom).toEqual('16px')
				})
			})  

			describe('selected option button', () => {
				it('should have "opacity": "1"', () => {
					const mainViewButtons = document.querySelectorAll('.main-view-button-selected');

					mainViewButtons.forEach(mainViewButton => {
						expect(mainViewButton.style.opacity).toEqual('1')
					})
				})

				it('should have "borderBottom": "1.5px solid #CFE5FF"', () => {
					const mainViewButtons = document.querySelectorAll('.main-view-button-selected');

					mainViewButtons.forEach(mainViewButton => {
						expect(mainViewButton.style.borderBottom).toEqual('1.5px solid #CFE5FF')
					})
				})
			})

			describe('unselected option button', () => {
				it('should have "opacity": "0.5"', () => {
					const mainViewButtons = document.querySelectorAll('.main-view-button-deselected');

					mainViewButtons.forEach(mainViewButton => {
						expect(mainViewButton.style.opacity).toEqual('0.5')
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