import { api } from '../constants/constant'
import { useState } from 'react'
import Loading from './Loading'


export default function InterviewItem(props){
    const {firstName,lastName,role,date,assignedTo,id}=props
    const [message,setmessage]=useState("")
    const [error,seterror]=useState("")
    const [loading,setloading]=useState(false)
    const handleClick=async(id)=>{
          try {
            setloading(true)
            const res=await fetch(api+'cancelint',{
                method:'POST',
                headers:{
                    'Content-Type': 'application/json'
                },
                body:JSON.stringify({id:id})
              })
              const data=await res.json()
              setmessage("Interview Cancelled Successfully")
              setloading(false)
              console.log(data)
          } catch (error) {
            seterror("Internal Server Error,Try Again")
          }
    }
    return(
        <div className="empcontainer">
            {
                error?(<div className="text-2" style={{textAlign:"center",fontSize:"2em",width:"100%",color:"red"}}>{error}</div>)
                :message?(<div className="text-2" style={{textAlign:"center",fontSize:"2em",width:"100%"}}>{message}</div>):
                loading?<Loading/>:(
                    <>
                       <div className="profile">{firstName.charAt(0)} {lastName.charAt(0)}</div>
                            <div className="text">
                                <span className="empname">{firstName} {lastName}</span>
                                <div className="item">
                                    <img src="/logos/role.png" alt="role"/>
                                    <span>{role}</span>
                                </div>
                                <div className="text-2">
                                    <span>Date: <strong>{date}</strong></span>
                                </div>
                                <div className="text-2">
                                    <span>Assigned To: <strong>{assignedTo}</strong></span>
                                </div>
                            </div>
                            <img src='/logos/no.png' alt="cancel interview" onClick={()=>{handleClick(id)}}/>
                    </>
                )
            }
            
            
        </div>
    )
}

