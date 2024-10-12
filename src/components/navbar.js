import { useState } from "react";
import { Link } from "react-router-dom";
import './navbar.css'

export default function Navbar(props){
    const [isHome,sethome]=useState(props.array[0])
    const [isCand,setcand]=useState(props.array[2])
    const [isemp,setemp]=useState(props.array[1])
    return(
        <div className="navbar">
            <Link to={'/'}><img src={`${process.env.PUBLIC_URL}/logos/l2.svg`} alt="logo" className="logo"/></Link>
            <div className="icons">
                <Link to={"/"}>
                    <div className={isHome && "special"} onClick={()=>{sethome(true) ;setcand(false); setemp(false)}}>
                        <img src={`${process.env.PUBLIC_URL}/logos/home.svg`} alt="home"/>
                        <p>Home</p>
                    </div>
                </Link>
                <Link to={'/employee'}>
                    <div className={isemp && "special"} onClick={()=>{sethome(false) ;setcand(false); setemp(true)}}>
                        <img src={`${process.env.PUBLIC_URL}/logos/candidate.svg`} alt="Candidates"/>
                        <p>Employees</p>
                    </div>
                </Link>
                <Link to={'/candidate'}>
                    <div className={isCand && "special"} onClick={()=>{sethome(false) ;setcand(true); setemp(false)}}>
                        <img src={`${process.env.PUBLIC_URL}/logos/candidate.svg`} alt="Candidates"/>
                        <p>Candidates</p>
                    </div>
                </Link>
            </div>
        </div>
    )
}