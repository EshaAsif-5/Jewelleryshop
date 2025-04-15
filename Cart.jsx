import React, { useContext, useEffect, useState } from 'react';
import { ShopContext } from '../context/ShopContext';
import Title from '../components/Title';

const Cart = () => {
  const { products, currency, cartItems, removeFromCart, addToCart, decreaseCart } = useContext(ShopContext);
  const [cartData, setCartData] = useState([]);
  const [subtotal, setSubtotal] = useState(0);
  const shippingFee = 15;

  useEffect(() => {
    const tempData = [];
    let tempSubtotal = 0;

    for (const itemId in cartItems) {
      for (const size in cartItems[itemId]) {
        if (cartItems[itemId][size] > 0) {
          const product = products.find(p => p._id === itemId || p.id === itemId);
          const quantity = cartItems[itemId][size];

          if (product) {
            tempData.push({
              _id: itemId,
              size,
              quantity,
              price: product.price,
            });

            tempSubtotal += product.price * quantity;
          }
        }
      }
    }

    setCartData(tempData);
    setSubtotal(tempSubtotal);
  }, [cartItems, products]);

  const handleDelete = (itemId, size) => {
    removeFromCart(itemId, size);
  };

  const total = subtotal + shippingFee;

  return (
    <div className='pt-10 px-4 md:px-10'>
      {/* YOUR CART Title */}
      <div className='text-2xl mb-6'>
        <Title text1={'YOUR'} text2={'CART'} />
      </div>

      {cartData.length === 0 ? (
        <p className="text-gray-500 text-center">Your cart is empty.</p>
      ) : (
        <div className='flex flex-col lg:flex-row gap-8'>
          {/* Cart Products Section */}
          <div className='flex-1 space-y-4'>
            {cartData.map((item, index) => {
              const product = products.find(p => p._id === item._id || p.id === item._id);
              if (!product) return null;

              return (
                <div key={index} className='border-t border-b border-gray-200 py-4 flex items-center justify-between'>
                  <div className='flex items-center gap-4'>
                    <img
                      className='w-16 sm:w-20 object-cover rounded'
                      src={product.image?.main || product.image[0]}
                      alt={product.name}
                    />
                    <div className='space-y-1 text-sm'>
                      <p className='font-semibold'>{product.name}</p>
                      <p>Size: {item.size}</p>
                      <p className='flex items-center gap-2'>
                        Qty:
                        <button
                          className='px-2 py-1 border rounded'
                          onClick={() => decreaseCart(item._id, item.size)}
                        >-</button>
                        <span>{item.quantity}</span>
                        <button
                          className='px-2 py-1 border rounded'
                          onClick={() => addToCart(item._id, item.size)}
                        >+</button>
                      </p>
                      <p>
                        Price: {currency}{item.price * item.quantity}
                      </p>
                    </div>
                  </div>

                  <button
                    onClick={() => handleDelete(item._id, item.size)}
                    className='text-red-500 font-semibold hover:underline text-sm'
                  >
                    Remove
                  </button>
                </div>
              );
            })}
          </div>

          {/* Cart Total Section */}
          <div className='w-full lg:w-1/3 bg-white rounded-lg shadow p-5 h-fit'>
            <div className='mb-4'>
              <Title text1={'CART'} text2={'TOTAL'} />
            </div>

            <div className='space-y-3 text-sm'>
              <div className='flex justify-between'>
                <span className='font-medium'>Subtotal</span>
                <span>{currency}{subtotal.toFixed(2)}</span>
              </div>
              <div className='flex justify-between'>
                <span className='font-medium'>Shipping Fee</span>
                <span>{currency}{shippingFee.toFixed(2)}</span>
              </div>

              <hr className='my-2 border-gray-300' />

              <div className='flex justify-between text-base font-bold'>
                <span>Total</span>
                <span>{currency}{total.toFixed(2)}</span>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Cart;
