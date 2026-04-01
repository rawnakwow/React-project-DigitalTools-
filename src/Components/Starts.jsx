const Starts = () => {
  const stats = [
    { label: 'Downloads', value: '50K+' },
    { label: 'Tools Sold', value: '200+' },
    { label: 'Rating', value: '4.9/5' },
  ]

  return (
    <div className="stats-bar py-8">
      <div className="max-w-6xl mx-auto grid grid-cols-3 text-center text-white">
        {stats.map((stat, index) => (
          <div key={index} className={index !== 2 ? "border-r border-purple-400" : ""}>
            <h2 className="text-3xl font-bold font-black">{stat.value}</h2>
            <p className="text-purple-100 text-sm font-medium uppercase tracking-wider">{stat.label}</p>
          </div>
        ))}
      </div>
    </div>
  )
}
export default Starts
