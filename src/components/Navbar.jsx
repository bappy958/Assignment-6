import cart from "../images/products/shopping-cart.png"
import { FaCartShopping } from 'react-icons/fa6'

export default function Navbar({ isAdded, setIsAdded }) {


    return (
        <div className="navbar bg-base-100 shadow-sm">
            <div className="navbar-start">
                <div className="dropdown">
                    <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"> <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /> </svg>
                    </div>
                    <ul
                        tabIndex="-1"
                        className="menu menu-sm dropdown-content bg-base-100 rounded-box z-1 mt-3 w-52 p-2 shadow">
                        {/* <li><a>Item 1</a></li> */}
                        <li><a>Products</a></li>
                        <li><a>Features</a></li>
                        <li><a>Pricing</a></li>
                        <li><a>Testimonials</a></li>
                        <li><a>FAQ</a></li>
                        <button className="btn">Login</button>
                        {/* <li><a>Item 3</a></li> */}
                    </ul>
                </div>
                <a className="text-3xl font-bold bg-linear-to-r from-blue-600 to-purple-500 bg-clip-text text-transparent">DigiTools</a>
            </div>
            <div className="navbar-center hidden lg:flex">
                <ul className="menu menu-horizontal px-1">
                    <li><a>Products</a></li>
                    <li><a>Features</a></li>
                    <li><a>Pricing</a></li>
                    <li><a>Testimonials</a></li>
                    <li><a>FAQ</a></li>
                </ul>
            </div>
            <div className="navbar-end gap-3">
                <button className='flex items-center'><img src={cart} alt="" />
                    <span className={`mb-6 ${isAdded.length > 0 ? 'bg-red-400' : ''} p-1 rounded-full text-sm text-white`}>{isAdded.length > 0 ? `${isAdded.length}` : null}</span> </button>
                <button className="hidden lg:block">Login</button> 
                <a className="btn bg-linear-to-r from-blue-600 to-purple-500 text-white rounded-4xl">Get Started</a>
            </div>
        </div>
    )
}
