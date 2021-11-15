import React from 'react';
/// import axios from 'axios';
// import { render, unmountComponentAtNode } from 'react-dom';
// import { act, Simulate, isElementOfType } from 'react-dom/test-utils';

import { render, fireEvent} from '@testing-library/react'
// import getData from './../utils/getData.js';
import LoginFrame from './../pages/LoginFrame.jsx';
import {  
	getObjectFromStyle,
	testObjectsForEquality,
	makeObjectKeysLowerCase,
} from './../utils/testUtils.js';
import { 
  mainViewRightHeaderStyle,  
  mainViewRightButtonStyle,
  mainViewInfoTextStyle,
} from './../styles/MainView.js';


let container;
let loggedIn;
let setLoggedIn;

const correctUserName = "correct-username";
const correctPassword = "correct-password";

const incorrectUserName = "incorrect-userName";
const incorrectPassword = "incorrect-password";


 
jest.mock('./../utils/getData.js') 

beforeEach(() => {
	/*loggedIn = false;
	setLoggedIn = (val) => { loggedIn = val };
	*/
	// container = document.createElement('div');
	// document.body.appendChild(container)
	// act(() => { render(<LoginFrame setLoggedIn={setLoggedIn}/>, container)})
})

afterEach(() => {
	/*loggedIn = null;
	setLoggedIn = null;*/
	// axios = null;
	// unmountComponentAtNode(container) 
})

