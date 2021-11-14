import React, { useState } from 'react';
import useStatus from './../components/useStatus.jsx';
import axios from 'axios';

export default function LoginFrame() {
	const api = 'https://6164054db55edc00175c1cc9.mockapi.io/v1/auth/1';
  /*
    username: Mona_Kassulke14
    password: EECsjlVnWIXfeuA
  */
  const [username, setUsername] = useState('Mona_Kassulke14');
  const [password, setPassword] = useState('EECsjlVnWIXfeuA');
  const [isError, setIsError] = useState(false);
  const {status, setStatus} = useStatus();


	function onUsernameChange(e) {
    setUsername(e.target.value)
  }

  function onPasswordChange(e) {
    setPassword(e.target.value)
  }

  async function handleSubmit(e) { 
    e.preventDefault()

    // get correct username and password
    const { targetUsername, targetPassword } = await axios.get(api).then(response => {
      const targetUsername = response.data.username;
      const targetPassword = response.data.password;
      return { targetUsername, targetPassword }
    }).catch(error => {
      setIsError(true)
    })

    // handle results
    if((username === targetUsername) && (password === targetPassword)) { 
    	console.log('logged in')
      setStatus(true)
    } else { 
    	console.log('log in failed')
      setStatus(false)
    }
  } 

	return (
		<div className='login-frame'>
      {/*<p show={isError}>Connection Error, please try logging in again</p>*/}
      <h3>Login</h3>
      <form onSubmit={handleSubmit}>
        <label>
          <p>UserName</p>
          <input type="text" onChange={onUsernameChange}/>
        </label>
        <label>
          <p>Password</p>
          <input type="password" onChange={onPasswordChange}/>
        </label>
        <div>
          <button type="submit">Submit</button>
        </div> 
      </form>
    </div>
	)
}