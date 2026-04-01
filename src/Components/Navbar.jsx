import React from 'react'
import cartokay from '../assets/products/shopping-cart.png'


const Navbar = ({ cartCount }) => {
  return (
    <nav className="flex justify-between items-center px-6 py-4 shadow">

      <h1 className="text-xl text-purple-600 font-bold">
        DigiTools
      </h1>
      
      <div className="flex items-center gap-6">
          
        <a href="#products" className="hover:text-black-600">Products</a>
        <a href="#features" className="hover:text-black-600">Features</a>
        <a href="#pricing" className="hover:text-black-600">Pricing</a>
        <a href="#testimonials" className="hover:text-black-600">Testimonials</a>
        <a href="#faq" className="hover:text-black-600">FAQ</a>

      </div>

      <div className="flex items-center gap-4">

        <div className="relative">
          <img 
                      src={cartokay} 
                      alt="Shopping Cart"
                    />
          {cartCount > 0 && (
            <span className="absolute -top-2 -right-2 bg-purple-600 text-white text-xs px-2 rounded-full">
              {cartCount}
            </span>
          )}
        </div>
        <div className="flex items-center gap-6">
           <a href="#login" className="hover:text-black-600"> Login </a>
        </div>

        <button className="bg-purple-600 text-white px-4 py-2 rounded">
          Get Started
        </button>

      </div>
    </nav>
  )
}

export default Navbar