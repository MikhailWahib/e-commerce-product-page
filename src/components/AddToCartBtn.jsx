import React from 'react'
import cartIcon from '../assets/images/icon-cart.svg'

const AddToCartBtn = ({ counter, productCount, setProductCount }) => {

    const handleClick = () => {
        setProductCount(productCount + counter)
    }

    return (
        <button className='add-to-cart-btn' onClick={handleClick}>Add to cart</button>
    )
}

export default AddToCartBtn
