
import CandidateItem from '../../components/candidate'
import Navbar from "../../components/navbar";
import { Header } from "../../components/header";
import { useState,useEffect } from "react";
import { api } from "../../constants/constant";
import Loading from "../../components/Loading";


export default function Candidates(){
    const [employee,setemployee]=useState([])
    const [error,seterror]=useState("")
    const [loading,setloading]=useState(true)
    const fetchdata=async()=>{
        try {
            const res=await fetch(api+'candidates')
            const data=await res.json()
            setemployee(data)
            setloading(false)
        } catch (error) {
            seterror("Error fetching data")
        }
    }
    useEffect(()=>{
        fetchdata()
        
    },[])
    const employeemodel=employee.map((item)=>{
        return (<CandidateItem key={item.id} id={item.id} firstName={item.firstName} lastName={item.lastName} 
            role={item.role} yes={item.interview.hasInterview}
          mobile={item.mobile} email={item.email}/>)
    })
    return(
        <div className="container">
            <Navbar array={[false,false,true]}/>
            <Header/>
            <div className="innerContainer" style={{flexDirection:"column"}}>
               {error ? <div className="error">{error}</div> : loading ? <Loading /> : employeemodel}
            </div>
        </div>
    )
}