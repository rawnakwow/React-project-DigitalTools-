import React from 'react'
import bannerImg from '../assets/banner.png' 

const Banner = () => {
  return (
    <section className="flex flex-col md:flex-row items-center justify-between px-6 py-20 max-w-7xl mx-auto gap-12">
    
      <div className="flex-1 text-left">
       
        <div className="inline-flex items-center gap-2 bg-purple-50 text-purple-600 px-4 py-1 rounded-full text-xs font-semibold mb-6 border border-purple-100">
          <span className="w-2 h-2 bg-purple-600 rounded-full animate-pulse"></span>
          New: AI-Powered Tools Available
        </div>

        
        <h1 className="text-5xl md:text-6xl font-extrabold text-gray-900 leading-tight mb-6">
          Supercharge Your <br />
          <span className="text-gray-800">Digital Workflow</span>
        </h1>

        <p className="text-gray-500 text-lg leading-relaxed mb-8 max-w-lg">
          Access premium AI tools, design assets, templates, and productivity 
          software—all in one place. Start creating faster today. 
          <span className="block mt-2 font-medium">Explore Products</span>
        </p>

     
        <div className="flex items-center gap-4">
          <button className="bg-purple-600 hover:bg-purple-700 text-white px-8 py-3 rounded-full font-medium transition-all shadow-lg shadow-purple-200">
            Explore Products
          </button>
          
          <button className="flex items-center gap-2 border border-gray-300 hover:bg-gray-50 text-purple-600 px-8 py-3 rounded-full font-medium transition-all">
            <span className="text-lg">▷</span> Watch Demo
          </button>
        </div>
      </div>

      
      <div className="flex-1 flex justify-center">
        <div className="relative">
          
          <img 
            src={bannerImg} 
            alt="Banner" 
            className="rounded-2xl shadow-2xl w-full max-w-md"
          />
          
          <div className="absolute -z-10 inset-0 bg-purple-200 blur-3xl opacity-30 rounded-full"></div>
        </div>
      </div>

    </section>
  )
}

export default Banner
