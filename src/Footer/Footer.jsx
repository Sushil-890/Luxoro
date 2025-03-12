import React from "react";

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-links">
        <div>
          <h3>Customer Policies</h3>
          <ul>
            <li><a href="#contact">Contact Us</a></li>
            <li><a href="#faq">FAQ</a></li>
            <li><a href="#terms">Terms & Conditions</a></li>
          </ul>
        </div>
        <div>
          <h3>Experience MyClone</h3>
          <p>Get our app on mobile. Stay connected.</p>
        </div>
      </div>
      <div className="footer-bottom">
        <p>&copy; 2025 MyClone. All rights reserved.</p>
      </div>
    </footer>
  );
};
export default Footer;