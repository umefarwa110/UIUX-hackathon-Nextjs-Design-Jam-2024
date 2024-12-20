// components/Footer.tsx

import React from "react";
import Image from "next/image";

const Footer = () => {
  return (
    <footer>
      {/* First Section */}
      <div className="bg-gray-100">
        <div className="container mx-auto px-4 py-6 flex justify-between items-center">
          <h2 className="text-xl font-bold text-gray-900">Bandage</h2>
          <div className="flex space-x-4">
            <a href="#" aria-label="Facebook">
              <Image
                src={"/footer_facebook.png"}
                alt="Facebook"
                width={24}
                height={24}
                className="hover:opacity-75"
              />
            </a>
            <a href="#" aria-label="Instagram">
              <Image
                src={"/footer_insta.png"}
                alt="Instagram"
                width={24}
                height={24}
                className="hover:opacity-75"
              />
            </a>
            <a href="#" aria-label="Twitter">
              <Image
                src={"/footer_twitter.png"}
                alt="Twitter"
                width={24}
                height={24}
                className="hover:opacity-75"
              />
            </a>
          </div>
        </div>
      </div>

      {/* Second Section */}
      <div className="bg-white">
        <div className="container mx-auto px-4 py-10">
          <div className="flex flex-wrap justify-between">
            {/* Links Section */}
            <div className="w-full md:w-4/5 grid grid-cols-2 sm:grid-cols-4 gap-6 mb-6 md:mb-0">
              <div>
                <h3 className="text-sm font-semibold uppercase mb-4">Company Info</h3>
                <ul className="space-y-2">
                  <li><a href="#" className="hover:text-blue-500">About Us</a></li>
                  <li><a href="#" className="hover:text-blue-500">Carrier</a></li>
                  <li><a href="#" className="hover:text-blue-500">We are hiring</a></li>
                  <li><a href="#" className="hover:text-blue-500">Blog</a></li>
                </ul>
              </div>
              <div>
                <h3 className="text-sm font-semibold uppercase mb-4">Legal</h3>
                <ul className="space-y-2">
                  <li><a href="#" className="hover:text-blue-500">Privacy Policy</a></li>
                  <li><a href="#" className="hover:text-blue-500">Terms of Service</a></li>
                  <li><a href="#" className="hover:text-blue-500">Cookie Policy</a></li>
                  <li><a href="#" className="hover:text-blue-500">GDPR</a></li>
                </ul>
              </div>
              <div>
                <h3 className="text-sm font-semibold uppercase mb-4">Features</h3>
                <ul className="space-y-2">
                  <li><a href="#" className="hover:text-blue-500">Business Marketing</a></li>
                  <li><a href="#" className="hover:text-blue-500">User Analytics</a></li>
                  <li><a href="#" className="hover:text-blue-500">Live Chat</a></li>
                  <li><a href="#" className="hover:text-blue-500">Unlimited Support</a></li>
                </ul>
              </div>
              <div>
                <h3 className="text-sm font-semibold uppercase mb-4">Resources</h3>
                <ul className="space-y-2">
                  <li><a href="#" className="hover:text-blue-500">iOS & Android</a></li>
                  <li><a href="#" className="hover:text-blue-500">Watch a Demo</a></li>
                  <li><a href="#" className="hover:text-blue-500">Customers</a></li>
                  <li><a href="#" className="hover:text-blue-500">API</a></li>
                </ul>
              </div>
            </div>

            {/* Get in Touch Section */}
            {/* Get in Touch Section */}
            <div className="w-full md:w-1/5">
              <h3 className="text-lg font-semibold text-gray-800 mb-4">Get In Touch</h3>
              <div className="flex items-center bg-white border border-gray-300 rounded-lg overflow-hidden">
                <input
                  type="email"
                  placeholder="Your Email"
                  className="w-full px-4 py-2 text-gray-700 focus:outline-none"
                />
                <button className="bg-blue-500 text-white px-4 py-2 font-semibold hover:bg-blue-600">
                  Subscribe
                </button>
              </div>
              <p className="text-sm text-gray-500 mt-3">Lore imp sum dolor Amit</p>
            </div>

          </div>
        </div>
      </div>

      {/* Third Section */}
      <div className="bg-gray-100">
        <div className="container mx-auto px-4 py-4 text-left text-sm text-gray-500">
          Made With Love By Finland. All Rights Reserved.
        </div>
      </div>
    </footer>
  );
};

export default Footer;
