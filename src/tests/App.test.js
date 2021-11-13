import React from 'react';
import { render, unmountComponentAtNode } from 'react-dom';
import { act } from 'react-dom/test-utils';
import { hexToRGB, containsTextContent, getAllChildren } from './../utils/testUtils.js';
import App from './../App.jsx';

let container; 

beforeEach(() => {
	container = document.createElement('div');
	document.body.appendChild(container)
	act(() => { render(<App/>, container)}) 
})

afterEach(() => {
	unmountComponentAtNode(container)
})

test.todo('fix header tests')
test.todo('test routing') 
test.todo('test main-view-button fns') 
test.todo('test option menu')
test.todo('test font loads')
test.todo('test testUtils.js')
test.todo('test components ordered correctly')  
test.todo('make min-width settings cleaner')
