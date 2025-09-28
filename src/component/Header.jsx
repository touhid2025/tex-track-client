import { useState } from "react";
import { Link, NavLink } from "react-router";
import { 
  FaBars, 
  FaTimes, 
  FaHome, 
  FaInfoCircle, 
  FaTrophy, 
  FaRobot, 
  FaBlog, 
  FaUserCog, 
  FaUser, 
  FaUserPlus,
  FaSignInAlt
} from "react-icons/fa";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const navItems = [
    { name: "Home", path: "/" },
    { name: "About", path: "/about" },
    // { name: "Leaderboard", path: "/leaderboard", icon: FaTrophy },
    // { name: "Chatbot", path: "/chatbot", icon: FaRobot },
    { name: "Contact", path: "/contact" },
    // { name: "Admin", path: "/admin", icon: FaUserCog },
  ];

  const customCss = `
    @property --angle {
      syntax: '<angle>';
      initial-value: 0deg;
      inherits: false;
    }

    @keyframes shimmer-spin {
      to {
        --angle: 360deg;
      }
    }
  `;

  return (
    <nav className="bg-amber-200  backdrop-blur-2xl text-white shadow-md sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 py-3 flex justify-between items-center">
        <Link to="/" className="text-3xl text-gray-800 font-bold flex items-center">
          <span className="bg-amber-500 text-white p-2 mr-1 rounded-lg">
            <FaHome className="text-xl" />
          </span>
          Tex<span className="text-amber-500">Track</span>
        </Link>

        {/* Desktop menu */}
        <ul className="hidden md:flex gap-3 items-center text-lg">
          {navItems.map((item) => {
            
            return (
              <li key={item.name}>
                <NavLink
                  to={item.path}
                  className={({ isActive }) => 
                    `flex items-center gap-2 hover:bg-gray-300 rounded-full px-7 py-2 text-gray-600 transition-colors duration-200 ${
                      isActive ? 'bg-gray-300 text-amber-600' : ''
                    }`
                  }
                >
                  
                  {item.name}
                </NavLink>
              </li>
            );
          })}
          
          <Link
            to="/login"
            className="flex items-center gap-2 text-amber-500 mx-3 border-2 border-amber-600 rounded-full px-7 py-2 hover:bg-amber-500 hover:text-white transition-colors duration-200"
          >
            <FaSignInAlt />
            Login
          </Link>
          
          <Link to="/register" className="flex items-center gap-2">
            <div className="flex items-center justify-center font-sans">
              <style>{customCss}</style>
              <button className="relative inline-flex items-center justify-center p-[1.5px] bg-purple-800 shadow-md rounded-full overflow-hidden group">
                <div 
                  className="absolute inset-0" 
                  style={{
                    background: 'conic-gradient(from var(--angle), transparent 25%, #06b6d4, transparent 50%)',
                    animation: 'shimmer-spin 2.5s linear infinite'
                  }} 
                />
                <span className="relative z-10 inline-flex items-center justify-center w-full h-full px-8 py-2 text-white bg-amber-500 rounded-full group-hover:bg-amber-600 transition-colors duration-300 gap-2">
                  <FaUserPlus />
                  Register
                </span>
              </button>
            </div>
          </Link>
        </ul>

        {/* Mobile menu button */}
        <button
          className="md:hidden text-xl bg-amber-500 text-white p-2 rounded-lg"
          onClick={() => setIsOpen(!isOpen)}
        >
          {isOpen ? <FaTimes /> : <FaBars />}
        </button>
      </div>

      {/* Mobile menu items */}
      {isOpen && (
        <div className="md:hidden bg-white/40 backdrop-blur-2xl px-6 pb-6 pt-2">
          <ul className="space-y-3">
            {navItems.map((item) => {
              
              return (
                <li key={item.name}>
                  <Link
                    to={item.path}
                    onClick={() => setIsOpen(false)}
                    className="flex items-center gap-3 py-3 px-4 text-gray-700 hover:bg-gray-100 rounded-lg transition-colors duration-200 border-b border-gray-100"
                  >
                    
                    <span className="text-lg font-medium">{item.name}</span>
                  </Link>
                </li>
              );
            })}
            
            {/* Mobile Auth Buttons */}
            <div className="flex flex-col gap-3 mt-4 pt-4 border-t border-gray-200">
              <Link
                to="/login"
                onClick={() => setIsOpen(false)}
                className="flex items-center gap-3 py-3 px-4 text-amber-600 border-2 border-amber-600 rounded-lg hover:bg-amber-50 transition-colors duration-200"
              >
                <FaSignInAlt />
                <span className="font-medium">Login</span>
              </Link>
              
              <Link
                to="/register"
                onClick={() => setIsOpen(false)}
                className="flex items-center gap-3 py-3 px-4 bg-amber-500 text-white rounded-lg hover:bg-amber-600 transition-colors duration-200 font-medium"
              >
                <FaUserPlus />
                <span>Register</span>
              </Link>
            </div>
          </ul>
        </div>
      )}
    </nav>
  );
};

export default Navbar;