import React from 'react'
import './Employee_style.css'
import { Link } from 'react-router-dom'

export default function Employee() {
  let popup= document.getElementById("popup")
  const onPopup = () =>{
popup.classList.add("open-popup")
   }
   const removePopup = ()=>{
       popup.classList.remove("open-popup")
   }
  return (
    <>
    <div className="container">
    <div className="dashbordPart1">
    <svg className="logo" xmlns="http://www.w3.org/2000/svg" width="25" height="40" viewBox="0 0 32 50" fill="none">
  <path d="M15.6993 40.4396C6.87073 31.1906 -5.48926 14.6912 15.6993 22.6854V40.4396Z" stroke="#4B93E7" strokeWidth="7.61799"/>
  <path d="M15.6993 40.4396C24.5279 31.1906 36.8879 14.6912 15.6993 22.6854V40.4396Z" stroke="#4B93E7" strokeWidth="7.61799"/>
  <path d="M15.6993 40.4396C6.87073 31.1906 -5.48926 14.6912 15.6993 22.6854V40.4396Z" fill="#082777"/>
  <path d="M15.6993 40.4396C24.5279 31.1906 36.8879 14.6912 15.6993 22.6854V40.4396Z" fill="#F7AC25"/>
  <ellipse cx="15.8334" cy="7.6424" rx="8.23194" ry="7.20294" fill="#4B93E7"/>
</svg>
<svg className="home"xmlns="http://www.w3.org/2000/svg" width="134" height="144" viewBox="0 0 134 144" fill="none">
  <g filter="url(#filter0_dd_372_987)">
    <path d="M64.4453 56.6723C63.4972 55.7759 62.0142 55.7759 61.0662 56.6723L49.1546 67.9342C48.4176 68.631 48 69.6005 48 70.6147V84.3111C48 86.3483 49.6516 88 51.6889 88H55.3779C57.4152 88 59.0668 86.3483 59.0668 84.3111V78.1629C59.0668 77.4838 59.6173 76.9333 60.2964 76.9333H65.215C65.8941 76.9333 66.4447 77.4838 66.4447 78.1629V84.3111C66.4447 86.3483 68.0963 88 70.1336 88H73.8225C75.8598 88 77.5114 86.3483 77.5114 84.3111V70.6147C77.5114 69.6005 77.0939 68.631 76.3568 67.9342L64.4453 56.6723Z" fill="#CFD8DC"/>
    <path d="M64.4453 56.6723C63.4972 55.7759 62.0142 55.7759 61.0662 56.6723L49.1546 67.9342C48.4176 68.631 48 69.6005 48 70.6147V84.3111C48 86.3483 49.6516 88 51.6889 88H55.3779C57.4152 88 59.0668 86.3483 59.0668 84.3111V78.1629C59.0668 77.4838 59.6173 76.9333 60.2964 76.9333H65.215C65.8941 76.9333 66.4447 77.4838 66.4447 78.1629V84.3111C66.4447 86.3483 68.0963 88 70.1336 88H73.8225C75.8598 88 77.5114 86.3483 77.5114 84.3111V70.6147C77.5114 69.6005 77.0939 68.631 76.3568 67.9342L64.4453 56.6723Z" fill="#F0F7FF"/>
  </g>
  <defs>
    <filter id="filter0_dd_372_987" x="-8" y="0" width="141.511" height="144" filterUnits="userSpaceOnUse" colorInterpolationFilters="sRGB">
      <feFlood floodOpacity="0" result="BackgroundImageFix"/>
      <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha"/>
      <feOffset dx="16" dy="16"/>
      <feGaussianBlur stdDeviation="20"/>
      <feColorMatrix type="matrix" values="0 0 0 0 0.733333 0 0 0 0 0.764706 0 0 0 0 0.807843 0 0 0 0.6 0"/>
      <feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow_372_987"/>
      <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha"/>
      <feOffset dx="-16" dy="-16"/>
      <feGaussianBlur stdDeviation="20"/>
      <feColorMatrix type="matrix" values="0 0 0 0 0.992157 0 0 0 0 1 0 0 0 0 1 0 0 0 0.8 0"/>
      <feBlend mode="normal" in2="effect1_dropShadow_372_987" result="effect2_dropShadow_372_987"/>
      <feBlend mode="normal" in="SourceGraphic" in2="effect2_dropShadow_372_987" result="shape"/>
    </filter>
  </defs>
</svg>

<svg className="employee" xmlns="http://www.w3.org/2000/svg" width="35" height="32" viewBox="0 0 35 32" fill="none">
  <g filter="url(#filter0_ii_372_926)">
    <path d="M18.8954 17.4533C21.3052 17.4533 23.2588 19.4068 23.2588 21.8166L23.2565 23.9935C23.5557 29.3358 19.441 32 11.8106 32C4.20484 32 0 29.3707 0 24.0697V21.8166C0 19.4068 1.95352 17.4533 4.36332 17.4533H18.8954ZM30.5327 17.4533C32.9425 17.4533 34.896 19.4068 34.896 21.8166L34.8938 23.3483C35.1568 28.1406 31.5211 30.5432 24.8755 30.5432C23.8793 30.5432 23.4164 29.2838 23.8703 28.397C24.4352 27.2931 24.7286 26.0078 24.7269 24.5409L24.7086 23.9121L24.7132 21.8166C24.7132 20.0976 25.9593 17.4526 27.6783 17.4528L30.5327 17.4533ZM11.6355 0C15.6525 0 18.9089 3.2564 18.9089 7.27337C18.9089 11.2903 15.6525 14.5467 11.6355 14.5467C7.61854 14.5467 4.36214 11.2903 4.36214 7.27337C4.36214 3.2564 7.61854 0 11.6355 0ZM26.1799 2.90888C29.3929 2.90888 31.9976 5.51357 31.9976 8.72663C31.9976 11.9397 29.3929 14.5444 26.1799 14.5444C22.9668 14.5444 20.3621 11.9397 20.3621 8.72663C20.3621 5.51357 22.9668 2.90888 26.1799 2.90888Z" fill="#CFD8DC"/>
    <path d="M18.8954 17.4533C21.3052 17.4533 23.2588 19.4068 23.2588 21.8166L23.2565 23.9935C23.5557 29.3358 19.441 32 11.8106 32C4.20484 32 0 29.3707 0 24.0697V21.8166C0 19.4068 1.95352 17.4533 4.36332 17.4533H18.8954ZM30.5327 17.4533C32.9425 17.4533 34.896 19.4068 34.896 21.8166L34.8938 23.3483C35.1568 28.1406 31.5211 30.5432 24.8755 30.5432C23.8793 30.5432 23.4164 29.2838 23.8703 28.397C24.4352 27.2931 24.7286 26.0078 24.7269 24.5409L24.7086 23.9121L24.7132 21.8166C24.7132 20.0976 25.9593 17.4526 27.6783 17.4528L30.5327 17.4533ZM11.6355 0C15.6525 0 18.9089 3.2564 18.9089 7.27337C18.9089 11.2903 15.6525 14.5467 11.6355 14.5467C7.61854 14.5467 4.36214 11.2903 4.36214 7.27337C4.36214 3.2564 7.61854 0 11.6355 0ZM26.1799 2.90888C29.3929 2.90888 31.9976 5.51357 31.9976 8.72663C31.9976 11.9397 29.3929 14.5444 26.1799 14.5444C22.9668 14.5444 20.3621 11.9397 20.3621 8.72663C20.3621 5.51357 22.9668 2.90888 26.1799 2.90888Z" fill="#E6EEF8"/>
  </g>
  <defs>
    <filter id="filter0_ii_372_926" x="-4" y="-4" width="42.9072" height="40" filterUnits="userSpaceOnUse" colorInterpolationFilters="sRGB">
      <feFlood floodOpacity="0" result="BackgroundImageFix"/>
      <feBlend mode="normal" in="SourceGraphic" in2="BackgroundImageFix" result="shape"/>
      <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha"/>
      <feOffset dx="4" dy="4"/>
      <feGaussianBlur stdDeviation="6"/>
      <feComposite in2="hardAlpha" operator="arithmetic" k2="-1" k3="1"/>
      <feColorMatrix type="matrix" values="0 0 0 0 0.733333 0 0 0 0 0.764706 0 0 0 0 0.807843 0 0 0 0.6 0"/>
      <feBlend mode="normal" in2="shape" result="effect1_innerShadow_372_926"/>
      <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha"/>
      <feOffset dx="-4" dy="-4"/>
      <feGaussianBlur stdDeviation="6"/>
      <feComposite in2="hardAlpha" operator="arithmetic" k2="-1" k3="1"/>
      <feColorMatrix type="matrix" values="0 0 0 0 0.992157 0 0 0 0 1 0 0 0 0 1 0 0 0 0.8 0"/>
      <feBlend mode="normal" in2="effect1_innerShadow_372_926" result="effect2_innerShadow_372_926"/>
    </filter>
  </defs>
</svg>
<p className="employeeText">Employee</p>
<svg className="candidates" xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 32 32" fill="none">
  <g filter="url(#filter0_ii_372_187)">
    <path d="M12 0C9.79088 0 8 1.79088 8 4V6C8 7.10457 7.10457 8 6 8C2.68628 8 0 10.6863 0 14V26C0 29.3137 2.68628 32 6 32H26C29.3137 32 32 29.3137 32 26V14C32 10.6863 29.3137 8 26 8C24.8954 8 24 7.10457 24 6V4C24 1.79088 22.2091 0 20 0H12ZM20 6C20 7.10457 19.1046 8 18 8H14C12.8954 8 12 7.10457 12 6C12 4.89543 12.8954 4 14 4H18C19.1046 4 20 4.89543 20 6Z" fill="#CFD8DC"/>
    <path d="M12 0C9.79088 0 8 1.79088 8 4V6C8 7.10457 7.10457 8 6 8C2.68628 8 0 10.6863 0 14V26C0 29.3137 2.68628 32 6 32H26C29.3137 32 32 29.3137 32 26V14C32 10.6863 29.3137 8 26 8C24.8954 8 24 7.10457 24 6V4C24 1.79088 22.2091 0 20 0H12ZM20 6C20 7.10457 19.1046 8 18 8H14C12.8954 8 12 7.10457 12 6C12 4.89543 12.8954 4 14 4H18C19.1046 4 20 4.89543 20 6Z" fill="#E6EEF8"/>
  </g>
  <defs>
    <filter id="filter0_ii_372_187" x="-4" y="-4" width="40" height="40" filterUnits="userSpaceOnUse" colorInterpolationFilters="sRGB">
      <feFlood floodOpacity="0" result="BackgroundImageFix"/>
      <feBlend mode="normal" in="SourceGraphic" in2="BackgroundImageFix" result="shape"/>
      <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha"/>
      <feOffset dx="4" dy="4"/>
      <feGaussianBlur stdDeviation="6"/>
      <feComposite in2="hardAlpha" operator="arithmetic" k2="-1" k3="1"/>
      <feColorMatrix type="matrix" values="0 0 0 0 0.733333 0 0 0 0 0.764706 0 0 0 0 0.807843 0 0 0 0.6 0"/>
      <feBlend mode="normal" in2="shape" result="effect1_innerShadow_372_187"/>
      <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha"/>
      <feOffset dx="-4" dy="-4"/>
      <feGaussianBlur stdDeviation="6"/>
      <feComposite in2="hardAlpha" operator="arithmetic" k2="-1" k3="1"/>
      <feColorMatrix type="matrix" values="0 0 0 0 0.992157 0 0 0 0 1 0 0 0 0 1 0 0 0 0.8 0"/>
      <feBlend mode="normal" in2="effect1_innerShadow_372_187" result="effect2_innerShadow_372_187"/>
    </filter>
  </defs>
</svg>
<p className="candidatesText"><Link to="/employee">Candidates</Link></p>
    </div>
    <div className="dashbord-part-2">
        <div className="dashbordNavbar">    
        </div>
        <div className="addEmployeeButton">
            <button onClick={onPopup}><svg className="plusSign" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
  <path d="M12 0C18.6275 0 24 5.37258 24 12C24 18.6275 18.6275 24 12 24C5.37258 24 0 18.6275 0 12C0 5.37258 5.37258 0 12 0ZM12 1.5C6.20101 1.5 1.5 6.20101 1.5 12C1.5 17.799 6.20101 22.5 12 22.5C17.799 22.5 22.5 17.799 22.5 12C22.5 6.20101 17.799 1.5 12 1.5ZM12 6C12.4142 6 12.75 6.33579 12.75 6.75V11.25H17.25C17.6642 11.25 18 11.5858 18 12C18 12.4142 17.6642 12.75 17.25 12.75H12.75V17.25C12.75 17.6642 12.4142 18 12 18C11.5858 18 11.25 17.6642 11.25 17.25V12.75H6.75C6.33579 12.75 6 12.4142 6 12C6 11.5858 6.33579 11.25 6.75 11.25H11.25V6.75C11.25 6.33579 11.5858 6 12 6Z" fill="white"/>
</svg> Add Employee</button>
        </div>
        <div className="employeeBlock">
        <svg xmlns="http://www.w3.org/2000/svg" width="40" height="40" viewBox="0 0 40 40" fill="none">
  <circle cx="20" cy="20" r="20" fill="#B3C6ED"/>
  <path d="M17.25 8C15.7312 8 14.5 9.23123 14.5 10.75V12.125C14.5 12.8844 13.8844 13.5 13.125 13.5C10.8468 13.5 9 15.3468 9 17.625V25.875C9 28.1532 10.8468 30 13.125 30H26.875C29.1532 30 31 28.1532 31 25.875V17.625C31 15.3468 29.1532 13.5 26.875 13.5C26.1156 13.5 25.5 12.8844 25.5 12.125V10.75C25.5 9.23123 24.2688 8 22.75 8H17.25ZM22.75 12.125C22.75 12.8844 22.1344 13.5 21.375 13.5H18.625C17.8656 13.5 17.25 12.8844 17.25 12.125C17.25 11.3656 17.8656 10.75 18.625 10.75H21.375C22.1344 10.75 22.75 11.3656 22.75 12.125Z" fill="#CFD8DC"/>
  <path d="M17.25 8C15.7312 8 14.5 9.23123 14.5 10.75V12.125C14.5 12.8844 13.8844 13.5 13.125 13.5C10.8468 13.5 9 15.3468 9 17.625V25.875C9 28.1532 10.8468 30 13.125 30H26.875C29.1532 30 31 28.1532 31 25.875V17.625C31 15.3468 29.1532 13.5 26.875 13.5C26.1156 13.5 25.5 12.8844 25.5 12.125V10.75C25.5 9.23123 24.2688 8 22.75 8H17.25ZM22.75 12.125C22.75 12.8844 22.1344 13.5 21.375 13.5H18.625C17.8656 13.5 17.25 12.8844 17.25 12.125C17.25 11.3656 17.8656 10.75 18.625 10.75H21.375C22.1344 10.75 22.75 11.3656 22.75 12.125Z" fill="white"/>
</svg>
<div className="employeeBlockNameEmail">
    <h2>Name of the Employee</h2>
    <p>Email_of_the_employee</p>
    <p>Phone_number</p>
</div>

  <div className="employeeBlockLine">

  </div>
  <div className="employeeBlockEditDelete">
    <button className="employeeBlockEdit" onClick={onPopup}>Edit</button>
    <button className="employeeBlockDelete">Delete</button>
  </div>
        </div>
        <div className="employeeBlock">
        <svg xmlns="http://www.w3.org/2000/svg" width="40" height="40" viewBox="0 0 40 40" fill="none">
  <circle cx="20" cy="20" r="20" fill="#B3C6ED"/>
  <path d="M17.25 8C15.7312 8 14.5 9.23123 14.5 10.75V12.125C14.5 12.8844 13.8844 13.5 13.125 13.5C10.8468 13.5 9 15.3468 9 17.625V25.875C9 28.1532 10.8468 30 13.125 30H26.875C29.1532 30 31 28.1532 31 25.875V17.625C31 15.3468 29.1532 13.5 26.875 13.5C26.1156 13.5 25.5 12.8844 25.5 12.125V10.75C25.5 9.23123 24.2688 8 22.75 8H17.25ZM22.75 12.125C22.75 12.8844 22.1344 13.5 21.375 13.5H18.625C17.8656 13.5 17.25 12.8844 17.25 12.125C17.25 11.3656 17.8656 10.75 18.625 10.75H21.375C22.1344 10.75 22.75 11.3656 22.75 12.125Z" fill="#CFD8DC"/>
  <path d="M17.25 8C15.7312 8 14.5 9.23123 14.5 10.75V12.125C14.5 12.8844 13.8844 13.5 13.125 13.5C10.8468 13.5 9 15.3468 9 17.625V25.875C9 28.1532 10.8468 30 13.125 30H26.875C29.1532 30 31 28.1532 31 25.875V17.625C31 15.3468 29.1532 13.5 26.875 13.5C26.1156 13.5 25.5 12.8844 25.5 12.125V10.75C25.5 9.23123 24.2688 8 22.75 8H17.25ZM22.75 12.125C22.75 12.8844 22.1344 13.5 21.375 13.5H18.625C17.8656 13.5 17.25 12.8844 17.25 12.125C17.25 11.3656 17.8656 10.75 18.625 10.75H21.375C22.1344 10.75 22.75 11.3656 22.75 12.125Z" fill="white"/>
</svg>
<div className="employeeBlockNameEmail">
    <h2>Name of the Employee</h2>
    <p>Email_of_the_employee</p>
    <p>Phone_number</p>
</div>
  <div className="employeeBlockLine">

  </div>
  <div className="employeeBlockEditDelete">
    <button className="employeeBlockEdit" onClick={onPopup}>Edit</button>
    <button className="employeeBlockDelete">Delete</button>
  </div>
        </div>
        <div className="employeeBlock">
        <svg xmlns="http://www.w3.org/2000/svg" width="40" height="40" viewBox="0 0 40 40" fill="none">
  <circle cx="20" cy="20" r="20" fill="#B3C6ED"/>
  <path d="M17.25 8C15.7312 8 14.5 9.23123 14.5 10.75V12.125C14.5 12.8844 13.8844 13.5 13.125 13.5C10.8468 13.5 9 15.3468 9 17.625V25.875C9 28.1532 10.8468 30 13.125 30H26.875C29.1532 30 31 28.1532 31 25.875V17.625C31 15.3468 29.1532 13.5 26.875 13.5C26.1156 13.5 25.5 12.8844 25.5 12.125V10.75C25.5 9.23123 24.2688 8 22.75 8H17.25ZM22.75 12.125C22.75 12.8844 22.1344 13.5 21.375 13.5H18.625C17.8656 13.5 17.25 12.8844 17.25 12.125C17.25 11.3656 17.8656 10.75 18.625 10.75H21.375C22.1344 10.75 22.75 11.3656 22.75 12.125Z" fill="#CFD8DC"/>
  <path d="M17.25 8C15.7312 8 14.5 9.23123 14.5 10.75V12.125C14.5 12.8844 13.8844 13.5 13.125 13.5C10.8468 13.5 9 15.3468 9 17.625V25.875C9 28.1532 10.8468 30 13.125 30H26.875C29.1532 30 31 28.1532 31 25.875V17.625C31 15.3468 29.1532 13.5 26.875 13.5C26.1156 13.5 25.5 12.8844 25.5 12.125V10.75C25.5 9.23123 24.2688 8 22.75 8H17.25ZM22.75 12.125C22.75 12.8844 22.1344 13.5 21.375 13.5H18.625C17.8656 13.5 17.25 12.8844 17.25 12.125C17.25 11.3656 17.8656 10.75 18.625 10.75H21.375C22.1344 10.75 22.75 11.3656 22.75 12.125Z" fill="white"/>
</svg>
<div className="employeeBlockNameEmail">
    <h2>Name of the Employee</h2>
    <p>Email_of_the_employee</p>
    <p>Phone_number</p>
</div>
  <div className="employeeBlockLine">

  </div>
  <div className="employeeBlockEditDelete">
    <button className="employeeBlockEdit" onClick={onPopup}>Edit</button>
    <button className="employeeBlockDelete">Delete</button>
  </div>
        </div>
        <div className="employeeBlock">
        <svg xmlns="http://www.w3.org/2000/svg" width="40" height="40" viewBox="0 0 40 40" fill="none">
  <circle cx="20" cy="20" r="20" fill="#B3C6ED"/>
  <path d="M17.25 8C15.7312 8 14.5 9.23123 14.5 10.75V12.125C14.5 12.8844 13.8844 13.5 13.125 13.5C10.8468 13.5 9 15.3468 9 17.625V25.875C9 28.1532 10.8468 30 13.125 30H26.875C29.1532 30 31 28.1532 31 25.875V17.625C31 15.3468 29.1532 13.5 26.875 13.5C26.1156 13.5 25.5 12.8844 25.5 12.125V10.75C25.5 9.23123 24.2688 8 22.75 8H17.25ZM22.75 12.125C22.75 12.8844 22.1344 13.5 21.375 13.5H18.625C17.8656 13.5 17.25 12.8844 17.25 12.125C17.25 11.3656 17.8656 10.75 18.625 10.75H21.375C22.1344 10.75 22.75 11.3656 22.75 12.125Z" fill="#CFD8DC"/>
  <path d="M17.25 8C15.7312 8 14.5 9.23123 14.5 10.75V12.125C14.5 12.8844 13.8844 13.5 13.125 13.5C10.8468 13.5 9 15.3468 9 17.625V25.875C9 28.1532 10.8468 30 13.125 30H26.875C29.1532 30 31 28.1532 31 25.875V17.625C31 15.3468 29.1532 13.5 26.875 13.5C26.1156 13.5 25.5 12.8844 25.5 12.125V10.75C25.5 9.23123 24.2688 8 22.75 8H17.25ZM22.75 12.125C22.75 12.8844 22.1344 13.5 21.375 13.5H18.625C17.8656 13.5 17.25 12.8844 17.25 12.125C17.25 11.3656 17.8656 10.75 18.625 10.75H21.375C22.1344 10.75 22.75 11.3656 22.75 12.125Z" fill="white"/>
</svg>
<div className="employeeBlockNameEmail">
    <h2>Name of the Employee</h2>
    <p>Email_of_the_employee</p>
    <p>Phone_number</p>
</div>
  <div className="employeeBlockLine">

  </div>
  <div className="employeeBlockEditDelete">
    <button className="employeeBlockEdit" onClick={onPopup}>Edit</button>
    <button className="employeeBlockDelete">Delete</button>
  </div>
        </div>
        <div className="employeeBlock">
        <svg xmlns="http://www.w3.org/2000/svg" width="40" height="40" viewBox="0 0 40 40" fill="none">
  <circle cx="20" cy="20" r="20" fill="#B3C6ED"/>
  <path d="M17.25 8C15.7312 8 14.5 9.23123 14.5 10.75V12.125C14.5 12.8844 13.8844 13.5 13.125 13.5C10.8468 13.5 9 15.3468 9 17.625V25.875C9 28.1532 10.8468 30 13.125 30H26.875C29.1532 30 31 28.1532 31 25.875V17.625C31 15.3468 29.1532 13.5 26.875 13.5C26.1156 13.5 25.5 12.8844 25.5 12.125V10.75C25.5 9.23123 24.2688 8 22.75 8H17.25ZM22.75 12.125C22.75 12.8844 22.1344 13.5 21.375 13.5H18.625C17.8656 13.5 17.25 12.8844 17.25 12.125C17.25 11.3656 17.8656 10.75 18.625 10.75H21.375C22.1344 10.75 22.75 11.3656 22.75 12.125Z" fill="#CFD8DC"/>
  <path d="M17.25 8C15.7312 8 14.5 9.23123 14.5 10.75V12.125C14.5 12.8844 13.8844 13.5 13.125 13.5C10.8468 13.5 9 15.3468 9 17.625V25.875C9 28.1532 10.8468 30 13.125 30H26.875C29.1532 30 31 28.1532 31 25.875V17.625C31 15.3468 29.1532 13.5 26.875 13.5C26.1156 13.5 25.5 12.8844 25.5 12.125V10.75C25.5 9.23123 24.2688 8 22.75 8H17.25ZM22.75 12.125C22.75 12.8844 22.1344 13.5 21.375 13.5H18.625C17.8656 13.5 17.25 12.8844 17.25 12.125C17.25 11.3656 17.8656 10.75 18.625 10.75H21.375C22.1344 10.75 22.75 11.3656 22.75 12.125Z" fill="white"/>
</svg>
<div className="employeeBlockNameEmail">
    <h2>Name of the Employee</h2>
    <p>Email_of_the_employee</p>
    <p>Phone_number</p>
</div>
  <div className="employeeBlockLine">

  </div>
  <div className="employeeBlockEditDelete">
    <button className="employeeBlockEdit" onClick={onPopup}>Edit</button>
    <button className="employeeBlockDelete">Delete</button>
  </div>
        </div>
        <div className="employeeBlock">
        <svg xmlns="http://www.w3.org/2000/svg" width="40" height="40" viewBox="0 0 40 40" fill="none">
  <circle cx="20" cy="20" r="20" fill="#B3C6ED"/>
  <path d="M17.25 8C15.7312 8 14.5 9.23123 14.5 10.75V12.125C14.5 12.8844 13.8844 13.5 13.125 13.5C10.8468 13.5 9 15.3468 9 17.625V25.875C9 28.1532 10.8468 30 13.125 30H26.875C29.1532 30 31 28.1532 31 25.875V17.625C31 15.3468 29.1532 13.5 26.875 13.5C26.1156 13.5 25.5 12.8844 25.5 12.125V10.75C25.5 9.23123 24.2688 8 22.75 8H17.25ZM22.75 12.125C22.75 12.8844 22.1344 13.5 21.375 13.5H18.625C17.8656 13.5 17.25 12.8844 17.25 12.125C17.25 11.3656 17.8656 10.75 18.625 10.75H21.375C22.1344 10.75 22.75 11.3656 22.75 12.125Z" fill="#CFD8DC"/>
  <path d="M17.25 8C15.7312 8 14.5 9.23123 14.5 10.75V12.125C14.5 12.8844 13.8844 13.5 13.125 13.5C10.8468 13.5 9 15.3468 9 17.625V25.875C9 28.1532 10.8468 30 13.125 30H26.875C29.1532 30 31 28.1532 31 25.875V17.625C31 15.3468 29.1532 13.5 26.875 13.5C26.1156 13.5 25.5 12.8844 25.5 12.125V10.75C25.5 9.23123 24.2688 8 22.75 8H17.25ZM22.75 12.125C22.75 12.8844 22.1344 13.5 21.375 13.5H18.625C17.8656 13.5 17.25 12.8844 17.25 12.125C17.25 11.3656 17.8656 10.75 18.625 10.75H21.375C22.1344 10.75 22.75 11.3656 22.75 12.125Z" fill="white"/>
</svg>
<div className="employeeBlockNameEmail">
    <h2>Name of the Employee</h2>
    <p>Email_of_the_employee</p>
    <p>Phone_number</p>
</div>
  <div className="employeeBlockLine">

  </div>
  <div className="employeeBlockEditDelete">
    <button className="employeeBlockEdit" onClick={onPopup}>Edit</button>
    <button className="employeeBlockDelete">Delete</button>
  </div>
        </div>
        </div>
    </div>
    <div className="popup" id="popup">
        <form action="#" method="post">
        <label for="name">Name:</label>
        <input type="text" id="name" name="name" required/>

        <label for="dob">Date of Birth:</label>
        <input type="date" id="dob" name="dob" required/>

        <label for="age">Age:</label>
        <input type="number" id="age" name="age" required/>

        <label for="email">Email:</label>
        <input type="email" id="email" name="email" required/>

        <label for="qualification">Educational Qualification:</label>
        <input type="text" id="qualification" name="qualification" required/>

        <label for="gender">Gender:</label>
        <select id="gender" name="gender" required>
            <option value="male">Male</option>
            <option value="female">Female</option>
            <option value="other">Other</option>
        </select>

        <label for="position">Position Applied For:</label>
        <input type="text" id="position" name="position" required/>

        <button onClick={removePopup}>Submit</button>
    </form>
        </div>
    </>
  )
}
