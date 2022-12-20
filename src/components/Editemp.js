import React, { useState ,useEffect} from 'react'
import axios from 'axios'

const EditEmployee = ({id,setEdit}) => {
  const [data,setData]=useState([])
  const url=`http://192.168.2.74/employee/${id}`;

  useEffect(() => {
    const getData=async()=>{

      const {data:res}=await axios.get(url)
      setData(res)
      console.log(res)
    }

      getData();
      
      
  }, [])
  

  // handle on change according to input name and setState
  const handleChange = (e) => {
    setData({ ...data, [e.target.name]: e.target.value });
  };
  
  const handleSubmit = (e) => {
    e.preventDefault()
    console.log(data)
    axios.put(`http://192.168.2.74/employee/edit/${id}`,data).then(()=>{setEdit(false)})
    
    // take data to submit
  };
  return (
    <div>
    <div className='div_main'>
    <div className='head'><h2>Edit Employee</h2></div>
    <div className='div_form'>
    <form onSubmit={handleSubmit}>
    <div className='form_head'>Employee Details</div>
    <div className='add_form'>
        <div class="form-outline">
        <input
            type="text"
            name="firstName"
            value={data.firstName}    // inject state correspond to input and so on
            onChange={handleChange}
            />
        </div>
       
        <br />
        <div class="form-outline">
        <input
          type="text"
          name="lastName"
          value={data.lastName}    // inject state correspond to input and so on
          onChange={handleChange}
        />
        </div>
       
        <br />
        <div class="form-outline">
        <textarea
          type="text"
          name="address"
          value={data.address}    // inject state correspond to input and so on
          onChange={handleChange}
        />
        </div>
       
        <br />
        <div class="form-outline">
        <input
          type="text"
          name="department"
          value={data.department}    // inject state correspond to input and so on
          onChange={handleChange}
        />
        </div>
       
        <br />
        <div class="form-outline">
        <input
          type="text"
          name="designation"
          value={data.designation}    // inject state correspond to input and so on
          onChange={handleChange}
        />
        </div>
       
        <br />
        <div class="form-outline">
        <input
          type="text"
          name="email"
          value={data.email}
          onChange={handleChange}
        />
        </div>
       
        <br />
        <div class="form-outline">
        <input
          type="text"
          name="phoneNumber"
          value={data.phoneNumber}
          onChange={handleChange}
        />
        </div>
      
        <br />
    
        <button type="submit">
          Submit
        </button>
    </div>
        
      </form>
    </div>
    
    </div>
      
    </div>
  );
}

export default EditEmployee