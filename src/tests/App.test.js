import React from 'react';
import {render, screen, cleanup} from '@testing-library/react';
import userEvent from '@testing-library/user-event'; 
import { BrowserRouter, MemoryRouter, Routes, Route } from 'react-router-dom';
import { useHistory } from 'react-router-dom';
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

/* ======================================= Mocks ================================================== */
jest.mock('./../pages/Home.jsx')
jest.mock('./../pages/AutoHome.jsx')
jest.mock('./../pages/Sales.jsx')
jest.mock('./../pages/CloudErp.jsx')
jest.mock('./../pages/CRM.jsx')
jest.mock('./../pages/ElectronicOffice.jsx')
jest.mock('./../pages/SSL.jsx')
jest.mock('./../App.jsx')

/* ======================================= Setup / Teardown ======================================= */
beforeEach(() => { 
	Home.mockImplementation(() => <p>MockHome</p>);
	AutoHome.mockImplementation(() => <p>MockAutoHome</p>);
	Sales.mockImplementation(() => <p>MockSales</p>);
	CloudErp.mockImplementation(() => <p>MockCloudErp</p>);
	CRM.mockImplementation(() => <p>MockCRM</p>);
	ElectronicOffice.mockImplementation(() => <p>MockElectronicOffice</p>);
	SSL.mockImplementation(() => <p>MockSSL</p>);
}) 

afterEach(() => {
	cleanup()
})

/* ======================================= Tests ================================================== */
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
				render(<App pathname={pathname}/>)

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
				render(<App pathname={pathname}/>)

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
				const pathname = '/cloud_erp';
				render(<App pathname={pathname}/>)

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
				render(<App pathname={pathname}/>)

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
				render(<App pathname={pathname}/>)

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
				render(<App pathname={pathname}/>)

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
				render(<App pathname={pathname}/>)

				// change route 
			  expect(screen.getByText(/MockSSL/i)).toBeInTheDocument() 
			})
		}) 

		describe('error', () => {
			it('should route to home page if unmatched url', () => {
				// render  
				const pathname = '/abc123';
				render(<App pathname={pathname}/>)

				// change route 
			  expect(screen.getByText(/MockHome/i)).toBeInTheDocument() 
			})
		})
	})
}) 