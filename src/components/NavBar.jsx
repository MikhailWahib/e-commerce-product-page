import { useState } from 'react'
import Cart from './Cart'
import logo from '../assets/images/logo.svg'
import cartIcon from '../assets/images/icon-cart.svg'
import avatar from '../assets/images/image-avatar.png'
import toggleIcon from '../assets/images/icon-menu.svg'
import closeIcon from '../assets/images/icon-close.svg'

const NavBar = ({ productCount, setProductCount }) => {

    const [showMenu, setShowMenu] = useState(false);
    const [showCart, setShowCart] = useState(false)

    const handleMenuClick = () => {
        setShowMenu(!showMenu);
    }


    return (
        <header>
            <nav className='navbar'>
                <button className='mobile-toggle-icon' onClick={handleMenuClick}><img src={toggleIcon} alt="toggle icon" /></button>
                <div className="logo"><img src={logo} alt="logo" /></div>
                <div
                    className={showMenu ? 'nav-links-list-container active' : 'nav-links-list-container'}>
                    <button className='close-btn' onClick={handleMenuClick}>
                        <img src={closeIcon} alt="close" />
                    </button>
                    <ul
                        className={showMenu ? 'nav-links-list active-list' : 'nav-links-list'}>
                        <li><a href="#">Collection</a></li>
                        <li><a href="#">Men</a></li>
                        <li><a href="#">Women</a></li>
                        <li><a href="#">About</a></li>
                        <li><a href="#">Contact</a></li>
                    </ul>
                </div>
                <div className="nav-right-sec">
                    <button className="cart-btn" onClick={() => setShowCart(!showCart)}>
                        <img src={cartIcon} alt="cart" />
                        {
                            productCount > 0 &&
                            <div className="cart-counter-circle">{productCount}</div>
                        }
                    </button>
                    <div className="avatar"><img src={avatar} alt="avatar" /></div>
                </div>
            </nav>
            {
                showCart &&
                <Cart
                    productCount={productCount}
                    setProductCount={setProductCount}
                />
            }
        </header >
    )
}

export default NavBar
