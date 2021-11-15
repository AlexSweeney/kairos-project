import React, { useState } from 'react';
import getData from './../utils/getData.js';
/*import {
  mainViewLeftStyle, 
  mainViewLeftHeaderStyle,
  mainViewRightStyle,   
  mainViewInfoTextStyle,
} from './../styles/MainView.js';
import { serviceInfoBoxButtonStyle } from './../styles/ServicesView.js';*/

import { 
  mainViewRightHeaderStyle,  
  mainViewRightButtonStyle,
  mainViewInfoTextStyle,
} from './../styles/MainView.js';

import './../styles/LoginFrame.css';

export default function LoginFrame({setLoggedIn}) {
  /*
    username: Mona_Kassulke14
    password: EECsjlVnWIXfeuA
  */
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
    const { targetUsername, targetPassword } = await getData();
    setIsLoading(false)

    // error
    if(username === 'loading-error') {
      setErrorStatus('loading-error')
      return;
    }

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
      <h3 className="login-header" style={mainViewRightHeaderStyle}>Login</h3>
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
          <button type="submit" disabled={isLoading} className="submit-button" style={mainViewRightButtonStyle}>Submit</button>
        </div> 
      </form>
      <div className="feedback-messages">
        <p hidden={!isLoading} className="feedback-message" style={mainViewInfoTextStyle}>Logging in, please wait.</p>
        <p hidden={errorStatus !== 'loading-error'} className="feedback-message"  style={mainViewInfoTextStyle}>Connection problem, please try again.</p>
        <p hidden={errorStatus !== 'username-error'} className="feedback-message"  style={mainViewInfoTextStyle}>Username not found, please try again.</p>
        <p hidden={errorStatus !== 'password-error'} className="feedback-message"  style={mainViewInfoTextStyle}>Wrong password, please try again.</p>
      </div>
    </div> 
  )
}