import axios from 'axios';

const url = 'https://6164054db55edc00175c1cc9.mockapi.io/v1/auth/1';

export default async function getData() {
	const results = await axios.get(url).then(response => {
    const targetUsername = response.data.username;
    const targetPassword = response.data.password;
    return { targetUsername, targetPassword }
  }).catch(error => {
  	console.error('getData() loading error:', error)
  	return { targetUsername: 'loading-error', targetPassword: 'loading-error'}
  })
  return results;
}

	