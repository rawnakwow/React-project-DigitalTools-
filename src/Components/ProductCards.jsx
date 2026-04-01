const ProductCards = ({ products, addToCart }) => {
  return (
    <div className="max-w-6xl mx-auto grid md:grid-cols-3 gap-6 px-4 mb-20">
      {products.map(product => (
        <div key={product.id} className="product-card p-6 flex flex-col relative">
        
          <span className={`absolute top-4 right-4 px-3 py-1 rounded-full text-xs font-bold uppercase ${product.tagType === 'popular' ? 'tag-popular' : 'tag-new'}`}>
            {product.tag}
          </span>

          <div className="text-4xl mb-4">{product.icon}</div>
          <h3 className="text-xl font-bold mb-2">{product.name}</h3>
          <p className="text-gray-500 text-sm mb-4 flex-grow">{product.description}</p>
          
          <div className="mb-4">
            <span className="text-2xl font-bold">${product.price}</span>
            <span className="text-gray-400 text-sm"> / {product.period}</span>
          </div>

          <ul className="mb-6 space-y-2">
            {product.features.map((feat, index) => (
              <li key={index} className="text-sm text-gray-600">✅ {feat}</li>
            ))}
          </ul>

          <button
            onClick={() => addToCart(product)}
            className="bg-purple-600 text-white py-3 rounded-xl font-bold hover:bg-purple-700 transition-colors"
          >
            Buy Now
          </button>
        </div>
      ))}
    </div>
  )
}

export default ProductCards
