import Navbar from "../../components/navbar";
import { Header } from "../../components/header";
import { useState } from "react";
import { api } from "../../constants/constant";
import './form.css'
import { useNavigate,useSearchParams } from "react-router-dom";
import Loading from "../../components/Loading";

export default function ScheduleInterview(){
    const [message,setmessage]=useState("")
    const [error,seterror]=useState("")
    const [loading,setloading]=useState(false)
    const navigate=useNavigate()
    const [params]=useSearchParams()
    const [employee, setEmployee] = useState({
        id: params.get('id'),
        date:'',
        assignedTo: ''
      });
      const handleChange = (e) => {
        const { name, value } = e.target;
        setEmployee(prev => ({ ...prev, [name]: value }));
      };
      const handleSubmit = async(e) => {
        try {
            setloading(true)
            e.preventDefault();
            const res=await fetch(api+'candidatescheduleint',{
                method:'POST',
                headers:{
                    'Content-Type':'application/json'
                },
                body:JSON.stringify(employee)
            })
            if(res.ok){
                setloading(false)
                setmessage("Interview Scheduled Successfully")
                setTimeout(()=>{navigate(-1)},900)
            }
        } catch (error) {
            seterror('Internal Server Error, please try again')
        }
      };
    return(
        <div className="container">
            <Navbar array={[false,false,false]}/>
            <Header/>
            <div className="innerContainer" style={{flexDirection:"column"}}>
                {
                    error?(<div className="text-2" style={{textAlign:"center",fontSize:"2em",width:"100%",color:"red"}}>{error}</div>)
                    :message?(<div className="text-2" style={{textAlign:"center",fontSize:"2em",width:"100%"}}>{message}</div>):
                    loading?<Loading/>:(
                        <form className="emp-form" onSubmit={handleSubmit}>
                    <div>
                        <input
                        type="text"
                        id="id"
                        name="id"
                        value={employee.id}
                        readOnly
                        required
                        placeholder="Employee ID"
                        />
                    </div>
                    <div>
                        <input
                        type="text"
                        id="date"
                        name="date"
                        value={employee.date}
                        onChange={handleChange}
                        required
                        placeholder="Date"
                        />
                    </div>
                    <div>
                        <input
                        type="text"
                        id="assignedTo"
                        name="assignedTo"
                        value={employee.assignedTo}
                        onChange={handleChange}
                        required
                        placeholder="Assign it to"
                        />
                    </div>
                    <button type="submit">Schedule Interview</button>
               </form>
                    )
                }
            </div>
        </div>
    )
}