import React from 'react';
import { FaPhone, FaEnvelope, FaMapMarkerAlt } from 'react-icons/fa';

export default function Footer() {
  return (
    <footer className="bg-gray-400 text-white py-8 mt-auto">
      <div className="max-w-6xl mx-auto flex flex-col md:flex-row justify-between items-center px-6">
        <div>
          <h4 className="font-semibold text-lg mb-2">Quick Links</h4>
          <ul className="space-y-1">
            <li><a href="#" className="hover:underline">Home</a></li>
            <li><a href="#about" className="hover:underline">About</a></li>
            <li><a href="#courses" className="hover:underline">Courses</a></li>
            <li><a href="#admission" className="hover:underline">Admission</a></li>
          </ul>
        </div>
        <div className="mt-6 md:mt-0">
          <h4 className="font-semibold text-lg mb-2">Contact Us</h4>
          <ul className="space-y-1 text-sm">
            <li className="flex items-center"><FaPhone className="mr-2" /> +1 234 567 890</li>
            <li className="flex items-center"><FaEnvelope className="mr-2" /> school@email.com</li>
            <li className="flex items-center"><FaMapMarkerAlt className="mr-2" /> 123 Main Street, City</li>
          </ul>
        </div>
      </div>
      <p className="text-center text-sm mt-8 text-blue-100">&copy; {new Date().getFullYear()} BrightFuture School. All rights reserved.</p>
    </footer>
  );
}
