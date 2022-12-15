import React ,{useState,useEffect}from 'react';
import axios from 'axios';
import { PieChart, Pie, Sector, Cell } from "recharts";
function WorkingFormat(props) {
  
  const [post, setPost] = useState([]);
  React.useEffect(() => {
      axios.get('http://192.168.2.74/employee/all').then((response) => {
          setPost(response.data);
      });
  }, []);
  const verified_count = post.filter(obj => {
    if (obj.isVerified ===true) {
      return true;
    }
    return false;

  }).length;

  const not_verified_count = post.filter(obj => {
    if (obj.isVerified === false) {
      return true;
    }
    return false;

  }).length;

  
  const data = [
    { name: "Verified", value: verified_count*100 },
    { name: "Not Verified", value: not_verified_count*100 },
    
    
  ];
  
  
  const COLORS = ["#0088FE", "#00C49F", "#FFBB28", "#FF8042"];
  let renderLabel = function(entry) {
    return entry.name + entry.value/100;
  }

  return (
    <PieChart width={600} height={300}>
    <Pie
      data={data}
      cx={230}
      cy={140}
      innerRadius={90}
      outerRadius={100}
      label={renderLabel}
      fill="#8884d8"
      paddingAngle={5}
      dataKey="value"
    >
      {data.map((entry, index) => (
        <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]}  />
      ))}
    </Pie>
    
  </PieChart>
  )
}

export default WorkingFormat