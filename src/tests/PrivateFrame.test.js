import React from 'react';
import { render, unmountComponentAtNode } from 'react-dom';
import { act, Simulate, isElementOfType } from 'react-dom/test-utils';
import PrivateFrame from './../pages/PrivateFrame.jsx';
import {  
	getObjectFromStyle,
	testObjectsForEquality,
	makeObjectKeysLowerCase,
} from './../utils/testUtils.js';
import { 
  mainViewRightHeaderStyle,  
  mainViewRightButtonStyle,
} from './../styles/MainView.js';


let container;
let setLoggedIn;

beforeEach(() => {
	setLoggedIn = jest.fn();
	container = document.createElement('div');
	document.body.appendChild(container)
	act(() => { render(<PrivateFrame setLoggedIn={setLoggedIn}/>, container)}) 
})

afterEach(() => {
	setLoggedIn = null;
	unmountComponentAtNode(container) 
})

describe('<PrivateFrame/>', () => {
	describe('on render', () => {
		it('should render', () => {
			const privateFrame = document.querySelector('.private-frame');
			expect(privateFrame).not.toEqual(null)
		})

		describe('content', () => {
			describe('heading', () => {
				it('should have "Private Area" heading', () => {
					const heading = document.querySelector('.private-frame-header');
					expect(heading.textContent).toEqual('Private Area')
				})
			})

			describe('button', () => {
				it('should have "Log Out" button', () => {
					const button = document.querySelector('.logout-button');
					expect(button.textContent).toEqual('Log Out')
				})
			})
		})

		describe('style', () => {
			describe('heading', () => {
				it('should have mainViewRightHeaderStyle style', () => {
					const heading = document.querySelector('.private-frame-header');
					
					const headingStyle = getObjectFromStyle(heading.style);
					const targetStyle = makeObjectKeysLowerCase(mainViewRightHeaderStyle);

					const test = testObjectsForEquality(headingStyle, targetStyle);
					expect(test).toEqual(true) 
				})
			})

			describe('button', () => {
				it('should have mainViewRightButtonStyle style', () => {
					const button = document.querySelector('.logout-button');

					const buttonStyle = getObjectFromStyle(button.style);
					const targetStyle = makeObjectKeysLowerCase(mainViewRightButtonStyle);
 
					const test = testObjectsForEquality(buttonStyle, targetStyle);
					expect(test).toEqual(true) 
				})
			})
		})
	})

	describe('on button click', () => {
		it('should call setLoggedIn() with false', () => {
			const button = document.querySelector('.logout-button');
			act(() => Simulate.click(button))

			expect(setLoggedIn).toHaveBeenCalledTimes(1)
			expect(setLoggedIn).toHaveBeenCalledWith(false)
		})
	})
})