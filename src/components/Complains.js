import React,{useState,useEffect} from "react";
import "./Complains_style.css";
import { Link } from "react-router-dom";

export default function Complains() {
  const [complaint,setcomplaint]=useState([])
  useEffect(()=>{
    const fetchdata=async()=>{
      try {
        const response=await fetch('https://hr-portal-vnlr.onrender.com/api/complaints')
        const data=await response.json()
        setcomplaint(data)
      } catch (error) {
        console.error(error)
      }
    }
    fetchdata()
  },[])
  const onAccept=async(id)=>{
    try {
      const response=await fetch('https://hr-portal-vnlr.onrender.com/api/complaintaccept_delete',{
        method:"POST",
        headers:{
          "Content-Type":"application/json"
        },
        body:JSON.stringify({"id":id})
      })
      window.location.reload()
    } catch (error) {
      console.error(error)
    }
  }
  return (
    <>
      <div className="complains">
     
        <div className="complains_navbar"></div>
        {complaint.map(complaint=>(
          <div key={complaint._id} className="complain-box">
          <div className="username-box">
            <div className="username-box-marker"></div>
            <div className="username-and-email">
              <div className="username">{`${complaint.firstName} ${complaint.lastName}`}</div>
              <div className="email">{complaint.complaint.type}</div>
            </div>
          </div>
          <div className="complain">
            <p>
              {complaint.complaint.description}
              <div className="complain-delete-box"><button onClick={()=>onAccept(complaint.id)} >Delete</button></div>
            </p>
          </div>
        </div>
        ))}
      </div>
    </>
  )
}
