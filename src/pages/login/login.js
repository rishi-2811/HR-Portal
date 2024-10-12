import './login.css'
import { useState } from 'react'
import LoginForm from '../../components/login.js'
import SignUp from '../../components/signup.js'

export function Login(){
    const [isLogin,setlogin]=useState(true)
    return(
        <div className="loginContainer">
            <div className="loginHeader">
                <img src="logos/l2.svg" alt="logo"/>
                <h1>BlueBird HR</h1>
            </div>
            <div className="innerLoginContainer">
                <img src="logos/l1.svg" alt="folders"/>
                <div className="Login">
                    <h1><span className={isLogin && "important"} onClick={()=>{setlogin(true)}}>Login</span>
                    <span className={!isLogin && "important"} onClick={()=>{setlogin(false)}}>Sign Up</span></h1>
                    {isLogin?<LoginForm/>:<SignUp/>}
                </div>
            </div>
        </div>
    )
}