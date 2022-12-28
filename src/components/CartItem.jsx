import React from 'react'
import img from '../assets/images/image-product-1-thumbnail.jpg'
import deleteIcon from '../assets/images/icon-delete.svg'

const CartItem = ({ productCount, setProductCount }) => {
    return (
        <div className='cart-item'>
            <div>
                <img src={img} alt="cart image" className="cart-img" />
            </div>
            <div className="cart-item-details">
                <p>Fall Limited Edition Sneakers</p>
                <div>
                    <p>$125.00 x {productCount}</p><span>${(125.00 * productCount).toFixed(2)}</span>
                </div>
            </div>
            <button className="cart-delete-btn" onClick={() => setProductCount(0)}>
                <img src={deleteIcon} />
            </button>
        </div>
    )
}

export default CartItem
