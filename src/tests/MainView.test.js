import React from 'react';
import { render, unmountComponentAtNode } from 'react-dom';
import { act, Simulate } from 'react-dom/test-utils';  
import MainView from './../components/MainView.jsx';
import { 
  mainViewButtonSelectedStyle,
  mainViewButtonDeselectedStyle, 
} from './../styles/MainView.js';
import { 
	hexToRGB, 
	getAllChildren, 
	getObjectFromStyle,
	testObjectsForEquality,
	makeObjectKeysLowerCase,
} from './../utils/testUtils.js';

// =================================== Consts & Vars =================================== //
let container;

// .main-view-left
const mainViewLeftText = 'Asia IT Market Place';

// .main-view-right
const mainViewButtonsText = ['Now', 'Future'];
const mainViewInfoText = {
	now: [
		{number: '6', text: 'different IT Software Networks'},
		{number: '32', text: 'partners'},
		{number: '4', text: 'countries'}
	],
	future: [
		{number: '7', text: 'different IT Software Networks'},
		{number: '50', text: 'partners'},
		{number: '6', text: 'countries'}
	]
};
 
// =================================== Setup / Teardown ================================= //
beforeEach(() => {
	container = document.createElement('div');
	document.body.appendChild(container)
	act(() => { render(<MainView/>, container)}) 
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

	describe('text', () => {
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

	describe('main-view-buttons', () => {
		describe('on render', () => {
			it(`main-view-buttons should have text "${mainViewButtonsText}"`, () => {
				const mainViewButtons = document.querySelectorAll('.main-view-button');
				expect(mainViewButtons.length).toEqual(mainViewButtonsText.length)

				mainViewButtons.forEach((mainViewButton, i) => { 
					expect(mainViewButton.textContent).toEqual(mainViewButtonsText[i])
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
	})

	describe('.main-view-info-container', () => {
		it(`main-view-info-container should have number and text pairings : "${mainViewInfoText.now.map(info => {
			return `${info.number} : ${info.text}`;
		})}"`, () => {
			const mainViewInfoDivs = document.querySelectorAll('.main-view-info');
			expect(mainViewInfoDivs.length).toEqual(mainViewInfoText.now.length)

			mainViewInfoDivs.forEach((mainViewInfoDiv, i) => { 
				const number = mainViewInfoDiv.querySelector('.main-view-info-number').textContent;
				const text = mainViewInfoDiv.querySelector('.main-view-info-text').textContent;

				expect(number).toEqual(mainViewInfoText.now[i].number)
				expect(text).toEqual(mainViewInfoText.now[i].text)
			})
		})

		describe('number', () => { 
			it('should have "fontFamily: Noto Sans, sans-serif"', () => {
				const numbers = document.querySelectorAll('.main-view-info-number');

				numbers.forEach(number => {
					expect(number.style.fontFamily).toEqual('Noto Sans, sans-serif')
				})
			})

			it('should have "fontSize: 64px"', () => {
				const numbers = document.querySelectorAll('.main-view-info-number');

				numbers.forEach(number => {
					expect(number.style.fontSize).toEqual('64px')
				})
			}) 

			it('should have "fontStyle: normal"', () => {
				const numbers = document.querySelectorAll('.main-view-info-number');

				numbers.forEach(number => {
					expect(number.style.fontStyle).toEqual('normal')
				})
			}) 

			it('should have "fontWeight: 700"', () => {
				const numbers = document.querySelectorAll('.main-view-info-number');

				numbers.forEach(number => {
					expect(number.style.fontWeight).toEqual('700')
				})
			})    

			it('should have "lineHeight: 87px"', () => {
				const numbers = document.querySelectorAll('.main-view-info-number');

				numbers.forEach(number => {
					expect(number.style.lineHeight).toEqual('87px')
				})
			})

			it('should have "color: #CFE5FF"', () => {
				const numbers = document.querySelectorAll('.main-view-info-number');
				const res = hexToRGB('#CFE5FF')

				numbers.forEach(number => {
					expect(number.style.color).toEqual(res)
				})
			}) 
		})

		describe('text', () => {
			it('should have "fontFamily: Noto Sans, sans-serif', () => {
				const mainViewText = document.querySelectorAll('.main-view-info-text');

				mainViewText.forEach(el => {
					expect(el.style.fontFamily).toEqual('Noto Sans, sans-serif')
				})
			})

			it('should have "fontSize: 20px', () => {
				const mainViewText = document.querySelectorAll('.main-view-info-text');

				mainViewText.forEach(el => {
					expect(el.style.fontSize).toEqual('20px')
				})
			})

			it('should have "fontStyle: normal', () => {
				const mainViewText = document.querySelectorAll('.main-view-info-text');

				mainViewText.forEach(el => {
					expect(el.style.fontStyle).toEqual('normal')
				})
			})

			it('should have "fontWeight: 400', () => {
				const mainViewText = document.querySelectorAll('.main-view-info-text');

				mainViewText.forEach(el => {
					expect(el.style.fontWeight).toEqual('400')
				})
			})

			it('should have "lineHeight: 27px', () => {
				const mainViewText = document.querySelectorAll('.main-view-info-text');

				mainViewText.forEach(el => {
					expect(el.style.lineHeight).toEqual('27px')
				})
			})

			it('should have "textAlign: center', () => {
				const mainViewText = document.querySelectorAll('.main-view-info-text');

				mainViewText.forEach(el => {
					expect(el.style.textAlign).toEqual('center')
				})
			})

			it('should have "color: #FFFFFF', () => {
				const mainViewText = document.querySelectorAll('.main-view-info-text');
				const res = hexToRGB('#FFFFFF');

				mainViewText.forEach(el => {
					expect(el.style.color).toEqual(res)
				})
			})
		}) 
	})
})