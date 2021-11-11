import React from 'react';
import { render, unmountComponentAtNode } from 'react-dom';
import { act } from 'react-dom/test-utils';
import { hexToRGB, containsTextContent, getAllChildren } from './../utils/testUtils.js';
import App from './../App.jsx';

let container;
// header
const navLinkNames = ['Home', 'Auto Homepage', 'Sales', 'CRM', 'Electronic office', 'Cloud ERP', 'SSL'];
const optionNames = ['EN', 'Company', 'Partner Market Place'];

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
test.todo('test elements ordered correctly')
test.todo('test containsTextContent')
test.todo('page loading options - prevent jerky background picture load')
