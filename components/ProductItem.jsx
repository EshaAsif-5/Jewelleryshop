import React, { useContext } from 'react';
import { ShopContext } from '../context/ShopContext';
import { Link } from 'react-router-dom';

const ProductItem = ({ id, image, name, price }) => {
  const { currency } = useContext(ShopContext);

  return (
    <div style={styles.card}>
      <Link to={`/product/${id}`} style={styles.link}>
        <img src={image} alt={name} style={styles.image} />
        <p style={styles.name}>{name}</p>
        <p style={styles.price}>{currency}{price}</p>
      </Link>
    </div>
  );
};

const styles = {
  card: {
    width: '100%',
    height: '260px',
    borderRadius: '8px',
    padding: '12px',
    textAlign: 'center',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'space-between',
  },
  link: {
    textDecoration: 'none',
    color: 'inherit',
    height: '100%',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'space-between',
  },
  image: {
    width: '100%',
    height: '150px',
    objectFit: 'cover',
    borderRadius: '4px',
    marginBottom: '8px',
  },
  name: {
    fontSize: '16px',
    fontWeight: '500',
    color: '#333',
    margin: '5px 0',
  },
  price: {
    fontSize: '14px',
    color: '#888',
  },
};

export default ProductItem;

