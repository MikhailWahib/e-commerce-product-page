import { useState } from 'react'
import Counter from './Counter'
import AddToCartBtn from './AddToCartBtn'

const ProductDetails = ({ productCount, setProductCount }) => {

    const [counter, setCounter] = useState(0)

    return (
        <div className='product-details-container'>
            <h1>SNEAKER COMPANY</h1>
            <h2>Fall Limited Edition Sneakers</h2>
            <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quae, ad, sunt doloribus quia soluta praesentium et labore illum, beatae aperiam atque fugiat quas aut.</p>
            <div className="price-block">
                <span className='price'>$125.00</span><span className="discount">50%</span><br />
                <span className="before-price">$250.00</span>
            </div>
            <div className="product-details-btns">
                <Counter
                    counter={counter}
                    setCounter={setCounter}
                />
                <AddToCartBtn
                    counter={counter}
                    productCount={productCount}
                    setProductCount={setProductCount}
                />
            </div>
        </div>
    )
}

export default ProductDetails
