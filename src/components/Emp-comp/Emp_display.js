import React,{useState,useEffect} from 'react';
import axios from 'axios';
import '../../styles/Employee/List.css';
import {FaRegUserCircle} from 'react-icons/fa';
function Emp_display(props) {
    const id=props.emp;
    const [post, setPost] = useState({});
    React.useEffect(() => {
        axios.get(`http://192.168.2.74/employee/${props.emp}`).then((response) => {
            setPost(response.data);
            console.log(response.data )
            
        });
    }, {});

    // function Verify(){
    //     const payload=props.emp;
    //     axios.post(`http://192.168.2.74/Employee/Verify/${props.emp}` )
    //     .then(function (response) {
    //       console.log(response);
    //     })
    //     .catch(function (error) {
    //       console.log(error);
    //     });
    // }
    console.log(post)
  return (
    <div>
       dsdsd {props.emp}
    </div>
      // <div id='parent_emp'>
      //     <div class='card' id='left-emp'>
      //         <div id='left-emp-top'>
      //             <FaRegUserCircle style={{ height: '80px', width: '80px', marginRight: '300px' }} />
      //         </div>
      //         <div id='left-emp-bottom'>
      //             <div id='left-emp-bottom-left'>
      //                 <h5>First Name :</h5>
      //                 <h5>Last Name :</h5>
      //                 <h5>Email ID :</h5>
      //                 <h5>Mobile :</h5>
      //                 <h5>Address :</h5>
      //                 <h5>Aadhar Number :</h5>
      //             </div>
      //             <div id='left-emp-bottom-right'>
      //                 <h5>{post.firstName}</h5>
      //                 <h5>{post.lastName}</h5>
      //                 <h5>{post.email}</h5>
      //                 <h5>{post.phoneNumber}</h5>
      //                 <h5>{post.address}</h5>
      //                 <h5>{post.aadharNumber}</h5>
      //             </div>
      //         </div>
      //         <div id='button_div'>
      //           <div><button id='but_adhar' type="button" class="btn btn-primary" >View Adhar</button></div>
      //           <div><button id='but_verify' onClick={Verify} type="button" class={post.isVerified?"btn btn-success":"btn btn-danger"}>{props.emp.isVerified?"Verified":"Verify"}</button></div>
              
      //         </div>
      //     </div>
      //     <div class='container' id='right-emp'>
      //         <div class='card' id='right-emp-top'></div>
      //         <div class='card' id='right-emp-bottom'></div>
      //     </div>
      // </div>
  )
}

export default Emp_display