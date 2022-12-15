import React from 'react'
import {Link} from 'react-router-dom';
import '../styles/Navbar.css';
import Logo from '../assets/Logo.png'
import { AiFillHome } from 'react-icons/ai';
function Navbar() {
  return (
    <div id='sidebar'>
      <div id='name'>

      </div>
      <div >
      <AiFillHome/>
      <Link className='icons' to={'/'}>Home</Link>
      </div>

    </div>
  )
}

export default Navbar