import React, { useContext, useEffect, useState } from 'react';
import { ShopContext } from '../context/ShopContext';
import ProductItem from './ProductItem';

const BestSeller = () => {
  // Access the products array from ShopContext
  const { products } = useContext(ShopContext);

  // State to hold the filtered bestseller products
  const [bestseller, setBestSeller] = useState([]);

  // Filter bestseller products when products data changes
  useEffect(() => {
    const bestProduct = products.filter((item) => item.bestSeller);
    setBestSeller(bestProduct.slice(0, 5)); // Limit to top 5 bestsellers
  }, [products]);

  return (
    <div style={styles.wrapper}>
      {/* Title section */}
      <div style={styles.titleWrapper}>
        <div style={styles.titleRow}>
          <p style={styles.text1}>
            Best <span style={styles.text2}>Sellers</span>
          </p>
          <div style={styles.underline}></div>
        </div>
        <p style={styles.lorem}>
          Check out our most loved and popular items this season.
        </p>
      </div>

      {/* Product grid */}
      <div style={styles.grid}>
        {bestseller.map((item) => (
          <ProductItem
            key={item.id}
            id={item.id}
            image={item.image.main}
            name={item.name}
            price={item.price}
          />
        ))}
      </div>
    </div>
  );
};

const styles = {
  wrapper: {
    padding: '20px',
  },
  titleWrapper: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    gap: '8px',
    marginBottom: '20px',
    marginTop: '-10px',
  },
  titleRow: {
    display: 'flex',
    alignItems: 'center',
    gap: '8px',
  },
  text1: {
    color: '#6b7280',
    fontSize: '27px',
    marginBottom: '0',
  },
  text2: {
    color: '#374151',
    fontWeight: '600',
    marginLeft: '6px',
  },
  underline: {
    width: '60px',
    height: '2px',
    backgroundColor: '#374151',
  },
  lorem: {
    fontSize: '14px',
    color: '#6b7280',
    textAlign: 'center',
    marginTop: '10px',
    marginBottom: '10px',
  },
  grid: {
    display: 'grid',
    gridTemplateColumns: 'repeat(auto-fill, minmax(160px, 1fr))',
    gap: '14px',
    paddingTop: '10px',
    justifyItems: 'center',
  },
};

export default BestSeller;
