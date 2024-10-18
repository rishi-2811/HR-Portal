
import Navbar from "../../components/navbar";
import { Header } from "../../components/header";
import LeaveItem from "../../components/leave";
import { useState,useEffect } from "react";
import { api } from "../../constants/constant";
import Loading from "../../components/Loading";

export default function Leave(){
    const [employee,setemployee]=useState([])
    const [filteredEmployees, setFilteredEmployees] = useState([])
    const [error,seterror]=useState("")
    const [loading,setloading]=useState(true)
    const fetchdata=async()=>{
        try {
            const res=await fetch(api+'leaves')
            const data=await res.json()
            setemployee(data)
            setFilteredEmployees(data)
            setloading(false)
        } catch (error) {
            seterror("Error fetching data")
        }
    }
    useEffect(()=>{
        fetchdata()
        
    },[])
    const filter=(employee)=>setFilteredEmployees(employee)
    const employeemodel=filteredEmployees.map((item)=>{
        return (<LeaveItem key={item.id} id={item.id} firstName={item.firstName} lastName={item.lastName} 
            role={item.role} duration={item.leaveRequest.timePeriod}
            reason={item.leaveRequest.reason}/>)
    })
    return(
        <div className="container">
            <Navbar array={[false,false,false]}/>
            <Header filter={filter} employee={employee}/>
            <div className="innerContainer" style={{flexDirection:"column"}}>
               {error ? <div className="error">{error}</div> : loading ? <Loading /> : employeemodel}
            </div>
        </div>
    )
}