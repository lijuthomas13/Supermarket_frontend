import React from 'react'
import icon from "../Assets/usericon.svg"
import { GrMail } from "react-icons/gr";
import { BsFillTelephoneFill } from "react-icons/bs";

import { GoVerified } from "react-icons/go";
import { GoUnverified } from "react-icons/go";
import LongMenu from './Threedot';

const EachEmployee = (props) => {
  console.log(props.data)
  
  return (
    <>
    
    <li>
    <div  className='employee-grid'>
        <div className='profile'>
          <div className='imagee'>
            <div>{props.verification?<GoVerified style={{color:"green"}}/>:<GoUnverified style={{color:"red"}}/>}</div>
            <div><img src={icon}></img></div>
            <div><LongMenu  eachemployee={props.eachemployee} data={props.data} setData={props.setData} setEdit={props.setEdit} setId={props.setId}/></div>
          </div>
         
       
        <h4>{props.firstname} {props.lastName}</h4>
        <p>{props.designation}</p>
        

        </div>
        <div className='basic-details'>
       
          <div className="details-one">
              <div>
              <p style={{fontSize:"13px" ,fontWeight:"500"}}>Department</p>
              <p style={{fontSize:"14px"}}>{props.department}</p>

              </div>
              <div className='date-hired'>
              <p  style={{fontSize:"13px", fontWeight:"500"}}>Date Hired</p>
              <p >september 5</p>
              </div>
              
            
              
          </div>
        <div className='details-two'>
        <p><span><GrMail/></span>{props.email}</p>
        <p><span><BsFillTelephoneFill/></span>{props.phoneNumber}</p>
        </div>


        </div>
        
        

    </div>
</li></>
        
    
  )
}

export default EachEmployee