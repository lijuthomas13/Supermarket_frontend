import React,{useEffect,useState} from 'react';
import axios from 'axios';
import { PieChart, Pie, Sector, Cell } from "recharts";
function EmployeeRoles(props) {

  const [post, setPost] = useState([]);
  React.useEffect(() => {
      axios.get('http://192.168.2.74/employee/all').then((response) => {
          setPost(response.data);
      });
  }, []);
  const Employee_count = post.filter(obj => {
    if (obj.userType===1) {
      return true;
    }
    return false;

  }).length;

  const Hr_count = post.filter(obj => {
    if (obj.userType===2) {
      return true;
    }
    return false;

  }).length;

  const Manager_count = post.filter(obj => {
    if (obj.userType===3) {
      return true;
    }
    return false;

  }).length;


  const data = [
    { name: "Employee", value: Employee_count*100 },
    { name: "HR", value: Hr_count*100 },
    { name: "Manager", value: Manager_count*100 },
    
  ];
  const COLORS = ["#0088FE", "#00C49F", "#FFBB28", "#FF8042"];
  let renderLabel = function(entry) {
    return entry.name + entry.value/100;
  }
  return (
    <PieChart width={1000} height={400}>
    <Pie
      data={data}
      cx={250}
      cy={140}
      innerRadius={60}
      outerRadius={100}
      label={renderLabel}
      fill="#8884d8"
      paddingAngle={2}
      dataKey="value"
    >
      {data.map((entry, index) => (
        <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]}  />
      ))}
    </Pie>
    
  </PieChart>
  )
}

export default EmployeeRoles