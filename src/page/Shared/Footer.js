import React from "react";

const Footer = () => {
  return (
    <div className="mt-10">
      <footer className="footer p-10 bg-primary text-base-content">
        <div>
          <span className="footer-title text-white">About</span>
          <a href="0" className="link link-hover text-white">
            About Us
          </a>
          <a href="1" className="link link-hover text-white">
            Features
          </a>
          <a href="2" className="link link-hover text-white">
            New
          </a>
          <a href="3" className="link link-hover text-white">
            Careers
          </a>
        </div>
        <div>
          <span className="footer-title text-white">Company</span>
          <a href="1" className="link link-hover text-white">
            Our Team
          </a>
          <a href="1" className="link link-hover text-white">
            Partner With Us
          </a>
          <a href="1" className="link link-hover text-white">
            FAQ
          </a>
          <a href="1" className="link link-hover text-white">
            Blog
          </a>
        </div>
        <div>
          <span className="footer-title text-white">Support</span>
          <a href="2" className="link link-hover text-white">
            Account
          </a>
          <a href="2" className="link link-hover text-white">
            Support Center
          </a>
          <a href="2" className="link link-hover text-white">
            Feedback
          </a>
          <a href="2" className="link link-hover text-white">
            Contact Us
          </a>
        </div>
      </footer>
    </div>
  );
};

export default Footer;
