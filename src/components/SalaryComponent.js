import React from 'react'
import axios from 'axios'

function SalaryComponent() {
    const [Loan,setLoan]=useState("")
    const[bonus,setBonus]=useState("")
    const[Xmas,setXmas]=useState("")
    const[basic,setBasic]=useState("")

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
        // console.log(salary)
        const handleSalary=()=>{
        
           
            
            axios.post(`http://192.168.2.74/Salary/ADD/17`, salary).then(res => console.log("posted", res.status)).catch(err => console.log(err.response?.status))
        }
      
  return (
    <div>
         <div className='div_form_salary'>
                <h2>Salary Details</h2>
                <form onSubmit={handleSalary}>
                <div class="form-outline">
                    <input type='text' name='Loan' id="Loan"  onChange={(e) => setLoan(e.target.value)} placeholder="Loan Amount"/>
                </div>

                <div class="form-outline">
                    <input type='text' name='Bonus' id="Bonus"  onChange={(e) => setBonus(e.target.value)} placeholder="Onam Bonus"/>
                </div>

                <div class="form-outline">
                    <input type='text' name='Xmas' id="Xmas"  onChange={(e) => setXmas(e.target.value)} placeholder="Xmas Bonus"/>
                </div>

                <div class="form-outline">
                <input type='text' name='Basic' id="Basic"  onChange={(e) => setBasic(e.target.value)} placeholder="Basic Pay"/>
                </div>
                
                <div>
                    <button type='submit'>Submit</button>
                </div>
                
                </form>
                
            </div>
    </div>
  )
}

export default SalaryComponent