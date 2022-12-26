import { useState } from 'react'
import img1 from '../assets/images/image-product-1.jpg'
import img2 from '../assets/images/image-product-2.jpg'
import img3 from '../assets/images/image-product-3.jpg'
import img4 from '../assets/images/image-product-4.jpg'
import thumb1 from '../assets/images/image-product-1-thumbnail.jpg'
import thumb2 from '../assets/images/image-product-2-thumbnail.jpg'
import thumb3 from '../assets/images/image-product-3-thumbnail.jpg'
import thumb4 from '../assets/images/image-product-4-thumbnail.jpg'

const ProductImages = () => {
    return (
        <div className='product-imgs-container'>
            <div className="main-img-wrapper">
                <img src={img1} alt="product image" className='main-img' />
            </div>
            <div className="thumbnails-container">
                <button className='thumbnail-btn'><img src={thumb1} alt="product thumbnail" /></button>
                <button className='thumbnail-btn'><img src={thumb2} alt="product thumbnail" /></button>
                <button className='thumbnail-btn'><img src={thumb3} alt="product thumbnail" /></button>
                <button className='thumbnail-btn'><img src={thumb4} alt="product thumbnail" /></button>
            </div>
        </div>
    )
}

export default ProductImages
