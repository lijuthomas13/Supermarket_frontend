import React ,{useState,useEffect}from 'react'
import '../styles_admin/Adminorg.css';
import { FaUserCircle } from 'react-icons/fa';
import { MdOutlineDashboard } from 'react-icons/md';
import {HiUserGroup} from 'react-icons/hi';
import Avatar from '@mui/material/Avatar';
import Dashbord from '../components_admin/Dashbord';
import Employees from '../components_admin/Employees';
import {Sidebar_data} from '../helpers/Sidebar_data.js' 
import { useParams } from 'react-router-dom';
import axios from 'axios';

function Adminorg() {
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
    console.log(emp)
    
    const employee ={

        id: 1233,

        FirstName: "Sreekala",

        LastName:"N",

        Address:"Nellampani house,Karakurissi post,Palakkad",

        AadharNumber:1234567887,

        Designation: "Software Engineer Trainee",

        verified:true      

    }
    const [page,setpage]=useState('1');
    const [active,setactive]=useState('1');
  return (
    <div id='parent'>
        <div id='left'>
                <div id='outer-div-parent'>
                <div id='child-user-details'>
                    <div id='user-info'>
                        <div id='user-img'>
                        <Avatar id='img' alt="Travis Howard" src={emp.profilePic} />
                            {/* <FaUserCircle id='img'/> */}
                        </div>
                        <div id='user-details'>
                            <h4>{emp.firstName} {emp.lastName}</h4>
                            <p>{emp.designation}</p>    
                        </div>
                    </div>
                </div>
                <div id='child-navigation'>
                    {/* <div className='dash_icon'>
                        <div  className={page === "1" ? "active" : 'map_but'}><MdOutlineDashboard/></div>
                        <div className={page === "1" ? "active" : 'map_but'} onClick={() => { setpage('1') }}>Dashboard</div>
                    </div>
                    <div className='dash_icon'>
                        <div  className={page === "2" ? "active" : 'map_but'}><HiUserGroup/></div>
                        <div className={page === "2" ? "active" : 'map_but'} onClick={() => { setpage('2') }}>Employees</div>
                    </div> */}
                    {Sidebar_data.map((Item)=>{
                        
                        return(
                            <div className='dash_icon'>
                        {/* <div  className={page === Item.id ? "active" : 'map_but'}>{Item.icon}</div> */}
                        <div className={page === Item.id ? "active" : 'map_but'} onClick={() => { setpage(Item.id) }}><span id='span_icon'>{Item.icon}</span>{Item.title}</div>
                    </div>
                        )
                    })}
                </div>

        </div>
        </div>
        {/* <div id='right'>
            

            {(page === '1' ? <Dashbord  className='page'/> : null)}
            {(page === '2' ? <Employees  className='page'/> : null)}
        </div> */}
        {Sidebar_data.map((Item)=>{
            return(
                <>
                {(page===Item.id?<div id='right'>{<Item.component data={emp}/>}</div>:null)}
                </>
                    
                    
                
            )
        })}
    </div>
    
  )
}

export default Adminorg