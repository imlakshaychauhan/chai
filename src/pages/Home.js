import React from 'react'
import './home.css'
import { Link } from 'react-router-dom'
import ReserveForm from '../components/ReserveForm'

const Home = () => {
  return (
    <>

      <div className='welcome-section'>
        <div className='menu-link'>
          <Link style={{ textDecoration: "none" }} to="/menu">
            <p>Our Menu</p>
            <span>हमारा मेनू</span>
          </Link>
        </div>
        <div className='main-heading'>
          <span>चाय</span>
          <h1>CHAI</h1>
        </div>
        <div className='order-link'>
          <Link style={{ textDecoration: "none" }} to="/online-ordering">
            <p>Order Online</p>
            <span>ऑनलाइन ऑर्डर</span>
          </Link>
        </div>
      </div>

      <div className='about-section'>
      <div className='menu-link'>
          <Link style={{ textDecoration: "none" }} to="/menu">
            <p>Our Menu</p>
            <span>हमारा मेनू</span>
          </Link>
        </div>
        <div className='second-heading'>
          <h1>The dream of Chai was born </h1>
          <h1> on a dusty road in <span style={{ color: "#F8D71C" }} >India.</span></h1>
          <h1>Three years and hundreds of </h1>
          <h1>recipes later, we opened our  </h1>
          <h1> doors in San Francisco.</h1>
        </div>
        <div className='order-link'>
          <Link style={{ textDecoration: "none" }} to="/online-ordering">
            <p>Order Online</p>
            <span>ऑनलाइन ऑर्डर</span>
          </Link>
        </div>
      </div>
      <ReserveForm />
    </>
  )
}

export default Home