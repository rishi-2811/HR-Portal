import './employee.css'
import { api } from '../constants/constant'
import { useState } from 'react'
import Loading from './Loading'
import { Link } from 'react-router-dom'

export default function EmployeeItem(props){
    const {firstName,lastName,role,department,mobile,email,id}=props
    const [message,setmessage]=useState("")
    const [error,seterror]=useState("")
    const [loading,setloading]=useState(false)
    const handleClick=async(id)=>{
          try {
            setloading(true)
            const res=await fetch(api+'deleteemployee',{
                method:'POST',
                headers:{
                    'Content-Type': 'application/json'
                },
                body:JSON.stringify({id:id})
              })
              const data=await res.json()
              setmessage("Employee deleted successfully")
              setloading(false)
              console.log(data)
          } catch (error) {
            seterror("Internal Server Error")
          }
    }
    return(
        <div className="empcontainer">
            {error?(<div className="text-2" style={{textAlign:"center",fontSize:"2em",width:"100%",color:"red"}}>{error}</div>)
            :message?(<div className="text-2" style={{textAlign:"center",fontSize:"2em",width:"100%"}}>{message}</div>):
            loading?<Loading/>:(
                <>
                <div className="profile">{firstName.charAt(0)} {lastName.charAt(0)}</div>
            <div className="text">
                <span className="empname">{firstName} {lastName}</span>
                <div className="item">
                    <img src="/logos/role.png" alt="role"/>
                    <span>{role}, {department}</span>
                </div>
                <div className="item">
                    <img src="/logos/call.png" alt="mobile"/>
                    <span>{mobile}</span>
                </div>
                <div className="item">
                    <img src="/logos/email.png" alt="email"/>
                    <span>{email}</span>
                </div>
            </div>
            <Link
  to={`/editemployee?id=${id}&firstName=${encodeURIComponent(firstName)}&lastName=${encodeURIComponent(lastName)}&email=${encodeURIComponent(email)}&mobile=${encodeURIComponent(mobile)}&role=${encodeURIComponent(role)}&department=${encodeURIComponent(department)}`}
>
                <img src='/logos/edit.png' alt='edit'/></Link>
            <img src='/logos/delete.png' alt="delete" onClick={()=>{handleClick(id)}}/></>
            )}
        </div>
        
    )
}