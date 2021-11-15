import React from 'react';
import { render, unmountComponentAtNode } from 'react-dom';
import { act } from 'react-dom/test-utils';
import Home from './../pages/Home.jsx';

let container;
const components = ['main-view', 'alert-bar', 'services-view', 'price-options-view', 'offices-address-view'];

// =================================== Setup / Teardown ================================= //
beforeEach(() => {
	container = document.createElement('div');
	container.className = 'container';
	document.body.appendChild(container)
	act(() => { render(<Home/>, container)}) 
})

afterEach(() => {
	unmountComponentAtNode(container)
	container = null;
})

// =================================== Test ============================================ //
describe('<Home/>', () => {
	it('should render components in correct order', () => {
		const container = document.querySelector('.container'); 

		Array.from(container.children).forEach((child, i) => {
			expect(child.className).toEqual(components[i])
		})
	})
})
