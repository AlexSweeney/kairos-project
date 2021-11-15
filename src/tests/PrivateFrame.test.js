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

// =================================== Consts & Vars =================================== //
let container;
let setLoggedIn;

// ======================================= Mocks ======================================= //
jest.mock('./../styles/MainView.js', () => {
	const original = jest.requireActual('./../styles/MainView.js');

	return {
		mainViewRightHeaderStyle: {
			color: 'red',
		},
		mainViewRightButtonStyle: {
			color: 'blue',
		}
	}
}) 

// =================================== Setup / Teardown ================================= //
beforeEach(() => {
	setLoggedIn = jest.fn();
	container = document.createElement('div');
	document.body.appendChild(container)
	act(() => { render(<PrivateFrame setLoggedIn={setLoggedIn}/>, container)}) 
})

afterEach(() => {
	setLoggedIn = null;
	unmountComponentAtNode(container) 
	container = null;
})

/* ======================================= Tests ==================================== */
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
					
					expect(heading.style.length).toEqual(1)
					expect(heading.style.color).toEqual(mainViewRightHeaderStyle.color) 
				})
			})

			describe('button', () => {
				it('should have mainViewRightButtonStyle style', () => {
					const button = document.querySelector('.logout-button');
					
					expect(button.style.length).toEqual(1)
					expect(button.style.color).toEqual(mainViewRightButtonStyle.color)
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