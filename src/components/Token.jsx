import React, {useState} from 'react';

export default function UserStatus() {
	const [token, setToken] = useState(getToken());

	function getToken() {
		const tokenString = sessionStorage.getItem('token');

	}
}