import React,{useState,useEffect} from 'react'
import axios from 'axios';
import '../styles/Dashboard.css'
import EmployeeRoles from './Dash-comp/EmployeeRoles'
import Notverified from './Dash-comp/Notverified'
import TotalEmp from './Dash-comp/TotalEmp'
import Verified from './Dash-comp/Verified'
import WorkingFormat from './Dash-comp/WorkingFormat'
function Dashbord(props) {

  // const [post, setPost] = useState(null);
  // React.useEffect(() => {
  //   axios.get('http://192.168.2.74/employee/all').then((response) => {
  //     setPost(response.data);
  //   });
  // }, []);


  const post = [
    {
        id: 1233,
        FirstName: "Sreekala",
        LastName:"N",
        Address:"Nellampani House,Karakurissi Post",
        AadharNumber:"12131234",
        AadharDocument:"",
        Designation: "Engineer",
        isVerified:true,
        WorkingFormat:'onsite'
        

    },
    {
        id: 1234,
        FirstName: "Akshay",
        LastName:"J",
        Address:"cfsdzf",
        AadharNumber:"2159670",
        AadharDocument:"",
        Designation: "Designer",
        isVerified:true,
        WorkingFormat:'onsite'
    },
    {
        id: 1235,
        FirstName: "Liju",
        LastName:"Thomas ",
        Address:"cfsdzf",
        AadharNumber:"2159670",
        AadharDocument:"",
        Designation: "Engineer",
        isVerified:false,
        WorkingFormat:'remote'
    },
    {
      id: 1236,
      FirstName: "Irshad",
      LastName:"mOHAMMAD ",
      Address:"cfsSDFASDdzf",
      AadharNumber:"2159SDFSD670",
      AadharDocument:"",
      Designation: "Manager",
      isVerified:true,
      WorkingFormat:'hybrid'
  }
]
  console.log(post)
  return (
    <div class='container'>
        <div class='row mt-3' >
          <h1>Welcome,{props.data.FirstName}!</h1>
        </div>
        <div class='row mt-3'>
          <h3>Summary</h3>
        </div>
        <div class='row mt-3'>
          <div class='col-sm' id='firstrow'>
            <div class='card' id='row1-card1'>
              <TotalEmp data={post} />
            </div>
          </div>
          <div class='col-sm'>
            <div class='card' id='row1-card2' >
              <Verified data={post} />
            </div>
          </div>
          <div class='col-sm'>
            <div class='card' id='row1-card3'>
              <Notverified data={post} />
            </div>
          </div>
        </div>
        <div class='row mt-3'>
            <div class='card' id='row2-card1'>
              <EmployeeRoles data={post}/>
            </div>
            <div class='card' id='row2-card2'>
              <WorkingFormat data={post}/>
            </div>
        </div>


    </div>
  )
}

export default Dashbord