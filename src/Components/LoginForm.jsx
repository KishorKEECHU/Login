import React from 'react'
import "./LoginForm.css"
import { FaUser } from "react-icons/fa";
import { RiLockPasswordFill } from "react-icons/ri";

const LoginForm = () => {
  return (
    <div className='head'>
        <form action=''>
            <h1>Login</h1>
            <div className='input-box'>
                <input type="text" placeholder='User Name' />
                <FaUser className='icon' />
            </div>
            <div className='input-box'>
                <input type="password" placeholder='Password'/>
                <RiLockPasswordFill className='icon' />
            </div>
            <div className="forgot">
                <a href='# '>Forgot Password</a>
            </div>
            <div className="submit">
                <button type="submit">Login</button>
            </div>
            <div className="register">
                <p>Don't have account? <a href='#'>Register</a></p>
            </div>
        </form>
    </div>
  )
}

export default LoginForm