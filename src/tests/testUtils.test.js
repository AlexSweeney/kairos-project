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

/* ======================================= Consts / Vars ================================ */
let container;

const depthOneClasses = ['child-1', 'child-2', 'child-3'];
const depthTwoClasses = ['child-1', 'child-2-1', 'child-2', 'child-2-2', 'child-3', 'child-2-3'];

const styleOne = {
	border: '2px solid black',
	background: 'red',
	color: 'yellow',
	textAlign: 'left',
}

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

function StyleDiv({style}) {
	return <div className="style-div" style={style}></div>
}

/* ======================================= Setup / Teardown ================================ */
beforeEach(() => {
	container = document.createElement('div');
	document.body.appendChild(container)
})

afterEach(() => {
	unmountComponentAtNode(container)
})

/* ======================================= Tests ========================================== */
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