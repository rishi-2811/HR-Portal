import { useState } from "react";
import './header.css'
import { api2 } from "../constants/constant";
import { useNavigate } from "react-router-dom";
import { useContext } from "react";
import { NameContext } from "./private";
import Loading from "./Loading";

export function Header(props){
    const navigate=useNavigate()
    const [input,setinput]=useState("")
    const [error,seterror]=useState("")
    const [loading,setloading]=useState(false)
    const name=useContext(NameContext)
    const handleClick=async(e)=>{
         try {
            setloading(true)
            const res=await fetch(api2+'logout',{
                method:'POST',
                headers:{
                    'Content-Type':'application/json'
                },
                credentials:'include'
             })
             
             if(res.ok){
                 navigate('/login')
                 setloading(false)
             }
         } catch (error) {
            seterror("Internal Servor Error")
            setloading(false)
         }
    }
    function searchEmployees(employees, searchInput) {
        const lowercasedInput = searchInput.toLowerCase();
      
        return employees.filter(employee => {
          return (
            employee.firstName.toLowerCase().includes(lowercasedInput) ||
            employee.lastName.toLowerCase().includes(lowercasedInput) ||
            employee.role.toLowerCase().includes(lowercasedInput)
          );
        });
      }
    const handleChange=(e)=>{
        setinput(e.target.value)
        props.filter(searchEmployees(props.employee,e.target.value))
    }
    const display=loading?<Loading/>:<button onClick={handleClick}>Log Out</button>
    return(
        <div className="header">
            {error?<div className="error">{error}</div>:(
                <>
                   <div className="search-box">
                <img src="/logos/search.svg" alt="search"/>
                <input type="text" value={input} onChange={handleChange} placeholder="Search"/>
            </div>
            <div className="name">
                <p>{name}</p>
                {display}
            </div>
                </>
            )}
        </div>
    )
}