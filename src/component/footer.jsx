import React, { useState } from 'react';
import { FaFacebookF, FaTwitter, FaInstagram, FaLinkedinIn } from 'react-icons/fa';

const Footer = () => {
  const [Adress, setAdress] = useState("New Karachi Sector 5-E")
  const [Email, setEmail] = useState("Muhammad.yousuf8166@gmail.com")
  const [PhoneNum, setPhoneNum] = useState("+92 313 298 0452")
  return (
    <footer className="bg-[var(--primary)] text-[var(--light)] py-12">
      <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 md:grid-cols-4 gap-8">
        
        {/* Logo & About */}
        <div>
          <h2 className="text-2xl font-bold text-[var(--secondary)] mb-4">Mohammad Yousuf</h2>
          <p className="text-sm leading-relaxed">
            Building modern and responsive web applications with React, Tailwind, and more.
          </p>
        </div>

        {/* Quick Links */}
        <div>
          <h3 className="font-semibold text-lg mb-4">Quick Links</h3>
          <ul className="space-y-2">
            <li><a href="#" className="hover:text-[var(--secondary)] transition-colors">Home</a></li>
            <li><a href="#" className="hover:text-[var(--secondary)] transition-colors">About</a></li>
            <li><a href="#" className="hover:text-[var(--secondary)] transition-colors">Services</a></li>
            <li><a href="#" className="hover:text-[var(--secondary)] transition-colors">Portfolio</a></li>
            <li><a href="#" className="hover:text-[var(--secondary)] transition-colors">Contact</a></li>
          </ul>
        </div>

        {/* Contact */}
        <div className='flex flex-col gap-y-1'>
          <h3 className="font-semibold text-lg mb-4">Contact</h3>
          <p className="text-sm">{Adress}</p>
          <p className="text-sm">{Email}</p>
          <p className="text-sm">{PhoneNum}</p>
        </div>

        {/* Social & Newsletter */}
        <div>
          <h3 className="font-semibold text-lg mb-4">Follow Us</h3>
          <div className="flex gap-3 mb-4">
            <a href="#" className="p-2 bg-[var(--secondary)] rounded-full text-[var(--primary)] hover:scale-110 transition-transform">
              <FaFacebookF size={16} />
            </a>
            <a href="#" className="p-2 bg-[var(--secondary)] rounded-full text-[var(--primary)] hover:scale-110 transition-transform">
              <FaTwitter size={16} />
            </a>
            <a href="#" className="p-2 bg-[var(--secondary)] rounded-full text-[var(--primary)] hover:scale-110 transition-transform">
              <FaInstagram size={16} />
            </a>
            <a href="#" className="p-2 bg-[var(--secondary)] rounded-full text-[var(--primary)] hover:scale-110 transition-transform">
              <FaLinkedinIn size={16} />
            </a>
          </div>

        
        </div>
        
      </div>

      {/* Bottom */}
      <div className="mt-12 border-t border-gray-700 pt-6 text-center text-sm">
        &copy; {new Date().getFullYear()} Your Name. All Rights Reserved.
      </div>
    </footer>
  );
};

export default Footer;
