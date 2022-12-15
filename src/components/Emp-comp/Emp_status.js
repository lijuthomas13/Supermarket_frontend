import React,{useState,useEffect} from 'react';
import axios from 'axios';
import { PieChart, Pie, Sector, Cell } from "recharts";
import '../../styles/Employee/Emp_details.css'
function Emp_status(props) {

  const [post, setPost] = useState([]);
  React.useEffect(() => {
      axios.get('http://192.168.2.74/employee/all').then((response) => {
          setPost(response.data);
      });
  }, [post]);

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

    const COLORS = ["#379237", "red"];
    let renderLabel = function(entry) {
        return entry.name + entry.value/100;
      }
    
  return (
    <div id='emp_parent'>
        <div id='emp_leftchild'>
        <h1>{post.length}</h1>
        <p>Employees</p>
        </div>
        <div id='emp_rightchild'>
              <PieChart width={380} height={100}>
                  <Pie
                      data={data}
                      cx={160}
                      cy={90}
                      startAngle={180}
                      endAngle={0}
                      innerRadius={40}
                      outerRadius={60}
                      label={renderLabel}
                      fill="#8884d8"
                      paddingAngle={2}
                      dataKey="value"
                  >
                      {data.map((entry, index) => (
                          <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
                      ))}
                  </Pie>

              </PieChart>
        </div>
    </div>

  )
}

export default Emp_status