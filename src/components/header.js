import { useState } from "react";
import './header.css'
import { api2,api } from "../constants/constant";
import { useNavigate } from "react-router-dom";
import { useContext } from "react";
import { NameContext } from "./private";

export function Header(){
    const navigate=useNavigate()
    const [input,setinput]=useState("")
    const [error,seterror]=useState("")
    const name=useContext(NameContext)
    const handleClick=async(e)=>{
         try {
            const res=await fetch(api2+'logout',{
                method:'POST',
                headers:{
                    'Content-Type':'application/json'
                },
                credentials:'include'
             })
             
             if(res.ok){
                 navigate('/login')
             }
         } catch (error) {
            seterror("Internal Servor Error")
         }
    }
    const handleClick2=(e)=>{
        if(e.key==='Enter'){
            navigate(`/searchresults/?input=${input}`)
        }
    }
    return(
        <div className="header">
            {error?<div className="error">{error}</div>:(
                <>
                   <div className="search-box">
                <img src="/logos/search.svg" alt="search"/>
                <input type="text" value={input} onChange={(e)=>{setinput(e.target.value)}} placeholder="Search" onKeyUp={handleClick2}/>
            </div>
            <div className="name">
                <p>{name}</p>
                <button onClick={handleClick}>Log Out</button>
            </div>
                </>
            )}
        </div>
    )
}