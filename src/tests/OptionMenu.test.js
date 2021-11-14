import React from 'react';
import { render, unmountComponentAtNode } from 'react-dom';
import { act, Simulate } from 'react-dom/test-utils';
import OptionMenu from './../components/parts/OptionMenu.jsx';
 
let container;
const options = ['option-1', 'option-2', 'options-3', 'options-4'];
 
beforeEach(() => {
	container = document.createElement('div');
	document.body.appendChild(container)
	act(() => { render(<OptionMenu options={options}/>, container)}) 
})

afterEach(() => {
	unmountComponentAtNode(container)
})

describe('<OptionMenu/>', () => {
	describe('on render', () => {
		it('should show "option-1" in .option-head', () => {
			const optionHead = document.querySelector('.option-head');

			expect(optionHead.textContent).toEqual('option-1')
		})

		it('.option-menu element should have class .option-menu-closed', () => {
			const optionMenu = document.querySelector('.option-menu');
 
			expect(optionMenu.className).toContain('option-menu-closed')
		})
	})

	describe('.option-head', () => {
		describe('on mouse enter', () => {
			it('.option-menu element should have class .option-menu-open', () => {
				// enter head
				const optionHead = document.querySelector('.option-head');
				act(() => Simulate.mouseEnter(optionHead))	

				// test option menu
				const optionMenu = document.querySelector('.option-menu');
				expect(optionMenu.className).toContain('option-menu-open')
			}) 
		})

		describe('on mouse leave', () => {
			it('.option-menu element should have class .option-menu-closed', () => {
				// enter and leave head
				const optionHead = document.querySelector('.option-head');
				act(() => Simulate.mouseEnter(optionHead))
				act(() => Simulate.mouseLeave(optionHead))	

				// test option menu
				const optionMenu = document.querySelector('.option-menu');
				expect(optionMenu.className).toContain('option-menu-closed')
			})
		})
	})

	describe('.option-menu', () => {
		describe('on mouse enter', () => {
			it('.option-menu element should have class .option-menu-open', () => {
				// enter head to open menu
				const optionHead = document.querySelector('.option-head');
				act(() => Simulate.mouseEnter(optionHead))

				// enter menu
				const optionMenu = document.querySelector('.option-menu');
				act(() => Simulate.mouseEnter(optionMenu))	

				// test option menu 
				expect(optionMenu.className).toContain('option-menu-open')
			}) 
		})

		describe('on mouse leave', () => {
			it('.option-menu element should have class .option-menu-closed', () => {
				// enter head to open menu
				const optionHead = document.querySelector('.option-head');
				act(() => Simulate.mouseEnter(optionHead))

				// enter menu, leave head, leave menu
				const optionMenu = document.querySelector('.option-menu');
				act(() => Simulate.mouseEnter(optionMenu))
				act(() => Simulate.mouseLeave(optionHead))	
				act(() => Simulate.mouseLeave(optionMenu))	

				// test option menu 
				expect(optionMenu.className).toContain('option-menu-closed')
			}) 
		})

		describe('on click', () => {
			it('.option-menu element should have class .option-menu-closed', () => {
				// enter head to open menu
				const optionHead = document.querySelector('.option-head');
				act(() => Simulate.mouseEnter(optionHead))

				// enter menu, leave menu
				const optionMenu = document.querySelector('.option-menu');
				act(() => Simulate.mouseEnter(optionMenu))
				act(() => Simulate.mouseLeave(optionHead))

				act(() => Simulate.mouseLeave(optionMenu))	

				// test option menu 
				expect(optionMenu.className).toContain('option-menu-closed')
			}) 

			it('.option-head should show clicked option', () => {
				// enter head to open menu
				const optionHead = document.querySelector('.option-head');
				act(() => Simulate.mouseEnter(optionHead))

				// enter menu, leave head
				const optionMenu = document.querySelector('.option-menu');
				act(() => Simulate.mouseEnter(optionMenu))
				act(() => Simulate.mouseLeave(optionHead)) 

				// click option
				const optionTwo = Array.from(document.querySelectorAll('.option')).map(node => {
					if(node.textContent === 'option-2') return node;
				}).filter(el => el)[0];
				act(() => Simulate.mouseEnter(optionTwo))
				act(() => Simulate.click(optionTwo))	

				// test option head  
				expect(optionHead.textContent).toContain('option-2')
			}) 

			it('.option-menu should update to show all options except clicked option', () => {
				// enter head to open menu
				const optionHead = document.querySelector('.option-head');
				act(() => Simulate.mouseEnter(optionHead))

				// enter menu, leave head
				const optionMenu = document.querySelector('.option-menu');
				act(() => Simulate.mouseEnter(optionMenu))
				act(() => Simulate.mouseLeave(optionHead)) 

				// click option
				const optionTwo = Array.from(document.querySelectorAll('.option')).map(node => {
					if(node.textContent === 'option-2') return node;
				}).filter(el => el)[0];
				act(() => Simulate.mouseEnter(optionTwo))
				act(() => Simulate.click(optionTwo))	

				// test options
				const newMenuOptions = ['option-1', 'options-3', 'options-4']
				const options = document.querySelectorAll('.option'); 

				expect(options.length).toEqual(newMenuOptions.length)

				options.forEach((option, i) => {
					expect(option.textContent).toEqual(newMenuOptions[i])
				}) 
			})
		})
	})
})
