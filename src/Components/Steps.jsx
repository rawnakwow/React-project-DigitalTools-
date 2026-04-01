import React from 'react'

const Steps = () => {
  const stepsData = [
    { id: 1, title: "Create Account", desc: "Sign up and explore our premium dashboard.", icon: "👤" },
    { id: 2, title: "Choose Products", desc: "Select the digital tools that fit your workflow.", icon: "📦" },
    { id: 3, title: "Start Creating", desc: "Download and boost your productivity instantly.", icon: "🚀" }
  ];

  return (
    <section className="py-20 bg-white">
      <div className="max-w-6xl mx-auto px-6 text-center">
        {/* Title from Figma */}
        <h2 className="text-4xl font-black mb-16 text-gray-900">
          Get Started In <span className="text-purple-600">3 Steps</span>
        </h2>

        {/* Steps Container */}
        <div className="flex flex-col md:flex-row justify-between items-start gap-8 steps-row relative">
          
          {stepsData.map((step, index) => (
            <React.Fragment key={step.id}>
              {/* Step Card */}
              <div className="flex-1 flex flex-col items-center text-center group">
                <div className="w-20 h-20 bg-purple-50 text-purple-600 rounded-3xl flex items-center justify-center text-3xl mb-6 shadow-sm group-hover:bg-purple-600 group-hover:text-white transition-all duration-300">
                  {step.icon}
                </div>
                <h3 className="text-xl font-bold mb-3">{step.title}</h3>
                <p className="text-gray-500 text-sm leading-relaxed max-w-[200px]">
                  {step.desc}
                </p>
              </div>

              {/* 🪜 Step Connector (from your CSS) */}
              {index < stepsData.length - 1 && (
                <div className="hidden lg:block step-connector"></div>
              )}
            </React.Fragment>
          ))}

        </div>
      </div>
    </section>
  )
}

export default Steps
