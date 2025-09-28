import React, { useState } from "react";
import { 
  FaBoxes, 
  FaCheckCircle, 
  FaClock, 
  FaTruck,
  FaArrowRight,
  FaChartLine,
  FaDatabase,
  FaSync,
  FaShieldAlt,
  FaRocket
} from "react-icons/fa";
import { MdPrecisionManufacturing, MdAnalytics } from "react-icons/md";

const FeaturesSection = () => {
  const [activeFeature, setActiveFeature] = useState(0);

  const features = [
    {
      icon: FaBoxes,
      title: "Smart Batch Tracking",
      description: "Advanced RFID and QR code technology for seamless batch creation and real-time tracking throughout the entire production lifecycle.",
      highlights: ["RFID Integration", "Live Location", "Batch History"],
      gradient: "from-amber-500 to-orange-500",
      bgGradient: "from-amber-50 to-orange-50"
    },
    {
      icon: FaCheckCircle,
      title: "AI Quality Control",
      description: "Machine learning-powered quality assessment with automated defect detection and comprehensive quality assurance reporting.",
      highlights: ["AI Detection", "Automated Reports", "Quality Metrics"],
      gradient: "from-green-500 to-emerald-500",
      bgGradient: "from-green-50 to-emerald-50"
    },
    {
      icon: FaClock,
      title: "Real-time Analytics",
      description: "Live dashboard with predictive analytics and performance insights to optimize your manufacturing workflow and reduce downtime.",
      highlights: ["Live Dashboard", "Predictive Analytics", "Performance Insights"],
      gradient: "from-blue-500 to-cyan-500",
      bgGradient: "from-blue-50 to-cyan-50"
    },
    {
      icon: FaTruck,
      title: "Supply Chain Intelligence",
      description: "End-to-end logistics tracking with route optimization and automated delivery notifications for complete supply chain visibility.",
      highlights: ["Route Optimization", "Delivery Alerts", "Chain Visibility"],
      gradient: "from-purple-500 to-pink-500",
      bgGradient: "from-purple-50 to-pink-50"
    },
    {
      icon: MdPrecisionManufacturing,
      title: "Smart Manufacturing",
      description: "IoT-enabled production monitoring with automated workflow management and real-time equipment performance tracking.",
      highlights: ["IoT Sensors", "Workflow Automation", "Equipment Monitoring"],
      gradient: "from-red-500 to-rose-500",
      bgGradient: "from-red-50 to-rose-50"
    },
    {
      icon: MdAnalytics,
      title: "Advanced Analytics",
      description: "Comprehensive data analytics with custom reporting and business intelligence insights for data-driven decision making.",
      highlights: ["Custom Reports", "Business Intelligence", "Data Insights"],
      gradient: "from-indigo-500 to-purple-500",
      bgGradient: "from-indigo-50 to-purple-50"
    }
  ];

  const stats = [
    { value: "98%", label: "Tracking Accuracy" },
    { value: "45%", label: "Faster QC Process" },
    { value: "24/7", label: "Real-time Monitoring" },
    { value: "99.9%", label: "Uptime Reliability" }
  ];

  return (
    <section className="relative py-20 lg:py-28 px-4 bg-gradient-to-br from-gray-50 to-amber-50 overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -top-40 -right-40 w-80 h-80 bg-amber-200 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-pulse"></div>
        <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-amber-300 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-pulse animation-delay-2000"></div>
      </div>

      <div className="max-w-7xl mx-auto relative z-10">
        {/* Header Section */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 bg-amber-100 text-amber-800 px-4 py-2 rounded-full text-sm font-medium mb-6 border border-amber-200">
            <FaRocket className="text-amber-600" />
            Powered by Advanced Technology
          </div>
          
          <h2 className="text-4xl lg:text-5xl font-bold mb-6">
            <span className="bg-gradient-to-r from-amber-600 to-amber-800 bg-clip-text text-transparent">
              Advanced Features
            </span>
          </h2>
          
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            Experience the future of textile manufacturing with our comprehensive suite of 
            <span className="font-semibold text-amber-700"> AI-powered tools </span>
            designed to optimize every aspect of your production process.
          </p>
        </div>

        {/* Stats Bar */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 mb-16 max-w-4xl mx-auto">
          {stats.map((stat, index) => (
            <div 
              key={index}
              className="bg-white/80 backdrop-blur-sm rounded-2xl p-6 text-center border border-amber-100 shadow-sm hover:shadow-md transition-all duration-300"
            >
              <div className="text-2xl lg:text-3xl font-bold text-amber-700 mb-2">
                {stat.value}
              </div>
              <div className="text-gray-600 font-medium text-sm">
                {stat.label}
              </div>
            </div>
          ))}
        </div>

        {/* Features Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-12">
          {features.map((feature, index) => (
            <div
              key={index}
              onMouseEnter={() => setActiveFeature(index)}
              className={`group relative bg-white/90 backdrop-blur-sm rounded-2xl p-8 border-2 transition-all duration-500 cursor-pointer transform hover:scale-105 ${
                activeFeature === index 
                  ? 'border-amber-300 shadow-2xl' 
                  : 'border-amber-100 shadow-lg hover:shadow-xl'
              }`}
            >
              {/* Hover Gradient Overlay */}
              <div className={`absolute inset-0 rounded-2xl bg-gradient-to-br ${feature.bgGradient} opacity-0 group-hover:opacity-100 transition-opacity duration-500`}></div>
              
              <div className="relative z-10">
                {/* Icon */}
                <div className={`inline-flex items-center justify-center w-16 h-16 rounded-2xl bg-gradient-to-r ${feature.gradient} text-white mb-6 group-hover:scale-110 transition-transform duration-300 shadow-lg`}>
                  <feature.icon className="text-2xl" />
                </div>

                {/* Title */}
                <h3 className={`text-xl font-bold mb-4 transition-colors duration-300 ${
                  activeFeature === index ? 'text-amber-700' : 'text-gray-800'
                }`}>
                  {feature.title}
                </h3>

                {/* Description */}
                <p className="text-gray-600 mb-6 leading-relaxed">
                  {feature.description}
                </p>

                {/* Highlights */}
                <div className="flex flex-wrap gap-2 mb-6">
                  {feature.highlights.map((highlight, idx) => (
                    <span
                      key={idx}
                      className="px-3 py-1 bg-amber-100 text-amber-700 rounded-full text-xs font-medium border border-amber-200"
                    >
                      {highlight}
                    </span>
                  ))}
                </div>

                {/* Learn More Link */}
                <div className="flex items-center gap-2 text-amber-600 font-semibold text-sm group-hover:text-amber-700 transition-colors duration-300">
                  <span>Learn more</span>
                  <FaArrowRight className="group-hover:translate-x-1 transition-transform duration-300" />
                </div>
              </div>

              {/* Active Indicator */}
              {activeFeature === index && (
                <div className="absolute top-4 right-4 w-3 h-3 bg-amber-400 rounded-full animate-ping"></div>
              )}
            </div>
          ))}
        </div>

        {/* CTA Section */}
        <div className="text-center">
          <div className="bg-gradient-to-r from-amber-500 to-amber-600 rounded-2xl p-8 text-white shadow-2xl">
            <h3 className="text-2xl lg:text-3xl font-bold mb-4">
              Ready to Transform Your Textile Production?
            </h3>
            <p className="text-amber-100 mb-6 max-w-2xl mx-auto">
              Join hundreds of manufacturers who have revolutionized their production process with TexTrack.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="bg-white text-amber-600 px-8 py-3 rounded-xl font-semibold hover:bg-amber-50 transition-all duration-300 transform hover:scale-105 shadow-lg">
                Start Free Trial
              </button>
              <button className="bg-amber-700 text-white px-8 py-3 rounded-xl font-semibold border border-amber-600 hover:bg-amber-800 transition-all duration-300 transform hover:scale-105">
                Schedule Demo
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FeaturesSection;