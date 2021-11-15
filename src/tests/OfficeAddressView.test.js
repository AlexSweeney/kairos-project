import React from 'react';
import { render, unmountComponentAtNode } from 'react-dom';
import { act } from 'react-dom/test-utils';
import { hexToRGB, containsTextContent, getAllChildren } from './../utils/testUtils.js';
import OfficeAddressView from './../components/OfficeAddressView.jsx';

/* ======================================= Consts / Vars ================================ */
let container;  

const boxOne = {
	heading: 'Vietnam Office',
	text: [
		/* no space after 'district 3,' due to <br/> in code */
		'14F, APtower, Dien Bien Phu street, district 3,Ho Chi Minh city',
		'Business resigtration: 0315421202',
		'Tel: 028-3520-2367',
		'sales@dkinno.com',
		'Copyright 2021 DaouKiwoom Innocation C0., Ltd',
	],
};

const boxTwo = {
	heading: 'Indonesia Office',
	text: [
		/* no space after 'Sudirman No.54-55,' due to <br/> in code */
		'Menara Mandiri II, Jl. jend. Sudirman No.54-55,South Jakarta, DKI Jakarta 12190, Indonsia',
		'Tel: +62-21-5082-0038',
	],
};

const boxThree = {
	heading: 'Korea Office',
	text: [
		/* no space after 'Bundang-gu,' due to <br/> in code */
		'5th Fl, C-dong, PDC, 242, Pangyo-ro, Bundang-gu,Seongnam-si, Gyeonggi-do, Korea',
	],
};

const boxes = [ boxOne, boxTwo, boxThree ];

/* ======================================= Setup / Teardown ============================= */
beforeEach(() => {
	container = document.createElement('div');
	document.body.appendChild(container)
	act(() => { render(<OfficeAddressView/>, container)}) 
})

afterEach(() => {
	unmountComponentAtNode(container) 
	container = null;
})

/* ======================================= Tests ======================================== */
describe('<OfficeAddressView/>', () => {
	describe('styles', () => {
		describe('border', () => {
			describe('.offices-address-view', () => {
				it('should have "border-top: 1px solid rgba(153, 153, 153, 0.46)"', () => {
					const officesAddressView = document.querySelector('.offices-address-view');

					expect(officesAddressView.style.borderTop).toEqual('1px solid rgba(153, 153, 153, 0.46)')
				})
			})

			describe('.office-address-box', () => {
				describe('before last', () => {
					it('should have "border-right: 2px solid rgba(153, 153, 153, 0.46)"', () => {
						const officeAddressBoxes = document.querySelectorAll('.office-address-box');
						const firstBoxes = Array.from(officeAddressBoxes).slice(0, officeAddressBoxes.length - 1);

						expect(firstBoxes.length).toEqual(boxes.length - 1)

						firstBoxes.forEach(thisBox => {
							expect(thisBox.style.borderRight).toEqual('2px solid rgba(153, 153, 153, 0.46)')
						}) 
					})
				})

				describe('last', () => {
					it('should have "border-right: "', () => {
						const officeAddressBoxes = document.querySelectorAll('.office-address-box'); 
						const lastBox = Array.from(officeAddressBoxes).slice(officeAddressBoxes.length - 1); 
 						
 						// doesn't have inline style, as style is only for border rule
 						// if add adjust test to make sure no border-right style
 						expect(lastBox.style).toEqual(undefined)
					})
				})
			})
		})

		describe('.address-heading', () => {
			it('should have "fontFamily: Noto Sans, sans-serif"', () => {
				const headings = document.querySelectorAll('.address-heading');
				headings.forEach(heading => {
					expect(heading.style.fontFamily).toEqual('Noto Sans, sans-serif')
				})
			})
			
			it('should have "fontSize: 22px"', () => {
				const headings = document.querySelectorAll('.address-heading');
				headings.forEach(heading => {
					expect(heading.style.fontSize).toEqual('22px')
				})
			})
			
			it('should have "fontStyle: normal"', () => {
				const headings = document.querySelectorAll('.address-heading');
				headings.forEach(heading => {
					expect(heading.style.fontStyle).toEqual('normal')
				})
			})
			
			it('should have "fontWeight: 500"', () => {
				const headings = document.querySelectorAll('.address-heading');
				headings.forEach(heading => {
					expect(heading.style.fontWeight).toEqual('500')
				})
			})
			
			it('should have "lineHeight: 30px"', () => {
				const headings = document.querySelectorAll('.address-heading');
				headings.forEach(heading => {
					expect(heading.style.lineHeight).toEqual('30px')
				})
			})
			
			it('should have "letterSpacing: -0.3px"', () => {
				const headings = document.querySelectorAll('.address-heading');
				headings.forEach(heading => {
					expect(heading.style.letterSpacing).toEqual('-0.3px')
				})
			})
			
			it('should have "textAlign: left"', () => {
				const headings = document.querySelectorAll('.address-heading');
				headings.forEach(heading => {
					expect(heading.style.textAlign).toEqual('left')
				})
			}) 
		})

		describe('.address-text', () => {
			it('should have "fontFamily: Noto Sans, sans-serif"', () => {
				const textNodes = document.querySelectorAll('.address-text');

				textNodes.forEach(textNode => {
					expect(textNode.style.fontFamily).toEqual('Noto Sans, sans-serif')
				})
			})
			
			it('should have "fontSize: 14px"', () => {
				const textNodes = document.querySelectorAll('.address-text');

				textNodes.forEach(textNode => {
					expect(textNode.style.fontSize).toEqual('14px')
				})
			})
			
			it('should have "fontStyle: normal"', () => {
				const textNodes = document.querySelectorAll('.address-text');

				textNodes.forEach(textNode => {
					expect(textNode.style.fontStyle).toEqual('normal')
				})
			})
			
			it('should have "fontWeight: 400"', () => {
				const textNodes = document.querySelectorAll('.address-text');

				textNodes.forEach(textNode => {
					expect(textNode.style.fontWeight).toEqual('400')
				})
			})
			
			it('should have "lineHeight: 19px"', () => {
				const textNodes = document.querySelectorAll('.address-text');

				textNodes.forEach(textNode => {
					expect(textNode.style.lineHeight).toEqual('19px')
				})
			})
			
			it('should have "letterSpacing: -0.2px"', () => {
				const textNodes = document.querySelectorAll('.address-text');

				textNodes.forEach(textNode => {
					expect(textNode.style.letterSpacing).toEqual('-0.2px')
				})
			})
			
			it('should have "textAlign: left"', () => {
				const textNodes = document.querySelectorAll('.address-text');

				textNodes.forEach(textNode => {
					expect(textNode.style.textAlign).toEqual('left')
				})
			})
		})
	})

	describe('content', () => {
		/* tested in order => no seperate test for order needed */
		it('should display correct heading and text', () => {
			const officeAddressBoxes = document.querySelectorAll('.office-address-box');

			officeAddressBoxes.forEach((officeAddressBox, i) => {
				const heading = officeAddressBox.querySelector('.address-heading');
				const textNodes = officeAddressBox.querySelectorAll('.address-text');

				expect(heading.textContent).toEqual(boxes[i].heading)

				textNodes.forEach((textNode, y) => {
					expect(textNode.textContent).toEqual(boxes[i].text[y])
				})
			})
		})
	})
})