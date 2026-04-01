import './App.css'
import './index.css'
import { useState } from 'react'

import { ToastContainer, toast } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'

import Navbar from './Components/Navbar'
import Banner from './Components/Banner'
import Footer from './Components/Footer'
import Cart from './Components/Cart'
import ProductCards from './Components/ProductCards' 
import MainSection from './Components/MainSection' 
import CTA_Section from './Components/CTA_Section'
import Starts from './Components/Starts'
import Steps from './Components/Steps'
import Price from './Components/Price'
import productsData from './data/products.json'

function App() {
  const [cartItems, setCartItems] = useState([])
  
  const [activeTab, setActiveTab] = useState('products')

  const addToCart = (product) => {
    
    const isExist = cartItems.find(item => item.id === product.id)
    if (isExist) {
      toast.warn("Item already in cart!")
    } else {
      setCartItems(prev => [...prev, product]) 
      toast.success("Added to cart!") 
    }
  }

  // eslint-disable-next-line no-unused-vars
  const removeFromCart = (id) => {
    setCartItems(cartItems.filter(item => item.id !== id))
    toast.error("Removed from cart")
  }
  const proceedToCheckout = () => {
    setCartItems([])
    toast.info("Checkout successful! Cart cleared.") 
  }

  return (
    <>
      <Navbar cartCount={cartItems.length} />
      <Banner />
      <Starts />

     
      <MainSection 
        activeTab={activeTab} 
        setActiveTab={setActiveTab} 
        cartCount={cartItems.length} 
      />

      
      {activeTab === 'products' ? (
        <ProductCards 
          products={productsData}
          addToCart={addToCart}
        />
      ) : (
        <Cart 
          cartItems={cartItems}
          removeFromCart={removeFromCart}
          proceedToCheckout={proceedToCheckout}
        />
      )}

      <Steps />
      <Price />
      <CTA_Section />
      <Footer />

      
      <ToastContainer position="bottom-right" autoClose={2000} />
    </>
  )
}


export default App 
