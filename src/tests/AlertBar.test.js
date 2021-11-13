import React from 'react';
import { render, unmountComponentAtNode } from 'react-dom';
import { act } from 'react-dom/test-utils';
import { hexToRGB, containsTextContent, getAllChildren } from './../utils/testUtils.js';
import AlertBar from './../components/AlertBar.jsx';

// =================================== Consts & Vars =================================== //
let container;

// .alert-bar
const alertBarText = 'You are now viewing an IT Software that has been verified by over 1 million users.';
const alertBarTextNonBold = ['You are now viewing an ', 'that has been verified by '];
const alertBarTextBold = ['IT Software', 'over 1 million users.'];

// =================================== Setup / Teardown ================================= //
beforeEach(() => {
	container = document.createElement('div');
	document.body.appendChild(container)
	act(() => { render(<AlertBar/>, container)}) 
})

afterEach(() => {
	unmountComponentAtNode(container)
})

/* ======================================= Alert Bar ==================================== */
describe('<AlertBar/>', () => {
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
