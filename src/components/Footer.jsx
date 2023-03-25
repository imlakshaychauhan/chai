import React from 'react'
import './footer.css'
import { Link } from 'react-router-dom'

const Footer = () => {
  return (
    <div id='contact' >
        <div className='f-contact' >
            <h2>Contact Us</h2>
            <p>Cannaught Place, New Delhi, India</p>
            <p>Email: lakshaychauhan030@gmail.com</p>
            <p>Phone: +91 8527-00-9510</p>
            <div className='f-form' >
                <input placeholder='Contact Email' />
                <input placeholder='Phone' />
                <input placeholder='Message' />
                <span>Submit</span>
            </div>
            <div className='f-hours' >
                <h2>Opening Hours</h2>
                <p>Monday - Friday 12am - 11pm</p>
                <p>Saturday 12am - 10pm</p>
                <p>Sunday 12am - 8pm</p>
            </div>
            <div className='copyrights'>
                    <span>
                        © 2023 by CHAI. Developed by Lakshay Chauhan
                    </span>
            </div>
        </div>
    </div>
  )
}

export default Footer