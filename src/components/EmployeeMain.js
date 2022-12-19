import React,{useState} from 'react'
import DateRangePicker from '@wojtekmaj/react-daterange-picker/dist/entry.nostyle'
import { HiUserPlus } from "react-icons/hi2";
import Employeedata from './Employeedata';

const EmployeeMain = ({data ,setShow ,setData ,setId,setEdit}) => {
  const [value, onChange] = useState([new Date(), new Date()]);
  const [searchItem, setSearchItem] = useState('');
  const [option, setOption] = useState('');
 
  const HandleAdd =()=>{
    setShow(true)
  }
 
  return (
    <div><div class="box">
    <div className='addemployee'>
        <div className='one'>
            <h1>{data?.length}</h1>
            <p>Employees</p>
        </div>
        <div className='two' onClick={HandleAdd}>
          <p><span><HiUserPlus/></span>Add Employees</p>
        </div>
    
    </div>
    <div className='filter'>
        <input type="text" id="search" value={searchItem} placeholder='Search' onChange={(event)=>setSearchItem(event.target.value)} />
        <select name="employees"  id="employees"   onChange={(event)=>setOption(event.target.value)}>

            <option value="" className='option' >Filter by department</option>
            <option value="All Employees" className='option' >All Employees</option>   
            <option value="Finance" className='option'>Finance</option>
            <option value="Sales" className='option'>Sales</option>
            <option value="Manager"className='option'>Manager</option>
        </select>
        {/* <DateRangePicker style={{border:"1px solid #8991c0"}} onChange={onChange} value={value}  /> */}
       
       
    </div>
    <div className='employeetable'>{data && data?.length !==0 ?<Employeedata data={data} setData={setData} searchItem={searchItem} option={option} setEdit={setEdit} setId={setId}/>:<div className='no-data'><h1>No employees</h1></div>}</div>

    
  </div></div>
  )
}

export default EmployeeMain