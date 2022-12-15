
import React,{useState,useEffect} from 'react';
import axios from 'axios'

import '../styles/employeedata.css'


import AddEmployee from '../components/AddEmployee';
import EmployeeMain from '../components/EmployeeMain';
import Sidebar from '../components/Sidebar';

const Employees = () => {

  const [data,setData]=useState([])
  const [show ,setShow]=useState(false)
  



  const url="http://192.168.2.74/employee/all";
  



  useEffect(() => {
    const getData=async()=>{

      const {data:res}=await axios.get(url)
      setData(res)
    }

      getData();
      
      
  
   
    
    
    
  }, [])
console.log(data )


  


  return (

    <>
    <div>
      <Sidebar/>
      <div className='components'>
      {show ? <AddEmployee setShow={setShow} data={data} setData={setData}/>:<EmployeeMain data={data} setData={setData} setShow={setShow}/>}
    
      </div>

    </div>
   
    </>







    
  )
}

export default Employees