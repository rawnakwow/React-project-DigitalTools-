const Cart = ({ cartItems, removeFromCart, proceedToCheckout }) => {
  const total = cartItems.reduce((acc, item) => acc + item.price, 0);

  if (cartItems.length === 0) {
    return (
      <div className="flex flex-col items-center justify-center py-20 bg-white rounded-2xl border border-dashed border-gray-300 max-w-2xl mx-auto my-10">
        <div className="text-6xl mb-4 text-gray-300">🛒</div>
        <h2 className="text-2xl font-bold text-gray-800">Your cart is empty</h2>
        <p className="text-gray-500 mt-2">Explore our digital tools to get started.</p>
      </div>
    );
  }

  return (
    <div className="max-w-3xl mx-auto my-10 px-4">
      <div className="bg-white p-8 rounded-2xl shadow-sm border border-gray-100">
        <h2 className="text-2xl font-bold mb-6">Your Cart ({cartItems.length})</h2>

        <div className="space-y-4 mb-8">
          {cartItems.map((item) => (
            <div key={item.id} className="cart-item">
              <div className="text-3xl">{item.icon}</div>
              <div className="flex-grow">
                <h3 className="font-bold text-gray-800">{item.name}</h3>
                <p className="text-sm text-gray-500">${item.price}</p>
              </div>
              <button 
                onClick={() => removeFromCart(item.id)}
                className="text-red-400 hover:text-red-600 font-bold px-3 py-1"
              >
                ✕ Remove
              </button>
            </div>
          ))}
        </div>

        <div className="border-t pt-6">
          <div className="flex justify-between items-center mb-6">
            <span className="text-gray-600 font-medium">Total:</span>
            <span className="text-3xl font-black text-purple-600">${total}</span>
          </div>

          <button
            onClick={proceedToCheckout}
            className="w-full bg-purple-600 hover:bg-purple-700 text-white font-bold py-4 rounded-xl shadow-lg transition-transform active:scale-95"
          >
            Proceed to Checkout
          </button>
        </div>
      </div>
    </div>
  );
};

export default Cart;
