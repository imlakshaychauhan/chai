import React from 'react'
import { Link } from 'react-router-dom'
import './onlineordering.css'

const OnlineOrdering = () => {
  return (
    <>
      <div className='cart-bt' >
        <span>View Cart </span>
        <img src="/shopping-cart.png" width="25" height="25" />
        <span>4</span>
      </div>


      <div className='welcome-section'>
      <div className='menu-link'>
        <Link style={{ textDecoration: "none" }} to="/menu">
          <p>Our Menu</p>
          <span>हमारा मेनू</span>
        </Link>
      </div>
      <div className='main-heading'>
        <span>ऑनलाइन ऑर्डर</span>
        <h1>ORDERS</h1>
      </div>
      <div className='order-link'>
        <Link style={{ textDecoration: "none" }} to="/about">
          <p>About</p>
          <span>हमारा विषय</span>
        </Link>
      </div>
      </div>


      <div className='Menu-div' >
        <h1>Menu</h1>
        <div className='s-dish' >
          <h3>Side Dishes</h3>
          <div className='cars'>
            <div className='car'>
              <h3>Samosas</h3>
              <p>Fried South Asian pastry with a savoury filling, including ingredients such as spiced potatoes, onions, and peas. </p>
              <p>₹11</p>
            </div>
            <div className="car"> 
              <h3>Vegetable Pakora</h3>
              <p>Pakora are deep fried fritters that feature gram flour a.k.a besan and vegetables.</p>
              <p>₹26</p>
            </div>
          </div>
          <div className='cars' > 
            <div className="car"> 
              <h3>Cucumber Raita</h3>
              <p>Cucumber Raita is a variation of raita that can be used as a dip or a salad.</p>
              <p>₹19</p>
            </div>
            <div className="car"> 
              <h3>Kadhi Pakora</h3>
              <p>Deep fried fritters (pakora) are dunked in a yogurt based curry made with besan (gram flour) and spices!</p>
              <p>₹49</p>
            </div>
          </div>
          <div className="cars">
          <div className="car"> 
            <h3>Plain Rice</h3>
            <p>Rice can be very plain or very colorful. Rice is easy to cook and can be served as a side dish or a main dish. Plain rice is served with lentils, dal, or a gravy-based dish.</p>
            <p>₹59</p>
          </div>
          <div className="car"> 
            <h3>Garlic Naan</h3>
            <p>Garlic Naan bread is light, soft, fresh, and filled with flavor! It is so good that you will be making it again and again. I show you how to make Garlic Naan on a skillet on a stovetop. In my recipe the dough is infused with fresh garlic making it extra delicious.</p>
            <p>₹19</p>
          </div>
        </div>
        </div>


        <div className='s-dish' >
          <h3>Mains</h3>
          <h4>(All main courses can be made gluten free according to customer's choice.)</h4>
          <div className="cars">
          <div className="car"> 
            <h3>Biryani</h3>
            <p>Biryani is a spiced mix of meat and rice, traditionally cooked over an open fire in a leather pot. It is combined in different ways with a variety of components to create a number of highly tasty and unique flavor combinations.</p>
            <p>₹109</p>
          </div>
          <div className="car"> 
            <h3>Butter Chicken</h3>
            <p>Butter chicken is prepared with marinated chicken that's first grilled and then served in a rich gravy (a.k.a. curry) made with tomato, butter, and a special spice blend as a base.</p>
            <p>₹179</p>
          </div>
        </div>

        <div className="cars">
          <div className="car"> 
            <h3>Tandoori Chicken</h3>
            <p>Tandoori Chicken is a South Asian dish of chicken marinated in yogurt and spices and roasted in a tandoor, a cylindrical clay oven. The dish is now popular world-wide. The modern form of the dish was popularized by the Moti Mahal restaurant in New Delhi in the late 1940s.</p>
            <p>₹199</p>
          </div>
          <div className="car"> 
            <h3>Palak Paneer</h3>
            <p>Palak Paneer is one of the most popular Indian dish made with succulent Paneer cubes (Indian cottage cheese) in a smooth spinach sauce. I share two ways to make this healthy dish – a homestyle version and a restaurant style version with a charcoal smoking method (brought back on reader’s demand). </p>
            <p>₹149</p>
          </div>
        </div>
        </div>

        <div className='s-dish'>
        <h3>Drinks</h3>
        <div className="cars">
          <div className="car"> 
            <h3>Masala Chai</h3>
            <p>Indian beverage popular throughout South Asia. Chai is made by brewing black tea (usually CTC tea) in milk and water and then sweetening with sugar.</p>
            <p>₹19</p>
          </div>
          <div className="car"> 
            <h3>Sweet Lassi</h3>
            <p>Yogurt based creamy, sweetened and chilled beverage from Punjabi cuisine is a popular drink in North India. It is usually served after the meal or in the afternoon during the hot summer days as a cooling beverage.</p>
            <p>₹29</p>
          </div>
        </div>
        </div>
      </div>
    </>
  )
}

export default OnlineOrdering