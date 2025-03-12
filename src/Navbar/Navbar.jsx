import './Navbar.css';
import { Link } from 'react-router-dom';
import { useState } from 'react';

const Navbar = ({ onSearch }) => {
  const [searchQuery, setSearchQuery] = useState("");

  const handleSearch = () => {
    onSearch(searchQuery.toLowerCase()); // Pass search query to parent
  };

  return (
    <nav className="navbar">
      <div className="logo">Luxora</div>
      <ul className="nav-links">
        <li className='n1'><Link to="/">Products</Link></li>
        <li className='n1'><Link to="/category/men's clothing">Men's Clothing</Link></li>
        <li className='n1'><Link to="/category/jewelery">Jewelery</Link></li>
        <li className='n1'><Link to="/category/electronics">Electronics</Link></li>
        <li className='n1'><Link to="/category/women's clothing">Women's Clothing</Link></li>
      </ul>
      <div className="nav-right">
        <input 
          type="text" 
          placeholder="Search for products, brands, and more"
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
        />
        <button className="nav-btn" onClick={handleSearch}>Search</button>
        <Link to="/profile">Profile</Link>
        <Link to="/wishlist">Wishlist</Link>
        <Link to="/bag">Bag</Link>
      </div>
    </nav>
  );
};

export default Navbar;
