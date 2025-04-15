import React, { useContext, useEffect, useState } from 'react';
import { useLocation } from 'react-router-dom';
import { ShopContext } from '../context/ShopContext';
import { assets } from '../assets/assets';

const SearchBar = () => {
  const { search, setSearch, showSearch, setShowSearch } = useContext(ShopContext);
  const location = useLocation();
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    if (location.pathname.includes('/collection')) {
      setVisible(true);
    } else {
      setVisible(false);
    }
  }, [location]);

  if (!visible || !showSearch) return null;

  return (
    <>
      <div className="search-bar-wrapper">
        <div className="search-bar-container">
          <input
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            className="search-input"
            type="text"
            placeholder="Search products..."
          />
          <img className="search-icon" src={assets.searchIcon} alt="Search Icon" />
          <img
            onClick={() => setShowSearch(false)}
            className="close-icon"
            src={assets.CrossIcon}
            alt="Close Icon"
          />
        </div>
      </div>

      <style>{`
        .search-bar-wrapper {
          position: relative;
          width: 100%;
          background-color: #f9f9f9;
          padding: 12px 0;
          border-top: 1px solid #ccc;
          border-bottom: 1px solid #ccc;
          z-index: 10;
        }

        .search-bar-container {
          max-width: 700px;
          margin: 0 auto;
          display: flex;
          align-items: center;
          background-color: white;
          border: 1px solid #ccc;
          border-radius: 999px;
          padding: 6px 12px;
          box-shadow: 0 1px 4px rgba(0, 0, 0, 0.05);
        }

        .search-input {
          flex: 1;
          border: none;
          outline: none;
          padding: 8px 10px;
          font-size: 15px;
          border-radius: 999px;
          background-color: transparent;
        }

        .search-icon {
          width: 18px;
          height: 18px;
          margin-left: 8px;
        }

        .close-icon {
          width: 16px;
          height: 16px;
          margin-left: 10px;
          cursor: pointer;
        }

        @media (max-width: 768px) {
          .search-bar-container {
            max-width: 90%;
          }

          .search-input {
            font-size: 14px;
          }
        }
      `}</style>
    </>
  );
};

export default SearchBar;
