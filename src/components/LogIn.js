import { useState } from "react"
import Loading from "./Loading"
import { api2 } from "../constants/constant"
import { useNavigate } from "react-router-dom"


export default function LoginForm(){
    const navigate=useNavigate()
    const handlesubmit=async(e)=>{
        e.preventDefault()
        setloading(true)
        try {
            const res=await fetch(api2+'login',{
                method:"POST",
                headers:{
                    'Content-Type':'application/json'
                },
                body:JSON.stringify({  email, password }),
                credentials:'include'
            })
            const data=await res.json()
            setloading(false)
            console.log(data)
            if(res.ok){
                setmessage("Log In Successfull")
                setTimeout(()=>{navigate('/dashboard')},1000)
                
            }
            else{
                seterror(data.errors.errors.email || "Log In failed")
            }
        } catch (error) {
            console.log(error)
            setloading(false)
            seterror('An error occurred. Please try again.');
            setTimeout(()=>{window.location.reload()},1000)
        }
    }

    const [email,setemail]=useState("")
    const [password,setpassword]=useState("")
    const [error,seterror]=useState('')
    const [show,setshow]=useState(false)
    const [loading,setloading]=useState(false)
    const [message,setmessage]=useState('')
    return(
        <div>
            {
                message ? (
                    <div className="error" style={{ color: "green" }}>
                      {message}
                    </div>
                  ) : error?<h1 style={{ color: "red" }}>{error}</h1>:loading ? (
                    <Loading />
                  ) :(
                    <form onSubmit={handlesubmit}>
                    <div className="inputContainer">
                        <label>UserId</label>
                        <input placeholder="UserId" value={email} onChange={(e)=>{setemail(e.target.value)}} type='text'/>
                    </div>
                    <div className="inputContainer">
                        <label>Password</label>
                        <div className="password">
                            <input placeholder="Password" type={show?"text":"password"} value={password} 
                            onChange={(e)=>{setpassword(e.target.value)}}
                            />
                            <img src={show?"logos/hide.png":"logos/show.png"} onClick={()=>setshow(!show)} alt="show/hide"/>
                        </div>
                    </div>
                    <button type="submit">Login</button>
                </form>
                  )
            }
        </div>
    )
}
