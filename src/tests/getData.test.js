import React from 'react';
import axios from 'axios';
import getData from './../utils/getData.js';

/* ======================================= Consts ======================================= */
const correctUserName = "correct-username";
const correctPassword = "correct-password";

const axiosResponse = {
	data : {
		username: correctUserName,
		password: correctPassword,
	} 
};

/* ======================================= Mock ========================================= */
jest.mock('axios')

/* ======================================= Tests ======================================== */
describe('getData()', () => {
	describe('on success', () => {
		it('should return { targetUsername: (data.username), targetPassword: (data.password)} ', async () => {
			axios.get.mockImplementationOnce(() => Promise.resolve(axiosResponse));

			const data = await getData();
			const res = {
				targetUsername:  "correct-username",
				targetPassword: "correct-password",
			};

			expect(data).toEqual(res)
		})
	})

	describe('on error', () => {
		it('should return { targetUsername: "loading-error", targetPassword: "loading-error"} ', async () => {
			const errorMessage = 'Network Error';
			axios.get.mockImplementationOnce(() => Promise.reject(new Error(errorMessage)));

			const data = await getData();
			const res = {
				targetUsername:  "loading-error",
				targetPassword: "loading-error",
			};

			expect(data).toEqual(res)
		})
	})
})