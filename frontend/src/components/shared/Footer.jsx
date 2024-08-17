import React from 'react';
import { FaFacebook, FaTwitter, FaInstagram, FaLinkedin } from 'react-icons/fa';

const Footer = () => {
  return (
    <footer className="bg-[#6A38C2] text-white py-8 w-full "> 
      <div className="container mx-auto px-4">
        <div className="flex flex-wrap justify-between">
          {/* Company Introduction */}
          <div className="w-full md:w-1/4 mb-6">
            <h3 className="text-lg font-bold mb-4">Company</h3>
            <p className="text-gray-200">
              We are a first leading job-hunting platform dedicated to helping individuals find their dream jobs in Chitral, KPK.
            </p>
          </div>

          {/* Contact Information */}
          <div className="w-full md:w-1/4 mb-6">
            <h3 className="text-lg font-bold mb-4">Contact</h3>
            <ul className="text-gray-200">
              <li>Email: <a href="mailto:info@example.com" className="text-blue-400 hover:underline">info@jobhunt.com</a></li>
              <li>Phone: <a href="tel:+1234567890" className="text-blue-400 hover:underline">+92 343 9275550</a></li>
              <li>Address: Chitral, KPK</li>
            </ul>
          </div>

          {/* Links */}
          <div className="w-full md:w-1/4 mb-6">
            <h3 className="text-lg font-bold mb-4">Quick Links</h3>
            <ul className="text-gray-200">
              <li><a href="/" className="text-blue-400 hover:underline">Home</a></li>
              <li><a href="/about" className="text-blue-400 hover:underline">About Us</a></li>
              <li><a href="/services" className="text-blue-400 hover:underline">Services</a></li>
              <li><a href="/contact" className="text-blue-400 hover:underline">Contact</a></li>
            </ul>
          </div>

          {/* Social Media Links */}
          <div className="w-full md:w-1/4 mb-6">
            <h3 className="text-lg font-bold mb-4">Follow Us</h3>
            <div className="flex space-x-4">
              <a href="https://facebook.com" aria-label="Facebook" className="text-gray-400 hover:text-white">
                <FaFacebook size={24} />
              </a>
              <a href="https://twitter.com" aria-label="Twitter" className="text-gray-400 hover:text-white">
                <FaTwitter size={24} />
              </a>
              <a href="https://instagram.com" aria-label="Instagram" className="text-gray-400 hover:text-white">
                <FaInstagram size={24} />
              </a>
              <a href="https://linkedin.com" aria-label="LinkedIn" className="text-gray-400 hover:text-white">
                <FaLinkedin size={24} />
              </a>
            </div>
          </div>
        </div>
      </div>
      <div className="bg-gray-900 py-4 mt-8">
        <div className="container mx-auto text-center text-gray-400">
          <p>&copy; {new Date().getFullYear()} JobHunt. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
