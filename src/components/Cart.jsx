import React from 'react'
import CartItem from './CartItem'

const Cart = ({ productCount, setProductCount }) => {

    return (
        <div className='cart'>
            <p className='cart-title'>Cart</p>
            <hr />
            {
                productCount > 0 ?
                    <>
                        <div className="cart-items-container">
                            <CartItem
                                productCount={productCount}
                                setProductCount={setProductCount}
                            />
                        </div>
                        <button className='checkout-btn'>Checkout</button>
                    </> :
                    <p className='empty-cart'>Your cart is empty</p>
            }
        </div>
    )
}

export default Cart
