import React, {useState} from 'react';

export default function UserStatus() {
	const [status, setStatus] = useState(getStatus());

	function getStatus() {
		const storedStatus = sessionStorage.getItem('logged-in');
		console.log('storedStatus', storedStatus)
		return storedStatus || false;
	}

	function saveStatus(status) {
		console.log('saveStatus', status)
		sessionStorage.setItem('logged-in', status)
		setStatus(status); 
	}

	return ({
		setStatus: saveStatus,
		status,
	})
}