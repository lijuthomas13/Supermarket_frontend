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
import DownloadIcon from '@mui/icons-material/Download';
import { useParams } from 'react-router-dom'
import Salaryslip from '../components/Salaryslip'
import Avatar from '@mui/material/Avatar';
import DownloadingIcon from '@mui/icons-material/Downloading';
import Button from '@mui/material/Button';
function EmployeePage() {
  const [salaryOpen,setSalaryOpen]=useState(false)
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
  console.log(salaryOpen)
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

  const [salary,setSalary]=useState([])
  const url_salary=`http://192.168.2.74/Salary/Totals/${id}`
  
  useEffect(() => {
    {axios.get(url_salary).then((response) => {
          setSalary(response.data)
          console.log(response.data)
          })}
      },[url_salary])
  console.log(salary)
  return (

    <div className='outer-div'>
      <div className='innerdiv-top'>
        <div className='topdiv1'>
          <div className='icon'>
          <Avatar style={{width:'60px',height:'60px'}} alt="Travis Howard" src={emp.profilePic} />
          </div>
          <div className='emp_head'>
            <h4 style={{ color: "#D9DFFB", fontFamily: "Inter" ,textAlign:'left'}}>{emp.firstName} {emp.lastName}</h4>
            <p style={{ color: "#D9DFFB", fontSize: "14px", fontFamily: "Inter" }}>{emp.designation}</p>
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
          <div className='grid3'>
            <>
              <div className='head2'>Salary Details</div>
              <div className='details'>
                <p>Gross Salary:</p>
                <p>Deduction:</p>
                <p>Net Salary:</p>
              </div>
              <div className='show_Otherdetails'>
                <p>{salary.totalGross}</p>
                <p>{salary.totalDeduction}</p>
                <p>{salary.netSalary}</p>
                
                
                <Button style={{backgroundColor:'#010322'}} onClick={()=>{setSalaryOpen(true)}} variant="contained" endIcon={<DownloadingIcon />}>
                <a id='salary_link' href="#salary_section">Generate Payslip</a>
      </Button>
              </div>

            </>
          </div>
        </div>
        

      </div>
      <div id='salary_section'>
      {salaryOpen?<Salaryslip id={id}/>:null}
      </div>
      
    </div>
  )
}

export default EmployeePage