import React from 'react'
import axios from 'axios';
import '../styles/Payroll.css'
import DateRangePicker from '@wojtekmaj/react-daterange-picker/dist/entry.nostyle'
import { useState } from 'react'
import CustomPaginationActionsTable from '../components/Table'
import Sidebar from '../components/Sidebar'
import Table from '../components/Table'

const Payroll = () => {
  const [value, onChange] = useState([new Date(), new Date()]);
  const [post, setPost] = useState([]);
    React.useEffect(() => {
        axios.get('http://192.168.2.74/employee/all').then((response) => {
            setPost(response.data);
        });
    }, []);
  return (
    <div>
      <Sidebar />

      <div className='components'>
        <div class="box">
          <div className='addemployee'>
            <div className='one'>
              <h1>{post.length}</h1>
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