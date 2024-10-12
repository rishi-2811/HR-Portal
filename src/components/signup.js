import { useState } from "react"
import Loading from "./Loading"
import { api2 } from "../constants/constant"
import { useNavigate } from "react-router-dom"

export default function SignUp(){
    const navigate=useNavigate()
    const handlesubmit=async(e)=>{
        e.preventDefault()
        setloading(true)
        try {
            const res=await fetch(api2+'signup',{
                method:"POST",
                headers:{
                    'Content-Type':'application/json'
                },
                body:JSON.stringify({ firstName, lastName, email, userId, password }),
                credentials:'include'
            })
            const data=await res.json()
            setloading(false)
            console.log(data)
            if(res.ok){
                setmessage("Sign Up Successfull")
                setTimeout(()=>{navigate('/dashboard')},1000)
                
            }
            else{
                seterror(data.errors.errors.email || "Sign Up failed")
            }
        } catch (error) {
            console.log(error)
            setloading(false)
            seterror('An error occurred. Please try again.');
            setTimeout(()=>{window.location.reload()},1000)
        }
    }

    const [userId,setUserId]=useState("")
    const [password,setPassword]=useState("")
    const [firstName,setFirstName]=useState("")
    const [lastName,setLastName]=useState("")
    const [email,setEmail]=useState("")
    const [show,setShow]=useState(false)
    const [error,seterror]=useState('')
    const [loading,setloading]=useState(false)
    const [message,setmessage]=useState('')

    return (
        <div>
          {message ? (
            <div className="error" style={{ color: "green" }}>
              {message}
            </div>
          ) : error?<h1 style={{ color: "red" }}>{error}</h1>:loading ? (
            <Loading />
          ) : (
            <form onSubmit={handlesubmit}>
              <div className="inputContainer">
                <label>First Name</label>
                <input
                  required
                  placeholder="First Name"
                  value={firstName}
                  onChange={(e) => setFirstName(e.target.value)}
                  type="text"
                />
              </div>
              <div className="inputContainer">
                <label>Last Name</label>
                <input
                  required
                  placeholder="Last Name"
                  value={lastName}
                  onChange={(e) => setLastName(e.target.value)}
                  type="text"
                />
              </div>
              <div className="inputContainer">
                <label>Email</label>
                <input
                  required
                  placeholder="Valid Email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  type="email"
                />
              </div>
              <div className="inputContainer">
                <label>UserId</label>
                <input
                  required
                  placeholder="UserId"
                  value={userId}
                  onChange={(e) => setUserId(e.target.value)}
                  type="text"
                />
              </div>
              <div className="inputContainer">
                <label>Password</label>
                <div className="password">
                  <input
                    required
                    placeholder="Password(Min length:8)"
                    type={show ? "text" : "password"}
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                  />
                  <img
                    src={show ? "logos/hide.png" : "logos/show.png"}
                    onClick={() => setShow(!show)}
                    alt="show/hide"
                  />
                </div>
              </div>
              <button type="submit">Sign Up</button>
            </form>
          )}
        </div>
      );
    }