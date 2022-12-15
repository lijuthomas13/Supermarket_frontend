import React,{useState,useEffect} from 'react';
import axios from 'axios';
import Button from '@mui/material/Button';
import DeleteIcon from '@mui/icons-material/Delete';
import RefreshIcon from '@mui/icons-material/Refresh';
import { CDBCard, CDBCardBody, CDBDataTable, CDBContainer } from 'cdbreact';
import VerifiedUserIcon from '@mui/icons-material/VerifiedUser';
import GppBadIcon from '@mui/icons-material/GppBad';
import '../../styles/Employee/List.css';
import Emp_display from './Emp_display';
import {FaRegUserCircle} from 'react-icons/fa';
function List() {
  const [currentEmp, setcurrentEmp] = useState(null);
  const [ref,setref]=useState(null)
  function display(ref){
    
    axios.get(`http://192.168.2.74/employee/${ref}`).then((response) => {
            setcurrentEmp(response.data);
        });
    
  }

  

  
 const [post, setPost] = useState([]);
    React.useEffect(() => {
        axios.get('http://192.168.2.74/employee/all').then((response) => {
            setPost(response.data);
        });
    }, [post]);
  //   setInterval(function(){ 
  //     axios.get('http://192.168.2.74/employee/all').then(response => setPost(response.data));
  //  }, 3000);
    function updateEmployee(){
      axios.get('http://192.168.2.74/employee/all').then((response) => {
            setPost(response.data);
        });
    }
  function Verify(){
    const payload=currentEmp.id;
    
    axios.post(`http://192.168.2.74/Employee/Verify/${currentEmp.id}` )
    .then(function (response) {
      console.log(response);
    })
    .catch(function (error) {
      console.log(error);
    });
    display(currentEmp.id)
    updateEmployee()
    console.log('hi')
    refresh()
}

function Delete(){
  const payload=currentEmp.id;
  
  axios.delete(`http://192.168.2.74/Employee/Delete/${currentEmp.id}` )
  .then(function (response) {
    console.log(response);
  })
  .catch(function (error) {
    console.log(error);
  });
  updateEmployee();
  setcurrentEmp(null);
  
}

    post.forEach(object => {
      object.link = <a style={{color:'blue',textDecoration:'underline',cursor:'pointer'}} onClick={() => display(object.id)}>View more</a>
      object.verification_status=object.isVerified? <VerifiedUserIcon style={{color:'green',fontSize:'25px'}}/>:<GppBadIcon style={{color:'red',fontSize:'25px'}}/>;
    });
    console.log(post)
    const data = {
    
      columns: [
        {
          label: 'ID',
          field: 'id',
          width: 150,
          sort: 'asc',
        },
        {
          label: 'First Name',
          field: 'firstName',
          width: 270,
        },
        {
          label: 'Last Name',
          field: 'lastName',
          width: 200,
        },
        {
          label: 'Email',
          field: 'email',
          
          width: 100,
        },
        {
          label: 'Designation',
          field: 'designation',
          
          width: 150,
        },
        
        {
          label: 'Verification status',
          field: 'verification_status',
          
          width: 150,
        },
        {
          label: 'Link',
          field: 'link',
          
          width: 150,
        },
        // {
        //   label: 'Salary',
        //   field: 'salary',
        //   sort: 'disabled',
        //   width: 100,
        // },
      ],
      rows:post
      
      
    }
    console.log(data)
    function refresh(){
      axios.get('http://192.168.2.74/employee/all').then((response) => {
            setPost(response.data);
        });
        axios.get(`http://192.168.2.74/employee/${currentEmp.id}`).then((response) => {
            setcurrentEmp(response.data);
        });
    }
  return (
    <div class='container'>
      <div class='card' id='emp-row-2'>
      {/* <div><Button onClick={refresh} variant="contained" startIcon={<RefreshIcon />}>Refresh</Button></div> */}
      <CDBContainer>
      <CDBCard>
        <CDBCardBody>
          <CDBDataTable
            id='customers'
            striped
            
            hover
            entriesOptions={[5]}
            entries={5}
            pagesAmount={4}
            data={data}
            
            materialSearch={true}
          />
        </CDBCardBody>
      </CDBCard>
    </CDBContainer>
      </div>
      {currentEmp?<div><div  id='emp-row-3'>
        <div id='parent_emp'>
          <div class='card' id='left-emp'>
            <div id='left-emp-top'>
              <FaRegUserCircle style={{ height: '80px', width: '80px', marginRight: '300px' }} />
            </div>
            <div id='left-emp-bottom'>
              <div id='left-emp-bottom-left'>
                <h5>First Name :</h5>
                <h5>Last Name :</h5>
                <h5>Email ID :</h5>
                <h5>Mobile :</h5>
                <h5>Address :</h5>
                <h5>Aadhar Number :</h5>
                <h5>Verification status :</h5>
              </div>
              <div id='left-emp-bottom-right'>
                
                <h5>{currentEmp.firstName}</h5>
                <h5>{currentEmp.lastName}</h5>
                <h5>{currentEmp.email}</h5>
                <h5>{currentEmp.phoneNumber}</h5>
                <h5>{currentEmp.address}</h5>
                <h5>{currentEmp.aadharNumber}</h5>
                {currentEmp.isVerified?<h5>Verified</h5>:<h5>Not Verified</h5>}
              </div>
            </div>
            <div id='button_div'>
              <div><button id='but_adhar' type="button" class="btn btn-primary" >View Adhar</button></div>
              <div><button id='but_verify' onClick={Verify} type="button" class={currentEmp.isVerified ? "btn btn-success" : "btn btn-danger"}>{currentEmp.isVerified ? "Verified" : "Verify"}</button></div>
              {/* <div><button  onClick={Delete} type="button" class="btn btn-outline-danger" >Delete</button></div> */}
              <div><Button id='but_adhar' onClick={Delete} style={{borderColor:'red',color:'red'}} variant="outlined" endIcon={<DeleteIcon />}>Delete</Button></div>
            </div>
          </div>
          <div class='container' id='right-emp'>
            <div class='card' id='right-emp-top'></div>
            <div class='card' id='right-emp-bottom'></div>
          </div>
        </div>
      </div></div>:null}
      
    </div>
    

  )
}

export default List