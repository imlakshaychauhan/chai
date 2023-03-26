import React from 'react'
import { Link } from 'react-router-dom'
import './about.css'
import chaiphoto from '../images/chai.jpg'
import res from '../images/restaurant-3.jpg'

const About = () => {
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
          <span>हमारा विषय</span>
          <h1>About Us</h1>
        </div>
        <div className='order-link'>
          <Link style={{ textDecoration: "none" }} to="/online-ordering">
            <p>Order Online</p>
            <span>ऑनलाइन ऑर्डर</span>
          </Link>
        </div>
      </div>
      <div className='ab-div'>
        <div className='img-div'>
          <img src={chaiphoto} alt="Restaurant" width="500" height="400" />
        </div>
        <div className='main-c'>
            <span>Our Story</span>
            <div className='name-input'>
              <p>We are the tea seller around the</p>
              <p>globe, started from India. Now we </p>
              <p>are expanded to 60+ countries and</p>
              <p>in the process of expanding more.</p>
              <p style={{ color: "#035F3C", fontSize: "25px"}} >सबसे अच्छा चाय वाले</p>
            </div>
            <button id="r-more">Read More..</button>
        </div>
        <div className='c-img'>
          <img src={res} alt="Restaurant" width="700" height="500" />
        </div>
      </div>
    </>
  )
}

export default About