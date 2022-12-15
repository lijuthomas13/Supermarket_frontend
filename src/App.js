
import './App.css';
import {BrowserRouter as Router,Routes,Route} from "react-router-dom";
import Dashboard from './Pages/Dashboard';
import Login from './Pages/Login';
import Payroll from './Pages/Payroll';

import Employees from './Pages/Employees'

import Sidebar from './components/Sidebar';
import EditEmployee from './Pages/EditEmployee';
import Error from './Pages/Error';
import EmployeePage from './Pages/EmployeePage';
import Adminorg from './Pages/Adminorg';
import Salaryslip from './components/Salaryslip';
function App() {
  return (
    <div className="App">
      
      <Router>
        
        {/* <Sidebar/> */}
        
      <div >
        <Routes>
            <Route path='/' element={<Login/>}/>
            <Route path='/dashboard' element={<Dashboard/>}/>
            <Route path='/employees' element={<Employees/>}/>
            <Route path='/payroll' element={<Payroll/>}/>
            <Route path='/employees/:id' element={<EditEmployee/>}/>
            <Route path='/employeePage' element={<EmployeePage/>}/>
            <Route path='/admin' element={<Adminorg/>}/>
            <Route path='/error' element={<Error/>}/>
            <Route path="*" element={<Error/>} />
            <Route path="salary" element={<Salaryslip/>} />
        
          </Routes>
      </div>
        
       
       


      </Router>

      
    </div>
  );
}

export default App;
