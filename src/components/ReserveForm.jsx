import React from 'react'
import './reserveform.css'
import res1 from '../images/restaurant.jpg'
import tandoor from '../images/tandoor.jpg'

const ReserveForm = () => {
  return (
    <>
      <div className='res-img-div' id="fir" >
        <img src={res1} alt="Restaurant" width="500" height="550" />
      </div>
      <div className='main-form' id="card1" >
          <span>Reserve a Table</span>
          <div className='name-input'>
            <p>Host Name</p>
            <input placeholder="Enter your name" />
          </div>
          <div className='guests-input'>
            <p>Party size (guests)</p>
            <input placeholder="No of guests" />
          </div>
          <button>Find a Table</button>
      </div>

      <div className='res-img-div' id='sec' >
        <img src={tandoor} alt="Restaurant" width="500" height="350" />
      </div>
      <div className='hindi-shayri'>
        <p>खुशी तब होती है जब आप  </p>
        <p> क्या सोचते हैं, आप क्या कहते </p>
        <p> हैं, और आप क्या करते हैं </p>
        <p> सद्भाव में हैं महात्मा गांधी</p>
      </div>

      <div className='main-form' id="last">
          <span>Our Story</span>
          <div className='name-input'>
            <p>We are the tea seller around the</p>
            <p>globe, started from India. Now we </p>
            <p>are expanded to 60+ countries and</p>
            <p>in the process of expanding more.</p>
            <p style={{ color: "#035F3C", fontSize: "25px"}} >सबसे अच्छा चाय वाले</p>
          </div>
          <button>Read More..</button>
      </div>
    </>
  )
}

export default ReserveForm