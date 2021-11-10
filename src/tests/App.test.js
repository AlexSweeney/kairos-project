import React from 'react';
import { render, unmountComponentAtNode } from 'react-dom';
import { act } from 'react-dom/test-utils';
import App from './../App.jsx';

let container;
const navLinkNames = ['Home', 'Auto Homepage', 'Sales', 'CRM', 'Electronic office', 'Cloud ERP', 'SSL'];

function hexToRGB(hex) {
	hex = hex.replace('#', '');
	const aRgbHex = hex.match(/.{1,2}/g);
	const a =  parseInt(aRgbHex[0], 16);
	const b =  parseInt(aRgbHex[1], 16);
  const c = parseInt(aRgbHex[2], 16);

  return `rgb(${a}, ${b}, ${c})`;
}

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

describe('<App/>', () => {
	describe('<Header/>', () => {
		it('should render header', () => {
			const header = container.querySelector('header'); 
			expect(header).not.toEqual(null)
		}) 

		describe('logo', () => {
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

		describe('home icon', () => {
			it('home icon should render', () => {
				const homeIcon = container.querySelector('.home-icon');
				expect(homeIcon).not.toEqual(null)
			})  

			it('home icon should have "width" : "16.03px" ', () => {
				const homeIcon = container.querySelector('.home-icon');
				expect(homeIcon.style.width).toEqual('16.03px')
			})

			it('home icon should have "height" : "16.72px" ', () => {
				const homeIcon = container.querySelector('.home-icon');
				expect(homeIcon.style.height).toEqual('16.72px')
			})
		})

		describe('nav links', () => {
			it('should render all nav links', () => {
				const navLinks = container.querySelectorAll('.nav-link');
				expect(navLinks.length).toEqual(navLinkNames.length)
			})

			describe('nav links', () => {
				describe.only('left nav link', () => {
					it('left nav link should have "font-family" : "Noto Sans"', () => {
						const navLink = container.querySelector('.nav-link-left');
						expect(navLink.style.fontFamily).toEqual('Noto Sans')
					}) 

					it('left nav link should have "font-style" : "normal"', () => {
						const navLink = container.querySelector('.nav-link-left');
						expect(navLink.style.fontStyle).toEqual('normal')
					})

					it('left nav link should have "font-weight" : "700"', () => {
						const navLink = container.querySelector('.nav-link-left');
						expect(navLink.style.fontWeight).toEqual('700')
					})

					it('left nav link should have "line-height" : "19px"', () => {
						const navLink = container.querySelector('.nav-link-left');
						expect(navLink.style.lineHeight).toEqual('19px')
					}) 

					it('left nav link should have "letter-spacing" : "0em"', () => {
						const navLink = container.querySelector('.nav-link-left');
						expect(navLink.style.letterSpacing).toEqual('0em')
					})   

					it('left nav link should have "color" : "#181949"', () => {
						const navLink = container.querySelector('.nav-link-left');
						console.log(navLink.style)
						const res = hexToRGB('#181949');
						expect(navLink.style.color).toEqual(res)
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