import Navbar from "../../components/navbar";
import { Header } from "../../components/header";
import { useState } from "react";
import { api } from "../../constants/constant";
import './form.css'
import { useNavigate,useSearchParams } from "react-router-dom";
import Loading from "../../components/Loading";

export default function EditEmployee(){
    const [message,setmessage]=useState("")
    const [error,seterror]=useState("")
    const [loading,setloading]=useState(false)
    const navigate=useNavigate()
    const [params]=useSearchParams()
    
    const [employee, setEmployee] = useState({
        id: params.get('id'),
        firstName: params.get('firstName'),
        lastName:params.get('lastName'),
        email: params.get('email'),
        mobile: params.get('mobile'),
        role: params.get('role'),
        department: params.get('role')
      });
      const handleChange = (e) => {
        const { name, value } = e.target;
        setEmployee(prev => ({ ...prev, [name]: value }));
      };
      const handleSubmit = async(e) => {
        try {
            setloading(true)
            e.preventDefault();
            const res=await fetch(api+'updateemployee',{
                method:'POST',
                headers:{
                    'Content-Type':'application/json'
                },
                body:JSON.stringify(employee)
            })
            if(res.ok){
                setloading(false)
                setmessage("Employee edited successfully")
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
                            <h1 style={{color:"#082777"}}>Edit Employee</h1>
                            <div className="inputContainer">
                        <label>Employee ID</label>
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
                    <div className="inputContainer">
                    <label>First Name</label>
                        <input
                        type="text"
                        id="firstName"
                        name="firstName"
                        value={employee.firstName}
                        onChange={handleChange}
                        required
                        placeholder="First Name"
                        />
                    </div>
                    <div className="inputContainer">
                    <label>Last Name</label>
                        <input
                        type="text"
                        id="lastName"
                        name="lastName"
                        value={employee.lastName}
                        onChange={handleChange}
                        required
                        placeholder="Last Name"
                        />
                    </div>
                    <div className="inputContainer">
                    <label>Email</label>
                        <input
                        type="email"
                        id="email"
                        name="email"
                        value={employee.email}
                        onChange={handleChange}
                        required
                        placeholder="Email"
                        />
                    </div>
                    <div className="inputContainer">
                    <label>Mobile</label>
                        <input
                        type="tel"
                        id="mobile"
                        name="mobile"
                        value={employee.mobile}
                        onChange={handleChange}
                        required
                        placeholder="Mobile"
                        />
                    </div>
                    <div className="inputContainer">
                    <label>Role</label>
                        <input
                        type="text"
                        id="role"
                        name="role"
                        value={employee.role}
                        onChange={handleChange}
                        required
                        placeholder="Role"
                        />
                    </div>
                    <div className="inputContainer">
                    <label>Department</label>
                        <input
                        type="text"
                        id="department"
                        name="department"
                        value={employee.department}
                        onChange={handleChange}
                        required
                        placeholder="Department"
                        />
                    </div>
                    <button type="submit">Edit Employee</button>
               </form>
                    )
                }
            </div>
        </div>
    )
}