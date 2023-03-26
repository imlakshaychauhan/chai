import React from 'react'
import { useContext } from 'react'
import { itemsContext } from '../App'

const OrderFast = ({id}) => {
    const {items, setItems, cartItems, setCartItems} = useContext(itemsContext);
  return (
    <>
    <hr />
        <div className='order-fast' >
            <div className='quan' >
            <div className='sd-link'
                onClick={() => {
                setCartItems(cartItems - 1)
                if(items[id].quan > 0) {
                    items[id].quan = items[id].quan - 1
                    setItems(items);
                }
            }}  
            >-</div>
            <span id="quan-id" >{items[id].quan}</span>
            <div className='sd-link' 
                onClick={() => 
                    {
                        setCartItems(cartItems + 1)
                        items[id].quan = items[id].quan + 1
                        setItems(items);
                    }}
                    >+</div>
            </div>
        </div>
    </>
  )
}

export default OrderFast