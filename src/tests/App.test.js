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

describe('<App/>', () => {
	describe('<Header/>', () => {
		it('should render header', () => {
			const header = container.querySelector('header'); 
			expect(header).not.toEqual(null)
		}) 

		describe('nav links', () => {
			it('should render all nav links', () => {
				const navLinks = container.querySelectorAll('.nav-link');
				expect(navLinks.length).toEqual(navLinkNames.length)
			})

			describe('should have style specified in figma project', () => {
				it('nav links should have "font-family" : "Noto Sans"', () => {
					const navLinks = container.querySelectorAll('.nav-link');
					navLinks.forEach(navLink => {
						expect(navLink.style['font-family']).toEqual('Noto Sans')
					})
				})

				it('nav links should have "font-size" : "14px"', () => {
					const navLinks = container.querySelectorAll('.nav-link');
					navLinks.forEach(navLink => {
						expect(navLink.style['font-size']).toEqual('14px')
					})
				})

				it('nav links should have "font-style" : "normal"', () => {
					const navLinks = container.querySelectorAll('.nav-link');
					navLinks.forEach(navLink => {
						expect(navLink.style['font-style']).toEqual('normal')
					})
				})

				it('nav links should have "font-weight" : "400"', () => {
					const navLinks = container.querySelectorAll('.nav-link');
					navLinks.forEach(navLink => {
						expect(navLink.style['font-weight']).toEqual('400')
					})
				})

				it('nav links should have "line-height" : "19px"', () => {
					const navLinks = container.querySelectorAll('.nav-link');
					navLinks.forEach(navLink => {
						expect(navLink.style['line-height']).toEqual('19px')
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