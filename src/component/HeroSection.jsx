import React, { useState, useEffect, useRef } from "react";
import { Link } from "react-router";
import { 
  FaRocket, 
  FaPlay, 
  FaStar, 
  
  FaChartLine, 
  FaSync,
  FaArrowRight,
  FaDownload,
  FaAward,
  FaUsers,
  FaGlobe,
  FaShieldAlt
} from "react-icons/fa";
import { MdPrecisionManufacturing, MdAutoGraph, MdSpeed } from "react-icons/md";

const HeroSection = () => {
  const [currentText, setCurrentText] = useState(0);
  const [isVisible, setIsVisible] = useState(false);
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const canvasRef = useRef(null);

  const rotatingTexts = [
    "Textile Production",
    "Quality Control",
    "Supply Chain",
    "Batch Tracking",
    "Manufacturing"
  ];

  const features = [
    { icon: MdSpeed, text: "85% Faster Setup", color: "from-blue-500 to-cyan-500" },
    { icon: FaChartLine, text: "99.2% Accuracy", color: "from-green-500 to-emerald-500" },
    { icon: FaSync, text: "Real-time Updates", color: "from-purple-500 to-pink-500" },
    { icon: FaShieldAlt, text: "Enterprise Security", color: "from-amber-500 to-orange-500" }
  ];

  const stats = [
    { number: "1000+", label: "Manufacturers", icon: FaUsers },
    { number: "99.9%", label: "Uptime", icon: FaGlobe },
    { number: "24/7", label: "Support", icon: FaAward },
    { number: "50%", label: "Time Saved", icon: MdSpeed }
  ];

  useEffect(() => {
    setIsVisible(true);
    
    const textInterval = setInterval(() => {
      setCurrentText((prev) => (prev + 1) % rotatingTexts.length);
    }, 2000);

    return () => clearInterval(textInterval);
  }, []);

  useEffect(() => {
    const handleMouseMove = (e) => {
      setMousePosition({ x: e.clientX, y: e.clientY });
    };

    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  const ParticleBackground = () => {
    useEffect(() => {
      const canvas = canvasRef.current;
      const ctx = canvas.getContext('2d');
      let animationFrameId;

      const setCanvasSize = () => {
        canvas.width = window.innerWidth;
        canvas.height = window.innerHeight;
      };

      setCanvasSize();
      window.addEventListener('resize', setCanvasSize);

      const particles = [];
      const particleCount = 50;

      class Particle {
        constructor() {
          this.x = Math.random() * canvas.width;
          this.y = Math.random() * canvas.height;
          this.size = Math.random() * 3 + 1;
          this.speedX = Math.random() * 1 - 0.5;
          this.speedY = Math.random() * 1 - 0.5;
          this.color = `hsl(${Math.random() * 40 + 20}, 100%, 60%)`;
        }

        update() {
          this.x += this.speedX;
          this.y += this.speedY;

          if (this.x > canvas.width) this.x = 0;
          else if (this.x < 0) this.x = canvas.width;
          if (this.y > canvas.height) this.y = 0;
          else if (this.y < 0) this.y = canvas.height;
        }

        draw() {
          ctx.fillStyle = this.color;
          ctx.beginPath();
          ctx.arc(this.x, this.y, this.size, 0, Math.PI * 2);
          ctx.fill();
        }
      }

      const init = () => {
        for (let i = 0; i < particleCount; i++) {
          particles.push(new Particle());
        }
      };

      const animate = () => {
        ctx.clearRect(0, 0, canvas.width, canvas.height);
        
        particles.forEach(particle => {
          particle.update();
          particle.draw();
        });

        animationFrameId = requestAnimationFrame(animate);
      };

      init();
      animate();

      return () => {
        cancelAnimationFrame(animationFrameId);
        window.removeEventListener('resize', setCanvasSize);
      };
    }, []);

    return (
      <canvas
        ref={canvasRef}
        className="absolute inset-0 pointer-events-none opacity-30"
        style={{ zIndex: 0 }}
      />
    );
  };

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900">
      {/* Advanced Background Elements */}
      <ParticleBackground />
      
      {/* Animated Gradient Orbs */}
      <div className="absolute inset-0 overflow-hidden">
        <div 
          className="absolute w-96 h-96 bg-gradient-to-r from-amber-500/20 to-orange-500/20 rounded-full blur-3xl animate-pulse"
          style={{
            top: `${mousePosition.y / 10}px`,
            left: `${mousePosition.x / 10}px`,
            transform: 'translate(-50%, -50%)'
          }}
        />
        <div className="absolute -top-40 -right-40 w-80 h-80 bg-amber-500/10 rounded-full blur-3xl animate-pulse animation-delay-2000" />
        <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-orange-500/10 rounded-full blur-3xl animate-pulse animation-delay-4000" />
        
        {/* Grid Pattern */}
        <div className="absolute inset-0 opacity-5">
          <div 
            className="absolute inset-0" 
            style={{
              backgroundImage: `linear-gradient(#ffffff 1px, transparent 1px),
                               linear-gradient(90deg, #ffffff 1px, transparent 1px)`,
              backgroundSize: '50px 50px'
            }} 
          />
        </div>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 py-20 text-center">
        {/* Announcement Bar */}
        <div className="inline-flex items-center gap-3 bg-gradient-to-r from-amber-500/20 to-orange-500/20 backdrop-blur-sm border border-amber-500/30 rounded-2xl px-6 py-3 mb-8 shadow-2xl">
          <div className="flex items-center gap-2">
            <div className="w-2 h-2 bg-amber-400 rounded-full animate-ping" />
            <span className="text-amber-300 font-semibold text-sm">NEW</span>
          </div>
          <span className="text-white text-sm">AI-Powered Quality Detection Launched!</span>
          <div className="flex items-center gap-1">
            {[...Array(5)].map((_, i) => (
              <FaStar key={i} className="text-amber-400 text-xs" />
            ))}
          </div>
        </div>

        {/* Main Heading */}
        <div className={`transition-all duration-1000 transform ${
          isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'
        }`}>
          <h1 className="text-5xl lg:text-8xl font-black mb-6 leading-tight">
            <span className="bg-gradient-to-r from-amber-400 via-amber-300 to-orange-400 bg-clip-text text-transparent">
              Revolutionize
            </span>
            <br />
            <span className="text-white">Your </span>
            <span className="relative inline-block">
              <span className="bg-gradient-to-r from-amber-500 to-orange-500 bg-clip-text text-transparent">
                {rotatingTexts[currentText]}
              </span>
              <div className="absolute -bottom-2 left-0 w-full h-1 bg-gradient-to-r from-amber-500 to-orange-500 rounded-full transform scale-x-0 animate-grow" />
            </span>
          </h1>

          {/* Subheading */}
          <p className="text-xl lg:text-2xl text-gray-300 mb-12 max-w-4xl mx-auto leading-relaxed">
            Transform your textile manufacturing with our <span className="text-amber-400 font-semibold">AI-powered tracking platform</span>. 
            Monitor production in real-time, ensure quality control, and optimize your entire supply chain from a single dashboard.
          </p>
        </div>

        {/* CTA Buttons */}
        <div className="flex flex-col sm:flex-row gap-6 justify-center items-center mb-16">
          <Link
            to="/register"
            className="group relative bg-gradient-to-r from-amber-500 to-orange-500 text-white font-bold px-12 py-5 rounded-2xl text-lg hover:shadow-2xl transition-all duration-500 transform hover:scale-105 flex items-center gap-3 shadow-2xl"
          >
            {/* Shine Effect */}
            <div className="absolute inset-0 rounded-2xl bg-gradient-to-r from-transparent via-white/20 to-transparent -skew-x-12 translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-1000" />
            
            <FaRocket className="text-xl group-hover:scale-110 transition-transform duration-300" />
            <span>Start Free Trial</span>
            <FaArrowRight className="group-hover:translate-x-1 transition-transform duration-300" />
          </Link>

          <button className="group relative bg-transparent border-2 border-amber-400 text-amber-400 font-bold px-12 py-5 rounded-2xl text-lg hover:bg-amber-400 hover:text-gray-900 transition-all duration-500 transform hover:scale-105 flex items-center gap-3">
            <FaPlay className="text-lg" />
            <span>Watch Demo</span>
          </button>
        </div>

        {/* Features Grid */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 mb-16 max-w-4xl mx-auto">
          {features.map((feature, index) => {
            const Icon = feature.icon;
            return (
              <div
                key={index}
                className="group bg-white/10 backdrop-blur-sm border border-white/10 rounded-2xl p-6 text-center hover:bg-white/20 transition-all duration-500 transform hover:scale-105 hover:shadow-2xl"
              >
                <div className={`inline-flex items-center justify-center w-16 h-16 rounded-2xl bg-gradient-to-r ${feature.color} text-white mb-4 group-hover:scale-110 transition-transform duration-300 shadow-lg`}>
                  <Icon className="text-2xl" />
                </div>
                <div className="text-white font-semibold text-sm">{feature.text}</div>
              </div>
            );
          })}
        </div>

        {/* Stats Section */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 mb-12 max-w-3xl mx-auto">
          {stats.map((stat, index) => {
            const Icon = stat.icon;
            return (
              <div key={index} className="text-center">
                <div className="inline-flex items-center justify-center w-12 h-12 rounded-2xl bg-amber-500/20 text-amber-400 mb-3">
                  <Icon className="text-xl" />
                </div>
                <div className="text-3xl font-bold text-white mb-1">{stat.number}</div>
                <div className="text-amber-200 text-sm font-medium">{stat.label}</div>
              </div>
            );
          })}
        </div>

        {/* Trust Badges */}
        <div className="bg-white/5 backdrop-blur-sm rounded-2xl p-6 border border-white/10 max-w-2xl mx-auto">
          <p className="text-gray-400 text-sm mb-4">Trusted by industry leaders</p>
          <div className="flex justify-center items-center gap-8 opacity-60">
            {["TextileMasters", "GlobalFabrics", "PremiumTextiles", "FashionCo"].map((company, index) => (
              <div key={index} className="text-white font-semibold text-sm">{company}</div>
            ))}
          </div>
        </div>

        {/* Scroll Indicator */}
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2">
          <div className="animate-bounce">
            <div className="w-6 h-10 border-2 border-amber-400 rounded-full flex justify-center">
              <div className="w-1 h-3 bg-amber-400 rounded-full mt-2 animate-pulse" />
            </div>
          </div>
        </div>
      </div>

      {/* Floating Elements */}
      <div className="absolute top-20 left-20 w-4 h-4 bg-amber-400 rounded-full opacity-60 animate-float"></div>
      <div className="absolute top-40 right-32 w-3 h-3 bg-orange-400 rounded-full opacity-80 animate-float animation-delay-1000"></div>
      <div className="absolute bottom-40 left-32 w-5 h-5 bg-amber-300 rounded-full opacity-40 animate-float animation-delay-2000"></div>
      <div className="absolute bottom-20 right-20 w-4 h-4 bg-orange-300 rounded-full opacity-70 animate-float animation-delay-1500"></div>

      <style jsx>{`
        @keyframes grow {
          from { transform: scaleX(0); }
          to { transform: scaleX(1); }
        }
        @keyframes float {
          0%, 100% { transform: translateY(0px); }
          50% { transform: translateY(-20px); }
        }
        .animate-grow {
          animation: grow 0.5s ease-out forwards;
        }
        .animate-float {
          animation: float 6s ease-in-out infinite;
        }
        .animation-delay-1000 {
          animation-delay: 1s;
        }
        .animation-delay-1500 {
          animation-delay: 1.5s;
        }
        .animation-delay-2000 {
          animation-delay: 2s;
        }
        .animation-delay-4000 {
          animation-delay: 4s;
        }
      `}</style>
    </section>
  );
};

export default HeroSection;