import React from 'react'

const Price = () => {
  const plans = [
    {
      name: "Starter",
      price: "0",
      features: ["3 Basic Tools", "Community Support", "Standard Updates", "Single User"],
      isFeatured: false
    },
    {
      name: "Pro",
      price: "29",
      features: ["All Premium Tools", "Priority Support", "Lifetime Updates", "Up to 5 Users"],
      isFeatured: true
    },
    {
      name: "Enterprise",
      price: "99",
      features: ["Custom Solutions", "24/7 Dedicated Support", "White-label Options", "Unlimited Users"],
      isFeatured: false
    }
  ]

  return (
    <section className="py-20 bg-gray-50">
      <div className="max-w-6xl mx-auto px-6 text-center">
       
        <h2 className="text-4xl font-black mb-4">Simple, Transparent Pricing</h2>
        <p className="text-gray-500 mb-12">Choose the plan that best fits your digital needs.</p>

      
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 items-center pricing-grid">
          {plans.map((plan, index) => (
            <div 
              key={index} 
              className={`pricing-card p-10 flex flex-col items-center text-center ${plan.isFeatured ? 'featured shadow-2xl scale-110 z-10' : 'bg-white'}`}
            >
              <h3 className="text-xl font-bold mb-2 uppercase tracking-widest">{plan.name}</h3>
              
              <div className="mb-6">
                <span className="text-5xl font-black">${plan.price}</span>
                <span className={`text-sm ${plan.isFeatured ? 'text-purple-200' : 'text-gray-400'}`}> / month</span>
              </div>

              <ul className="space-y-4 mb-8 text-sm">
                {plan.features.map((feature, fIndex) => (
                  <li key={fIndex} className="flex items-center justify-center gap-2">
                    <span className={plan.isFeatured ? 'text-white' : 'text-purple-600'}>✔</span>
                    {feature}
                  </li>
                ))}
              </ul>

              <button className={`w-full py-4 rounded-xl font-black transition-all ${plan.isFeatured ? 'bg-white text-purple-600' : 'bg-purple-600 text-white'}`}>
                Choose {plan.name}
              </button>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Price
