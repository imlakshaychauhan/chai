import React from 'react'
import { Link } from 'react-router-dom'
import './navbar.css'

const Navbar = () => {
  return (
    <div className='main-div'>
      <div className='first'>
      <Link to="/" style={{ textDecoration:"none" }} >
        <p>☕ From India with <span>Love</span> </p>
      </Link>
      <div className='links' >
        <Link className="nav-link" to="/" >
          <span>Home</span>
        </Link >
        <Link className="nav-link" to="/about" >
          <span>About</span>
        </Link >
        <Link className="nav-link" to="/menu" >
          <span>Menu</span>
        </Link>
        <Link className="nav-link" to="/online-ordering">
          <span>Online Ordering</span>
        </Link>
        <Link className="nav-link" to="/contact">
          <span>Contact</span>
        </Link>
      </div>
      </div>
      {/* <div className='second'>
        <p id="f" >Sign Up</p>
        <p id="s" >Log In</p>
        <img src="/down-logo.png" alt="ham" width="25" height="10" />
      </div> */}
    </div>
  )
}

export default Navbar