describe('<LoginFrame/>', () => {
	describe('on render', () => {
		it('should render', () => {
			const loginFrame = document.querySelector('.login-frame');
			expect(loginFrame).not.toEqual(null)
		})

		describe('content', () => { 
			describe('heading', () => {
				it('should have "Login" heading', () => {
					const heading = document.querySelector('.login-header');
					expect(heading.textContent).toEqual('Login')
				})
			})
			describe('form', () => {
				it('should have a form', () => {
					const form = document.querySelector('form');
					expect(form).not.toEqual(null)
				})

				describe('username input', () => {
					it('should have .login-text "UserName"', () => {
						const labels = document.querySelectorAll('label');

						const textNode = labels[0].querySelector('.login-text');
						expect(textNode.textContent).toEqual("UserName")
					})

					it('should have input type="text"', () => {
						const labels = document.querySelectorAll('label');

						const input = labels[0].querySelector('input');
						expect(input.type).toEqual('text') 
					})
				})

				describe('password input', () => {
					it('should have .login-text "Password"', () => {
						const labels = document.querySelectorAll('label');

						const textNode = labels[1].querySelector('.login-text');
						expect(textNode.textContent).toEqual("Password")
					})

					it('should have input type="password"', () => {
						const labels = document.querySelectorAll('label');

						const input = labels[1].querySelector('input');
						expect(input.type).toEqual('password') 
					})
				})

				describe('submit button', () => {
					it('should have type="submit"', () => {
						const submitButton = document.querySelector('.submit-button');

						expect(submitButton.type).toEqual('submit')
					})

					it('should have text "Submit"', () => {
						const submitButton = document.querySelector('.submit-button');

						expect(submitButton.textContent).toEqual('Submit')
					})
				})
			})

			describe('feedback-messages', () => {
				it('text content should be hidden', () => {
					const feedbackMessages = document.querySelector('.feedback-message');
					
					feedbackMessages.forEach(feedbackMessage => {
						expect(feedbackMessage.hidden).toEqual(true)
					})
				})
			})
		})

		describe('style', () => {
			describe('heading', () => {
				it('should have "mainViewRightHeaderStyle" ', () => {
					const heading = document.querySelector('.login-header');

					const headingStyle = getObjectFromStyle(heading.style);
					const targetStyle = makeObjectKeysLowerCase(mainViewRightHeaderStyle);

					const test = testObjectsForEquality(headingStyle, targetStyle);
					expect(test).toEqual(true) 
				})
			})

			describe('username input label', () => {
				it('should have "mainViewInfoTextStyle"', () => {
					const labels = document.querySelectorAll('label');
					const textNode = labels[0].querySelector('.login-text');

					const textStyle = getObjectFromStyle(textNode.style);
					const targetStyle = makeObjectKeysLowerCase(mainViewInfoTextStyle);

					const test = testObjectsForEquality(textStyle, targetStyle);
					expect(test).toEqual(true) 
				})
			})

			describe('password input label', () => {
				it('should have "mainViewInfoTextStyle"', () => {
					const labels = document.querySelectorAll('label');
					const textNode = labels[1].querySelector('.login-text');

					const textStyle = getObjectFromStyle(textNode.style);
					const targetStyle = makeObjectKeysLowerCase(mainViewInfoTextStyle);

					const test = testObjectsForEquality(textStyle, targetStyle);
					expect(test).toEqual(true) 
				})
			})

			describe('submit button', () => {
				it('should have "mainViewRightButtonStyle"', () => {
					const submitButton = document.querySelector('.submit-button');

					const submitButtonStyle = getObjectFromStyle(submitButton.style);
					const targetStyle = makeObjectKeysLowerCase(mainViewRightButtonStyle);

					const test = testObjectsForEquality(submitButtonStyle, targetStyle);
					expect(test).toEqual(true) 
				})
			})

			describe('feedback-messages', () => {
				it('should have "mainViewInfoTextStyle"', () => {
					const feedbackMessages = document.querySelector('.feedback-message');
					
					feedbackMessages.forEach(feedbackMessage => {
						const feedbackMessageStyle = getObjectFromStyle(feedbackMessage.style);
						const targetStyle = makeObjectKeysLowerCase(mainViewInfoTextStyle);

						const test = testObjectsForEquality(feedbackMessageStyle, targetStyle);
						expect(test).toEqual(true) 
					})
				})
			})
		})
	})

	describe('on form submit', () => {
		describe('onLoading', () => {
			it('should disable text inputs', () => {
				// form submit
				const form = document.querySelector('form')
				act(() => Simulate.submit(form))

				// check
				const inputs = document.querySelectorAll('input');
				inputs.forEach(input => {
					expect(input.disabled).toEqual(true)
				})
			})

			it('should disable submit button', () => {
				// form submit
				const form = document.querySelector('form')
				act(() => Simulate.submit(form))

				// check
				const submitButton = document.querySelector('.submit-button');
				expect(submitButton.disabled).toEqual(true)
			})

			it('message "Logging in, please wait." should not be hidden, all others should', () => {
				// form submit
				const form = document.querySelector('form')
				act(() => Simulate.submit(form))

				// check
				const feedbackMessages = document.querySelectorAll('.feedback-message');
				let foundTarget = false;

				feedbackMessages.forEach(feedbackMessage => {
					if(feedbackMessage.textContent === "Logging in, please wait.") {
						expect(feedbackMessage.hidden).toEqual(false)
						foundTarget = true;
					} else {
						expect(feedbackMessage.hidden).toEqual(true)
					} 
				})

				expect(foundTarget).toEqual(true)
			})
		})

		describe('wrong username wrong password', () => {
			it('message "Username not found, please try again." should not be hidden, all others should ', () => {
				// check
				const inputs = document.querySelectorAll('input');
				const submitButton = document.querySelector('.submit-button');

				// set values
				inputs[0].value = incorrectUserName;
				inputs[1].value = incorrectPassword;

				// form submit
				const form = document.querySelector('form')
				act(() => Simulate.submit(form))
 
				// check
				const feedbackMessages = document.querySelectorAll('.feedback-message');
				let foundTarget = false;

				feedbackMessages.forEach(feedbackMessage => {
					if(feedbackMessage.textContent === "Logging in, please wait.") {
						expect(feedbackMessage.hidden).toEqual(false)
						foundTarget = true;
					} else {
						expect(feedbackMessage.hidden).toEqual(true)
					} 
				})

				expect(foundTarget).toEqual(true)
			})
		})

		describe('wrong username right password', () => {
			it('message "Username not found, please try again." should not be hidden, all others should ', () => {
				// check
				const inputs = document.querySelectorAll('input');
				const submitButton = document.querySelector('.submit-button');

				// set values
				inputs[0].value = incorrectUserName;
				inputs[1].value = correctPassword;

				// form submit
				const form = document.querySelector('form')
				act(() => Simulate.submit(form))
 
				// check
				const feedbackMessages = document.querySelectorAll('.feedback-message');
				let foundTarget = false;

				feedbackMessages.forEach(feedbackMessage => {
					if(feedbackMessage.textContent === "Username not found, please try again.") {
						expect(feedbackMessage.hidden).toEqual(false)
						foundTarget = true;
					} else {
						expect(feedbackMessage.hidden).toEqual(true)
					} 
				})

				expect(foundTarget).toEqual(true)
			})
		})

		describe('right username wrong password', () => {
			it('message "Wrong password, please try again." should not be hidden, all others should ', () => {
				// check
				const inputs = document.querySelectorAll('input');
				const submitButton = document.querySelector('.submit-button');

				// set values
				inputs[0].value = correctUserName;
				inputs[1].value = incorrectPassword;

				// form submit
				const form = document.querySelector('form')
				act(() => Simulate.submit(form))
 
				// check
				const feedbackMessages = document.querySelectorAll('.feedback-message');
				let foundTarget = false;

				feedbackMessages.forEach(feedbackMessage => {
					if(feedbackMessage.textContent === "Wrong password, please try again.") {
						expect(feedbackMessage.hidden).toEqual(false)
						foundTarget = true;
					} else {
						expect(feedbackMessage.hidden).toEqual(true)
					} 
				})

				expect(foundTarget).toEqual(true)
			})
		})

		describe('right username right password', () => {
			it.only('should call setLoggedIn with true', async () => {
				// render 
				const setLoggedIn = jest.fn();
				render(<LoginFrame setLoggedIn={setLoggedIn}/>)

				// get inputs 
				const inputs = document.querySelectorAll('input');
				const submitButton = document.querySelector('.submit-button');

				fireEvent.change(inputs[0], { target: { value: correctUserName }})
				fireEvent.change(inputs[1], { target: { value: correctPassword }})

				// click submit 
				await fireEvent.click(submitButton)

				//console.log(wrapper)
				// check 
				expect(setLoggedIn).toHaveBeenCalledTimes(1)
				expect(setLoggedIn).toHaveBeenCalledWith(true)
			})
		})

		describe('connection error', () => {

		})
	})
})