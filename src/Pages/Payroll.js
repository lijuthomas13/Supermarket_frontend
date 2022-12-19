import React from 'react'
import '../styles/Payroll.css'
import DateRangePicker from '@wojtekmaj/react-daterange-picker/dist/entry.nostyle'
import { useState } from 'react'
import CustomPaginationActionsTable from '../components/Table'
import Sidebar from '../components/Sidebar'
import Table from '../components/Table'
import { useParams } from 'react-router-dom'
import axios from 'axios'
import { useEffect } from 'react'
const Payroll = () => {
  const [emp, setEmp] = useState([])
  let {id} =useParams()
  const url2=`http://192.168.2.74/employee/${id}`;
  console.log(id)


  useEffect(() => 
  {axios.get(url2).then((response) => {
      setEmp(response.data)
      console.log(response.data)
      })
  },[])
  const [value, onChange] = useState([new Date(), new Date()]);
  return (
    <div>
      <Sidebar  details={emp}/>

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
          <Table  />
          <div>
            {/* <CustomPaginationActionsTable /> */}

          </div>


        </div>
      </div>
    </div>



    
  )
}

export default Payroll