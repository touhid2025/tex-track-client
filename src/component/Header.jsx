import React from 'react';
import { FaSchool } from 'react-icons/fa';

const navLinks = [
  { name: 'Home', href: '#' },
  { name: 'About', href: '#about' },
  { name: 'Courses', href: '#courses' },
  { name: 'Admission', href: '#admission' },
  { name: 'Contact', href: '#contact' },
];

export default function Header() {
  return (
    <header className="w-full bg-white shadow-sm px-6 py-4 flex items-center justify-between">
      <div className="flex items-center space-x-3">
        <FaSchool className="text-blue-600 text-3xl" />
        <span className="text-2xl font-bold text-blue-700 tracking-wide">BrightFuture School</span>
      </div>
      <nav>
        <ul className="flex space-x-6 font-medium text-gray-700">
          {navLinks.map(link => (
            <li key={link.name}>
              <a
                href={link.href}
                className="hover:text-blue-600 transition-colors"
              >
                {link.name}
              </a>
            </li>
          ))}
        </ul>
      </nav>
    </header>
  );
}
