import React, { useState } from 'react';
import axios from 'axios';
import {
  mainViewLeftStyle, 
  mainViewLeftHeaderStyle,
  mainViewRightStyle,   
  mainViewInfoTextStyle,
} from './../styles/MainView.js';
import { serviceInfoBoxButtonStyle } from './../styles/ServicesView.js';
import './../styles/LoginFrame.css';

export default function LoginFrame({setLoggedIn}) {
   /*
    username: Mona_Kassulke14
    password: EECsjlVnWIXfeuA
  */
  const url = 'https://6164054db55edc00175c1cc9.mockapi.io/v1/auth/1';
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const [isLoading, setIsLoading] = useState(false);
  const [errorStatus, setErrorStatus] = useState(''); 

  function onUsernameChange(e) {
    setUsername(e.target.value)
  }

  function onPasswordChange(e) {
    setPassword(e.target.value)
  }

  async function handleSubmit(e) { 
    e.preventDefault()
    setErrorStatus('')
    setIsLoading(true)

    // get correct username and password
    const { targetUsername, targetPassword } = await axios.get(url).then(response => {
      const targetUsername = response.data.username;
      const targetPassword = response.data.password;
      return { targetUsername, targetPassword }
    }).catch(error => {
      setErrorStatus('connection-error')
    })

    // finish loading, return if error
    setIsLoading(false)
    if(errorStatus === 'connection-error') return;
    
    // handle results
    // pass 
    if((username === targetUsername) && (password === targetPassword)) { 
      setLoggedIn(true)
    } 

    // fail
    if(username !== targetUsername) {  
      setErrorStatus('username-error')
    } else if (password !== targetPassword) {
      setErrorStatus('password-error')
    } 
  } 

  return (
    <div className='login-frame'>
      <h3 className="login-header" style={mainViewLeftHeaderStyle}>Login</h3>
      <form onSubmit={handleSubmit}>
        <label>
          <p className="login-text" style={mainViewInfoTextStyle}>UserName</p>
          <input type="text" disabled={isLoading} onChange={onUsernameChange}/>
        </label>
        <label>
          <p className="login-text" style={mainViewInfoTextStyle}>Password</p>
          <input type="password" disabled={isLoading} onChange={onPasswordChange}/>
        </label>
        <div className="submit-button-container">
          <button type="submit" disabled={isLoading} className="submit-button" style={serviceInfoBoxButtonStyle}>Submit</button>
        </div> 
      </form>
      <div className="feedback-messages">
        <p hidden={!isLoading}>Logging in, please wait.</p>
        <p hidden={errorStatus !== 'connection-error'}>Connection error, please try again</p>
        <p hidden={errorStatus !== 'username-error'}>Username not found, please try again</p>
        <p hidden={errorStatus !== 'password-error'}>Wrong password, please try again</p>
      </div>
    </div> 
  )
}