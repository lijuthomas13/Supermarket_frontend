import  axios  from "axios";
import React, { useState,useEffect } from "react";


export default function EditEmployee() {
const id=8;

const [data,setData]=useState([])
    // const url="http://192.168.2.74/employee/all";
    const edit_url = `http://192.168.2.74/employee/edit/${id}`;
    const url2=`http://192.168.2.74/employee/${id}`

    useEffect(() => {
        {axios.get(url2).then((response) => {
              setData(response.data)
              console.log(response.data)
              })}
          },[url2])

  const [state, setState] = useState({
    firstName: "",
    lastName: "",
    address:"",
    aadharNumber:"",
    designation:"",
    department:"",
    phoneNumber:"",
    email:""
  });

  const arr={firstName: "Liju",
  lastName: "",
  address:"",
  aadharNumber:"",
  designation:"",
  department:"",
  phoneNumber:"",
  email:""}

  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setState((prevProps) => ({
      ...prevProps,
      [name]: value
    }));
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    console.log(state);
    
  };

  return (
    <div className="App">
      <form onSubmit={handleSubmit}>
        <div className="form-control">
          <label>FirstName</label>
          <input
            type="text"
            name="firstName"
            
            defaultValue={data.firstName}
            onchange={(event)=>arr[firstName]=event.target.value}
          />
        </div>
        <div className="form-control">
          <label>LastName</label>
          <input
            type="text"
            name="lastName"
            value={state.lastName}
            onChange={handleInputChange}
          />
        </div>
        <div className="form-control">
          <label>Address</label>
          <textarea
            type="text"
            name="address"
            value={state.address}
            onChange={handleInputChange}
          />
        </div>
        <div className="form-control">
          <label>Aadhar Number</label>
          <input
            type="text"
            name="aadharNumber"
            value={state.aadharNumber}
            onChange={handleInputChange}
          />
        </div>
        <div className="form-control">
          <label>Department</label>
          <input
            type="text"
            name="department"
            value={state.department}
            onChange={handleInputChange}
          />
        </div>
        <div className="form-control">
          <label>Designation</label>
          <input
            type="text"
            name="designation"
            value={state.designation}
            onChange={handleInputChange}
          />
        </div>
        <div className="form-control">
          <label>Phone number</label>
          <input
            type="text"
            name="phoneNumber"
            value={state.phoneNumber}
            onChange={handleInputChange}
          />
        </div>
        <div className="form-control">
          <label>Email</label>
          <input
            type="email"
            name="email"
            value={state.email}
            onChange={handleInputChange}
          />
        </div>
        <div className="form-control">
          <label></label>
          <button type="submit">Save</button>
        </div>
      </form>
    </div>
  );
}