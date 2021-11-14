import React from 'react';
import {render, screen} from '@testing-library/react';
import userEvent from '@testing-library/user-event'; 
import { BrowserRouter, MemoryRouter, Routes, Route } from 'react-router-dom';
import '@testing-library/jest-dom'; 

import Header from './../components/Header.jsx';
import MyRoutes from './../components/parts/MyRoutes.jsx';
import App from './../App.jsx'; 
import Home from './../pages/Home.jsx'; 
import AutoHome from './../pages/AutoHome.jsx'; 
import Sales from './../pages/Sales.jsx';
import CloudErp from './../pages/CloudErp.jsx';
import CRM from './../pages/CRM.jsx';
import ElectronicOffice from './../pages/ElectronicOffice.jsx';
import SSL from './../pages/SSL.jsx';

jest.mock('./../pages/Home.jsx')
jest.mock('./../pages/AutoHome.jsx')
jest.mock('./../pages/Sales.jsx')
jest.mock('./../pages/CloudErp.jsx')
jest.mock('./../pages/CRM.jsx')
jest.mock('./../pages/ElectronicOffice.jsx')
jest.mock('./../pages/SSL.jsx')

let container; 

function getByTextContent(nodes, textContent) { 
	return Array.from(nodes).map(node => { 
		if(node.textContent === textContent) return node;
	}).filter(el => el) 
}-

function MockApp({pathname}) {
	return (
		<MemoryRouter initialEntries={[pathname]}>
			<Header/>
        
      <MyRoutes/>
		</MemoryRouter>
	)
}

beforeEach(() => {
	Home.mockImplementation(() => <p>MockHome</p>);
	AutoHome.mockImplementation(() => <p>MockAutoHome</p>);
	Sales.mockImplementation(() => <p>MockSales</p>);
	CloudErp.mockImplementation(() => <p>MockCloudErp</p>);
	CRM.mockImplementation(() => <p>MockCRM</p>);
	ElectronicOffice.mockImplementation(() => <p>MockElectronicOffice</p>);
	SSL.mockImplementation(() => <p>MockSSL</p>);
}) 

