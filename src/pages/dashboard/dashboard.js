import Navbar from "../../components/navbar";
import { Header } from "../../components/header";
import Card from "../../components/card";
import { Link } from "react-router-dom";
import './dashboard.css';
import { api } from "../../constants/constant";
import { useState, useEffect } from "react";
import Loading from "../../components/Loading";

export default function Dashboard() {
    const fetchData = async () => {
        try {
            const countResponse = await fetch(api + 'employeecount');
            const countData = await countResponse.json();
            setEmployeeCount(countData);

            const cResponse = await fetch(api + 'candidatecount');
            const cData = await cResponse.json();
            setCandidateCount(cData);

            const coResponse = await fetch(api + 'leavecount');
            const coData = await coResponse.json();
            setLeaveCount(coData);

            const couResponse = await fetch(api + 'reloccount');
            const couData = await couResponse.json();
            setRelocCount(couData);

            const counResponse = await fetch(api + 'complaintcount');
            const counData = await counResponse.json();
            setcomplaintcount(counData);

            const CounResponse = await fetch(api + 'candidateintschedule');
            const CounData = await CounResponse.json();
            setinterviewcount(CounData);

            setLoading(false);
        } catch (error) {
            setError("Internal Server Error");
            setLoading(false);
        }
    };

    const [employeeCount, setEmployeeCount] = useState(0);
    const [candidateCount, setCandidateCount] = useState(0);
    const [leaveCount, setLeaveCount] = useState(0);
    const [reloccount, setRelocCount] = useState(0);
    const [complaintcount, setcomplaintcount] = useState(0);
    const [interviewcount, setinterviewcount] = useState(0);
    const [error, setError] = useState("");
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        fetchData();
    }, []);

    const display = (
        <>
            <Link to={'/employee'}>
                <Card number={employeeCount} src={"/logos/employee.svg"} text={"Employees"} />
            </Link>
            <Link to={'/candidate'}>
                <Card number={candidateCount} src={"/logos/candidate2.svg"} text={"Candidates"} />
            </Link>
            <Link to={'/interview'}>
                <Card number={interviewcount} src={"/logos/interview.svg"} text={"Interviews Scheduled"} />
            </Link>
            <Link to={'/complaint'}>
                <Card number={complaintcount} src={"/logos/complaint.svg"} text={"Received Complaints"} />
            </Link>
            <Link to={'/leave'}>
                <Card number={leaveCount} src={"/logos/leave.svg"} text={"Leave Requests"} />
            </Link>
            <Link to={'/reloc'}>
                <Card number={reloccount} src={"/logos/reloc.svg"} text={"Relocation Requests"} />
            </Link>
        </>
    );

    return (
        <div className="container">
            <Navbar array={[true, false, false]} />
            <Header />
            <div className="innerContainer">
                <div className="overview" style={{width:!error && "72%"}}>
                    <p>Overview</p>
                    <div className="cardContainer" style={{display:(!error && !loading)&& "grid"}}>
                        {loading ? <Loading /> : error ? <div className="error">{error}</div> : display}
                    </div>
                </div>
                {!error &&<div className="meetings" >
                    <p>Upcoming Meetings</p>
                    <div className="meetingContainer">
                        <div className="today">
                            <p>Today</p>
                            <div className="meeting-item">
                                <p className="time">9:00</p>
                                <p><strong>John Smith;</strong> Frontend Developer; Initial screening</p>
                            </div>
                            <div className="meeting-item">
                                <p className="time">11:30</p>
                                <p><strong>Emily Chen;</strong> UX Designer; Portfolio review</p>
                            </div>
                            <div className="meeting-item">
                                <p className="time">14:15</p>
                                <p><strong>Michael Johnson;</strong> DevOps Engineer; Technical assessment</p>
                            </div>
                            <div className="meeting-item">
                                <p className="time">16:00</p>
                                <p><strong>Sarah Brown;</strong> Product Manager; Team fit interview</p>
                            </div>
                        </div>
                        <div className="tomorrow">
                            <p>Tomorrow</p>
                            <div className="meeting-item">
                                <p className="time">10:00</p>
                                <p><strong>Alex Rodriguez;</strong> Mobile Developer; Coding challenge</p>
                            </div>
                            <div className="meeting-item">
                                <p className="time">11:45</p>
                                <p><strong>Laura Kim;</strong> Data Scientist; Algorithm discussion</p>
                            </div>
                            <div className="meeting-item">
                                <p className="time">13:30</p>
                                <p><strong>David Lee;</strong> Backend Developer; System design interview</p>
                            </div>
                            <div className="meeting-item">
                                <p className="time">15:00</p>
                                <p><strong>Rachel Green;</strong> QA Engineer; Test case review</p>
                            </div>
                            <div className="meeting-item">
                                <p className="time">16:45</p>
                                <p><strong>Tom Wilson;</strong> Security Analyst; Threat modeling exercise</p>
                            </div>
                        </div>
                    </div>
                </div>}
            </div>
        </div>
    );
}
