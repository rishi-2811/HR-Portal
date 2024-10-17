import { Navigate } from "react-router-dom";
import { useState,useEffect } from "react";
import { api2 } from "../constants/constant";
import Loading from "./Loading";
import { createContext } from "react";
export const NameContext=createContext();

export const PrivateRoute = ({  children }) => {
    const [isAuthenticated,setauthen]=useState(false)
    const [loading, setLoading] = useState(true);
    const [name,setname]=useState('')
    const getData=async()=>{
    try {
      const res=await fetch(api2+'getUserFromJWT',{
        method:'GET',
        headers:{
          'Content-Type':'application/json'
        },
        credentials:"include"
      })
      const data=await res.json() 
      
      if(res.ok){
         setauthen(true)
         setname(data.name)
      }
    } catch (error) {
        console.log(error)
        setauthen(false)
    }
    finally{
        setLoading(false)
    }
  }
  useEffect(()=>{
     getData()
     console.log(isAuthenticated)
  },[])
  if(loading){
    return (<>
       <h1>Please wait for atleast 100 seconds, as render automatically delays inactive server </h1>
       <Loading/>
    </>)
  }


  return (
    <NameContext.Provider value={name}>
      {isAuthenticated ? children : <Navigate to="/login" />}
    </NameContext.Provider>
  )
};

