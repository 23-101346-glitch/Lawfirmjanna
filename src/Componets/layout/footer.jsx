import React from 'react';
import './footer.css'

const Footer = () => {
    return ( <>
    <footer className="footer">
  <div className="footer-container">
    <div className="footer-about">
      <h3 className='logo'>Lexora</h3>
      <p>
        Providing expert legal services in corporate, criminal, and family law.
        Trusted by clients across Egypt.
      </p>
    </div>

    <div className="footer-links">
      <h4>Quick Links</h4>
      <ul>
        <li><a href="#s1">Home</a></li>
        <li><a href="#s3">Our Vision</a></li>
        <li><a href="#s6">Team</a></li>
        <li><a href="#contact">Contact</a></li>
      </ul>
    </div>

    <div className="footer-contact">
      <h4>Contact Us</h4>
      <p>Phone: +20 123 456 789</p>
      <p>Email: info@lawfirm.com</p>
      <p>Address: 123 Main Street, Cairo, Egypt</p>
    </div>

 
  </div>

  <div className="footer-bottom">
    <p>© 2026 LawFirm. All rights reserved.</p>
  </div>
</footer>
    </> );
}
 
export default Footer;