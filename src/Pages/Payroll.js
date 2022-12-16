import React from 'react'
import '../styles/Payroll.css'
import DateRangePicker from '@wojtekmaj/react-daterange-picker/dist/entry.nostyle'
import { useState } from 'react'
import CustomPaginationActionsTable from '../components/Table'
import Sidebar from '../components/Sidebar'
import Table from '../components/Table'

const Payroll = () => {
  const [value, onChange] = useState([new Date(), new Date()]);
  return (
    <div>
      <Sidebar />

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