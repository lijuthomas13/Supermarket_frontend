import React,{useState} from 'react'

import axios from 'axios';
function EditSalary(props) {
  const [Loan,setLoan]=useState("")
  const[bonus,setBonus]=useState("")
  const[Xmas,setXmas]=useState("")
  const[basic,setBasic]=useState("")
const id=props.data
   const salary={

      salaryComps: [
    
        {
    
          salaryCompId: 2,
    
          amount: Loan
    
        },
    
        {
    
          salaryCompId: 4,
    
          amount: bonus
    
        },
    
        {
    
          salaryCompId: 1,
    
          amount: Xmas
    
        },
    
        {
    
          salaryCompId: 5,
    
          amount: basic
    
        }
    
      ]}
    
      const handleSalary=()=>{
      
         
          
          axios.post(`http://192.168.2.74/Salary/ADD/${id}`, salary).then(res => console.log("posted", res.status)).catch(err => console.log(err.response?.status))
      }
    
return (
  <div>

    <div><h2>Add Salary</h2></div>
       <div className='div_form_salary'>
              <p>Salary Details</p>
              <form onSubmit={handleSalary}>
              <div className="form-outline">
                  <input type='text' name='Loan' id="Loan"  onChange={(e) => setLoan(e.target.value)} placeholder="Loan Amount"/>
              </div>

              <div className="form-outline">
                  <input type='text' name='Bonus' id="Bonus"  onChange={(e) => setBonus(e.target.value)} placeholder="Onam Bonus"/>
              </div>

              <div className="form-outline">
                  <input type='text' name='Xmas' id="Xmas"  onChange={(e) => setXmas(e.target.value)} placeholder="Xmas Bonus"/>
              </div>

              <div className="form-outline">
              <input type='text' name='Basic' id="Basic"  onChange={(e) => setBasic(e.target.value)} placeholder="Basic Pay"/>
              </div>
              
              <div>
                  <button type='submit'>Submit</button>
              </div>
              
              </form>
              
          </div>
  </div>)
}

export default EditSalary;
