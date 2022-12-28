import React from 'react'
import img from '../assets/images/image-product-1-thumbnail.jpg'
import deleteIcon from '../assets/images/icon-delete.svg'

const CartItem = ({ setProductCount }) => {
    return (
        <div className='cart-item'>
            <div>
                <img src={img} alt="cart image" className="cart-img" />
            </div>
            <div className="cart-item-details">
                <p>Fall Limited Edition Sneakers</p>
                <div>
                    <p>$125.00 x 3</p><span>$375.00</span>
                </div>
            </div>
            <button className="cart-delete-btn" onClick={() => setProductCount(0)}>
                <img src={deleteIcon} />
            </button>
        </div>
    )
}

export default CartItem
