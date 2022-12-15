import React,{useEffect,useState} from 'react';
import { FaUsers } from 'react-icons/fa';
import axios from 'axios';
function TotalEmp(props) {

    const [post, setPost] = useState([]);
    React.useEffect(() => {
        axios.get('http://192.168.2.74/employee/all').then((response) => {
            setPost(response.data);
        });
    }, []);

    // const total=0;
    // if(props.data){
    //     total=props.data.length
    // }
    // console.log(props.data.length)
  return (
      <div class='container'>
          <div class='row-mt3'>
              <FaUsers  id='logo'/>
          </div>
          <div class='row-mt3'>
              <h1>{post.length}</h1>
          </div>
          <div class='row-mt3'>
              <h6>Total Employees</h6>
          </div>
      </div>
    
  )
}

export default TotalEmp