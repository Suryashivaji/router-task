import React from 'react'
import { Link } from 'react-router-dom'


function Navbar() {
return<>

<ul className="nav justify-content-center">


<hr className="sidebar-divider my-0"/>
  <li className="nav-item active">
      <Link to='/all' className="nav-link" href="index.html"  >
          <i className="fas fa-fw fa-tachometer-alt"></i>
          <span>ALL</span></Link>
  </li>
  <li className="nav-item active">
      <Link to='/fullstack' className="nav-link" href="index.html">
          <i className="fas fa-fw fa-tachometer-alt"></i>
          <span>FULL STACK DEVELOPEMENT</span></Link>
  </li>
  <li className="nav-item active">
      <Link to='/data' className="nav-link" href="index.html">
          <i className="fas fa-fw fa-tachometer-alt"></i>
          <span>DATA SCIENCE</span></Link>
  </li>
  <li className="nav-item active">
      <Link to='/cyber' className="nav-link" href="index.html">
          <i className="fas fa-fw fa-tachometer-alt"></i>
          <span>CYBER SECURITY</span></Link>
  </li>
  <li className="nav-item active">
      <Link to='/carrer' className="nav-link" href="index.html">
          <i className="fas fa-fw fa-tachometer-alt"></i>
          <span>CARRER</span></Link>
  </li>

</ul>
  
  </>
}

export default Navbar
