import React from 'react'
import { NavLink } from "react-router-dom";
import '../styles/sidebar.css'
import { MdOutlineDashboard } from "react-icons/md";
import { RiMoneyDollarCircleLine } from "react-icons/ri";
import { FaUsers } from "react-icons/fa";
import { RiLogoutCircleLine } from "react-icons/ri";
import icon from "../Assets/usericon.svg"
import Avatar from '@mui/material/Avatar';


const Sidebar = ({ details }) => {
    return (
        <div className='Sidebar'>
            <div>

            </div>
            <div className='users'>
                <div >
                    <Avatar style={{ width: '60px', height: '60px' }} src={details.profilePic} />

                </div>
                <div className='details'>

                    <h4>{details.firstName}</h4>
                    <p>{details.designation}</p>
                </div>

            </div>
            <div className='dashboard'>
                <NavLink className="link" to={`/dashboard/${details.id}`} style={({ isActive }) => { return { color: isActive ? "yellow" : "#E5EAFF" } }}><span><MdOutlineDashboard /></span>Dashboard</NavLink>

            </div>
            <div className='payroll'>
                <NavLink className="link" to={`/payroll/${details.id}`} style={({ isActive }) => { return { color: isActive ? "yellow" : "#E5EAFF" } }}><span><RiMoneyDollarCircleLine /></span>Payroll</NavLink>



            </div>
            <div className='employees'>
                <NavLink className="link" to={`/employees/${details.id}`} style={({ isActive }) => { return { color: isActive ? "yellow" : "#E5EAFF" } }}><span><FaUsers /></span>Employees</NavLink>



            </div>
            <div className='logout'>
                <NavLink className="link" to="/" style={({ isActive }) => { return { color: isActive ? "yellow" : "#E5EAFF" } }}><span><RiLogoutCircleLine /></span>Logout</NavLink>



            </div>
            {/* <div className='dashboard'>
            <Link className="link" to={`/dashboard/${details.id}`}><span><MdOutlineDashboard /></span>Dashboard</Link>
            
        </div>
        <div className='payroll'>  
            <Link  className="link" to={`/payroll/${details.id}`}><span><RiMoneyDollarCircleLine/></span>Payroll</Link>

        </div>
        <div className='employees'>
            <Link className="link" to={`/employees/${details.id}`}><span><FaUsers/></span>Employees</Link>

        </div>
        <div className='logout'>
            <Link className="link" to="/"><span><RiLogoutCircleLine/></span>Logout</Link>

        </div> */}
        </div>
    )
}

export default Sidebar