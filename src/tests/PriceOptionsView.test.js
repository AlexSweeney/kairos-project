import React from 'react';
import { render, unmountComponentAtNode } from 'react-dom';
import { act } from 'react-dom/test-utils';
import { hexToRGB, containsTextContent, getAllChildren } from './../utils/testUtils.js';
import PriceOptionsView from './../components/PriceOptionsView.jsx';

/* ======================================= Consts / Vars ================================ */
let container;  

const boxOne = {
	heading: 'Free Test',
	subheading: 'Organize across all apps by hand',
	priceNumber: '0',
	priceUnit: '$',
	priceLabel: 'Per Month',
};

const boxTwo = {
	heading: 'Low Price',
	subheading: 'Monthly Fixed Amount',
	priceNumber: '200.000',
	priceUnit: '$',
	priceLabel: 'Per Month',
};

const boxThree = {
	heading: 'Easy Using Methods',
	subheading: 'Various Manuals',
	priceNumber: '200.000',
	priceUnit: '$',
	priceLabel: 'Per Month',
};

const boxFour = {
	heading: 'Verified IT Service',
	subheading: 'On sale in 4 countries',
	priceNumber: '300.000',
	priceUnit: 'VND',
	priceLabel: 'Per Month',
};

const boxes = [boxOne, boxTwo, boxThree, boxFour];

/* ======================================= Setup / Teardown ============================= */
beforeEach(() => {
	container = document.createElement('div');
	document.body.appendChild(container)
	act(() => { render(<PriceOptionsView/>, container)}) 
})

afterEach(() => {
	unmountComponentAtNode(container)
	container = null;
})

