import React, { useContext, useState } from 'react';
import { assets } from '../assets/assets';
import { Link, NavLink } from 'react-router-dom';
import './Navbar.css';
import { ShopContext } from '../context/ShopContext';

const Navbar = () => {
  // State for hover effect on nav items
  const [hovered, setHovered] = useState(null);

  // State to toggle mobile menu visibility
  const [visible, setVisible] = useState(false);

  // Context values: show search modal & get cart count
  const { setShowSearch, getCartCount } = useContext(ShopContext);

  // Define navigation items for the navbar
  const navItems = [
    { path: '/', label: 'HOME' },
    { path: '/collection', label: 'COLLECTION' },
    { path: '/about', label: 'ABOUT' },
    { path: '/contact', label: 'CONTACT' },
  ];

  return (
    <div className="navbar">
      
      {/* Logo (links to homepage) */}
      <Link to='/'>
        <img src={assets.logo} className="logo" alt="Logo" />
      </Link>

      {/* Navigation Links */}
      <ul className="nav-links">
        {navItems.map((item, index) => (
          <NavLink
            key={item.path}
            to={item.path}
            className="nav-link"
            onMouseEnter={() => setHovered(index)}
            onMouseLeave={() => setHovered(null)}
          >
            <p>{item.label}</p>

            <hr
              className="separator"
              style={{ opacity: hovered === index ? 1 : 0 }}
            />
          </NavLink>
        ))}
      </ul>
      <div className="icon-section">

        {/* Search Icon */}
        <img
          onClick={() => setShowSearch(true)}
          src={assets.searchIcon}
          className="icon"
          alt="search"
        />

        <div className="profile-container">
          <img src={assets.profileIcon} className="icon" alt="profile" />
          <div className="dropdown-menu">
            <p className="dropdown-item">Profile</p>
            <p className="dropdown-item">Orders</p>
            <p className="dropdown-item">Logout</p>
          </div>
        </div>

        <Link to="/cart" className="cart-container">
          <img src={assets.cart} className="cart-icon" alt="cart" />
          <p className="cart-count">{getCartCount()}</p>
        </Link>

        {/* Mobile Menu Icon (visible only on smaller screens) */}
        <img
          onClick={() => setVisible(true)}
          src={assets.menuIcon}
          className="menu-icon"
          alt="menu"
        />
      </div>

      {/* Mobile Sidebar Menu */}
      <div className={`mobile-menu ${visible ? 'show' : ''}`}>
        <div className="mobile-menu-content">

          {/* Back Button */}
          <div onClick={() => setVisible(false)} className="back-btn">
            <p>Back</p>
          </div>

          <NavLink to="/" className="mobile-link">HOME</NavLink>
          <NavLink to="/collection" className="mobile-link">COLLECTION</NavLink>
          <NavLink to="/about" className="mobile-link">ABOUT</NavLink>
          <NavLink to="/contact" className="mobile-link">CONTACT</NavLink>
        </div>
      </div>
    </div>
  );
};

export default Navbar;

