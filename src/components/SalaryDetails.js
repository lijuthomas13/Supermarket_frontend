import React from 'react'
import { useEffect } from 'react'
import { useState } from 'react'
import axios from 'axios'
import DownloadIcon from '@mui/icons-material/Download';
function SalaryDetails({details}) {
  const [salary,setSalary]=useState([])
  const url_salary=`http://192.168.2.74/Salary/Totals/${details.id}`
  useEffect(() => {
    {axios.get(url_salary).then((response) => {
          setSalary(response.data)
          console.log(response.data)
          })}
      },[url_salary])
  console.log(salary)

  return (
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
        <button className='payslip-btn' value="download"><DownloadIcon />Payslip</button>
       </div>
       
    </>
  )
}

export default SalaryDetails