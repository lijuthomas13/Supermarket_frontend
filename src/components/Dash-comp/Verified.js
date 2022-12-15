import React ,{useState}from 'react';
import axios from 'axios';
import '../../styles/Dashboard/firstrow.css'
// import { RiUserUnfollowFill } from 'react-icons/ri';
import {ImUserCheck} from 'react-icons/im';
function Verified() {

    
    const [post, setPost] = useState([]);
    React.useEffect(() => {
        axios.get('http://192.168.2.74/employee/all').then((response) => {
            setPost(response.data);
        });
    }, []);
    const count=post.filter(obj=>{
        if(obj.isVerified){
            return true;
        }
        return false;
        
    }).length;
  return (
    <div class='container'>
          <div class='row-mt3' >
              <ImUserCheck id='logo'/>
          </div>
          <div class='row-mt3'>
              <h1>{count}</h1>
          </div>
          <div class='row-mt3'>
              <h6>Total verified Employees</h6>
          </div>
      </div>
  )
}

export default Verified