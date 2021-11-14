import React, { useState, useEffect } from 'react';
import axios from 'axios';
import UserStatus from './../components/UserStatus.jsx';
import PrivateFrame from './../pages/PrivateFrame.jsx';
import {
  mainViewLeftStyle, 
  mainViewLeftHeaderStyle,
  mainViewRightStyle,   
  mainViewInfoTextStyle,
} from './../styles/MainView.js';
import { serviceInfoBoxButtonStyle } from './../styles/ServicesView.js';
import './../styles/MainView.css';
import './../styles/ElectronicOffice.css';

export default function ElectronicOffice() {
  const {status, setStatus} = UserStatus();

  const api = 'https://6164054db55edc00175c1cc9.mockapi.io/v1/auth/1';
  /*
    username: Mona_Kassulke14
    password: EECsjlVnWIXfeuA
  */
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
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
    console.log('targetUsername', targetUsername)
    if((username === targetUsername) && (password === targetPassword)) { 
      setStatus(true)
    } else {  
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

  // test 

  return (
    <section className="main-view"> 
      <div className="main-view-left" style={mainViewLeftStyle}>   
        <h2 className="main-view-left-header" style={mainViewLeftHeaderStyle}>Electronic Office</h2>
      </div>
     
      <div className="main-view-right" style={mainViewRightStyle}> 
        { 
          (status === true) ? <PrivateFrame/> : 
          <div className='login-frame'>
            <p hidden={!isError}>Connection Error, please try logging in again</p>
            <h3 className="login-header" style={mainViewLeftHeaderStyle}>Login</h3>
            <form onSubmit={handleSubmit}>
              <label>
                <p className="login-text" style={mainViewInfoTextStyle}>UserName</p>
                <input type="text" onChange={onUsernameChange}/>
              </label>
              <label>
                <p className="login-text" style={mainViewInfoTextStyle}>Password</p>
                <input type="password" onChange={onPasswordChange}/>
              </label>
              <div className="submit-button-container">
                <button type="submit" className="submit-button" style={serviceInfoBoxButtonStyle}>Submit</button>
              </div> 
            </form>
          </div>
        }
      </div>
    </section>  
  )
}