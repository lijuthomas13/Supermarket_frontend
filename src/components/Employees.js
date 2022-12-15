import React ,{useState,useEffect} from 'react'
import axios from 'axios';
import '../styles/Employees.css';
import Emp_status from './Emp-comp/Emp_status';
import List from './Emp-comp/List';
import Search from './Emp-comp/Search';
import Payroll from './Table';
function Employees() {
  
  return (
    <div class='container'>
      <div class='row mt-3' id='emp_status'>
        <div class='card' id='emp-row-1'>
          <Emp_status />
        </div>
      </div>
      <div class='row mt-3'>
      
          {/* <Search/> */}
        <Payroll />
        {/* <List/> */}
        
      </div>
      
    </div>
  )
}

export default Employees