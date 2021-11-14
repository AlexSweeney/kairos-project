import React, { useState } from 'react';

export default function useStatus() {
	const [status, setStatus] = useState(getStatus());

	function getStatus() {
		const storedStatus = sessionStorage.getItem('logged-in'); 
		return storedStatus;
	}

	function saveStatus(status) { 
		sessionStorage.setItem('logged-in', status)
		setStatus(status); 
	}

	return ({
		setLoggedIn: saveStatus,
		loggedIn: status,
	})
}