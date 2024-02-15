import React,{useState,useEffect} from "react";
import "./Leave_style.css";

export default function Leave() {
  const [leave,setleave]=useState([])
  useEffect(()=>{
     const fetchData=async()=>{
      try {
        const response=await fetch('http://localhost:4000/api/leaves')
        const data=await response.json()
        console.log('Fetched data:', data);
        setleave(data)
      } catch (error) {
        console.log(error)
      }
     }

     fetchData()  
  },[])
  const onAccept=async(id)=>{
    try {
      const response=await fetch('http://localhost:4000/api/leaveaccept_delete',{
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
    <div className="leave">
        <div className="leave_navbar"></div>
      {leave.map(leave=>(
        <div key={leave._id} className="leave-box">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="40"
            height="40"
            viewBox="0 0 40 40"
            fill="none"
          >
            <circle cx="20" cy="20" r="20" fill="#B3C6ED" />
            <path
              d="M17.25 8C15.7312 8 14.5 9.23123 14.5 10.75V12.125C14.5 12.8844 13.8844 13.5 13.125 13.5C10.8468 13.5 9 15.3468 9 17.625V25.875C9 28.1532 10.8468 30 13.125 30H26.875C29.1532 30 31 28.1532 31 25.875V17.625C31 15.3468 29.1532 13.5 26.875 13.5C26.1156 13.5 25.5 12.8844 25.5 12.125V10.75C25.5 9.23123 24.2688 8 22.75 8H17.25ZM22.75 12.125C22.75 12.8844 22.1344 13.5 21.375 13.5H18.625C17.8656 13.5 17.25 12.8844 17.25 12.125C17.25 11.3656 17.8656 10.75 18.625 10.75H21.375C22.1344 10.75 22.75 11.3656 22.75 12.125Z"
              fill="#CFD8DC"
            />
            <path
              d="M17.25 8C15.7312 8 14.5 9.23123 14.5 10.75V12.125C14.5 12.8844 13.8844 13.5 13.125 13.5C10.8468 13.5 9 15.3468 9 17.625V25.875C9 28.1532 10.8468 30 13.125 30H26.875C29.1532 30 31 28.1532 31 25.875V17.625C31 15.3468 29.1532 13.5 26.875 13.5C26.1156 13.5 25.5 12.8844 25.5 12.125V10.75C25.5 9.23123 24.2688 8 22.75 8H17.25ZM22.75 12.125C22.75 12.8844 22.1344 13.5 21.375 13.5H18.625C17.8656 13.5 17.25 12.8844 17.25 12.125C17.25 11.3656 17.8656 10.75 18.625 10.75H21.375C22.1344 10.75 22.75 11.3656 22.75 12.125Z"
              fill="white"
            />
          </svg>
          <div className="leave-username-email">
            <div className="leave-username">{`${leave.firstName} ${leave.lastName}`}</div>
            <div className="leave-email">{leave.leaveRequest.reason}</div>
          </div>
          <div className="leave-break"></div>
          <div className="leave-dates">
            <div className="leave-from">
                <p>Leave From</p>
                <p className="date">20/01/2024</p>
            </div>
            <svg
                className="leave-arrows"
                xmlns="http://www.w3.org/2000/svg"
                width="18"
                height="19"
                viewBox="0 0 18 19"
                fill="none"
              >
                <path
                  opacity="0.7"
                  d="M16.6875 4.35588H1.57178M16.6875 4.35588L13.3285 7.71492M16.6875 4.35588L13.3285 0.996826M1.57178 14.433H16.6875M1.57178 14.433L4.93083 17.7921M1.57178 14.433L4.93083 11.074"
                  stroke="black"
                  stroke-width="1.99923"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
              </svg>
            <div className="leave-to">
                <p>Leave To</p>
                <p className="date">25/01/2024</p>
            </div>
          </div>
          <div className="leave-break"></div>
          <div className="leave-accept-button">
            <button onClick={()=>onAccept(leave.id)}>Accept</button>
          </div>
          <div className="leave-reject-button">
            <button onClick={()=>onAccept(leave.id)}>Reject</button>
          </div>
        </div>
      
      ))}
      </div>
    </>
  );
}
