import * as React from 'react';
import IconButton from '@mui/material/IconButton';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import MoreVertIcon from '@mui/icons-material/MoreVert';
import axios from 'axios'
import { useNavigate, useParams } from 'react-router-dom';





const ITEM_HEIGHT = 48;

export default function LongMenu(props) {
 
 
  const [anchorEl, setAnchorEl] = React.useState(null);
  
  const open = Boolean(anchorEl);
  const HandleEdit=(id)=>{
    console.log(id,"etert")
    props.setId(id)
    props.setEdit(true)
   

  }
 



  const HandleDelete=(id)=>{
    console.log(id)
    axios.delete(`http://192.168.2.74/Employee/Delete/${id}` )

    .then(function (response) {
  
      console.log(response);
  
    })
  
    .catch(function (error) {
  
      console.log(error);
  
    });
    props.setData(props.data &&  props.data.filter((p)=>p.id!==id))
    
  }
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  

  };
 
  const handleClose = (eachemployee) => {
    HandleDelete(eachemployee)
    setAnchorEl(null);
  };

  return (
    <div>
      <IconButton
        aria-label="more"
        id="long-button"
        aria-controls={open ? 'long-menu' : undefined}
        aria-expanded={open ? 'true' : undefined}
        aria-haspopup="true"
        onClick={handleClick}
        
      >
        <MoreVertIcon />
      </IconButton>
      <Menu
        id="long-menu"
        MenuListProps={{
          'aria-labelledby': 'long-button',
        }}
        anchorEl={anchorEl}
        open={open}
        onClose={handleClose}
        PaperProps={{
          style: {
            maxHeight: ITEM_HEIGHT * 4.5,
            width: '20ch',
          },
        }}
      >
       
          <MenuItem onClick={()=>HandleEdit(props.eachemployee.id)}>Edit
           
          </MenuItem>
          <MenuItem  onClick={()=>handleClose(props.eachemployee.id) }>Delete
           
          </MenuItem>
          

      
      </Menu>
    </div>
  );
}