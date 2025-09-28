import React, { useState, useEffect, useRef } from "react";
import { 
  FaStar, 
  FaQuoteLeft, 
  FaChevronLeft, 
  FaChevronRight,
  FaPlay,
  FaPause,
  FaVolumeUp,
  FaShare,
  FaHeart,
  FaRegHeart,
  FaCheckCircle,
  FaAward,
  FaRocket,
  FaThumbsUp
} from "react-icons/fa";
import { MdWorkspacePremium, MdAutoGraph, MdSpeed } from "react-icons/md";

const ReviewsSection = () => {
  const [activeReview, setActiveReview] = useState(0);
  const [isPlaying, setIsPlaying] = useState(true);
  const [favoriteReviews, setFavoriteReviews] = useState(new Set());
  const [visibleReviews, setVisibleReviews] = useState(3);
  const [selectedRating, setSelectedRating] = useState(0);
  const carouselRef = useRef(null);
  const intervalRef = useRef(null);

  const reviews = [
    {
      id: 1,
      name: "Sarah Chen",
      role: "Production Director",
      company: "TextileMasters Inc.",
      avatar: "👩‍💼",
      rating: 5,
      date: "2 weeks ago",
      text: "TexTrack completely transformed our production workflow. We reduced delays by 65% and improved our quality control accuracy to 99.8%. The real-time tracking and predictive analytics are game-changers for the textile industry.",
      improvements: [
        "65% reduction in delays",
        "99.8% quality accuracy",
        "40% faster reporting"
      ],
      verified: true,
      featured: true,
      videoReview: false
    },
    {
      id: 2,
      name: "Marcus Rodriguez",
      role: "Supply Chain Manager",
      company: "Global Fabrics Co.",
      avatar: "👨‍💼",
      rating: 5,
      date: "1 month ago",
      text: "The AI-powered predictions helped us prevent $2M in potential losses last quarter. The supply chain visibility we now have is incredible. Our delivery times improved by 50% and customer satisfaction is at an all-time high.",
      improvements: [
        "$2M potential losses prevented",
        "50% faster delivery",
        "45% cost reduction"
      ],
      verified: true,
      featured: true,
      videoReview: true
    },
    {
      id: 3,
      name: "Emily Watson",
      role: "Quality Assurance Lead",
      company: "Premium Textiles Ltd.",
      avatar: "👩‍🔧",
      rating: 5,
      date: "3 weeks ago",
      text: "Automated quality checks eliminated human error and improved our defect detection rate to 99.8%. We saved over 40 hours per week on manual inspections. The platform is incredibly intuitive and our team adopted it seamlessly.",
      improvements: [
        "40+ hours saved weekly",
        "99.8% defect detection",
        "Zero manual errors"
      ],
      verified: true,
      featured: false,
      videoReview: false
    },
    {
      id: 4,
      name: "David Kim",
      role: "Operations Manager",
      company: "FashionCo International",
      avatar: "👨‍💻",
      rating: 5,
      date: "2 months ago",
      text: "Integration with our existing systems was seamless. The API documentation is excellent, and their support team was incredibly helpful. We've seen a 35% increase in operational efficiency since implementation.",
      improvements: [
        "35% efficiency gain",
        "Seamless integration",
        "Excellent support"
      ],
      verified: true,
      featured: false,
      videoReview: false
    },
    {
      id: 5,
      name: "Lisa Thompson",
      role: "CEO & Founder",
      company: "EcoTextile Solutions",
      avatar: "👩‍🎓",
      rating: 5,
      date: "1 week ago",
      text: "As a sustainable textile company, tracking our environmental impact is crucial. TexTrack's carbon footprint monitoring and sustainable sourcing features are outstanding. We've reduced our waste by 60% and improved our green credentials significantly.",
      improvements: [
        "60% waste reduction",
        "Carbon footprint tracking",
        "Sustainable sourcing"
      ],
      verified: true,
      featured: true,
      videoReview: true
    },
    {
      id: 6,
      name: "Alex Johnson",
      role: "Technical Director",
      company: "SmartManufacture Tech",
      avatar: "👨‍🔬",
      rating: 5,
      date: "3 days ago",
      text: "The IoT integration capabilities are phenomenal. We connected all our smart factory devices seamlessly. Real-time data processing and the machine learning predictions have taken our operations to the next level of Industry 4.0.",
      improvements: [
        "Full IoT integration",
        "Real-time data processing",
        "Industry 4.0 ready"
      ],
      verified: true,
      featured: false,
      videoReview: false
    }
  ];

  const stats = {
    averageRating: 4.9,
    totalReviews: 1247,
    ratingDistribution: {
      5: 89,
      4: 8,
      3: 2,
      2: 1,
      1: 0
    },
    improvements: [
      { metric: "Production Efficiency", value: "45%", icon: MdSpeed },
      { metric: "Quality Accuracy", value: "99.2%", icon: FaAward },
      { metric: "Cost Reduction", value: "35%", icon: MdAutoGraph },
      { metric: "Time Savings", value: "50%", icon: FaRocket }
    ]
  };

  // Auto-play carousel
  useEffect(() => {
    if (isPlaying) {
      intervalRef.current = setInterval(() => {
        setActiveReview(prev => (prev + 1) % reviews.length);
      }, 5000);
    } else {
      clearInterval(intervalRef.current);
    }

    return () => clearInterval(intervalRef.current);
  }, [isPlaying, reviews.length]);

  const nextReview = () => {
    setActiveReview(prev => (prev + 1) % reviews.length);
  };

  const prevReview = () => {
    setActiveReview(prev => (prev - 1 + reviews.length) % reviews.length);
  };

  const goToReview = (index) => {
    setActiveReview(index);
  };

  const toggleFavorite = (reviewId) => {
    setFavoriteReviews(prev => {
      const newFavorites = new Set(prev);
      if (newFavorites.has(reviewId)) {
        newFavorites.delete(reviewId);
      } else {
        newFavorites.add(reviewId);
      }
      return newFavorites;
    });
  };

  const loadMoreReviews = () => {
    setVisibleReviews(prev => Math.min(prev + 3, reviews.length));
  };

  const filteredReviews = selectedRating === 0 
    ? reviews 
    : reviews.filter(review => review.rating === selectedRating);

  const StarRating = ({ rating, size = "text-lg" }) => (
    <div className="flex gap-1">
      {[...Array(5)].map((_, i) => (
        <FaStar
          key={i}
          className={`${i < rating ? 'text-amber-400 fill-current' : 'text-gray-300'} ${size}`}
        />
      ))}
    </div>
  );

  return (
    <section className="relative py-20 lg:py-28 px-4 bg-gradient-to-br from-gray-50 via-amber-50/30 to-gray-100 overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -top-40 -right-40 w-80 h-80 bg-amber-200 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-pulse"></div>
        <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-amber-300 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-pulse animation-delay-2000"></div>
      </div>

      <div className="max-w-7xl mx-auto relative z-10">
        {/* Header Section */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 bg-amber-100 text-amber-800 px-6 py-3 rounded-full text-lg font-semibold mb-6 border-2 border-amber-200 shadow-lg">
            <FaStar className="text-amber-600" />
            Trusted by 1,000+ Manufacturers
          </div>
          
          <h2 className="text-4xl lg:text-6xl font-black mb-6">
            <span className="bg-gradient-to-r from-amber-600 to-amber-800 bg-clip-text text-transparent">
              What Our Clients Say
            </span>
          </h2>
          
          <p className="text-xl lg:text-2xl text-gray-600 max-w-4xl mx-auto leading-relaxed">
            Discover why textile manufacturers worldwide trust TexTrack to transform their operations 
            with <span className="font-semibold text-amber-700">real results and measurable improvements</span>.
          </p>
        </div>

        {/* Stats Overview */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-20">
          {/* Rating Summary */}
          <div className="bg-white/80 backdrop-blur-sm rounded-3xl p-8 border border-amber-100 shadow-lg">
            <div className="text-center mb-8">
              <div className="text-5xl font-black text-amber-600 mb-2">{stats.averageRating}</div>
              <StarRating rating={5} size="text-xl" />
              <div className="text-gray-600 mt-2">Based on {stats.totalReviews} reviews</div>
            </div>

            {/* Rating Distribution */}
            <div className="space-y-3">
              {[5, 4, 3, 2, 1].map(rating => (
                <div key={rating} className="flex items-center gap-3">
                  <div className="flex items-center gap-1 w-16">
                    <span className="text-sm font-medium text-gray-700">{rating}</span>
                    <FaStar className="text-amber-400 fill-current text-sm" />
                  </div>
                  <div className="flex-1 bg-gray-200 rounded-full h-2">
                    <div 
                      className="bg-amber-500 h-2 rounded-full transition-all duration-1000"
                      style={{ width: `${stats.ratingDistribution[rating]}%` }}
                    />
                  </div>
                  <span className="text-sm text-gray-600 w-8">{stats.ratingDistribution[rating]}%</span>
                </div>
              ))}
            </div>

            {/* Improvements */}
            <div className="grid grid-cols-2 gap-4 mt-8 pt-8 border-t border-amber-100">
              {stats.improvements.map((improvement, index) => {
                const Icon = improvement.icon;
                return (
                  <div key={index} className="text-center">
                    <div className="inline-flex items-center justify-center w-12 h-12 rounded-2xl bg-amber-100 text-amber-600 mb-2">
                      <Icon className="text-xl" />
                    </div>
                    <div className="text-2xl font-bold text-amber-700">{improvement.value}</div>
                    <div className="text-gray-600 text-sm">{improvement.metric}</div>
                  </div>
                );
              })}
            </div>
          </div>

          {/* Featured Review Carousel */}
          <div className="bg-white/80 backdrop-blur-sm rounded-3xl p-8 border border-amber-100 shadow-lg">
            <div className="relative">
              {/* Carousel Controls */}
              <div className="flex justify-between items-center mb-6">
                <h3 className="text-2xl font-bold text-gray-800">Featured Reviews</h3>
                <div className="flex items-center gap-2">
                  <button
                    onClick={() => setIsPlaying(!isPlaying)}
                    className="w-10 h-10 rounded-xl bg-amber-100 text-amber-600 flex items-center justify-center hover:bg-amber-200 transition-colors duration-200"
                  >
                    {isPlaying ? <FaPause /> : <FaPlay />}
                  </button>
                  <div className="flex gap-1">
                    <button
                      onClick={prevReview}
                      className="w-10 h-10 rounded-xl bg-amber-100 text-amber-600 flex items-center justify-center hover:bg-amber-200 transition-colors duration-200"
                    >
                      <FaChevronLeft />
                    </button>
                    <button
                      onClick={nextReview}
                      className="w-10 h-10 rounded-xl bg-amber-100 text-amber-600 flex items-center justify-center hover:bg-amber-200 transition-colors duration-200"
                    >
                      <FaChevronRight />
                    </button>
                  </div>
                </div>
              </div>

              {/* Carousel Content */}
              <div className="relative h-96 overflow-hidden">
                {reviews.filter(r => r.featured).map((review, index) => (
                  <div
                    key={review.id}
                    className={`absolute inset-0 transition-all duration-500 ease-in-out ${
                      index === activeReview
                        ? 'opacity-100 translate-x-0'
                        : index < activeReview
                        ? 'opacity-0 -translate-x-full'
                        : 'opacity-0 translate-x-full'
                    }`}
                  >
                    <div className="bg-gradient-to-br from-amber-50 to-amber-100 rounded-2xl p-6 h-full border-2 border-amber-200">
                      {/* Review Header */}
                      <div className="flex items-start justify-between mb-4">
                        <div className="flex items-center gap-4">
                          <div className="text-4xl">{review.avatar}</div>
                          <div>
                            <div className="flex items-center gap-2">
                              <h4 className="font-bold text-gray-800">{review.name}</h4>
                              {review.verified && (
                                <FaCheckCircle className="text-green-500" />
                              )}
                            </div>
                            <p className="text-amber-600 font-medium">{review.role}</p>
                            <p className="text-gray-500 text-sm">{review.company}</p>
                          </div>
                        </div>
                        <div className="text-right">
                          <StarRating rating={review.rating} />
                          <p className="text-gray-500 text-sm">{review.date}</p>
                        </div>
                      </div>

                      {/* Review Text */}
                      <div className="mb-6">
                        <FaQuoteLeft className="text-amber-400 text-xl mb-3" />
                        <p className="text-gray-700 leading-relaxed text-lg">{review.text}</p>
                      </div>

                      {/* Improvements */}
                      <div className="space-y-2">
                        <h5 className="font-semibold text-gray-800">Key Improvements:</h5>
                        <div className="grid grid-cols-2 gap-2">
                          {review.improvements.map((improvement, idx) => (
                            <div key={idx} className="flex items-center gap-2">
                              <div className="w-2 h-2 bg-amber-400 rounded-full"></div>
                              <span className="text-sm text-gray-700">{improvement}</span>
                            </div>
                          ))}
                        </div>
                      </div>

                      {/* Actions */}
                      <div className="flex items-center justify-between mt-6 pt-4 border-t border-amber-200">
                        <div className="flex items-center gap-4">
                          <button className="flex items-center gap-2 text-gray-500 hover:text-amber-600 transition-colors duration-200">
                            <FaThumbsUp />
                            <span>Helpful</span>
                          </button>
                          <button 
                            onClick={() => toggleFavorite(review.id)}
                            className="flex items-center gap-2 text-gray-500 hover:text-rose-500 transition-colors duration-200"
                          >
                            {favoriteReviews.has(review.id) ? (
                              <FaHeart className="text-rose-500" />
                            ) : (
                              <FaRegHeart />
                            )}
                            <span>Save</span>
                          </button>
                          <button className="flex items-center gap-2 text-gray-500 hover:text-amber-600 transition-colors duration-200">
                            <FaShare />
                            <span>Share</span>
                          </button>
                        </div>
                        {review.videoReview && (
                          <button className="flex items-center gap-2 text-amber-600 hover:text-amber-700 transition-colors duration-200">
                            <FaVolumeUp />
                            <span>Watch Video</span>
                          </button>
                        )}
                      </div>
                    </div>
                  </div>
                ))}
              </div>

              {/* Carousel Indicators */}
              <div className="flex justify-center gap-2 mt-6">
                {reviews.filter(r => r.featured).map((_, index) => (
                  <button
                    key={index}
                    onClick={() => goToReview(index)}
                    className={`w-3 h-3 rounded-full transition-all duration-300 ${
                      index === activeReview
                        ? 'bg-amber-400 scale-125'
                        : 'bg-gray-300 hover:bg-amber-300'
                    }`}
                  />
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* All Reviews Grid */}
        <div className="bg-white/80 backdrop-blur-sm rounded-3xl p-8 border border-amber-100 shadow-lg">
          <div className="flex flex-col lg:flex-row justify-between items-start lg:items-center mb-8">
            <h3 className="text-2xl font-bold text-gray-800 mb-4 lg:mb-0">
              All Customer Reviews ({reviews.length})
            </h3>
            
            {/* Rating Filter */}
            <div className="flex items-center gap-2">
              <span className="text-gray-700 font-medium">Filter by rating:</span>
              <div className="flex gap-1">
                {[0, 5, 4, 3, 2, 1].map(rating => (
                  <button
                    key={rating}
                    onClick={() => setSelectedRating(rating)}
                    className={`px-3 py-1 rounded-full text-sm font-medium transition-all duration-200 ${
                      selectedRating === rating
                        ? 'bg-amber-500 text-white'
                        : 'bg-gray-100 text-gray-600 hover:bg-amber-100 hover:text-amber-700'
                    }`}
                  >
                    {rating === 0 ? 'All' : `${rating}★`}
                  </button>
                ))}
              </div>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredReviews.slice(0, visibleReviews).map((review) => (
              <div
                key={review.id}
                className="bg-gradient-to-br from-white to-amber-50 rounded-2xl p-6 border-2 border-amber-100 hover:border-amber-300 transition-all duration-300 hover:shadow-lg"
              >
                {/* Review Header */}
                <div className="flex items-start justify-between mb-4">
                  <div className="flex items-center gap-3">
                    <div className="text-2xl">{review.avatar}</div>
                    <div>
                      <h4 className="font-bold text-gray-800 text-sm">{review.name}</h4>
                      <p className="text-amber-600 text-xs">{review.role}</p>
                    </div>
                  </div>
                  <div className="text-right">
                    <StarRating rating={review.rating} size="text-sm" />
                    <p className="text-gray-500 text-xs">{review.date}</p>
                  </div>
                </div>

                {/* Review Text */}
                <p className="text-gray-600 text-sm leading-relaxed mb-4 line-clamp-3">
                  {review.text}
                </p>

                {/* Quick Improvements */}
                <div className="space-y-1 mb-4">
                  {review.improvements.slice(0, 2).map((improvement, idx) => (
                    <div key={idx} className="flex items-center gap-2">
                      <div className="w-1.5 h-1.5 bg-amber-400 rounded-full"></div>
                      <span className="text-xs text-gray-700">{improvement}</span>
                    </div>
                  ))}
                </div>

                {/* Actions */}
                <div className="flex items-center justify-between pt-3 border-t border-amber-100">
                  <button className="text-gray-400 hover:text-amber-500 transition-colors duration-200">
                    <FaThumbsUp className="text-sm" />
                  </button>
                  <button 
                    onClick={() => toggleFavorite(review.id)}
                    className="text-gray-400 hover:text-rose-500 transition-colors duration-200"
                  >
                    {favoriteReviews.has(review.id) ? (
                      <FaHeart className="text-rose-500 text-sm" />
                    ) : (
                      <FaRegHeart className="text-sm" />
                    )}
                  </button>
                  {review.verified && (
                    <div className="flex items-center gap-1 text-green-500 text-xs">
                      <FaCheckCircle />
                      <span>Verified</span>
                    </div>
                  )}
                </div>
              </div>
            ))}
          </div>

          {/* Load More Button */}
          {visibleReviews < filteredReviews.length && (
            <div className="text-center mt-8">
              <button
                onClick={loadMoreReviews}
                className="bg-amber-500 text-white px-8 py-3 rounded-xl font-semibold hover:bg-amber-600 transition-all duration-300 transform hover:scale-105"
              >
                Load More Reviews ({filteredReviews.length - visibleReviews} remaining)
              </button>
            </div>
          )}
        </div>

        {/* Final CTA */}
        <div className="text-center mt-16">
          <div className="bg-gradient-to-r from-amber-500 to-amber-600 rounded-3xl p-12 text-white shadow-2xl">
            <h3 className="text-3xl lg:text-4xl font-bold mb-6">
              Join Thousands of Satisfied Manufacturers
            </h3>
            <p className="text-xl text-amber-100 mb-8 max-w-2xl mx-auto">
              See why textile manufacturers worldwide trust TexTrack to transform their operations and achieve remarkable results.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="bg-white text-amber-600 px-8 py-4 rounded-2xl font-semibold hover:bg-amber-50 transition-all duration-300 transform hover:scale-105 shadow-lg">
                Start Free Trial
              </button>
              <button className="bg-amber-700 text-white px-8 py-4 rounded-2xl font-semibold border border-amber-600 hover:bg-amber-800 transition-all duration-300 transform hover:scale-105">
                Read Case Studies
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ReviewsSection;