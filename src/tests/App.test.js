import React from 'react';
import { render, unmountComponentAtNode } from 'react-dom';
import { act } from 'react-dom/test-utils';
import { hexToRGB, containsTextContent, getAllChildren } from './../utils/testUtils.js';
import App from './../App.jsx';

let container;
// header
const navLinkNames = ['Home', 'Auto Homepage', 'Sales', 'CRM', 'Electronic office', 'Cloud ERP', 'SSL'];
const optionNames = ['EN', 'Company', 'Partner Market Place'];

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