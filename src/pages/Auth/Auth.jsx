import React from 'react'
import { useState } from 'react';
import './Auth.css';
import icon from '../../assests/icon.png'
import AboutAuth from './AboutAuth';
import './Auth.css';

const Auth = () => {

  const [isSignup, setIsSignup] = useState(false)
  const handleSwitch = () => {
    setIsSignup(!isSignup)
  } 
  return (
  <section className='auth-section'>  
   {
      isSignup && <AboutAuth/>
    }
    <div className='auth-container-2'>
      {!isSignup && <img src={icon} alt="Stackoverflow" className='login-logo'/>}
      <form>
        {
          isSignup && (
            <label htmlFor="name">
              <h4>DISPLAY NAME</h4>
              <input type="text" id='name' name='name' /> 
            </label>
          )
        }
        <label htmlFor="email">
          <h4>Email</h4>
          <input type="email" name='email' id='email'/>
        </label>
        <label htmlFor="password">
          <div style={{display:"flex", justifyContent:"space-between"}}>   
          <h4>Password</h4>
          { !isSignup && <p style={{color : "#007ac6" , fontSize:"13px"}}>forget password</p>}
          </div>
          <input type="password" name='password' id='password'/>
          {isSignup && <p style={{ color: "#666767",fontSize:"13px"}}>passwords must contain eight <br />characters,including 1 letter and 1 <br />number </p>}
        </label>
        { isSignup && (
          <label htmlFor="check">
            <input type="checkbox"  id='check' name='check'/>
            <p style={{fontSize:"13px"}}>Opt-in to receive occasional product <br />updates, user research invitations, company <br/>announcements, and digests.</p>
          </label>
        )}
        <button type='submit' className='auth-btn'> { isSignup ? 'sign up' : 'log in' }</button>
        
      </form>
        <p>
          {isSignup ? "already have an account?":"don't have an account?" }
        
        <button type='button' className='handle-switch-btn' onClick={handleSwitch}>{isSignup ? 'Log in':'sign up'}</button>
        </p>
        {isSignup && <p style={{color : "#666767", fontSize:"13px" }}>y clicking “Sign up”, you agree to
           <span style={{color : "#007ac6"}}> our terms of <br/>service</span>, 
           <span style={{color : "#007ac6"}}>privacy policy</span> and 
           <span style={{color : "#007ac6"}}>cookie policy</span></p>}
      
    </div>
  </section> 
  )
}

export default Auth
