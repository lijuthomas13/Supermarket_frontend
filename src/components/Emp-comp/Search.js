import React,{useState,useEffect} from 'react'
import '../../styles/Employees.css';
import { CDBDataTable } from 'cdbreact';
import DataTable from './List';
import axios from 'axios';
import List from './List';
import { MDBCol } from "mdbreact";
import DateRangePicker from '@wojtekmaj/react-daterange-picker/dist/entry.nostyle';
import Emp_details from './Emp_details';
import {Link} from 'react-router-dom';
import Payroll from '../Table';

function Search() {

    const [post, setPost] = useState([]);
    React.useEffect(() => {
        axios.get('http://192.168.2.74/employee/all').then((response) => {
            setPost(response.data);
        });
    }, []);


  //   setInterval(function(){ 
  //     axios.get('http://192.168.2.74/employee/all').then(response => setPost(response.data));
  //  }, 1000);

    const [value, onChange] = useState([new Date(), new Date()]);

  return (
    <div class='container'>
      <div class='row mt-3'>
        <div class='card' id='emp-row-2'>
          <div class='container'>
            <div class='row'>
              <div class="col-sm">
                <MDBCol >
                  <input className="form-control" type="text" placeholder="Search" aria-label="Search" />
                </MDBCol>
              </div>
              <div class='col-sm'>
                <select class="form-select" aria-label="Default select example">
                  <option selected>Open this select menu</option>
                  <option value="1">Engineer</option>
                  <option value="2">HR</option>
                  <option value="3">Managers</option>
                </select>
              </div>
              <div class='col-sm'>
                <DateRangePicker id='calendar' onChange={onChange} value={value} />
              </div>
            </div>
            <div class='row mt-3'>
                <Payroll/>
            </div>
            
          </div>
        </div>
      </div>
        <div class='row mt-3'>
        
        {/* <div class='card' id='emp-row-3'>
              <table id='customers'>
                <tr>
                  <th>Employee ID</th>
                  <th>Employee name</th>
                  <th>Email-id</th>
                  <th>Designation</th>
                  <th>Status</th>
                  <th></th>
                </tr>
                {post.map((element, key) => {
                  return <tr>
                    <td>{element.id}</td>
                    <td>{element.firstName}</td>
                    <td>{element.email}</td>
                    <td>{element.designation}</td>
                    {element.isVerified?<td>Verified</td>:<td>Not verified</td>}
                    <td><Link to={`/emp_page`} state={{ id: element.id}}>Next Step</Link></td>
                    </tr>
                })}
              </table>
            </div> */}
        </div>
    </div>
  )
}

export default Search