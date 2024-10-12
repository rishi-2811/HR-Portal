import Navbar from "../../components/navbar";
import { Header } from "../../components/header";
import EmployeeItem from "../../components/employee";
import './employee.css'
import { useState,useEffect } from "react";
import { api } from "../../constants/constant";
import Loading from "../../components/Loading";
import { Link } from "react-router-dom";

export default function Employee(){
    const [employee,setemployee]=useState([])
    const [error,seterror]=useState("")
    const [loading,setloading]=useState(true)
    const fetchdata=async()=>{
        try {
            const res=await fetch(api+'employees')
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
        return (<EmployeeItem key={item.id} id={item.id} firstName={item.firstName} lastName={item.lastName} 
            role={item.role} department={item.department}
          mobile={item.mobile} email={item.email}/>)
    })
    return(
        <div className="container">
            <Navbar array={[false,true,false]}/>
            <Header/>
            <div className="innerContainer" style={{flexDirection:"column"}}>
                <Link to={'/addemployee'} className="addemp">
                    <img src="/logos/add.svg" alt="add employee"/>
                    <p>Add Employee</p>
                </Link>
               {error ? <div className="error">{error}</div> : loading ? <Loading /> : employeemodel}
            </div>
        </div>
    )
}