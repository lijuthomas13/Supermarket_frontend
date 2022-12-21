
// import React,{useState,useEffect} from 'react';
// import axios from 'axios'

// import '../styles/employeedata.css'


// import AddEmployee from '../components/AddEmployee';
// import EmployeeMain from '../components/EmployeeMain';
// import Sidebar from '../components/Sidebar';
// import { useParams } from 'react-router-dom';

// const Employees = () => {

//   const [data,setData]=useState([])
//   const [show ,setShow]=useState(false)
//   const [emp, setEmp] = useState([])
//   let {id} =useParams()
//   const url2=`http://192.168.2.74/employee/${id}`;
//   console.log(id)


//   const url="http://192.168.2.74/employee/all";
//   useEffect(() => 
//   {axios.get(url2).then((response) => {
//       setEmp(response.data)
//       console.log(response.data)
//       })
//   },[])


  



//   useEffect(() => {
//     const getData=async()=>{

//       const {data:res}=await axios.get(url)
//       setData(res)
//     }

//       getData();
      
      
  
   
    
    
    
//   }, [])
// console.log(data )


  


//   return (

//     <>
//     <div>
//       <Sidebar details={emp} />
//       <div className='components'>
//       {show ? <AddEmployee setShow={setShow} data={data} setData={setData}/>:<EmployeeMain data={data} setData={setData} setShow={setShow}/>}
    
//       </div>

//     </div>
   
//     </>







    
//   )
// }

// export default Employees






import React,{useState,useEffect} from 'react';
import axios from 'axios'

import '../styles/employeedata.css'


import AddEmployee from '../components/AddEmployee';
import EmployeeMain from '../components/EmployeeMain';
import Sidebar from '../components/Sidebar';
import EditEmployee from '../components/Editemp'
import { useParams } from 'react-router-dom';

const Employees = () => {

  const [data,setData]=useState([])
  const [show ,setShow]=useState(false)
  const [edit ,setEdit]=useState(false)
  const [idd ,setId]=useState("")
  const [emp, setEmp] = useState([])
    let {id} =useParams()
    const url2=`http://192.168.2.74/employee/${id}`;
    console.log(id)
  



  const url="http://192.168.2.74/employee/all";
  
  useEffect(() => 
  {axios.get(url2).then((response) => {
      setEmp(response.data)
      console.log(response.data)
      })
  },[])


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
      <Sidebar  details={emp}/>
      <div className='components'>
      {!show && !edit && (
                <>
                  <EmployeeMain data={data} setData={setData} setShow={setShow} setEdit={setEdit} setId={setId}/>
    
                </>
            )}
          
            {show && (
               <AddEmployee setShow={setShow} data={data} setData={setData}/>
            )}
           
            {edit && (
                <EditEmployee setEdit={setEdit} id={idd}/> 
            )}
      
      </div>

    </div>
   
    </>







    
  )
}

export default Employees