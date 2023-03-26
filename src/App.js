import "./App.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import Navbar from "./components/Navbar";
import About from './pages/About'
import Menu from './pages/Menu'
import OnlineOrdering from './pages/OnlineOrdering'
import Contact from './pages/Contact'
import Footer from "./components/Footer";
import Cart from "./pages/Cart";
import { createContext, useState } from "react";
import { Link } from "react-router-dom";

export const itemsContext = createContext();

function App() {
  const [items, setItems] = useState([
    {
        id: 0,
        name: "Samosas",
        price: 11,
        quan: 0
    },
    {
        id: 1,
        name: "Samosas",
        price: 11,
        quan: 0
    },
    {
        id: 2,
        name: "Vegetable Pakora",
        price: 26,
        quan: 0
    },
    {
        id: 3,
        name: "Cucumber Raita",
        price: 19,
        quan: 0
    },
    {
        id: 4,
        name: "Kadhi Pakora",
        price: 49,
        quan: 0
    },
    {
        id: 5,
        name: "Plain Rice",
        price: 59,
        quan: 0
    },
    {
        id: 6,
        name: "Garlic Naan",
        price: 19,
        quan: 0
    },
    {
        id: 7,
        name: "Biryani",
        price: 109,
        quan: 0
    },
    {
        id: 8,
        name: "Butter Chicken",
        price: 179,
        quan: 0
    },
    {
        id: 9,
        name: "Tandoori Chicken",
        price: 199,
        quan: 0
    },
    {
        id: 10,
        name: "Palak Paneer",
        price: 149,
        quan: 0
    },
    {
        id: 11,
        name: "Masala Chai",
        price: 19,
        quan: 0
    },
    {
        id: 12,
        name: "Sweet Lassi",
        price: 29,
        quan: 0
    }
])
  const [cartItems, setCartItems] = useState(0);
  return (
    <BrowserRouter>
      <itemsContext.Provider value={{items, setItems, cartItems, setCartItems}} >
        {
          cartItems > 0 ? 
        <div className='cart-bt' >
          <Link className='nav-link' to="/cart">
          <span>View Cart</span>
          <span>({cartItems})</span>
          </Link>
        </div>
        : null
        }

      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/menu" element={<Menu />} />
        <Route path="/online-ordering" element={
            <OnlineOrdering />
          } />
        <Route path="/contact" element={<Contact />} />
        <Route path="/cart" element={<Cart />} />
        <Route path="*" element={<Home />} />
      </Routes>
      <Footer />
      </itemsContext.Provider>
    </BrowserRouter>
  );
}

export default App;
