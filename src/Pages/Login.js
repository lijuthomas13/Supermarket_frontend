import React, { useState } from 'react';
import { useLocation } from 'react-router-dom';
import '../styles/login.css';
import Button from '@mui/material/Button';
import LoginIcon from '@mui/icons-material/Login';
import icon from '../Assets/icons.svg';
import { useFormik } from 'formik';
import * as Yup from "yup";
import cover_image from '../Assets/Cover_image.svg';

import axios from 'axios';
import { useNavigate } from 'react-router-dom';
function Login() {
  const [wrongDetails,setWrongDetails]=useState(false)
  const location = useLocation();
  const navigate = useNavigate()
  const login_url="http://192.168.2.74/login";
  function check_credentials(err){
    if(err.response.status==401){
      setWrongDetails(true)
    }
  }
  const formik = useFormik({
    initialValues: {
      user_name: "",
      password: "",
      user_type: ""
    },
    // validationSchema: Yup.object({
    //   user_name: Yup.string().max(15, "must be 15 characters or less").required("Required"),
    //   password: Yup.string().max(8, "must be 8 characters or less ").required("Required"),
    //   user_type:Yup.string().required("Select User type")
    // }),
    onSubmit: (values) => {
      
      values.user_type=parseInt(values.user_type)
      console.log(values)
      const payload={userType: parseInt(values.user_type),

        password: values.password,

        userName: values.user_name}
      // navigate("/employee")
      // axios.post(login_url,payload).then(res=>navigate('/employee',{state:{id:res.data}})).catch(err => console.log(err.response?.status))
      axios.post(login_url,payload).then(res=>{
        
        
        if(payload.userType===1){
          navigate(`/employeePage/${res.data}`,{state:{id:res.data}})
        }
        else if(payload.userType===2 && res.status===200){
          navigate(`/dashboard/${res.data}`,{state:{id:res.data}})
        }
        else if(payload.userType===3 && res.status===200){
          console.log(res.data)
          navigate(`/admin/${res.data}`,{state:{id:res.data}})
        }
    }
      ).catch(err => check_credentials(err))
    }
  })
  return (
    <div className='login_container'>
      <div className='div_left'>
      <div id='inside_div_image'><img src={cover_image}></img></div>
        
      </div>
      <div className='div_right'>
        <div className='div_login'>
          <div className='icon_login'>
            
            <img id='cover_image' style={{ width: "150px" }} src={icon} />
          </div>

          <div className='input_div'>
            <form onSubmit={formik.handleSubmit}>
              <div className="form-outline mb-4 ">
                <input type="text" id="user_name" className="form-control bg-light text-dark "
                  placeholder="Username" onChange={formik.handleChange} onBlur={formik.handleBlur} value={formik.values.user_name} />
                {formik.touched.user_name && formik.errors.user_name ? <p className='error'>{formik.errors.user_name}</p> : null}
              </div>
              <div className="form-outline mb-4 ">
                <input type="password" id="password" className="form-control bg-light text-dark "
                  placeholder="Password" onChange={formik.handleChange} onBlur={formik.handleBlur} value={formik.values.password} />
                {formik.touched.password && formik.errors.password ? <p className='error'>{formik.errors.password}</p> : null}
              </div>
              <div className="form-outline mb-4 ">
                <select className="options" id="user_type" onChange={formik.handleChange} value={formik.values.user_type} onBlur={formik.handleBlur}>
                  <option value="">User type</option>
                  <option value="1">Employee</option>
                  <option value="2">Human Resource</option>
                  <option value="3">Administrator</option>
                </select>
                {formik.touched.user_type&&formik.errors.user_type?<p className='error'>{formik.errors.user_type}</p>:null}
              </div>
              {wrongDetails?<p style={{textAlign:'center',color:'red'}}>Invalid Credentials</p>:null}
              <div className="form-outline mb-4 ">
                <Button id="login_btn" type="submit" variant="contained" endIcon={<LoginIcon />}>Login</Button>
              </div>
            </form>
          </div>



        </div>
      </div>
    </div>
  )
}

export default Login