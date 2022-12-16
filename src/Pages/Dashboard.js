import React ,{useState,useEffect} from 'react';
import '../styles/dashboard.css';
import total from '../Assets/total.svg';
import resigned from '../Assets/resigned.svg';
import Add from '../Assets/Add.svg'
import circle from '../Assets/circle.svg'
import circle2 from '../Assets/circle2.svg'
import circle3 from '../Assets/circle3.svg'
import circle4 from '../Assets/circle4.svg'
import axios from 'axios'
import Chart1 from '../components/Chartone';
import Chart2 from '../components/ChartTwo';
import Sidebar from '../components/Sidebar';
import EmployeeRoles from '../components_admin/Dash-comp/EmployeeRoles';
import WorkingFormat from '../components_admin/Dash-comp/WorkingFormat';







const Dashboard = () => {
  const [data,setData]=useState([])


  const url="http://192.168.2.74/employee/all";
  

  const getData=()=>{
    axios.get(url).then((res)=>{
      console.log(res.data)
      console.log(res.status)
      setData(res.data)

    }).catch((error)=>{console.log(error)})


  }

  useEffect(() => {
    getData();
    
  }, [data])

  const count=data.filter(obj=>{
    if(obj.isVerified){
        return true;
    }
    return false;
    
}).length;

const count_uv=data.filter(obj=>{
  if(obj.isVerified){
      return false;
  }
  return true;
  
}).length;
  

  
  return (<> 
  <div className='AppS'>
  <Sidebar/>

  <div className='components'>
  <div className='dash'>
  <div className='greeting'><h1 style={{fontStyle:"inter"}}>Welcome , Akshay !</h1></div>
  <div className='summary'>
    <div className='summary-data'>
      <img src={total} alt="total"></img>
      <div>
        <h3>{data?.length}</h3>
        <p>Total Employees</p>
      </div>

    </div>
    <div className='summary-data'>
    <img src={Add}  alt="add"></img>
    <div>
        <h3>{count}</h3>
        <p>VerifiedEmployees</p>
    </div>

    
   
    </div>
    <div className='summary-data'>
    <img src={resigned}  alt="resigned"></img>
    <div>
        <h3>{count_uv}</h3>
        <p>Not Verified Employees</p>
    </div>
     
    </div>
  </div>
  <div className='chart'>
    <div className='datachart'>
      <h5>Employee Roles</h5>
      {/* <Chart1/> */}
     <EmployeeRoles/>
      <div className="details-one">
                <div>
                <p><span><img src={circle}></img></span>role 1</p>
                <p><span><img src={circle2}></img></span>role 2</p>

                </div>
                <div>
                <p ><span><img src={circle3}></img></span>role3</p>
                <p ><span><img src={circle4}></img></span>role4</p>
               </div>
                
               
                
       </div>
    
    </div>
    <div className='datachart'>
      <h5>Department</h5>
      {/* <Chart2/> */}
      <WorkingFormat/>
    </div>
  </div>
</div>
  </div>
  
  </div>
  </>
   
    
  )
}

export default Dashboard