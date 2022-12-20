import React from 'react'
import '../styles/AddEmployee.css'
import icons from '../Assets/icons.svg'
import Avatar from '@mui/material/Avatar';
import {useState} from 'react';
import {storage} from './firebase';
import 'firebase/storage';
import {ref, uploadBytes,getDownloadURL} from 'firebase/storage';

import {  useFormik } from 'formik'
import * as Yup from "yup";
import { FaFileUpload } from 'react-icons/fa'
import axios from 'axios';
import UploadFileIcon from '@mui/icons-material/UploadFile';
import Button from '@mui/material/Button';
import AttachFileIcon from '@mui/icons-material/AttachFile';



function AddEmployee({setShow , data , setData}) {

    

   
    
    const [imageUpload, setImageUpload] = useState(null)
    const [downurl, seturl] = useState(null)

    
    const uploadimage=()=>{ 
        if (imageUpload == null) return;
        
        
        //uploadBytes(imageref, imageUpload).then(() => alert('image uploaded'))
        const storageRef = ref(storage, `images/${imageUpload.name}`);
        uploadBytes(storageRef, imageUpload).then((snapshot) => {
          alert('image uploaded')
          console.log('uploaded');
          getDownloadURL(snapshot.ref).then(url => seturl(url));
        });
    
      }

      const [Aadharupload, setAadharUpload] = useState(null)
      const [AadharUrl, setAadharUrl] = useState(null)
  
      
      const uploadAadhar=()=>{ 
        
          if (Aadharupload == null) return;
          
          
          //uploadBytes(imageref, imageUpload).then(() => alert('image uploaded'))
          const storageRef = ref(storage, `images/${Aadharupload.name}`);
          uploadBytes(storageRef, Aadharupload).then((snapshot) => {
            alert('Aadhar uploaded')
            console.log('AADHAR uploaded');
            getDownloadURL(snapshot.ref).then(url => setAadharUrl(url));
            
          });
      
        }

       
   
   
    
    const add_url = "http://192.168.2.74/employee/add";
    const formik = useFormik({
        initialValues: {
            FirstName: "",
            LastName: "",
            Email: "",
            PhoneNumber: "",
            Address: "",
            Designation: "",
            Department: "",
            AadharNumber: "",
            AadharDocument: null,
            UserType:'',
            // created_at:""
            profilePhoto:null
        },
        validationSchema: Yup.object({
            FirstName: Yup.string().max(15, "must be 15 characters or less").required("Required"),
            LastName: Yup.string().max(15, "must be 15 characters or less").required("Required"),
            Address: Yup.string().max(50, 'must be 50 characters or less').required('Required'),
            AadharNumber: Yup.string().min(12, 'must be 12 numbers').max(12, 'must be 12 numbers').required("Required"),
            PhoneNumber: Yup.string().min(10, 'must be 10 digits').max(10, 'must be 10 digits').required("Required"),
            Email: Yup.string().max(30, 'must be 30 characters or less').required("Required"),
            Designation: Yup.string().required("Required"),
            // file:Yup.mixed().required("you need to provide a file").test("FILE_SIZE","file size is too large",(value)=>value && value.size< 1024*1024)
            // .test("FILE_TYPE","Invalid format",(value)=>value && ['image/jpeg','image/png'].includes(value.type))
        }),
        onSubmit: (values) => {
            console.log(downurl)
            
             const payload={firstName:values.FirstName
                        ,lastName:values.LastName,
                        address:values.Address,
                        aadharNumber:values.AadharNumber,
                        aadharDocument:AadharUrl,
                        department:values.Department,
                        designation:values.Designation,
                        phoneNumber:values.PhoneNumber,
                        email:values.Email,
                        UserType:parseInt(values.UserType),
                        profilePic:downurl
                        
            }
          
            console.log(payload)
            axios.post(add_url, payload).then(res => console.log("posted", res.status)).catch(err => console.log(err.response?.status))
            setShow(false)
            setData(data.length !== 0 ? [...data, payload] : data);

           
           

        }

    })
    return (
        <div className='div_main'>
            <div className='path'>
                <p><a href='/Employees' style={{ textDecoration: "none", color: "#000000" }}>Employees</a> <a href='/AddEmployee' style={{ textDecoration: "none", color: "#000000" }}>Add New Employees</a></p>
            </div>
            <div className='head'><h2>Add Employee</h2></div>

            <div className='div_form'>
                <form onSubmit={formik.handleSubmit}>
                    <div className='form_head'>Employee Details</div>



                    <div className='profile_pic'>
                        <div >
                            {downurl ? <Avatar alt="Travis Howard" src={downurl} /> : <img src={icons} style={{ width: "80px" }} />}
                        </div>
                        <div ><h5>Profile</h5></div>
                        <div className='upload_option'>
                            <input type="file" name="file" id="file" class="myclass1" onChange={(event) => { setImageUpload(event.target.files[0]) }} value={formik.values.file} onBlur={formik.handleBlur}></input>

                            <label for="file"><AttachFileIcon />Select Photo</label>

                        </div>
                        {imageUpload ? <Button style={{ width: '220px' }} variant="contained" onClick={uploadimage}>Upload <UploadFileIcon /></Button> : null}


                    </div>



                    <div className='add_form'>


                        <div class="form-outline">
                            <input type="text" id="FirstName" class="form" placeholder='First Name' onChange={formik.handleChange} value={formik.values.FirstName} onBlur={formik.handleBlur} />
                            {formik.touched.FirstName && formik.errors.FirstName ? <p className='error'>{formik.errors.FirstName}</p> : null}
                        </div>




                        <div class="form-outline">
                            <input type="text" id="LastName" class="form" placeholder='Last Name' onChange={formik.handleChange} value={formik.values.LastName} onBlur={formik.handleBlur} />
                            {formik.touched.LastName && formik.errors.LastName ? <p className='error'>{formik.errors.LastName}</p> : null}
                        </div>

                        <div class="form-outline">
                            <input type="email" id="Email" class="form" placeholder='Email Address' onChange={formik.handleChange} value={formik.values.Email} onBlur={formik.handleBlur} />
                            {formik.touched.Email && formik.errors.Email ? <p className='error'>{formik.errors.Email}</p> : null}
                        </div>

                        <div class="form-outline">
                            <input type="text" id="AadharNumber" class="form" placeholder='Aadhar Number' onChange={formik.handleChange} value={formik.values.AadharNumber} onBlur={formik.handleBlur} />
                            {formik.touched.AadharNumber && formik.errors.AadharNumber ? <p className='error'>{formik.errors.AadharNumber}</p> : null}
                        </div>

                        {/* <div class="col-md-6 mb-4">
                                <div class="form-outline">
                                    <input type="file" name="file" id="file" class="myclass2" onChange={formik.handleChange} value={formik.values.file} onBlur={formik.handleBlur} />
                                    <label for="file"><div className='label'><FaFileUpload />Upload Photo</div></label>
                                    {formik.errors.file ? <p className='error'>{formik.errors.file}</p> : null}
                                </div>
                            </div> */}

                        {/* <div class="form-outline">
                                    <input type="text" id="AadharDocument" class="form" placeholder='Aadhar Document' onChange={formik.handleChange} value={formik.values.AadharDocument} onBlur={formik.handleBlur} />
                                    {formik.touched.AadharDocument && formik.errors.AadharDocument ? <p className='error'>{formik.errors.AadharDocument}</p> : null}
                                </div> */}

                        <div>
                            <input type='file' onChange={(event) => { setAadharUpload(event.target.files[0]) }}></input>
                            {/* <Button variant="contained" type='button' onClick={uploadAadhar}>upload adhar</Button> */}
                            {Aadharupload ? <Button variant="contained" type='button' onClick={uploadAadhar}>upload adhar</Button> : null}
                        </div>



                        <div class="form-outline">
                            <input type="text" id="Designation" class="form" placeholder='Designation' onChange={formik.handleChange} value={formik.values.Designation} onBlur={formik.handleBlur} />
                            {formik.touched.Designation && formik.errors.Designation ? <p className='error'>{formik.errors.Designation}</p> : null}
                        </div>






                        <div class="form-outline">
                            <input type="tel" id="PhoneNumber" class="form" placeholder='Mobile Number' onChange={formik.handleChange} value={formik.values.PhoneNumber} onBlur={formik.handleBlur} />
                            {formik.touched.PhoneNumber && formik.errors.PhoneNumber ? <p className='error'>{formik.errors.PhoneNumber}</p> : null}
                        </div>


                        {/* <div class="form-outline datepicker w-100">
                                    <input type="date" class="form" id="OnboardingDate" placeholder='Onboarding Date' />
                                </div> */}







                        <div class="form-outline" >
                            <select class="dept_options" id="Department" onChange={formik.handleChange} value={formik.values.Department} onBlur={formik.handleBlur}>
                                <option value="Department" >Department</option>
                                <option value="Finance">Finance</option>
                                <option value="Sales">Sales</option>
                                <option value="Manager">Manager</option>
                            </select>
                        </div>

                        <div class="col-md-6 mb-4 ">

                            <select className="options_add" id="UserType" onChange={formik.handleChange} value={formik.values.UserType} onBlur={formik.handleBlur}>

                                <option value="">User type</option>

                                <option value="1">Employee</option>

                                <option value="2">Human Resource</option>

                                <option value="3">Administrator</option>

                            </select>

                            {/* {formik.touched.user_type&&formik.errors.user_type?<p className='error'>{formik.errors.user_type}</p>:null} */}

                        </div>
                        <div class="textArea">
                            <textarea style={{ width: "300px" }} rows="6" column=
                                "10" type="text" id="Address" class="form-control" placeholder='Address' onChange={formik.handleChange} value={formik.values.Address} onBlur={formik.handleBlur} />
                            {formik.touched.Address && formik.errors.Address ? <p className='error'>{formik.errors.Address}</p> : null}
                        </div>

                        <div class="button_div">
                            <button class="save" type="submit">Save</button>
                            <button class="cancel" type="button" onClick={() => setShow(false)}>Cancel</button>
                        </div>
                    </div>
                </form>
            </div>
           
        </div>
    )
}

export default AddEmployee

//[{"componentId":2,"componentName":"Loan","componentType":2,"description":"House Loan"},{"componentId":4,"componentName":"Basic","componentType":1,"description":"Basic Pay"},
//{"componentId":1,"componentName":"bonus","componentType":1,"description":"onam"},{"componentId":5,"componentName":"Xmas","componentType":1,"description":"Happy Xmas"}]