describe('<App/>', () => {
	describe('render', () => {
		it('should render <Header>', () => {
			// render 
		  render(<App/>) 

			const header = document.querySelector('.header');
			expect(header).not.toEqual(null)
		})

		it('should render <Home/>', () => {
			// render 
		  render(<App/>) 
			expect(screen.getByText(/MockHome/)).toBeInTheDocument()
		})
	})

	describe('routing', () => {
		describe('<Home>', () => {
			it('should route when link pressed', () => { 
				// render 
			  render(<App/>) 

			  // move to other
			 	const leftClick = {button: 0}
			  userEvent.click(screen.getByText(/sales/i), leftClick)

			  expect(screen.getByText(/MockSales/i)).toBeInTheDocument()

			  // move back
			  userEvent.click(screen.getByText(/^Home$/i), leftClick)

			  expect(screen.getByText(/MockHome/)).toBeInTheDocument()
			}) 

			it('should route when url matches', () => {
				// render  
				const pathname = '/';
				render(<MockApp pathname={pathname}/>)

				// change route 
			  expect(screen.getByText(/MockHome/)).toBeInTheDocument() 
			})
		})

		describe('<AutoHome>', () => {
			it('should route when link pressed', () => {
				// render 
			  render(<App/>) 

			  // move to other
			 	const leftClick = {button: 0}
			  userEvent.click(screen.getByText(/Auto Homepage/i), leftClick)

			  // check 
			  expect(screen.getByText(/MockAutoHome/)).toBeInTheDocument() 
			})

			it('should route when url matches', () => {
				// render  
				const pathname = '/sales';
				render(<MockApp pathname={pathname}/>)

				// change route 
			  expect(screen.getByText(/MockSales/)).toBeInTheDocument() 
			})
		})

		describe('<CloudErp>', () => {
			it('should route when link pressed', () => {
				// render 
			  render(<App/>) 

			  // move to other
			 	const leftClick = {button: 0}
			  userEvent.click(screen.getByText(/Cloud ERP/i), leftClick)

			  // check 
			  expect(screen.getByText(/MockCloudERP/i)).toBeInTheDocument()  
			})

			it('should route when url matches', () => {
				// render  
				const pathname = '/cloud_erp';
				render(<MockApp pathname={pathname}/>)

				// change route 
			  expect(screen.getByText(/MockCloudERP/i)).toBeInTheDocument() 
			})
		})

		describe('<CRM>', () => { 
			it('should route when link pressed', () => {
				// render 
			  render(<App/>) 

			  // move to other
			 	const leftClick = {button: 0}
			  userEvent.click(screen.getByText(/^CRM$/i), leftClick)

			  // check 
			  expect(screen.getByText(/MockCrm/i)).toBeInTheDocument()  
			}) 

			it('should route when url matches', () => {
				// render  
				const pathname = '/crm';
				render(<MockApp pathname={pathname}/>)

				// change route 
			  expect(screen.getByText(/MockCrm/i)).toBeInTheDocument() 
			})
		})

		describe('<ElectronicOffice>', () => {
			it('should route when link pressed', () => {
				// render 
			  render(<App/>) 

			  // move to other
			 	const leftClick = {button: 0}
			  userEvent.click(screen.getByText(/Electronic Office/i), leftClick)

			  // check 
			  expect(screen.getByText(/MockElectronicOffice/i)).toBeInTheDocument()  
			})

			it('should route when url matches', () => {
				// render  
				const pathname = '/electronic_office';
				render(<MockApp pathname={pathname}/>)

				// change route 
			  expect(screen.getByText(/MockElectronicOffice/i)).toBeInTheDocument() 
			})
		})

		describe('<Sales>', () => {
			it('should route when link pressed', () => {
				// render 
			  render(<App/>) 

			  // move to other
			 	const leftClick = {button: 0}
			  userEvent.click(screen.getByText(/Sales/i), leftClick)

			  // check 
			  expect(screen.getByText(/MockSales/i)).toBeInTheDocument()  
			})

			it('should route when url matches', () => {
				// render  
				const pathname = '/sales';
				render(<MockApp pathname={pathname}/>)

				// change route 
			  expect(screen.getByText(/MockSales/i)).toBeInTheDocument() 
			})
		})

		describe('<SSL>', () => {
			it('should route when link pressed', () => {
				// render 
			  render(<App/>) 

			  // move to other
			 	const leftClick = {button: 0}
			  userEvent.click(screen.getByText(/SSL/i), leftClick)

			  // check 
			  expect(screen.getByText(/MockSSL/i)).toBeInTheDocument()  
			})

			it('should route when url matches', () => {
				// render  
				const pathname = '/ssl';
				render(<MockApp pathname={pathname}/>)

				// change route 
			  expect(screen.getByText(/MockSSL/i)).toBeInTheDocument() 
			})
		}) 

		describe('error', () => {
			it('should route to home page if unmatched url', () => {
				// render  
				const pathname = '/abc123';
				render(<MockApp pathname={pathname}/>)

				// change route 
			  expect(screen.getByText(/MockHome/i)).toBeInTheDocument() 
			})
		})
	})
})

// some improvements to make
// -> prioritize meeting customer specifications and testing by deadline
// -> improve and tidy code if time left  
test.todo('add authentication')
test.todo('test useStatus')
test.todo('test PrivateFrame')
test.todo('test Login')
test.todo('test Electronic Office')
test.todo('test testUtils.js')
test.todo('test font loads')
test.todo('options test - use rtl make sure menu hidden when should be')
test.todo('ids vs class, different styles? ')
test.todo('make min-width settings cleaner') 
test.todo('make main-info-button tests cleaner') 
test.todo('router test with useHistory to move, components just name no <> ?')
test.todo('use .? optional chaining')

