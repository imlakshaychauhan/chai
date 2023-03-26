import React from 'react'
import { useContext } from 'react'
import { Link } from 'react-router-dom'
import { itemsContext } from '../App'
import './cart.css'

const Cart = () => {
    const {items, setItems, cartItems, setCartItems } = useContext(itemsContext);

  return (
    <>
        <div className='order-div' >
            <div className='check-div' >
            <div> <h1>My Order ({cartItems}) </h1> </div>
            <div className='check-btn' >
                <Link className='nav-link' to="/checkout"> <span>Checkout</span> </Link>
            </div>
            </div> {
                items.map((item) => (
                    <div className='item-div' > {
                        item.quan > 0 ? <>
                            <div className='details' >
                                <span id="name" >{item.name}</span>
                                <span>quantity: {item.quan}</span>
                                <span>price: ₹{item.price * item.quan}</span>
                            </div>
                            <div className='quan' >
                                <div className='sd-link'
                                    onClick={() => {
                                    setCartItems(cartItems - 1)
                                    if(items[item.id].quan > 0) {
                                        items[item.id].quan = items[item.id].quan - 1
                                        setItems(items);
                                    }
                                }}  
                                >-</div>
                                <span id="quan-id" >{items[item.id].quan}</span>
                                <div className='sd-link' 
                                    onClick={() => 
                                        {
                                            setCartItems(cartItems + 1)
                                            items[item.id].quan = items[item.id].quan + 1
                                            setItems(items);
                                        }}
                                >+</div>
                            </div>
                        </> : null
                    } </div>
                ))
            }
        </div>
    </>
  )
}

export default Cart