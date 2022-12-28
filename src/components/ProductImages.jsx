import { useState, useEffect } from 'react'
import img1 from '../assets/images/image-product-1.jpg'
import img2 from '../assets/images/image-product-2.jpg'
import img3 from '../assets/images/image-product-3.jpg'
import img4 from '../assets/images/image-product-4.jpg'
import thumb1 from '../assets/images/image-product-1-thumbnail.jpg'
import thumb2 from '../assets/images/image-product-2-thumbnail.jpg'
import thumb3 from '../assets/images/image-product-3-thumbnail.jpg'
import thumb4 from '../assets/images/image-product-4-thumbnail.jpg'
import arrow from '../assets/images/icon-next.svg'

const ProductImages = () => {

    const imgs = [img1, img2, img3, img4];
    const thumbnails = [thumb1, thumb2, thumb3, thumb4];

    const [currentImg, setCurrentImg] = useState(imgs[0]);
    const [currentImgIndex, setCurrentImgIndex] = useState(0);

    const handleNextBtn = () => {
        if (currentImgIndex > -1 && currentImgIndex < imgs.length - 1) {
            setCurrentImgIndex(currentImgIndex + 1);
        }
    }

    const handleBackBtn = () => {
        if (currentImgIndex > 0 && currentImgIndex < imgs.length) {
            setCurrentImgIndex(currentImgIndex - 1);
        }
    }

    useEffect(() => {
        setCurrentImg(imgs[currentImgIndex]);
    }, [currentImgIndex])

    return (
        <div className='product-imgs-container'>

            {/* mobile arrows */}
            <div className="mobile-arrows-container">
                <button
                    className="arrow"
                    onClick={handleBackBtn}
                >
                    <img src={arrow} className='back-arrow' />
                </button>
                <button
                    className="arrow"
                    onClick={handleNextBtn}
                >
                    <img src={arrow} />
                </button>
            </div>
            {/* mobile arrows */}

            <div className="main-img-wrapper">
                <img src={currentImg} alt="product image" className='main-img' />
            </div>
            <div className="thumbnails-container">
                {
                    thumbnails.map((thumb, index) => {
                        return <button
                            className='thumbnail-btn'
                            key={index}
                            onClick={() => setCurrentImg(imgs[index])}
                        >
                            <img src={thumb} alt="product thumbnail" />
                        </button>
                    })
                }
            </div>
        </div>
    )
}

export default ProductImages
