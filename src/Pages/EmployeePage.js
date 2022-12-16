import {React} from 'react'
import { useLocation } from 'react-router-dom'
import '../styles/EmployeePage.css'
import icon from '../Assets/icons.svg'
import { BiLogOutCircle } from 'react-icons/bi'
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom'
import EmployeeDetails from '../components/EmployeeDetails'
import OtherDetails from '../components/OtherDetails'
import SalaryDetails from '../components/SalaryDetails'
import axios from 'axios';
import { useState, useEffect } from 'react'
import { useParams } from 'react-router-dom'
function EmployeePage() {

  // const id=19;
  // const location = useLocation();
  // const { id } = location.state;
  // console.log(id)
  // const emp_url = `http://192.168.2.74/employee/${id}`;
  // const [employee, setEmployee] = useState([])
  // useEffect(() => {
  //   axios.get(emp_url).then((response) => {
  //     setEmployee(response.data)
  //     console.log(response.data)
  //   })
  // }, [])

  const [emp, setEmp] = useState([])
  let {id} =useParams()
  const url2=`http://192.168.2.74/employee/${id}`;
  // console.log(url2)
  console.log(id)
  console.log(emp)
  const url="http://192.168.2.74/employee/all";

  
  useEffect(() => {
    const getData=async()=>{

      const {data:res}=await axios.get(url2)
      setEmp(res)
    }

      getData();},[]
  )
  // useEffect(() => 
  // {axios.get(url2).then((response) => {
  //     setEmp(response.data)
  //     console.log(response.data)
  //     })
  // },[])
  return (

    <div className='outer-div'>
      <div className='innerdiv-top'>
        <div className='topdiv1'>
          <div className='icon'>
            <img src={icon} />
          </div>
          <div className='emp_head'>
            <h3 style={{ color: "#D9DFFB", fontFamily: "Inter" ,margin:"8px"}}>{emp.firstName} {emp.lastName}</h3>
            <p style={{ color: "#D9DFFB", fontSize: "14px", fontFamily: "Inter",marginLeft:"10px" }}>{emp.designation}</p>
          </div>
        </div>
        <div className='topdiv2'>

          <Link style={{ color: "#D9DFFB", textDecoration: 'none', fontSize: "18px", fontFamily: "Inter" }} to="/"><BiLogOutCircle style={{ paddingTop: '0px', height: "15px" }} /> Logout</Link>

        </div>
      </div>
      <div className='innerdiv-bottom'>
        <div className='bottomdiv1'>
          <h2>Welcome, {emp.firstName}!</h2>
        </div>
        <div className='grid-container'>
          <div className='grid1'><EmployeeDetails details={emp} /></div>
          <div className='grid2'><OtherDetails details={emp} /></div>
          <div className='grid3'><SalaryDetails details={emp} /></div>
        </div>

      </div>

    </div>
  )
}

export default EmployeePage