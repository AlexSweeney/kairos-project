import React from 'react';
import { render, unmountComponentAtNode } from 'react-dom';
import { act } from 'react-dom/test-utils';

import {
	hexToRGB, 
	getAllChildren,
	makeObjectKeysLowerCase,
 	testObjectsForEquality,
	getObjectFromStyle,
} from './../utils/testUtils.js';

let container;

const depthOneClasses = ['child-1', 'child-2', 'child-3'];
const depthTwoClasses = ['child-1', 'child-2-1', 'child-2', 'child-2-2', 'child-3', 'child-2-3'];

function DepthOne() {
	return (
		<div className="parent">
			<div className="child-1"></div>
			<div className="child-2"></div>
			<div className="child-3"></div>
		</div>
	)
}

function DepthTwo() {
	return (
		<div className="parent">
			<div className="child-1">
				<div className="child-2-1"></div>
			</div>
			<div className="child-2">
				<div className="child-2-2"></div>
			</div>
			<div className="child-3">
				<div className="child-2-3"></div>
			</div>
		</div>
	)
}

beforeEach(() => {
	container = document.createElement('div');
	document.body.appendChild(container)

})

afterEach(() => {
	unmountComponentAtNode(container)
})

it('hexToRGB()', () => {
	const whiteHex = '#ffffff';
	const whiteRGB = 'rgb(255, 255, 255)'; 

	const test = hexToRGB(whiteHex);
	expect(test).toEqual(whiteRGB)
})

describe('getAllChildren()', () => {
	it('depth 1', () => {
		act(() => { render(<DepthOne/>, container)})

		const parent = document.querySelector('.parent');
		const children = getAllChildren(parent);

		expect(children.length).toEqual(depthOneClasses.length)
		children.forEach((child, i) => {
			expect(child.className).toEqual(depthOneClasses[i])
		})
	})

	it('depth 2', () => {
		act(() => { render(<DepthTwo/>, container)})

		const parent = document.querySelector('.parent');
		const children = getAllChildren(parent);

		expect(children.length).toEqual(depthTwoClasses.length)
		children.forEach((child, i) => {
			expect(child.className).toEqual(depthTwoClasses[i])
		})
	})
})

describe('makeObjectKeysLowerCase() - shallow', () => {
	it('should work for depth 1', () => {
		const a = {'HELLO': 1, 'WorLd': 2};
		const b = {'hello': 1, 'world': 2};

		const res = makeObjectKeysLowerCase(a);
		expect(res).toEqual(b)
	})
})

describe('testObjectsForEquality() - shallow', () => {
	describe('different keys length', () => {
		it('should return false', () => {
			const a = {'hello': 1, 'world': 2, 'today': 3};
			const b = {'hello': 1, 'world': 2};

			const test = testObjectsForEquality(a, b);
			expect(test).toEqual(false)
		})
	})

	describe('different keys', () => {
		it('should return false', () => {
			const a = {'hello': 1, 'world': 2, 'today': 3};
			const b = {'hello': 1, 'world': 2, 'yesterday': 3};

			const test = testObjectsForEquality(a, b);
			expect(test).toEqual(false)
		})
	})

	describe('different values', () => {
		it('should return false', () => {
			const a = {'hello': 1, 'world': 2, 'today': 3};
			const b = {'hello': 1, 'world': 3, 'today': 3};

			const test = testObjectsForEquality(a, b);
			expect(test).toEqual(false)
		})
	})

	describe('same keys and num keys, same key: value pairs', () => {
		it('should return true', () => {
			const a = {'hello': 1, 'world': 2, 'today': 3};
			const b = {'hello': 1, 'world': 2, 'today': 3};

			const test = testObjectsForEquality(a, b);
			expect(test).toEqual(true)
		})
	})
})