/* ======================================= Tests ======================================== */
describe('.price-options-view', () => {
	describe('styles', () => {
		describe('background', () => {
			it('should have "background: #F3F9FF"', () => {
				const priceOptionsView = document.querySelector('.price-options-view');
				const res = hexToRGB('#F3F9FF');

				expect(priceOptionsView.style.background).toEqual(res)
			})
		})

		describe('.price-option-box', () => {
			describe('text style', () => {
				describe('heading', () => {
					it('should have "fontFamily: Roboto, sans-serif"', () => {
						const priceOptionBoxHeadings = document.querySelectorAll('.price-option-box-heading');

						priceOptionBoxHeadings.forEach(priceOptionBoxHeading => {
							expect(priceOptionBoxHeading.style.fontFamily).toEqual('Roboto, sans-serif')
						})
					})  

					it('should have "fontSize: 22px"', () => {
						const priceOptionBoxHeadings = document.querySelectorAll('.price-option-box-heading');

						priceOptionBoxHeadings.forEach(priceOptionBoxHeading => {
							expect(priceOptionBoxHeading.style.fontSize).toEqual('22px')
						})
					})   

					it('should have "fontStyle: normal"', () => {
						const priceOptionBoxHeadings = document.querySelectorAll('.price-option-box-heading');

						priceOptionBoxHeadings.forEach(priceOptionBoxHeading => {
							expect(priceOptionBoxHeading.style.fontStyle).toEqual('normal')
						})
					})  

					it('should have "fontWeight: 700"', () => {
						const priceOptionBoxHeadings = document.querySelectorAll('.price-option-box-heading');

						priceOptionBoxHeadings.forEach(priceOptionBoxHeading => {
							expect(priceOptionBoxHeading.style.fontWeight).toEqual('700')
						})
					})  

					it('should have "lineHeight: 33px"', () => {
						const priceOptionBoxHeadings = document.querySelectorAll('.price-option-box-heading');

						priceOptionBoxHeadings.forEach(priceOptionBoxHeading => {
							expect(priceOptionBoxHeading.style.lineHeight).toEqual('33px')
						})
					})  

					it('should have "letterSpacing: 0.1px"', () => {
						const priceOptionBoxHeadings = document.querySelectorAll('.price-option-box-heading');

						priceOptionBoxHeadings.forEach(priceOptionBoxHeading => {
							expect(priceOptionBoxHeading.style.letterSpacing).toEqual('0.1px')
						})
					}) 

					it('should have "textAlign: left"', () => {
						const priceOptionBoxHeadings = document.querySelectorAll('.price-option-box-heading');

						priceOptionBoxHeadings.forEach(priceOptionBoxHeading => {
							expect(priceOptionBoxHeading.style.textAlign).toEqual('left')
						})
					})
				})

				describe('subheading', () => { 
					it('should have "fontFamily: Roboto, sans-serif"', () => {
						const priceOptionBoxSubheadings = document.querySelectorAll('.price-option-box-subheading');

						priceOptionBoxSubheadings.forEach(priceOptionBoxSubheading => {
							expect(priceOptionBoxSubheading.style.fontFamily).toEqual('Roboto, sans-serif')
						})
					})

					it('should have "fontSize: 12px"', () => {
						const priceOptionBoxSubheadings = document.querySelectorAll('.price-option-box-subheading');

						priceOptionBoxSubheadings.forEach(priceOptionBoxSubheading => {
							expect(priceOptionBoxSubheading.style.fontSize).toEqual('12px')
						})
					})

					it('should have "fontStyle: normal"', () => {
						const priceOptionBoxSubheadings = document.querySelectorAll('.price-option-box-subheading');

						priceOptionBoxSubheadings.forEach(priceOptionBoxSubheading => {
							expect(priceOptionBoxSubheading.style.fontStyle).toEqual('normal')
						})
					})

					it('should have "fontWeight: 700"', () => {
						const priceOptionBoxSubheadings = document.querySelectorAll('.price-option-box-subheading');

						priceOptionBoxSubheadings.forEach(priceOptionBoxSubheading => {
							expect(priceOptionBoxSubheading.style.fontWeight).toEqual('700')
						})
					})

					it('should have "lineHeight: 18px"', () => {
						const priceOptionBoxSubheadings = document.querySelectorAll('.price-option-box-subheading');

						priceOptionBoxSubheadings.forEach(priceOptionBoxSubheading => {
							expect(priceOptionBoxSubheading.style.lineHeight).toEqual('18px')
						})
					})

					it('should have "letterSpacing: 0.1px"', () => {
						const priceOptionBoxSubheadings = document.querySelectorAll('.price-option-box-subheading');

						priceOptionBoxSubheadings.forEach(priceOptionBoxSubheading => {
							expect(priceOptionBoxSubheading.style.letterSpacing).toEqual('0.1px')
						})
					})

					it('should have "textAlign: left"', () => {
						const priceOptionBoxSubheadings = document.querySelectorAll('.price-option-box-subheading');

						priceOptionBoxSubheadings.forEach(priceOptionBoxSubheading => {
							expect(priceOptionBoxSubheading.style.textAlign).toEqual('left')
						})
					}) 
				})

				describe('price', () => {
					describe('number', () => {
						it('should have "fontFamily: Noto Sans, sans-serif"', () => {
							const priceNumbers = document.querySelectorAll('.price-number');

							priceNumbers.forEach(priceNumber => {
								expect(priceNumber.style.fontFamily).toEqual('Noto Sans, sans-serif')
							})
						})
						 
						it('should have "fontStyle: normal"', () => {
							const priceNumbers = document.querySelectorAll('.price-number');

							priceNumbers.forEach(priceNumber => {
								expect(priceNumber.style.fontStyle).toEqual('normal')
							})
						})
						,
						it('should have "fontWeight: 700"', () => {
							const priceNumbers = document.querySelectorAll('.price-number');

							priceNumbers.forEach(priceNumber => {
								expect(priceNumber.style.fontWeight).toEqual('700')
							})
						})
						
						it('should have "lineHeight: 66px"', () => {
							const priceNumbers = document.querySelectorAll('.price-number');

							priceNumbers.forEach(priceNumber => {
								expect(priceNumber.style.lineHeight).toEqual('66px')
							})
						})
						 
						it('should have "letterSpacing: 0.2px"', () => {
							const priceNumbers = document.querySelectorAll('.price-number');

							priceNumbers.forEach(priceNumber => {
								expect(priceNumber.style.letterSpacing).toEqual('0.2px')
							})
						})
						
						it('should have "textAlign: left"', () => {
							const priceNumbers = document.querySelectorAll('.price-number');

							priceNumbers.forEach(priceNumber => {
								expect(priceNumber.style.textAlign).toEqual('left')
							})
						})
						
						it('should have "paddingRight: 5px"', () => {
							const priceNumbers = document.querySelectorAll('.price-number');

							priceNumbers.forEach(priceNumber => {
								expect(priceNumber.style.paddingRight).toEqual('5px')
							})
						}) 
					})

					describe('.price-number-big', () => {
						it('should have "fontSize: 64px"', () => {
							const priceNumberBig = document.querySelector('.price-number-big');

							expect(priceNumberBig.style.fontSize).toEqual('64px')
						})
					})

					describe('.price-number', () => {
						const priceNumbers = document.querySelectorAll('.price-number')
						const smallPriceNumbers = Array.from(priceNumbers).filter(priceNumber => {
							return !priceNumber.className.contains('.price-number-big')
						})

						priceNumbers.forEach(priceNumber => {
							expect(priceNumber.style.fontSize).toEqual('36px')
						}) 
					})

					describe('.price-unit', () => {
						it('should have "fontFamily: Roboto, sans-serif"', () => {
							const priceUnits = document.querySelectorAll('.price-unit');

							priceUnits.forEach(priceUnit => {
								expect(priceUnit.style.fontFamily).toEqual('Roboto, sans-serif')
							})
						})

						it('should have "fontSize: 22px"', () => {
							const priceUnits = document.querySelectorAll('.price-unit');

							priceUnits.forEach(priceUnit => {
								expect(priceUnit.style.fontSize).toEqual('22px')
							})
						})

						it('should have "fontStyle: normal"', () => {
							const priceUnits = document.querySelectorAll('.price-unit');

							priceUnits.forEach(priceUnit => {
								expect(priceUnit.style.fontStyle).toEqual('normal')
							})
						})

						it('should have "fontWeight: 700"', () => {
							const priceUnits = document.querySelectorAll('.price-unit');

							priceUnits.forEach(priceUnit => {
								expect(priceUnit.style.fontWeight).toEqual('700')
							})
						})

						it('should have "lineHeight: 33px"', () => {
							const priceUnits = document.querySelectorAll('.price-unit');

							priceUnits.forEach(priceUnit => {
								expect(priceUnit.style.lineHeight).toEqual('33px')
							})
						})

						it('should have "letterSpacing: 0.1px"', () => {
							const priceUnits = document.querySelectorAll('.price-unit');

							priceUnits.forEach(priceUnit => {
								expect(priceUnit.style.letterSpacing).toEqual('0.1px')
							})
						})

						it('should have "textAlign: left"', () => {
							const priceUnits = document.querySelectorAll('.price-unit');

							priceUnits.forEach(priceUnit => {
								expect(priceUnit.style.textAlign).toEqual('left')
							})
						})
					})

					describe('.price-label', () => { 
						it('should have "fontFamily: Roboto, sans-serif"', () => {
							const priceLabels = document.querySelectorAll('.price-label');

							priceLabels.forEach(priceLabel => {
								expect(priceLabel.style.fontFamily).toEqual('Roboto, sans-serif')
							})
						})

						it('should have "fontSize: 12px"', () => {
							const priceLabels = document.querySelectorAll('.price-label');

							priceLabels.forEach(priceLabel => {
								expect(priceLabel.style.fontSize).toEqual('12px')
							})
						})

						it('should have "fontStyle: normal"', () => {
							const priceLabels = document.querySelectorAll('.price-label');

							priceLabels.forEach(priceLabel => {
								expect(priceLabel.style.fontStyle).toEqual('normal')
							})
						})

						it('should have "fontWeight: 700"', () => {
							const priceLabels = document.querySelectorAll('.price-label');

							priceLabels.forEach(priceLabel => {
								expect(priceLabel.style.fontWeight).toEqual('700')
							})
						})

						it('should have "lineHeight: 18px"', () => {
							const priceLabels = document.querySelectorAll('.price-label');

							priceLabels.forEach(priceLabel => {
								expect(priceLabel.style.lineHeight).toEqual('18px')
							})
						})

						it('should have "letterSpacing: 0.1px"', () => {
							const priceLabels = document.querySelectorAll('.price-label');

							priceLabels.forEach(priceLabel => {
								expect(priceLabel.style.letterSpacing).toEqual('0.1px')
							})
						})

						it('should have "textAlign: left"', () => {
							const priceLabels = document.querySelectorAll('.price-label');

							priceLabels.forEach(priceLabel => {
								expect(priceLabel.style.textAlign).toEqual('left')
							})
						}) 
					})
				}) 
			})

			describe('background', () => {
				describe('.price-option-box', () => {
					it('should have "background: #FFFFFF"', () => {
						const priceOptionBoxes = document.querySelectorAll('.price-option-box');
						const notHightlightBoxes = Array.from(priceOptionBoxes).filter(priceOptionBox => {
							return !priceOptionBox.className.includes('price-option-box-highlight')
						})

						const res = hexToRGB('#FFFFFF');

						notHightlightBoxes.forEach(box => {
							expect(box.style.background).toEqual(res)
						})
					}) 
				})

				describe('.price-option-box-highlight', () => {
					it('should have "background: #E6367E"', () => {
						const priceOptionBoxHighlight = document.querySelector('.price-option-box-highlight');
						const res = hexToRGB('#E6367E');

						expect(priceOptionBoxHighlight.style.background).toEqual(res)
					})
				})
			})

			describe('border', () => {
				describe('.price-option-box', () => {
					it('should have "border: 1px solid #dedede"', () => {
						const priceOptionBoxes = document.querySelectorAll('.price-option-box');
						const notBorderBoxes = Array.from(priceOptionBoxes).filter(priceOptionBox => {
							return !priceOptionBox.className.includes('price-option-box-border')
						})

						notBorderBoxes.forEach(box => {
							expect(box.style.border).toEqual('1px solid #dedede')
						})
					}) 
				})

				describe('.price-option-box-border', () => {
					it('should have "border: 2px solid #e6367e"', () => {
						const priceOptionBorderBox = document.querySelector('.price-option-box-border');

						expect(priceOptionBorderBox.style.border).toEqual('2px solid #e6367e')
					}) 	
				})
			})

			describe('box-shadow', () => {
				it('should have "box-shadow: 0px 13px 19px 0px rgba(0, 0, 0, 0.07)"', () => {
					const priceOptionBoxes = document.querySelectorAll('.price-option-box');

					priceOptionBoxes.forEach(priceOptionBox => {
						expect(priceOptionBox.style.boxShadow).toEqual('0px 13px 19px 0px rgba(0, 0, 0, 0.07)')
					})
				})
			})

			describe('font-color', () => {
				describe('.price-option-box', () => {
					describe('.price-option-box-heading', () => {
						it('should have "color: #181949"', () => {
							const priceOptionBoxes = document.querySelectorAll('.price-option-box');

							const headings = Array.from(priceOptionBoxes).map(box => {
								const heading = box.querySelector('.price-option-box-heading');
								if(!box.className.includes('price-option-box-highlight')) return heading;
							}).filter(el => el) 

							const res = hexToRGB('#181949');

							headings.forEach(heading => {
								expect(heading.style.color).toEqual(res)
							})
						}) 
					})

					describe('.price-option-box-subheading', () => {
						it('should have "color: #374754"', () => {
							const priceOptionBoxes = document.querySelectorAll('.price-option-box');
							
							const subheadings = Array.from(priceOptionBoxes).map(box => {
								const subheading = box.querySelector('.price-option-box-subheading');
								if(!box.className.includes('price-option-box-highlight')) return subheading;
							}).filter(el => el) 

							const res = hexToRGB('#374754');

							subheadings.forEach(subheading => {
								expect(subheading.style.color).toEqual(res)
							})
						}) 
					})

					describe('.price-number', () => {
						it('should have "color: #252B42"', () => {
							const priceOptionBoxes = document.querySelectorAll('.price-option-box');
							
							const priceNumbers = Array.from(priceOptionBoxes).map(box => {
								const priceNumber = box.querySelector('.price-number');
								if(!box.className.includes('price-option-box-highlight')) return priceNumber;
							}).filter(el => el) 
 
							const res = hexToRGB('#252B42');

							priceNumbers.forEach(subheading => {
								expect(subheading.style.color).toEqual(res)
							})
						}) 
					})

					describe('.price-unit', () => {
						it('should have "color: #252B42"', () => {
							const priceOptionBoxes = document.querySelectorAll('.price-option-box');

							const priceUnits = Array.from(priceOptionBoxes).map(box => {
								const priceUnit = box.querySelector('.price-unit');
								if(!box.className.includes('price-option-box-highlight')) return priceUnit;
							}).filter(el => el) 

							const res = hexToRGB('#252B42');

							priceUnits.forEach(priceUnit => {
								expect(priceUnit.style.color).toEqual(res)
							})
						}) 
					})

					describe('.price-label', () => {
						it('should have "color: #374754"', () => {
							const priceOptionBoxes = document.querySelectorAll('.price-option-box');

							const priceLabels = Array.from(priceOptionBoxes).map(box => {
								const priceLabel = box.querySelector('.price-label');
								if(!box.className.includes('price-option-box-highlight')) return priceLabel;
							}).filter(el => el) 

							const res = hexToRGB('#374754');

							priceLabels.forEach(priceLabel => { 
								expect(priceLabel.style.color).toEqual(res)
							})
						})
					})
				})

				describe('.price-option-box-highlight', () => {
					describe('.price-option-box-heading', () => {
						it('should have "color: #FFFFFF;"', () => {
							const priceOptionHighlightBox = document.querySelector('.price-option-box-highlight');
							const res = hexToRGB('#FFFFFF');

							expect(priceOptionHighlightBox.style.color).toEqual(res)
						}) 

						describe('.price-option-box-heading', () => {
							it('should have "color:  "', () => {
								const priceOptionHighlightBox = document.querySelector('.price-option-box-highlight');
								const heading = priceOptionHighlightBox.querySelector('.price-option-box-heading');

								expect(heading.style.color).toEqual('')
							}) 
						})

						describe('.price-option-box-subheading', () => {
							it('should have "color:  "', () => {
								const priceOptionHighlightBox = document.querySelector('.price-option-box-highlight');
								const subheading = priceOptionHighlightBox.querySelector('.price-option-box-subheading');

								expect(subheading.style.color).toEqual('')
							}) 
						})

						describe('.price-number', () => {
							it('should have "color:  "', () => {
								const priceOptionHighlightBox = document.querySelector('.price-option-box-highlight');
								const priceNumber = priceOptionHighlightBox.querySelector('.price-number');

								expect(priceNumber.style.color).toEqual('')   
							}) 
						})

						describe('.price-unit', () => {
							it('should have "color: "', () => {
								const priceOptionHighlightBox = document.querySelector('.price-option-box-highlight');
								const priceUnit = priceOptionHighlightBox.querySelector('.price-unit');

								expect(priceUnit.style.color).toEqual('')
							}) 
						})

						describe('.price-label', () => {
							it('should have "color: "', () => {
								const priceOptionHighlightBox = document.querySelector('.price-option-box-highlight');
								const priceLabel = priceOptionHighlightBox.querySelector('.price-label');

								expect(priceLabel.style.color).toEqual('')
							}) 
						})
					})
				})
			})
		})
	})

	describe('content', () => {
		// test in order -> no need for seperate order test
		it('should have correct content', () => {
			const priceOptionBoxes = document.querySelectorAll('.price-option-box');

			priceOptionBoxes.forEach((priceOptionBox, i) => {
				const heading = priceOptionBox.querySelector('.price-option-box-heading');
 				const subheading = priceOptionBox.querySelector('.price-option-box-subheading');
 				const priceNumber = priceOptionBox.querySelector('.price-number');
 				const priceUnit = priceOptionBox.querySelector('.price-unit');
 				const priceLabel = priceOptionBox.querySelector('.price-label');

				expect(heading.textContent).toEqual(boxes[i].heading)
				expect(subheading.textContent).toEqual(boxes[i].subheading)
				expect(priceNumber.textContent).toEqual(boxes[i].priceNumber)
				expect(priceUnit.textContent).toEqual(boxes[i].priceUnit)
				expect(priceLabel.textContent).toEqual(boxes[i].priceLabel)
			})
		})
	}) 
})