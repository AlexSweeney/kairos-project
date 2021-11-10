import React from 'react';
import { render, unmountComponentAtNode } from 'react-dom';
import { act } from 'react-dom/test-utils';
import App from './../App.jsx';

let container;
const navLinkNames = ['Home', 'Auto Homepage', 'Sales', 'CRM', 'Electronic office', 'Cloud ERP', 'SSL'];

beforeEach(() => {
	container = document.createElement('div');
	document.body.appendChild(container)
	act(() => { render(<App/>, container)}) 
})

afterEach(() => {
	unmountComponentAtNode(container)
})

test.todo('check font loads')

describe('<App/>', () => {
	describe('<Header/>', () => {
		it('should render header', () => {
			const header = container.querySelector('header'); 
			expect(header).not.toEqual(null)
		}) 

		describe.only('logo', () => {
			it('should render logo', () => {
				const logo = container.querySelector('.logo');
				expect(logo).not.toEqual(null)
			})

			it('logo should have "width" : "176px"', () => {
				const logo = container.querySelector('.logo');
				expect(logo.style.width).toEqual('176px');
			})

			it('logo should have "height" :"30px"', () => {
				const logo = container.querySelector('.logo');
				expect(logo.style.height).toEqual('30px');
			})
		})

		describe('nav links', () => {
			it('should render all nav links', () => {
				const navLinks = container.querySelectorAll('.nav-link');
				expect(navLinks.length).toEqual(navLinkNames.length)
			})

			describe('should have styles specified in figma project', () => {
				describe('left nav link', () => {
					it.only('nav link left should have home icon', () => {
						const homeIcon = container.querySelector('.home-icon');
						console.log(homeIcon)
						expect(homeIcon).not.toEqual(null)
					}) 
					it('left nav link should have "font-family" : "Noto Sans"', () => {
						const navLinks = container.querySelectorAll('.nav-link-left');
						navLinks.forEach(navLink => {
							expect(navLink.style['font-family']).toEqual('Noto Sans')
						})
					}) 
					it('left nav link should have "font-style" : "normal"', () => {
						const navLinks = container.querySelectorAll('.nav-link-left');
						navLinks.forEach(navLink => {
							expect(navLink.style['font-style']).toEqual('normal')
						})
					})
					it('left nav link should have "font-weight" : "700"', () => {
						const navLinks = container.querySelectorAll('.nav-link-left');
						navLinks.forEach(navLink => {
							expect(navLink.style['font-weight']).toEqual('700')
						})
					})
					it('left nav link should have "line-height" : "19px"', () => {
						const navLinks = container.querySelectorAll('.nav-link-left');
						navLinks.forEach(navLink => {
							expect(navLink.style['line-height']).toEqual('19px')
						})
					}) 
					it('left nav link should have "letter-spacing" : "0em"', () => {
						const navLinks = container.querySelectorAll('.nav-link-left');
						navLinks.forEach(navLink => {
							expect(navLink.style['letter-spacing']).toEqual('0em')
						})
					})    
					it('left nav link should have "color" : "#181949"', () => {
						const navLinks = container.querySelectorAll('.nav-link-left');
						navLinks.forEach(navLink => {
							expect(navLink.style['color']).toEqual('#181949')
						})
					})      
				})

				describe.skip('right nav links', () => {
					it('right nav links should have "font-family" : "Noto Sans"', () => {
						const navLinks = container.querySelectorAll('.nav-link');
						navLinks.forEach(navLink => {
							expect(navLink.style['font-family']).toEqual('Noto Sans')
						})
					})

					it('right nav links should have "font-size" : "14px"', () => {
						const navLinks = container.querySelectorAll('.nav-link');
						navLinks.forEach(navLink => {
							expect(navLink.style['font-size']).toEqual('14px')
						})
					})

					it('right nav links should have "font-style" : "normal"', () => {
						const navLinks = container.querySelectorAll('.nav-link');
						navLinks.forEach(navLink => {
							expect(navLink.style['font-style']).toEqual('normal')
						})
					})

					it('right nav links should have "font-weight" : "400"', () => {
						const navLinks = container.querySelectorAll('.nav-link');
						navLinks.forEach(navLink => {
							expect(navLink.style['font-weight']).toEqual('400')
						})
					})

					it('right nav links should have "line-height" : "19px"', () => {
						const navLinks = container.querySelectorAll('.nav-link');
						navLinks.forEach(navLink => {
							expect(navLink.style['line-height']).toEqual('19px')
						})
					})
				})  
			}) 
		}) 

		describe('header-left', () => {
			describe('logo', () => {

			})

			describe('home link', () => {
				describe('home-icon', () => {

				}) 
			})
		})

		describe('header-right', () => {

		})
	})
})