import React from 'react'

const CTA_Section = () => {
  return (
    <section className="bg-purple-600 py-20 px-6 text-center text-white">
      <div className="max-w-4xl mx-auto">
        {/* Requirement: Meaningful text instead of Lorem Ipsum */}
        <h2 className="text-4xl md:text-5xl font-black mb-6 leading-tight">
          Ready To Transform Your <br /> 
          <span className="text-purple-200 underline">Digital Workflow?</span>
        </h2>
        
        <p className="text-lg text-purple-100 mb-10 max-w-2xl mx-auto leading-relaxed">
          Join 50,000+ creators and professionals using DigiTools to automate their tasks and deliver better results, faster.
        </p>

       
        <div className="flex flex-col sm:flex-row justify-center gap-4">
          <button className="bg-white text-purple-600 px-10 py-4 rounded-full font-black text-lg hover:bg-purple-50 transition-all shadow-xl active:scale-95">
            Get Started Now
          </button>
          <button className="border-2 border-purple-300 text-white px-10 py-4 rounded-full font-bold text-lg hover:bg-purple-700 transition-all">
            View Case Studies
          </button>
        </div>
      </div>
    </section>
  )
}

export default CTA_Section
