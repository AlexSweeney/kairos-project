import { renderHook, act } from '@testing-library/react-hooks'; 
import  useStatus from './../utils/useStatus.jsx';

afterEach(() => {
	window.sessionStorage.clear()
})

describe('useStatus()', () => {
	describe('on new instance', () => {
		describe('on sessionStorge.logged-in = true', () => {
			it('useStatus.loggedIn() should return "true"', () => {
				window.sessionStorage.setItem('logged-in', 'true')
				 
				const {result} = renderHook(useStatus);
				const res = result.current.loggedIn;
				expect(res).toEqual(true)
			})
		})

		describe('on sessionStorge.logged-in = false', () => {
			it('useStatus.loggedIn() should return false', () => {
				window.sessionStorage.setItem('logged-in', 'false')
				 
				const {result} = renderHook(useStatus);
				const res = result.current.loggedIn;
				expect(res).toEqual(false)
			})
		})

		describe('on sessionStorge.logged-in not defined', () => {
			it('useStatus.loggedIn() should return false', () => {
				const {result} = renderHook(useStatus);
				const res = result.current.loggedIn;
				expect(res).toEqual(false)
			})
		})
	})

	describe('on useStatus.setLoggedIn()', () => {
		describe('setLoggedIn(true)', () => {
			it('useStatus.loggedIn() should return "true"', () => {
				const {result} = renderHook(useStatus);
				act(() => result.current.setLoggedIn(true))
				const res = result.current.loggedIn;
				expect(res).toEqual(true)
			})
		})

		describe('setLoggedIn(false)', () => {
			it('useStatus.loggedIn() should return "false"', () => {
				const {result} = renderHook(useStatus);
				act(() => result.current.setLoggedIn(false))
				const res = result.current.loggedIn;
				expect(res).toEqual(false)
			})
		})
	})
})