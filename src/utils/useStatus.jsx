import React, { useState } from 'react';

export default function useStatus() {
	/*
		* on new instance 
			* set status to sessionStorage.logged-in or false
		
		* on set useStatus.setLoggedIn()
			* update status
			* update sessionStorge.logged-in

		* on get useStatus.loggedIn
			* return status
	*/
	const [status, setStatus] = useState(getStatus());

	function getStatus() {
		const storedStatus = sessionStorage.getItem('logged-in'); 
		return storedStatus;
	}

	function saveStatus(status) { 
		sessionStorage.setItem('logged-in', status)
		setStatus(status); 
	}

	function returnStatus() {
		if(status === 'false') return false;
		if(status === 'true') return true;
		if(status === null) return false;
		return status;
	}

	return ({
		setLoggedIn: saveStatus,
		loggedIn: returnStatus(),
	})
}