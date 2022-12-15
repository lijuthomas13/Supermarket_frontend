import React from 'react'

function Signup() {
  return (
    <form>
       <div class="row mb-3">
        <div className='col-sm'>
            <label for="exampleInputEmail1" id='email_label'class="form-label">First Name</label>
            <input type="text" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp"/>
        </div>
        <div className='col-sm'>
            <label for="exampleInputEmail1" id='email_label'class="form-label">Last Name</label>
            <input type="text" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp"/>
        </div>
      </div> 

      <div class="mb-3">
        <label for="exampleInputEmail1" id='email_label'class="form-label">Email address</label>
        <input type="email" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp"/>
        
      </div>
      <div class="mb-3">
        <label for="exampleInputPassword1" id='pass_label' class="form-label">Password</label>
        <input type="password" class="form-control" id="exampleInputPassword1"/>
      </div>
      <div class='mb-3'>
        <button id='sub_but' type="submit" class="btn btn-primary">Sign Up</button>
      </div>

      <div class='mb-3'>
        <button id='res_but' type="reset" class="btn btn-outline-danger">Reset</button>
      </div>
      
      
    </form>
  )
}

export default Signup