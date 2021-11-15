import React from 'react';
import { render, unmountComponentAtNode } from 'react-dom';
import { act, Simulate } from 'react-dom/test-utils';  
import MainView from './../components/MainView.jsx';
import { 
  mainViewButtonSelectedStyle,
  mainViewButtonDeselectedStyle,
} from './../styles/MainView.js';
 
// =================================== Consts & Vars =================================== //
let container;

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

// ======================================= Mocks ======================================= //
jest.mock('./../styles/MainView.js', () => {
	const original = jest.requireActual('./../styles/MainView.js');

	return {
		mainViewButtonSelectedStyle: {
			color: 'red',
		},
		mainViewButtonDeselectedStyle: {
			color: 'blue',
		} 

	}
}) 

// =================================== Setup / Teardown ================================= //
beforeEach(() => {
	container = document.createElement('div');
	document.body.appendChild(container)
	act(() => { render(<MainView/>, container)}) 
})

afterEach(() => {
	unmountComponentAtNode(container)
})

// =================================== Tests ============================================ //
describe('<MainView/> on click', () => {
	describe('#now-button', () => {
		it('should add mainViewButtonSelectedStyle to now button', () => {
			// click future
			const futureButton = document.querySelector('#future-button');  
			act(() => Simulate.click(futureButton))

			// click now
			const nowButton = document.querySelector('#now-button');  
			act(() => Simulate.click(nowButton))

			// test now button 
			expect(nowButton.style.length).toEqual(1)
			expect(nowButton.style.color).toEqual(mainViewButtonSelectedStyle.color)
		})

		it('should add mainViewButtonDeselectedStyle to future button', () => {
			// click future
			const futureButton = document.querySelector('#future-button');
			act(() => Simulate.click(futureButton))  

			// click now
			const nowButton = document.querySelector('#now-button');  
			act(() => Simulate.click(nowButton))

			// test future button 
			expect(futureButton.style.length).toEqual(1)
			expect(futureButton.style.color).toEqual(mainViewButtonDeselectedStyle.color)
		})

		it('should update .main-view-info-numer', () => {
			// click future
			const futureButton = document.querySelector('#future-button');  
			act(() => Simulate.click(futureButton))

			// click now
			const nowButton = document.querySelector('#now-button');  
			act(() => Simulate.click(nowButton))

			// test numbers
			const numbers = document.querySelectorAll('.main-view-info-number');
			numbers.forEach((number, i) => {
				expect(number.textContent).toEqual(mainViewInfoText.now[i].number)
			})
		})

		it('should update .main-view-info-text', () => {
			// click future
			const futureButton = document.querySelector('#future-button');  
			act(() => Simulate.click(futureButton))

			// click now
			const nowButton = document.querySelector('#now-button');  
			act(() => Simulate.click(nowButton))

			// test text
			const textElements = document.querySelectorAll('.main-view-info-text');
			textElements.forEach((textElement, i) => {
				expect(textElement.textContent).toEqual(mainViewInfoText.now[i].text)
			})
		})
	})

	describe('#future-button', () => {
		it('should add mainViewButtonSelectedStyle to future button', () => {
			// click future
			const futureButton = document.querySelector('#future-button');  
			act(() => Simulate.click(futureButton))

			// test future button
			expect(futureButton.style.length).toEqual(1)
			expect(futureButton.style.color).toEqual(mainViewButtonSelectedStyle.color)
		})

		it('should add mainViewButtonDeselectedStyle to now button', () => {
			// click future
			const futureButton = document.querySelector('#future-button');  
			act(() => Simulate.click(futureButton))

			// test now button
			const nowButton = document.querySelector('#now-button');
			expect(nowButton.style.length).toEqual(1)
			expect(nowButton.style.color).toEqual(mainViewButtonDeselectedStyle.color)
		})

		it('should update .main-view-info-numer', () => {
			// click future
			const futureButton = document.querySelector('#future-button');  
			act(() => Simulate.click(futureButton))

			// test numbers
			const numbers = document.querySelectorAll('.main-view-info-number');
			numbers.forEach((number, i) => {
				expect(number.textContent).toEqual(mainViewInfoText.future[i].number)
			})
		})

		it('should update .main-view-info-text', () => {
			// click future
			const futureButton = document.querySelector('#future-button');  
			act(() => Simulate.click(futureButton))

			// test text
			const textElements = document.querySelectorAll('.main-view-info-text');
			textElements.forEach((textElement, i) => {
				expect(textElement.textContent).toEqual(mainViewInfoText.future[i].text)
			})
		})
	})
})