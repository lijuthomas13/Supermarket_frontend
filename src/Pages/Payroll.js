import React from 'react'
import '../styles/Payroll.css'
import DateRangePicker from '@wojtekmaj/react-daterange-picker/dist/entry.nostyle'
import { useState } from 'react'
import CustomPaginationActionsTable from '../components/Table'
import Sidebar from '../components/Sidebar'


const Payroll = () => {
  const [value, onChange] = useState([new Date(), new Date()]);
  return (
    <div>
      <Sidebar/>
      <div className='components'>
      <div class="box">
    <div className='addemployee'>
        <div className='one'>
            <h1>25</h1>
            <p>Employees</p>
        </div>
        <div className='two'>
          
        </div>
    
    </div>
    <div className='filter'>
        <input id="search" placeholder='Search'/>
        <select name="cars" id="cars">
            <option value="volvo" className='option'>All Employees</option>
            <option value="saab" className='option'>Managers</option>
            <option value="mercedes" className='option'>salesman</option>
            <option value="audi"className='option'>accountant</option>
        </select>
        <DateRangePicker style={{border:"1px solid #8991c0"}} onChange={onChange} value={value}  />
       
       
    </div>
    <div>
   <CustomPaginationActionsTable/>
    </div>

    
  </div>
      </div>
    </div>



    
  )
}

export default Payroll