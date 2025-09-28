import React, { useState, useEffect, useRef, useCallback } from "react";
import { 
  FaArrowLeft, 
  FaArrowRight, 
  FaPlay, 
  FaPause,
  FaExpand,
  FaCompress,
  FaStar,
  FaRegStar,
  FaShare,
  FaDownload,
  FaHeart,
  FaRegHeart
} from "react-icons/fa";
import { MdAutoGraph, MdSpeed, MdSecurity, MdWorkspacePremium } from "react-icons/md";

const IndustryCarousel = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isPlaying, setIsPlaying] = useState(true);
  const [isFullscreen, setIsFullscreen] = useState(false);
  const [favoriteSlides, setFavoriteSlides] = useState(new Set());
  const [touchStart, setTouchStart] = useState(null);
  const [touchEnd, setTouchEnd] = useState(null);
  const [imageLoaded, setImageLoaded] = useState({});
  const carouselRef = useRef(null);
  const intervalRef = useRef(null);

  const slides = [
    {
      id: 1,
      title: "AI-Powered Production Monitoring",
      description: "Real-time tracking of textile batches with predictive analytics and automated quality control using advanced machine learning algorithms.",
      image: "https://images.unsplash.com/photo-1581094794321-8410e4a2d61f?ixlib=rb-4.0.1&auto=format&fit=crop&w=2000&q=80",
      icon: MdAutoGraph,
      stats: "99.2% Accuracy",
      color: "from-purple-500 to-pink-500",
      features: ["Real-time Analytics", "Predictive Maintenance", "Quality Control", "Performance Insights"]
    },
    {
      id: 2,
      title: "Lightning-Fast Batch Tracking",
      description: "Instant updates and seamless tracking across your entire supply chain with our optimized infrastructure and real-time data processing.",
      image: "https://images.unsplash.com/photo-1581092580497-e0d23cbdf1dc?ixlib=rb-4.0.1&auto=format&fit=crop&w=2000&q=80",
      icon: MdSpeed,
      stats: "<100ms Response",
      color: "from-blue-500 to-cyan-500",
      features: ["Instant Updates", "Live Tracking", "Fast Processing", "Low Latency"]
    },
    {
      id: 3,
      title: "Enterprise-Grade Security",
      description: "Military-grade encryption and comprehensive security protocols ensure your production data remains protected and compliant at all times.",
      image: "https://images.unsplash.com/photo-1550751827-4bd374c3f58b?ixlib=rb-4.0.1&auto=format&fit=crop&w=2000&q=80",
      icon: MdSecurity,
      stats: "SOC 2 Certified",
      color: "from-green-500 to-emerald-500",
      features: ["AES-256 Encryption", "Multi-factor Auth", "Regular Audits", "GDPR Compliant"]
    },
    {
      id: 4,
      title: "Industry-Leading Performance",
      description: "Join thousands of manufacturers who have achieved measurable improvements in efficiency, quality, and overall production performance.",
      image: "https://images.unsplash.com/photo-1581092921461-7b4c8b5c8c0a?ixlib=rb-4.0.1&auto=format&fit=crop&w=2000&q=80",
      icon: MdWorkspacePremium,
      stats: "98% Satisfaction",
      color: "from-amber-500 to-orange-500",
      features: ["Proven Results", "Case Studies", "Client Success", "Industry Leader"]
    },
    {
      id: 5,
      title: "Smart Automation Workflows",
      description: "Automate repetitive tasks, quality checks, and status updates with intelligent workflows that learn and adapt to your production patterns.",
      image: "https://images.unsplash.com/photo-1581092580497-e0d23cbdf1dc?ixlib=rb-4.0.1&auto=format&fit=crop&w=2000&q=80",
      icon: MdAutoGraph,
      stats: "80% Time Saved",
      color: "from-red-500 to-rose-500",
      features: ["Smart Automation", "Workflow Optimization", "Auto Reporting", "Time Saving"]
    }
  ];

  // Auto-play functionality
  const startAutoPlay = useCallback(() => {
    intervalRef.current = setInterval(() => {
      setCurrentSlide(prev => (prev + 1) % slides.length);
    }, 5000);
  }, [slides.length]);

  const stopAutoPlay = useCallback(() => {
    if (intervalRef.current) {
      clearInterval(intervalRef.current);
    }
  }, []);

  useEffect(() => {
    if (isPlaying) {
      startAutoPlay();
    } else {
      stopAutoPlay();
    }

    return () => stopAutoPlay();
  }, [isPlaying, startAutoPlay, stopAutoPlay]);

  // Navigation functions
  const nextSlide = useCallback(() => {
    setCurrentSlide(prev => (prev + 1) % slides.length);
  }, [slides.length]);

  const prevSlide = useCallback(() => {
    setCurrentSlide(prev => (prev - 1 + slides.length) % slides.length);
  }, [slides.length]);

  const goToSlide = (index) => {
    setCurrentSlide(index);
  };

  // Touch handling for mobile
  const handleTouchStart = (e) => {
    setTouchStart(e.targetTouches[0].clientX);
  };

  const handleTouchMove = (e) => {
    setTouchEnd(e.targetTouches[0].clientX);
  };

  const handleTouchEnd = () => {
    if (!touchStart || !touchEnd) return;
    
    const distance = touchStart - touchEnd;
    const isLeftSwipe = distance > 50;
    const isRightSwipe = distance < -50;

    if (isLeftSwipe) {
      nextSlide();
    } else if (isRightSwipe) {
      prevSlide();
    }
  };

  // Fullscreen functionality
  const toggleFullscreen = () => {
    if (!document.fullscreenElement) {
      carouselRef.current?.requestFullscreen?.();
      setIsFullscreen(true);
    } else {
      document.exitFullscreen?.();
      setIsFullscreen(false);
    }
  };

  // Favorite functionality
  const toggleFavorite = (slideId) => {
    setFavoriteSlides(prev => {
      const newFavorites = new Set(prev);
      if (newFavorites.has(slideId)) {
        newFavorites.delete(slideId);
      } else {
        newFavorites.add(slideId);
      }
      return newFavorites;
    });
  };

  // Image load handler
  const handleImageLoad = (slideId) => {
    setImageLoaded(prev => ({ ...prev, [slideId]: true }));
  };

  // Keyboard navigation
  useEffect(() => {
    const handleKeyDown = (e) => {
      switch (e.key) {
        case 'ArrowLeft':
          prevSlide();
          break;
        case 'ArrowRight':
          nextSlide();
          break;
        case ' ':
          setIsPlaying(prev => !prev);
          break;
        case 'Escape':
          if (isFullscreen) {
            document.exitFullscreen?.();
            setIsFullscreen(false);
          }
          break;
        default:
          break;
      }
    };

    document.addEventListener('keydown', handleKeyDown);
    return () => document.removeEventListener('keydown', handleKeyDown);
  }, [prevSlide, nextSlide, isFullscreen]);

  const currentSlideData = slides[currentSlide];
  const Icon = currentSlideData.icon;

  return (
    <section className="relative py-20 px-4 bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900 overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -top-40 -right-40 w-80 h-80 bg-amber-500/10 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-amber-600/10 rounded-full blur-3xl animate-pulse animation-delay-2000"></div>
      </div>

      <div className="max-w-7xl mx-auto relative z-10">
        {/* Header */}
        <div className="text-center mb-12">
          <h2 className="text-4xl lg:text-6xl font-black text-white mb-6">
            <span className="bg-gradient-to-r from-amber-400 to-orange-400 bg-clip-text text-transparent">
              Industry-Leading
            </span>
            <br />
            <span className="text-white">Features</span>
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Discover how TexTrack transforms textile manufacturing with cutting-edge technology and innovative solutions.
          </p>
        </div>

        {/* Carousel Container */}
        <div 
          ref={carouselRef}
          className="relative bg-white/5 backdrop-blur-sm rounded-3xl border border-white/10 shadow-2xl overflow-hidden"
          onTouchStart={handleTouchStart}
          onTouchMove={handleTouchMove}
          onTouchEnd={handleTouchEnd}
        >
          {/* Main Carousel Content */}
          <div className="relative h-96 lg:h-[500px]">
            {slides.map((slide, index) => (
              <div
                key={slide.id}
                className={`absolute inset-0 transition-all duration-1000 ease-in-out ${
                  index === currentSlide
                    ? 'opacity-100 translate-x-0'
                    : index < currentSlide
                    ? 'opacity-0 -translate-x-full'
                    : 'opacity-0 translate-x-full'
                }`}
              >
                <div className="grid grid-cols-1 lg:grid-cols-2 h-full">
                  {/* Image Side */}
                  <div className="relative h-64 lg:h-full">
                    {!imageLoaded[slide.id] && (
                      <div className="absolute inset-0 bg-gray-800 animate-pulse rounded-l-3xl"></div>
                    )}
                    <img
                      src={slide.image}
                      alt={slide.title}
                      className={`w-full h-full object-cover rounded-l-3xl transition-opacity duration-500 ${
                        imageLoaded[slide.id] ? 'opacity-100' : 'opacity-0'
                      }`}
                      onLoad={() => handleImageLoad(slide.id)}
                    />
                    
                    {/* Image Overlay */}
                    <div className="absolute inset-0 bg-gradient-to-r from-black/50 to-transparent rounded-l-3xl"></div>
                    
                    {/* Slide Number */}
                    <div className="absolute top-6 left-6 bg-black/50 text-white px-3 py-1 rounded-full text-sm font-semibold backdrop-blur-sm">
                      {index + 1} / {slides.length}
                    </div>
                  </div>

                  {/* Content Side */}
                  <div className="p-8 lg:p-12 flex flex-col justify-center bg-gradient-to-br from-gray-800 to-gray-900 rounded-r-3xl">
                    {/* Icon and Stats */}
                    <div className="flex items-center gap-4 mb-6">
                      <div className={`w-16 h-16 rounded-2xl bg-gradient-to-r ${slide.color} flex items-center justify-center shadow-2xl`}>
                        <slide.icon className="text-white text-2xl" />
                      </div>
                      <div className="bg-amber-500/20 text-amber-300 px-4 py-2 rounded-full text-sm font-semibold border border-amber-500/30">
                        {slide.stats}
                      </div>
                    </div>

                    {/* Title */}
                    <h3 className="text-2xl lg:text-4xl font-bold text-white mb-4">
                      {slide.title}
                    </h3>

                    {/* Description */}
                    <p className="text-gray-300 text-lg mb-6 leading-relaxed">
                      {slide.description}
                    </p>

                    {/* Features */}
                    <div className="grid grid-cols-2 gap-3 mb-8">
                      {slide.features.map((feature, idx) => (
                        <div key={idx} className="flex items-center gap-2">
                          <div className="w-2 h-2 bg-amber-400 rounded-full"></div>
                          <span className="text-amber-100 text-sm font-medium">{feature}</span>
                        </div>
                      ))}
                    </div>

                    {/* Action Buttons */}
                    <div className="flex items-center gap-4">
                      <button className="bg-amber-500 text-white px-6 py-3 rounded-xl font-semibold hover:bg-amber-600 transition-all duration-300 transform hover:scale-105 flex items-center gap-2">
                        Learn More
                      </button>
                      <button 
                        onClick={() => toggleFavorite(slide.id)}
                        className="p-3 text-gray-400 hover:text-amber-400 transition-colors duration-200"
                      >
                        {favoriteSlides.has(slide.id) ? (
                          <FaHeart className="text-amber-400 text-xl" />
                        ) : (
                          <FaRegHeart className="text-xl" />
                        )}
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Navigation Controls */}
          <div className="absolute inset-y-0 left-4 flex items-center">
            <button
              onClick={prevSlide}
              className="w-12 h-12 bg-black/50 backdrop-blur-sm text-white rounded-full flex items-center justify-center hover:bg-amber-500 transition-all duration-300 transform hover:scale-110 border border-white/20"
            >
              <FaArrowLeft />
            </button>
          </div>

          <div className="absolute inset-y-0 right-4 flex items-center">
            <button
              onClick={nextSlide}
              className="w-12 h-12 bg-black/50 backdrop-blur-sm text-white rounded-full flex items-center justify-center hover:bg-amber-500 transition-all duration-300 transform hover:scale-110 border border-white/20"
            >
              <FaArrowRight />
            </button>
          </div>

          {/* Bottom Controls */}
          <div className="absolute bottom-6 left-1/2 transform -translate-x-1/2 flex items-center gap-4 bg-black/50 backdrop-blur-sm rounded-2xl px-6 py-3 border border-white/10">
            {/* Play/Pause */}
            <button
              onClick={() => setIsPlaying(!isPlaying)}
              className="text-white hover:text-amber-400 transition-colors duration-200"
            >
              {isPlaying ? <FaPause /> : <FaPlay />}
            </button>

            {/* Slide Indicators */}
            <div className="flex items-center gap-2">
              {slides.map((_, index) => (
                <button
                  key={index}
                  onClick={() => goToSlide(index)}
                  className={`w-3 h-3 rounded-full transition-all duration-300 ${
                    index === currentSlide
                      ? 'bg-amber-400 scale-125'
                      : 'bg-white/30 hover:bg-white/50'
                  }`}
                />
              ))}
            </div>

            {/* Fullscreen */}
            <button
              onClick={toggleFullscreen}
              className="text-white hover:text-amber-400 transition-colors duration-200"
            >
              {isFullscreen ? <FaCompress /> : <FaExpand />}
            </button>

            {/* Share */}
            <button className="text-white hover:text-amber-400 transition-colors duration-200">
              <FaShare />
            </button>
          </div>

          {/* Progress Bar */}
          <div className="absolute bottom-0 left-0 right-0 h-1 bg-white/10">
            <div 
              className="h-full bg-gradient-to-r from-amber-400 to-orange-400 transition-all duration-100 ease-linear"
              style={{ 
                width: isPlaying ? '100%' : '0%',
                animation: isPlaying ? 'progress 5s linear forwards' : 'none'
              }}
            />
          </div>
        </div>

        {/* Thumbnail Navigation */}
        <div className="mt-8 flex justify-center gap-4">
          {slides.map((slide, index) => (
            <button
              key={slide.id}
              onClick={() => goToSlide(index)}
              className={`group relative rounded-2xl overflow-hidden transition-all duration-300 transform ${
                index === currentSlide
                  ? 'ring-4 ring-amber-400 scale-110'
                  : 'hover:scale-105'
              }`}
            >
              <img
                src={slide.image}
                alt=""
                className="w-20 h-12 lg:w-24 lg:h-16 object-cover"
              />
              <div className={`absolute inset-0 transition-colors duration-300 ${
                index === currentSlide ? 'bg-amber-400/20' : 'bg-black/40 group-hover:bg-black/20'
              }`} />
            </button>
          ))}
        </div>
      </div>

      <style jsx>{`
        @keyframes progress {
          from { width: 0%; }
          to { width: 100%; }
        }
        .animation-delay-2000 {
          animation-delay: 2s;
        }
      `}</style>
    </section>
  );
};

export default IndustryCarousel;