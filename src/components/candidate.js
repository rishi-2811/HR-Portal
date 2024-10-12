import { api } from '../constants/constant'
import { useState } from 'react'
import Loading from './Loading'
import { Link } from 'react-router-dom'

export default function CandidateItem(props){
    const {firstName,lastName,role,mobile,email,yes,id}=props
    const [message,setmessage]=useState("")
    const [error,seterror]=useState("")
    const [loading,setloading]=useState(false)
    const handleClick=async(id)=>{
          try {
            setloading(true)
            const res=await fetch(api+'deletecandidate',{
                method:'POST',
                headers:{
                    'Content-Type': 'application/json'
                },
                body:JSON.stringify({id:id})
              })
              const data=await res.json()
              setmessage("Candidate deleted successfully")
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
                            <div className="item">
                                <img src="/logos/call.png" alt="role"/>
                                <span>{mobile}</span>
                            </div>
                            <div className="item">
                                <img src="/logos/email.png" alt="role"/>
                                <span>{email}</span>
                            </div>
                        </div>
                        {!yes && <Link to={`/scheduleinterview?id=${id}`}><img src='/logos/add.png' alt="schedule interview"/></Link>}
                        <img src='/logos/delete.png' alt="delete" onClick={()=>{handleClick(id)}}/>
                    </>
                )
            }
            
        </div>
    )
}