import React,{useState} from 'react';
import axios from 'axios';
import { RiUserUnfollowFill } from 'react-icons/ri';
function Notverified(props) {
    
    const [post, setPost] = useState([]);
    React.useEffect(() => {
        axios.get('http://192.168.2.74/employee/all').then((response) => {
            setPost(response.data);
        });
    }, []);
    const count=post.filter(obj=>{
        if(obj.isVerified){
            return false;
        }
        return true;
        
    }).length;
  return (
    <div class='container'>
          <div class='row-mt3' >
              <RiUserUnfollowFill id='logo'/>
          </div>
          <div class='row-mt3'>
              <h1>{count}</h1>
          </div>
          <div class='row-mt3'>
              <h6>Not verified Employees</h6>
          </div>
      </div>
  )
}

export default Notverified