import React from 'react'
import icon from '../Assets/icons.svg'
import '../styles/component.css';
import { useState,useEffect } from 'react';
import axios  from 'axios';
import Avatar from '@mui/material/Avatar';
function EmployeeDetails(props) {
  console.log(props)
  const emp_url=`http://192.168.2.74/employee/${props.id}`
  const[employee,setEmployee]=useState([])
      useEffect(()=>{
          axios.get(emp_url).then((response)=>{
            setEmployee(response.data)
            console.log(response.data)
          })
        },[emp_url])
  
  return (
    <div className='emp_container'>
      <div className='head1'>Employee Details
          <div className='icon2'>
            {/* <img style={{width:"100px"}} src={icon} /> */}
            <Avatar style={{width:'100px',height:'100px'}} alt="Travis Howard" src={employee.profilePic} />
          </div>
      </div>
      <div className='emp_details'>
            <p>First Name: </p>
            <p>Last Name:</p>
            <p>Email Id:</p>
            <p>Mobile:</p>
            <p>Address:</p>
      </div>
      <div className='show_details'>
        <p>{employee.firstName}</p>
        <p>{employee.lastName}</p>
        <p>{employee.email}</p>
        <p>{employee.phoneNumber}</p>
        <p>{employee.address}</p>
      </div>
    </div>
  )
}

export default EmployeeDetails