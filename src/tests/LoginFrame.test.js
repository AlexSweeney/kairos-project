import React from 'react';
import { render, fireEvent, waitFor, cleanup} from '@testing-library/react';
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

let setLoggedIn;
let submitButton;
let inputs;
let form;
let labels;
let feedbackMessages;

const correctUserName = "correct-username";
const correctPassword = "correct-password";

const incorrectUserName = "incorrect-userName";
const incorrectPassword = "incorrect-password";

jest.mock('./../utils/getData.js') 

beforeEach(() => {
	setLoggedIn = jest.fn();
	render(<LoginFrame setLoggedIn={setLoggedIn}/>)
	inputs = document.querySelectorAll('input');
	submitButton = document.querySelector('.submit-button');
	form = document.querySelector('form');
	labels = document.querySelectorAll('label');
	feedbackMessages = document.querySelectorAll('.feedback-message');
})

afterEach(() => {
	inputs = null;
	submitButton = null;
	form = null;
	cleanup()
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
						const textNode = labels[0].querySelector('.login-text');
						expect(textNode.textContent).toEqual("UserName")
					})

					it('should have input type="text"', () => {
						const input = labels[0].querySelector('input');
						expect(input.type).toEqual('text') 
					})
				})

				describe('password input', () => {
					it('should have .login-text "Password"', () => {
						const textNode = labels[1].querySelector('.login-text');
						expect(textNode.textContent).toEqual("Password")
					})

					it('should have input type="password"', () => {
						const input = labels[1].querySelector('input');
						expect(input.type).toEqual('password') 
					})
				})

				describe('submit button', () => {
					it('should have type="submit"', () => {
						expect(submitButton.type).toEqual('submit')
					})

					it('should have text "Submit"', () => {
						expect(submitButton.textContent).toEqual('Submit')
					})
				})
			})

			describe('feedback-messages', () => {
				it('text content should be hidden', () => {
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
					const textNode = labels[0].querySelector('.login-text');

					const textStyle = getObjectFromStyle(textNode.style);
					const targetStyle = makeObjectKeysLowerCase(mainViewInfoTextStyle);

					const test = testObjectsForEquality(textStyle, targetStyle);
					expect(test).toEqual(true) 
				})
			})

			describe('password input label', () => {
				it('should have "mainViewInfoTextStyle"', () => {
					const textNode = labels[1].querySelector('.login-text');

					const textStyle = getObjectFromStyle(textNode.style);
					const targetStyle = makeObjectKeysLowerCase(mainViewInfoTextStyle);

					const test = testObjectsForEquality(textStyle, targetStyle);
					expect(test).toEqual(true) 
				})
			})

			describe('submit button', () => {
				it('should have "mainViewRightButtonStyle"', () => {
					const submitButtonStyle = getObjectFromStyle(submitButton.style);
					const targetStyle = makeObjectKeysLowerCase(mainViewRightButtonStyle);

					const test = testObjectsForEquality(submitButtonStyle, targetStyle);
					expect(test).toEqual(true) 
				})
			})

			describe('feedback-messages', () => {
				it('should have "mainViewInfoTextStyle"', () => {
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
			it('should disable text inputs', async () => {
				await waitFor(() => { 
					fireEvent.click(submitButton) 

					inputs.forEach(input => {
						expect(input.disabled).toEqual(true)
					})
				})
			})

			it('should disable submit button', async () => {
				await waitFor(() => { 
					fireEvent.click(submitButton) 

					// check
					expect(submitButton.disabled).toEqual(true)
				}) 
			})

			it('message "Logging in, please wait." should not be hidden, all others should', async () => {
				// click submit 
				await waitFor(() => { 
					fireEvent.click(submitButton) 

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
		})

		describe('wrong username wrong password', () => {
			it('message "Username not found, please try again." should not be hidden, all others should ', async () => {
				// set input values
				fireEvent.change(inputs[0], { target: { value: incorrectUserName }})
				fireEvent.change(inputs[1], { target: { value: incorrectPassword }})

				// click submit 
				await waitFor(() => { fireEvent.click(submitButton) })
 
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

		describe('wrong username right password', () => {
			it('message "Username not found, please try again." should not be hidden, all others should ', async () => {
				// set input values
				fireEvent.change(inputs[0], { target: { value: incorrectUserName }})
				fireEvent.change(inputs[1], { target: { value: correctPassword }})

				// click submit 
				await waitFor(() => { fireEvent.click(submitButton) })
 
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
			it('message "Wrong password, please try again." should not be hidden, all others should ', async () => {
				// set input values
				fireEvent.change(inputs[0], { target: { value: correctUserName }})
				fireEvent.change(inputs[1], { target: { value: incorrectPassword }})

				// click submit 
				await waitFor(() => { fireEvent.click(submitButton) })
 
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
			it('should call setLoggedIn with true', async () => {
				// set input values
				fireEvent.change(inputs[0], { target: { value: correctUserName }})
				fireEvent.change(inputs[1], { target: { value: correctPassword }})

				// click submit 
				await waitFor(() => { fireEvent.click(submitButton) })

				// check 
				expect(setLoggedIn).toHaveBeenCalledTimes(1)
				expect(setLoggedIn).toHaveBeenCalledWith(true)
			})
		})

		describe('connection error', () => {
			it.skip('message "Connection problem, please try again." should not be hidden, all others should ', async () => {
				console.log(window);

				// set input values
				fireEvent.change(inputs[0], { target: { value: correctUserName }})
				fireEvent.change(inputs[1], { target: { value: incorrectPassword }})

				// click submit 
				await waitFor(() => { fireEvent.click(submitButton) })
 
				// check
				const feedbackMessages = document.querySelectorAll('.feedback-message');
				let foundTarget = false;

				feedbackMessages.forEach(feedbackMessage => {
					if(feedbackMessage.textContent === "Connection problem, please try again.") {
						expect(feedbackMessage.hidden).toEqual(false)
						foundTarget = true;
					} else {
						expect(feedbackMessage.hidden).toEqual(true)
					} 
				})

				expect(foundTarget).toEqual(true)
			})
		})
	})
})