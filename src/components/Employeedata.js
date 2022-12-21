import React from 'react';

import EachEmployee from './EachEmployee'

const Employeedata = ({ data ,setData ,searchItem,option,setEdit,setId}) => {
  
  return (
    <>
    <ul className='grid'>
      {data.length !==0 && data.filter((item) => {

if (searchItem === '' && option === '') {

  return item;

}

else if (

  item.firstName.toLowerCase().includes(searchItem.toLocaleLowerCase()) && option=="") {

  return item;

}
else if (

  item.firstName.toLowerCase().includes(searchItem.toLocaleLowerCase()) && option=="All Employees") {

  return item;

}

else if(searchItem === '' && option == item.department){

  return item;

}

else if(item.firstName.toLowerCase().includes(searchItem.toLocaleLowerCase()) && option == item.department){

  return item

}


}).map((employee,index) => (<EachEmployee  key={index} firstname={employee?.firstName} lastName={employee?.lastName} designation={employee?.designation} email={employee?.email} phoneNumber={employee?.phoneNumber} department={employee?.department} verification={employee.isVerified} eachemployee={employee} id={employee.id} data={data} setData={setData} setEdit={setEdit} setId={setId}/>))}

    </ul>





</>
    



   




  )
}

export default Employeedata