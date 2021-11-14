import React, { useState, useEffect } from 'react';
import axios from 'axios';

import UserStatus from './../components/UserStatus.jsx';
import LoginFrame from './../pages/LoginFrame.jsx';
import PrivateFrame from './../pages/PrivateFrame.jsx';
import {
  mainViewLeftStyle, 
  mainViewLeftHeaderStyle,
  mainViewRightStyle,   
} from './../styles/MainView.js';
import './../styles/MainView.css';

export default function ElectronicOffice() {
  const {status, setStatus} = UserStatus();

  const api = 'https://6164054db55edc00175c1cc9.mockapi.io/v1/auth/1';
  /*
    username: Mona_Kassulke14
    password: EECsjlVnWIXfeuA
  */
  const [username, setUsername] = useState('Mona_Kassulke14');
  const [password, setPassword] = useState('EECsjlVnWIXfeuA');
  const [isError, setIsError] = useState(false);


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

  // log in   * 

  // update status * 

  // conditional view / route * 

  // error handle *

  // tidy * 

  // style

  // fail feedback

  // move to login frame 

  return (
    <section className="main-view"> 
      <div className="main-view-left" style={mainViewLeftStyle}>   
        <h2 className="main-view-left-header" style={mainViewLeftHeaderStyle}>Electronic Office</h2>
      </div>
     
      <div className="main-view-right" style={mainViewRightStyle}> 
        { 
          status ? <PrivateFrame/> : 
          <div className='login-frame'>
            <p hidden={!isError}>Connection Error, please try logging in again</p>
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
        }
      </div>
    </section>  
  )
}