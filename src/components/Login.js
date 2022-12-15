import React from 'react'
import axios from 'axios';
import '../styles/Home.css';
import {useFormik} from "formik"
import * as Yup from 'yup'
import { useNavigate } from "react-router-dom";
import Box from '@mui/material/Box';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select, { SelectChangeEvent } from '@mui/material/Select';
function Login() {

  const navigate=useNavigate();
  const [user_type, setuser_type] = React.useState('');
  const handleUserChange = (event) => {
    setuser_type(event.target.value);
    
  };
  const formik=useFormik({
    initialValues:{
        email:"",
        password:"",
        type:''
    },
    validationSchema:Yup.object({
        email:Yup.string().max(30,'only 10 char').required('Required'),
        password:Yup.string().min(3,'Minimum 8 characters').required('Required'),
        
    }),
    onSubmit:(values)=>{
        // console.log(values);
        // navigate('/adminorg')
        console.log(values.type)
        const payload={userType: parseInt(values.type),
          password: values.password,
          userName: values.email}
          console.log(payload)
        axios.post('http://192.168.2.74/login', payload)
        .then(function (response) {
          console.log(response);
        })
        .catch(function (error) {
          console.log(error);
        });
    },

})
 console.log(formik.errors)

  return (
        <form onSubmit={formik.handleSubmit}>
      <div class="mb-3">
        <label for="exampleInputEmail1"  id='email_label' class="form-label">Email address</label>
        <input type="text" name='email' class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp"
        
        onChange={formik.handleChange}
        value={formik.values.email}/>
        {formik.touched.email&&formik.errors.email? <p className='error_msg'>{formik.errors.email}</p>:null}
        
      </div>
      <div class="mb-3">
        <label for="exampleInputPassword1"  id='pass_label' class="form-label">Password</label>
        <input type="password" name='password' class="form-control" id="exampleInputPassword1"
        onChange={formik.handleChange}
        value={formik.values.password}/>

      {formik.touched.password&&formik.errors.password? <p className='error_msg'>{formik.errors.password}</p>:null}
      </div>
      <div class='mb-3'>
      {/* <select onChange={formik.handleChange}  value={formik.values.type} name="type" id="type">
    <option value="1">Employee</option>
    <option value="2">HR</option>
    <option value="3">Manager</option>
    
  </select> */}
   <Box sx={{ minWidth: 120 }}>
      <FormControl fullWidth>
        <InputLabel id="demo-simple-select-label">Type</InputLabel>
        <Select
          labelId="demo-simple-select-label"
          id="type"
          name="type"
          value={formik.values.type}
          label="type"
          onChange={formik.handleChange}
        >
          <MenuItem value={1}>Employee</MenuItem>
          <MenuItem value={2}>HR</MenuItem>
          <MenuItem value={3}>Manager</MenuItem>
        </Select>
      </FormControl>
    </Box>
      </div>
      <div class='mb-3'>
        <button id='sub_but' type="submit" class="btn btn-primary">Submit</button>
      </div>

      <div class='mb-3'>
        <button id='res_but' type="reset" class="btn btn-outline-danger">Reset</button>
      </div>
      
      
    </form>
  )
}

export default Login