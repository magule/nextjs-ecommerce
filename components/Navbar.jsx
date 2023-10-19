import React from 'react';
import Link from 'next/link';

import { AiOutlineShopping } from 'react-icons/ai'

import { Cart } from './';
import { useStateContext} from '../context/StateContext';


    
const Navbar = () => {
    const { showCart, setShowCart, totalQuantities } = useStateContext();

    return (
        <div className="navbar-container">
            <ul className="navv">
                    <li>
                        <Link href="/"> Home</Link>
                    </li>

                    <li>
                    <Link href="/products"> Products</Link>
                    </li>

                    <li>
                    <Link href="/about"> About Us</Link>
                    </li>

                    <li>
                    <Link href="/contact"> Contact</Link>
                    </li>

            </ul>
            <button type="button" className="cart-icon" onClick={() => setShowCart(true)}>
                <AiOutlineShopping />
                <span className="cart-item-qty">{totalQuantities}</span>
            </button>

            {showCart && <Cart />}   
           
        </div>
    )
}

export default Navbar;
