import React, { useState } from 'react'
import './checkout.css';
import { itemsContext } from '../App'
import { useContext } from 'react'
import { Link } from 'react-router-dom';

export default function Checkout() {
    const {items, setCartItems} = useContext(itemsContext);
    const [order, setOrder] = useState(false);
    const onOrder = () => {
        setCartItems(0);
        setOrder(true);
    }
    return (
        <>
        {!order ?
            <div className='checkout-div'>
                <h1>Billing Items</h1>
                <h4> <Link className='navi-link' to="/cart" > Return to Cart </Link> </h4>
                {
                    items.map((item) => (
                        <div className='item-div' > {
                            item.quan > 0 ? <>
                                <div className='details' >
                                    <span id="name" >{item.name}</span>
                                    <span>quantity: {item.quan}</span>
                                    <span>price: ₹{item.price * item.quan}</span>
                                </div>
                            </> : null
                        } </div>
                    ))
                }
                <h4>(Orders are only available for Cash on Delivery)</h4>
                <div className='order-btn'>
                    <Link style={{ textDecoration: "none" }} onClick={onOrder}> <span>Place Order Now</span> </Link>
                </div>
            </div>
         :<>
            <h1>Your Items has been ordered</h1>
            <h1>Order ID: 00515007721</h1>
            <div className='order-btn'>
            <Link style={{ textDecoration: "none" }} to="/" > <span>Explore More...</span> </Link>
            </div>
          </>
          }
        </>
    )
}
