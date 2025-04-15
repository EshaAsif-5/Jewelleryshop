import React, { useEffect, useState, useContext } from 'react';
import { useParams } from 'react-router-dom';
import { ShopContext } from '../context/ShopContext';

const ProductDetail = () => {
  const { productId } = useParams();
  const { products, addToCart, currency } = useContext(ShopContext);
  const [product, setProduct] = useState(null);
  const [selectedSize, setSelectedSize] = useState(null);
  const [activeTab, setActiveTab] = useState('description');
  const [rating, setRating] = useState(0);
  const [hoverRating, setHoverRating] = useState(0);

  useEffect(() => {
    const found = products.find(p => p.id === productId || p._id === productId);
    if (found) setProduct(found);
  }, [productId, products]);

  const renderStars = () => {
    return Array.from({ length: 5 }, (_, index) => {
      const current = index + 1;
      return (
        <span
          key={index}
          className={`star ${current <= (hoverRating || rating) ? 'filled' : ''}`}
          onClick={() => setRating(current)}
          onMouseEnter={() => setHoverRating(current)}
          onMouseLeave={() => setHoverRating(0)}
        >
          ★
        </span>
      );
    });
  };

  if (!product) return <div>Product not found!</div>;

  return (
    <div className="product-page">
      <div className="product-detail">
        {/* Left - Image */}
        <div className="product-images">
          <img src={product.image?.main} alt={product.name} />
        </div>

        {/* Middle - Info */}
        <div className="product-info">
          <h2>{product.name}</h2>
          <p className="desc">{product.description}</p>
          <h3 className="price">${product.price}</h3>

          <div className="stars">{renderStars()}</div>
          <p><strong>Material:</strong> {product.material}</p>

          <div className="sizes">
            <p className="size-label"><strong>Select Size:</strong></p>
            <div className="size-options">
              {['10-20', '20-30y'].map(size => (
                <button
                  key={size}
                  className={`size-btn ${selectedSize === size ? 'active' : ''}`}
                  onClick={() => setSelectedSize(size)}
                >
                  {size}
                </button>
              ))}
            </div>
          </div>

          <button
            className="add-cart-btn"
            onClick={() => addToCart(productId, selectedSize)}
          >
            ADD TO CART
          </button>

          
          <p className="note-text">
            100% original product. <br />
            Cash on delivery is available.
          </p>
        </div>
      </div>

      {/* Tabs - Description and Reviews */}
      <div className="tab-section">
        <div className="tabs">
          <button
            onClick={() => setActiveTab('description')}
            className={activeTab === 'description' ? 'active-tab' : ''}
          >
            Description
          </button>
          <button
            onClick={() => setActiveTab('reviews')}
            className={activeTab === 'reviews' ? 'active-tab' : ''}
          >
            Reviews (122)
          </button>
        </div>

        <div className="tab-content">
          {activeTab === 'description' ? (
            <p className="left-align">
              An e-commerce website is an online platform that facilitates the buying and selling of products or services over the internet. It serves as a virtual marketplace where businesses and individuals can showcase their products, interact with customers, and conduct transactions without the need for a physical presence. E-commerce websites have gained immense popularity due to their convenience, accessibility, and the global reach they offer.
            </p>
          ) : (
            <div className="left-align">
              <p>Customer reviews go here.</p>
              <p>Your Rating: {rating} out of 5</p>
            </div>
          )}
        </div>
      </div>

      {/* Related Products */}
      <div className="related-products">
        <h2>RELATED <strong>PRODUCTS</strong></h2>
        <div className="related-grid">
          {products
            .filter(item =>
              item.category === product.category && item.id !== product.id
            )
            .slice(0, 5)
            .map(item => (
              <div key={item.id} className="related-card">
                <img src={item.image?.main} alt={item.name} />
                <p>{item.name}</p>
                <p>${item.price}</p>
              </div>
            ))}
        </div>
      </div>

      {/* CSS */}
      <style>{`
        .product-page {
          padding: 30px;
        }
        .product-detail {
          display: flex;
          gap: 30px;
          flex-wrap: wrap;
        }
        .product-images img {
          width: 350px;
          height: 450px;
          object-fit: cover;
        }
        .product-info {
          max-width: 400px;
          flex: 1;
        }
        .product-info h2 {
          font-size: 28px;
          margin-bottom: 10px;
        }
        .desc {
          color: #555;
        }
        .price {
          font-weight: bold;
          font-size: 22px;
          margin: 10px 0;
        }
        .stars {
          font-size: 22px;
          margin-bottom: 10px;
          display: flex;
          gap: 5px;
        }
        .star {
          cursor: pointer;
          color: #ccc;
        }
        .star.filled {
          color: gold;
        }
        .sizes {
          margin: 20px 0;
        }
        .size-label {
          font-weight: bold;
        }
        .size-options {
          display: flex;
          gap: 10px;
        }
        .size-btn {
          padding: 8px 16px;
          border: 1px solid #ccc;
          border-radius: 5px;
          cursor: pointer;
        }
        .size-btn.active {
          background-color: #000;
          color: white;
          border-color: #000;
        }
        .add-cart-btn {
          margin-top: 20px;
          padding: 12px 24px;
          background-color: black;
          color: white;
          border: none;
          border-radius: 0;
          cursor: pointer;
        }
        .add-cart-btn:disabled {
          background-color: #888;
          cursor: not-allowed;
        }
        .note-text {
          margin-top: 10px;
          font-size: 14px;
          color: #333;
          line-height: 1.5;
        }
        .warning-text {
          color: red;
          margin-top: 8px;
          font-size: 14px;
        }

        .tab-section {
          margin-top: 40px;
        }
        .tabs {
          display: flex;
          border-bottom: 1px solid black;
        }
        .tabs button {
          padding: 10px 20px;
          background: none;
          border: none;
          border-right: 1px solid #ddd;
          font-weight: normal;
          cursor: pointer;
          color: #555;
        }
        .tabs button:last-child {
          border-right: none;
        }
        .tabs .active-tab {
          font-weight: bold;
          border-bottom: 2px solid black;
          color: black;
        }
        .tab-content {
          background-color: #fff;
          padding: 24px;
          color: #444;
          margin-top: 0;
          border: 1px solid #ddd;
          border-top: none;
          border-radius: 0 0 6px 6px;
        }
        .left-align {
          text-align: left;
          line-height: 1.6;
        }

        .related-products {
          margin-top: 60px;
        }
        .related-products h2 {
          text-align: center;
          margin-bottom: 30px;
        }
        .related-grid {
          display: flex;
          gap: 20px;
          justify-content: center;
          flex-wrap: wrap;
        }
        .related-card {
          width: 160px;
          text-align: center;
        }
        .related-card img {
          width: 160px;
          height: 160px;
          object-fit: cover;
          border-radius: 8px;
          margin-bottom: 10px;
        }
      `}</style>
    </div>
  );
};

export default ProductDetail;
