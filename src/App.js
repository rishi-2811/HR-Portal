/*eslint-disable react/jsx-no-undef*/

import Login from './components/LogIn'
import SignIn from './components/SignIn'
import Dashbord from './components/Dashbord'
import Complains from './components/Complains'
import './App.css';
import Leave from './components/Leave';
import Reallocation from './components/Reallocation';
import {BrowserRouter, Route, Routes } from 'react-router-dom';
import Candidates from './components/Candidates';
import Employee from './components/Employee';
import InterviewScheduled from './components/InterviewScheduled';
import ScaleLoader from "react-spinners/ClipLoader";
import { useState,useEffect } from 'react';
import { set } from 'mongoose';



/* import {
  BrowserRouter as Router,
  
  Route,
} from "react-router-dom"; */

function App() {
  const [loading,setLoading]=useState(false);
  useEffect(()=>
  {
    setLoading(true)
    setTimeout(()=>{
     setLoading(false)
    },500)
  },[])

  return (
    <>
    <div className='app-container'>
    {
      loading?
      <ScaleLoader
      color={'#36d7b7'}
      loading={loading}
      size={150}
      aria-label="Loading Spinner"
      data-testid="loader"
      class='Spinner'
      className='spinner-container'
    />:
    <Routes>
      
      <Route path="/signin" element={<SignIn/>}/>
    
      <Route path="/" element={<Login/>}/>
      
      <Route path="/dashboard" element={<Dashbord/>} />

      <Route path="/employee" element={<Employee/>} />

      <Route path="/candidates" element={<Candidates/>} />

      <Route path="/leave" element={<Leave/>} />

      <Route path="/relocation" element={<Reallocation/>} />

      <Route path="/complains" element={<Complains/>} />

      <Route path="/interview_scheduled" element={<InterviewScheduled/>}/>
    </Routes>
    }
 </div>
    
    
    
    </>
  );
}

export default App;
