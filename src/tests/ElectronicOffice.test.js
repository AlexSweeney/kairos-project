import React from 'react';
import { render, fireEvent, waitFor, cleanup} from '@testing-library/react';
import ElectronicOffice from './../pages/ElectronicOffice.jsx';

// =========================================== Consts & Vars =========================================== // 
const correctUserName = "correct-username";
const correctPassword = "correct-password";

// =========================================== Mocks =================================================== // 
jest.mock('./../utils/getData.js') 

// =========================================== Setup / teardown ======================================== // 
beforeEach(() => {
	render(<ElectronicOffice/>)
})

afterEach(() => {
	cleanup()
})

// =========================================== Tests ================================================== //
describe('<ElectronicOffice/>', () => {
	describe('on "loggedIn !== true"', () => {
		it('should render <LoginFrame/>', () => {
			const loginFrame = document.querySelector('.login-frame');
			expect(loginFrame).not.toEqual(null)
		})

		it('should render "Electronic Office" heading', () => {
			const heading = document.querySelector('.main-view-left-header')
			expect(heading).not.toEqual(null)
		})
	})

	describe('on "loggedIn === true"', () => {
		it('should render <PrivateFrame/>', async () => {
			// set input values
			const inputs = document.querySelectorAll('input');
			fireEvent.change(inputs[0], { target: { value: correctUserName }})
			fireEvent.change(inputs[1], { target: { value: correctPassword }})

			// click submit 
			const submitButton = document.querySelector('.submit-button');
			await waitFor(() => { fireEvent.click(submitButton) })

			// check
			const PrivateFrame = document.querySelector('.private-frame');
			expect(PrivateFrame).not.toEqual(null)
		})

		it('should not render "ElectronicOffice" heading', async () => {
			// set input values
			const inputs = document.querySelectorAll('input');
			fireEvent.change(inputs[0], { target: { value: correctUserName }})
			fireEvent.change(inputs[1], { target: { value: correctPassword }})

			// click submit 
			const submitButton = document.querySelector('.submit-button');
			await waitFor(() => { fireEvent.click(submitButton) })

			// check
			const heading = document.querySelector('.main-view-left-header')
			expect(heading).toEqual(null)
		})
	})
})