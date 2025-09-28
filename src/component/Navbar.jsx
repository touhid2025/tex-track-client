import { useState, useEffect } from "react";
import { Link, NavLink, useLocation } from "react-router";
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
  FaSignInAlt,
  FaRocket,
 
  FaCrown,
  FaShieldAlt,
  FaHandSparkles
} from "react-icons/fa";
import { MdDashboard, MdSpatialTracking } from "react-icons/md";
import { FaWandSparkles } from "react-icons/fa6";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [activeHover, setActiveHover] = useState(null);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navItems = [
    { name: "Home", path: "/", icon: FaHome },
    { name: "About", path: "/about", icon: FaInfoCircle },
    { name: "Features", path: "/features", icon: MdSpatialTracking },
    { name: "Contact", path: "/contact", icon: FaUser },
  ];

  const customCss = `
    @property --angle {
      syntax: '<angle>';
      initial-value: 0deg;
      inherits: false;
    }

    @property --glow {
      syntax: '<percentage>';
      initial-value: 0%;
      inherits: false;
    }

    @keyframes shimmer-spin {
      to {
        --angle: 360deg;
      }
    }

    @keyframes glow-pulse {
      0%, 100% { --glow: 0%; }
      50% { --glow: 100%; }
    }

    .nav-glow {
      background: conic-gradient(
        from var(--angle) at 50% 50%,
        #f59e0b,
        #eab308,
        #fbbf24,
        #f59e0b
      );
      animation: shimmer-spin 3s linear infinite, glow-pulse 2s ease-in-out infinite;
      filter: blur(20px);
      opacity: 0.7;
    }

    .logo-glow {
      text-shadow: 
        0 0 20px rgba(245, 158, 11, 0.8),
        0 0 40px rgba(245, 158, 11, 0.6),
        0 0 60px rgba(245, 158, 11, 0.4);
    }

    .nav-item-glow {
      box-shadow: 
        0 0 15px rgba(245, 158, 11, 0.4),
        0 0 30px rgba(245, 158, 11, 0.2);
    }

    .particle {
      position: absolute;
      background: radial-gradient(circle, #f59e0b, transparent);
      border-radius: 50%;
      pointer-events: none;
    }
  `;

  const createParticles = (event) => {
    const button = event.currentTarget;
    const rect = button.getBoundingClientRect();
    const particles = 8;
    
    for (let i = 0; i < particles; i++) {
      const particle = document.createElement('div');
      particle.className = 'particle';
      
      const size = Math.random() * 10 + 5;
      const angle = Math.random() * 360;
      const distance = Math.random() * 50 + 20;
      
      particle.style.width = `${size}px`;
      particle.style.height = `${size}px`;
      particle.style.left = '50%';
      particle.style.top = '50%';
      particle.style.opacity = '1';
      
      button.appendChild(particle);
      
      const animation = particle.animate([
        { 
          transform: `translate(-50%, -50%) rotate(${angle}deg) translate(0px)`,
          opacity: 1
        },
        { 
          transform: `translate(-50%, -50%) rotate(${angle}deg) translate(${distance}px)`,
          opacity: 0
        }
      ], {
        duration: 800,
        easing: 'cubic-bezier(0.2, 0, 0.8, 1)'
      });
      
      animation.onfinish = () => particle.remove();
    }
  };

  return (
    <>
      <style>{customCss}</style>
      <nav className={`fixed top-0 w-full z-50 transition-all duration-500 ${
        scrolled 
          ? 'bg-white/95 backdrop-blur-2xl shadow-2xl ' 
          : 'bg-gradient-to-r from-amber-500/10 via-amber-400/5 to-amber-600/10 backdrop-blur-3xl'
      }`}>
        {/* Animated Background Glow */}
        <div className="absolute inset-0 nav-glow opacity-0 hover:opacity-30 transition-opacity duration-1000" />
        
        {/* Floating Particles Container */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <div className="absolute -top-10 -left-10 w-20 h-20 bg-amber-400 rounded-full blur-3xl opacity-20 animate-pulse" />
          <div className="absolute -top-5 -right-5 w-16 h-16 bg-amber-300 rounded-full blur-2xl opacity-30 animate-pulse animation-delay-1000" />
        </div>

        <div className="max-w-7xl mx-auto px-4 py-3 relative">
          <div className="flex justify-between items-center">
            {/* Logo */}
            <Link 
              to="/" 
              className="relative group flex items-center"
              onMouseEnter={(e) => createParticles(e)}
            >
              <div className="relative">
                <div className="absolute -inset-4 bg-amber-500/20 rounded-2xl blur-xl group-hover:bg-amber-500/40 transition-all duration-500" />
                <div className="relative flex items-center bg-gradient-to-br from-amber-500 to-amber-600 p-3 rounded-2xl shadow-2xl group-hover:scale-110 transition-transform duration-300">
                  <FaRocket className="text-white text-2xl" />
                </div>
              </div>
              
              <div className="ml-4 flex flex-col">
                <span className={`text-3xl font-black bg-gradient-to-r from-amber-600 to-amber-800 bg-clip-text text-transparent logo-glow transition-all duration-300 ${
                  scrolled ? 'text-2xl' : 'text-3xl'
                }`}>
                  Tex<span className="text-amber-500">Track</span>
                </span>
                <span className="text-xs text-amber-600 font-semibold tracking-wider opacity-80">
                  SMART TEXTILE TRACKING
                </span>
              </div>
            </Link>

            {/* Desktop Navigation */}
            <div className="hidden lg:flex items-center space-x-1">
              {navItems.map((item, index) => {
                const Icon = item.icon;
                return (
                  <div key={item.name} className="relative">
                    <NavLink
                      to={item.path}
                      onMouseEnter={() => setActiveHover(index)}
                      onMouseLeave={() => setActiveHover(null)}
                      className={({ isActive }) => 
                        `relative flex items-center gap-3 px-6 py-3 rounded-2xl font-semibold transition-all duration-500 group overflow-hidden ${
                          isActive 
                            ? 'text-amber-700 bg-amber-100/80 shadow-lg scale-105' 
                            : 'text-gray-700 hover:text-amber-700 hover:bg-white/80'
                        }`
                      }
                    >
                      {/* Hover Effect */}
                      <div className={`absolute inset-0 bg-gradient-to-r from-amber-400/10 to-amber-600/10 rounded-2xl transition-all duration-500 ${
                        activeHover === index ? 'opacity-100 scale-100' : 'opacity-0 scale-95'
                      }`} />
                      
                      {/* Icon */}
                      <Icon className={`text-xl transition-all duration-300 ${
                        location.pathname === item.path ? 'text-amber-600 scale-110' : 'text-gray-500 group-hover:text-amber-500'
                      }`} />
                      
                      {/* Text */}
                      <span className="relative z-10">{item.name}</span>
                      
                      {/* Active Indicator */}
                      {location.pathname === item.path && (
                        <div className="absolute -bottom-2 left-1/2 transform -translate-x-1/2 w-1 h-1 bg-amber-500 rounded-full animate-ping" />
                      )}
                    </NavLink>
                  </div>
                );
              })}

              {/* Auth Buttons */}
              <div className="flex items-center gap-3 ml-4">
                <Link
                  to="/login"
                  onMouseEnter={(e) => createParticles(e)}
                  className="relative group flex items-center gap-3 px-6 py-3 rounded-2xl font-semibold text-amber-700 hover:text-amber-800 transition-all duration-300 overflow-hidden"
                >
                  <div className="absolute inset-0 bg-amber-100/50 rounded-2xl group-hover:bg-amber-100 transition-all duration-300" />
                  <FaSignInAlt className="text-lg relative z-10" />
                  <span className="relative z-10">Login</span>
                </Link>

                <Link 
                  to="/signup"
                  onMouseEnter={(e) => createParticles(e)}
                  className="relative group flex items-center gap-3 px-8 py-3 rounded-2xl font-bold text-white transition-all duration-500 overflow-hidden shadow-2xl"
                >
                  {/* Animated Gradient Border */}
                  <div 
                    className="absolute inset-0 rounded-2xl p-[2px]"
                    style={{
                      background: 'conic-gradient(from var(--angle), #f59e0b, #eab308, #fbbf24, #f59e0b)',
                      animation: 'shimmer-spin 2s linear infinite'
                    }}
                  />
                  
                  {/* Main Button Content */}
                  <div className="absolute inset-[2px] bg-gradient-to-r from-amber-500 to-amber-600 rounded-2xl group-hover:from-amber-600 group-hover:to-amber-700 transition-all duration-300" />
                  
                  {/* Sparkle Icon */}
                  <FaHandSparkles className="relative z-10 text-amber-200 group-hover:scale-110 group-hover:rotate-180 transition-all duration-500" />
                  
                  {/* Text */}
                  <span className="relative z-10">Get Started</span>
                  
                  {/* Shine Effect */}
                  <div className="absolute inset-0 rounded-2xl bg-gradient-to-r from-transparent via-white/20 to-transparent -skew-x-12 translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-1000" />
                </Link>
              </div>
            </div>

            {/* Mobile Menu Button */}
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="lg:hidden relative p-3 rounded-2xl bg-gradient-to-r from-amber-500 to-amber-600 text-white shadow-2xl hover:shadow-3xl transition-all duration-300 hover:scale-110"
            >
              {isOpen ? <FaTimes className="text-xl" /> : <FaBars className="text-xl" />}
              
              {/* Button Glow */}
              <div className="absolute inset-0 rounded-2xl bg-amber-400 blur-md opacity-50 animate-pulse" />
            </button>
          </div>

          {/* Mobile Menu */}
          {isOpen && (
            <div className="lg:hidden absolute top-full left-0 right-0 mt-2 bg-white/95 backdrop-blur-2xl rounded-3xl border border-amber-200/30 shadow-2xl overflow-hidden">
              <div className="p-4 space-y-2">
                {navItems.map((item) => {
                  const Icon = item.icon;
                  return (
                    <NavLink
                      key={item.name}
                      to={item.path}
                      onClick={() => setIsOpen(false)}
                      className={({ isActive }) =>
                        `flex items-center gap-4 p-4 rounded-2xl font-semibold transition-all duration-300 ${
                          isActive
                            ? 'bg-amber-500 text-white shadow-lg scale-105'
                            : 'text-gray-700 hover:bg-amber-50 hover:text-amber-700'
                        }`
                      }
                    >
                      <Icon className="text-xl" />
                      <span>{item.name}</span>
                    </NavLink>
                  );
                })}

                {/* Mobile Auth Buttons */}
                <div className="pt-4 mt-4 border-t border-amber-200/30 space-y-3">
                  <Link
                    to="/login"
                    onClick={() => setIsOpen(false)}
                    className="flex items-center gap-4 p-4 rounded-2xl font-semibold text-amber-700 bg-amber-50 hover:bg-amber-100 transition-all duration-300"
                  >
                    <FaSignInAlt />
                    <span>Login</span>
                  </Link>

                  <Link
                    to="/signup"
                    onClick={() => setIsOpen(false)}
                    className="flex items-center gap-4 p-4 rounded-2xl font-bold text-white bg-gradient-to-r from-amber-500 to-amber-600 shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105"
                  >
                    <FaWandSparkles />
                    <span>Get Started Free</span>
                  </Link>
                </div>
              </div>
            </div>
          )}
        </div>
      </nav>

      {/* Spacer for fixed nav */}
      <div className="h-20" />
    </>
  );
};

export default Navbar;