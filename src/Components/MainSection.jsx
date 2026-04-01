import React from 'react'

const MainSection = ({ activeTab, setActiveTab, cartCount }) => {
  return (
    <section className="py-12 bg-white text-center">
      {/* 🎯 Section Heading from Figma */}
      <h2 className="text-4xl font-black mb-2 text-gray-900">
        Premium Digital <span className="text-purple-600">Tools</span>
      </h2>
      <p className="text-gray-500 mb-10">Choose the best digital assets for your next big project.</p>

      {/* 🔄 Toggling Buttons (Requirement: Center of the section) */}
      <div className="flex justify-center items-center gap-0">
        <button 
          onClick={() => setActiveTab('products')}
          className={`px-10 py-3 rounded-l-full font-bold transition-all border-2 border-purple-600 
            ${activeTab === 'products' 
              ? 'bg-purple-600 text-white shadow-lg shadow-purple-200' 
              : 'bg-white text-purple-600 hover:bg-purple-50'}`}
        >
          Products
        </button>
        
        <button 
          onClick={() => setActiveTab('cart')}
          className={`px-10 py-3 rounded-r-full font-bold transition-all border-2 border-l-0 border-purple-600 
            ${activeTab === 'cart' 
              ? 'bg-purple-600 text-white shadow-lg shadow-purple-200' 
              : 'bg-white text-purple-600 hover:bg-purple-50'}`}
        >
          Cart ({cartCount})
        </button>
      </div>

      {/* 🚫 Beginner Logic: Small divider under buttons */}
      <div className="w-24 h-1 bg-purple-100 mx-auto mt-8 rounded-full"></div>
    </section>
  )
}

export default MainSection
