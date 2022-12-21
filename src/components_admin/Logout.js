import { List } from '@mui/material';
import React from 'react';
import { useNavigate } from "react-router-dom";
import Button from '@mui/material/Button';
import "bootstrap/dist/css/bootstrap.min.css";
import LogoutIcon from '@mui/icons-material/Logout';
function Logout() {
    const navigate=useNavigate();
    function yes(){
        navigate('/')
    }
    function no(){
        navigate('/adminorg')
    }
  return (
    <div class='container' style={{alignItems:'center',justifyContent:'center',textAlign: 'center'}}>
        <h1 style={{textAlign: 'center'}}>Do you want to logout?</h1>
        
        <Button variant="contained" onClick={yes} style={{backgroundColor:'red'}} endIcon={<LogoutIcon />}>
          Log Out
        </Button>
        <List/>
    </div>
    
  )
}

export default Logout