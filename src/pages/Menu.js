import React from "react";
import { Link } from "react-router-dom";
import './menu.css'

const Menu = () => {
  return (
    <>
      <div className="welcome-section">
        <div className="menu-link">
          <Link style={{ textDecoration: "none" }} to="/online-ordering">
            <p>Online Ordering</p>
            <span>ऑनलाइन ऑर्डर</span>
          </Link>
        </div>
        <div className="main-heading">
          <span>मेन्यू</span>
          <h1>MENU</h1>
        </div>
        <div className="order-link">
          <Link style={{ textDecoration: "none" }} to="/about">
            <p>About</p>
            <span>हमारा विषय</span>
          </Link>
        </div>
      </div>

      <div className="side-dish">
        <h1>Side Dishes</h1>
        <hr />
        <div className="cards">
          <div className="card"> 
            <h3>Samosas</h3>
            <p>Fried South Asian pastry with a savoury filling, including ingredients such as spiced potatoes, onions, and peas. It may take different forms, including triangular, cone, or half-moon shapes, depending on the region.</p>
            <p>₹11</p>
            <button>Add</button>
          </div>
          <div className="card"> 
            <h3>Vegetable Pakora</h3>
            <p>Pakora are deep fried fritters that feature gram flour a.k.a besan and vegetables. Gram flour is made from skinned black chickpeas. Depending on the veggie you include, the pakora will taste different with our Chai.</p>
            <p>₹26</p>
            <button>Add</button>
          </div>
        </div>
        <div className="cards">
          <div className="card"> 
            <h3>Cucumber Raita</h3>
            <p>Cucumber Raita is a variation of raita that can be used as a dip or a salad. It is made by mixing together freshly chopped cucumber, green chillies, and dahi, and optionally finely chopped tomato and onion. It is especially popular in the summer months as it helps to beat the heat.</p>
            <p>₹19</p>
            <button>Add</button>
          </div>
          <div className="card"> 
            <h3>Kadhi Pakora</h3>
            <p>Punjabi Kadhi Pakora is one of the most popular North Indian dishes! Deep fried fritters (pakora) are dunked in a yogurt based curry made with besan (gram flour) and spices!</p>
            <p>₹49</p>
            <button>Add</button>
          </div>
        </div>
        <div className="cards">
          <div className="card"> 
            <h3>Plain Rice</h3>
            <p>Rice can be very plain or very colorful. Rice is easy to cook and can be served as a side dish or a main dish. Plain rice is served with lentils, dal, or a gravy-based dish.</p>
            <p>₹59</p>
            <button>Add</button>
          </div>
          <div className="card"> 
            <h3>Garlic Naan</h3>
            <p>Garlic Naan bread is light, soft, fresh, and filled with flavor! It is so good that you will be making it again and again. I show you how to make Garlic Naan on a skillet on a stovetop. In my recipe the dough is infused with fresh garlic making it extra delicious.</p>
            <p>₹19</p>
            <button>Add</button>
          </div>
        </div>
      </div>


      <div className="side-dish">
        <h1>MAINS</h1>
        <hr />
        <h4>(All main courses can be made gluten free according to customer's choice.)</h4>
        <div className="cards">
          <div className="card"> 
            <h3>Biryani</h3>
            <p>Biryani is a spiced mix of meat and rice, traditionally cooked over an open fire in a leather pot. It is combined in different ways with a variety of components to create a number of highly tasty and unique flavor combinations.</p>
            <p>₹109</p>
            <button>Add</button>
          </div>
          <div className="card"> 
            <h3>Butter Chicken</h3>
            <p>Butter chicken is prepared with marinated chicken that's first grilled and then served in a rich gravy (a.k.a. curry) made with tomato, butter, and a special spice blend as a base.</p>
            <p>₹179</p>
            <button>Add</button>
          </div>
        </div>
        <div className="cards">
          <div className="card"> 
            <h3>Tandoori Chicken</h3>
            <p>Tandoori Chicken is a South Asian dish of chicken marinated in yogurt and spices and roasted in a tandoor, a cylindrical clay oven. The dish is now popular world-wide. The modern form of the dish was popularized by the Moti Mahal restaurant in New Delhi in the late 1940s.</p>
            <p>₹199</p>
            <button>Add</button>
          </div>
          <div className="card"> 
            <h3>Palak Paneer</h3>
            <p>Palak Paneer is one of the most popular Indian dish made with succulent Paneer cubes (Indian cottage cheese) in a smooth spinach sauce. I share two ways to make this healthy dish – a homestyle version and a restaurant style version with a charcoal smoking method (brought back on reader’s demand). </p>
            <p>₹149</p>
            <button>Add</button>
          </div>
        </div>
      </div>

      <div className="side-dish">
        <h1>Drinks</h1>
        <hr />
        <div className="cards">
          <div className="card"> 
            <h3>Masala Chai</h3>
            <p>Indian beverage popular throughout South Asia. Chai is made by brewing black tea (usually CTC tea) in milk and water and then sweetening with sugar.</p>
            <p>₹19</p>
            <button>Add</button>
          </div>
          <div className="card"> 
            <h3>Sweet Lassi</h3>
            <p>Yogurt based creamy, sweetened and chilled beverage from Punjabi cuisine is a popular drink in North India. It is usually served after the meal or in the afternoon during the hot summer days as a cooling beverage.</p>
            <p>₹29</p>
            <button>Add</button>
          </div>
        </div>
      </div>
    </>
  );
};

export default Menu;
