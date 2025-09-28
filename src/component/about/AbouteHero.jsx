import React from "react";
import { 
  FaShieldAlt, 
  FaEye, 
  FaRocket, 
  FaAward, 
  FaChartLine,
  FaArrowRight,
  FaPlayCircle
} from "react-icons/fa";
import { MdPrecisionManufacturing, MdOutlineRealEstateAgent } from "react-icons/md";

const AboutHero = () => {
  const features = [
    {
      icon: FaEye,
      text: "Real-time Monitoring",
      color: "text-amber-500"
    },
    {
      icon: FaShieldAlt,
      text: "Quality Assurance",
      color: "text-amber-500"
    },
    {
      icon: MdPrecisionManufacturing,
      text: "Smart Manufacturing",
      color: "text-amber-500"
    },
    {
      icon: MdOutlineRealEstateAgent,
      text: "Supply Chain Transparency",
      color: "text-amber-500"
    }
  ];

  const stats = [
    { number: "99.9%", label: "Accuracy Rate" },
    { number: "24/7", label: "Real-time Tracking" },
    { number: "50%", label: "Faster Delivery" },
    { number: "1000+", label: "Batches Tracked" }
  ];

  return (
    <section className="relative bg-gradient-to-br from-amber-50 via-white to-amber-100 py-20 lg:py-28 px-4 overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -top-24 -right-24 w-96 h-96 bg-amber-200 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-pulse"></div>
        <div className="absolute -bottom-24 -left-24 w-96 h-96 bg-amber-300 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-pulse animation-delay-2000"></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-80 h-80 bg-amber-400 rounded-full mix-blend-multiply filter blur-3xl opacity-10 animate-pulse animation-delay-4000"></div>
      </div>

      {/* Grid Pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute inset-0" style={{
          backgroundImage: `linear-gradient(#f59e0b 1px, transparent 1px),
                           linear-gradient(90deg, #f59e0b 1px, transparent 1px)`,
          backgroundSize: '50px 50px'
        }}></div>
      </div>

      <div className="max-w-7xl mx-auto relative z-10">
        {/* Header Section */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 bg-amber-100 text-amber-800 px-4 py-2 rounded-full text-sm font-medium mb-6 border border-amber-200">
            <FaAward className="text-amber-600" />
            Industry 4.0 Ready Textile Solution
          </div>
          
          <h1 className="text-5xl lg:text-7xl font-bold mb-6">
            <span className="bg-gradient-to-r from-amber-600 to-amber-800 bg-clip-text text-transparent">
              TexTrack
            </span>
            <span className="block text-3xl lg:text-4xl font-semibold text-gray-700 mt-2">
              Smart Textile Batch Tracking
            </span>
          </h1>

          <p className="text-xl lg:text-2xl text-gray-600 mb-8 max-w-4xl mx-auto leading-relaxed">
            Revolutionizing textile manufacturing with our <span className="font-semibold text-amber-700">AI-powered tracking system</span> that provides real-time production monitoring, ensuring transparency, quality control, and efficient delivery across your supply chain.
          </p>
        </div>

        {/* Features Grid */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 mb-16 max-w-4xl mx-auto">
          {features.map((feature, index) => (
            <div 
              key={index}
              className="group bg-white/70 backdrop-blur-sm rounded-2xl p-6 text-center border border-amber-100 hover:border-amber-300 transition-all duration-300 hover:shadow-xl hover:scale-105 cursor-pointer"
            >
              <div className={`inline-flex items-center justify-center w-16 h-16 rounded-2xl bg-amber-100 group-hover:bg-amber-200 mb-4 transition-colors duration-300 ${feature.color}`}>
                <feature.icon className="text-2xl" />
              </div>
              <h3 className="font-semibold text-gray-800 group-hover:text-amber-700 transition-colors duration-300">
                {feature.text}
              </h3>
            </div>
          ))}
        </div>

        {/* Stats Section */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 mb-12 max-w-4xl mx-auto">
          {stats.map((stat, index) => (
            <div key={index} className="text-center">
              <div className="text-3xl lg:text-4xl font-bold text-amber-700 mb-2">
                {stat.number}
              </div>
              <div className="text-gray-600 font-medium">
                {stat.label}
              </div>
            </div>
          ))}
        </div>

        {/* CTA Buttons */}
        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
          <button className="group bg-gradient-to-r from-amber-500 to-amber-600 text-white px-8 py-4 rounded-2xl font-semibold flex items-center gap-3 hover:from-amber-600 hover:to-amber-700 transition-all duration-300 transform hover:scale-105 hover:shadow-2xl shadow-lg">
            <span>Get Started Today</span>
            <FaArrowRight className="group-hover:translate-x-1 transition-transform duration-300" />
          </button>
          
          <button className="group bg-white/80 backdrop-blur-sm text-amber-700 px-8 py-4 rounded-2xl font-semibold flex items-center gap-3 border border-amber-200 hover:border-amber-300 hover:bg-white transition-all duration-300 transform hover:scale-105 hover:shadow-lg">
            <FaPlayCircle className="text-amber-600" />
            <span>Watch Demo</span>
          </button>
        </div>

        {/* Trust Badge */}
        <div className="text-center mt-12">
          <p className="text-gray-500 text-sm mb-4">Trusted by leading textile manufacturers</p>
          <div className="flex justify-center items-center gap-8 opacity-60">
            <div className="w-20 h-8 bg-amber-200 rounded-lg"></div>
            <div className="w-16 h-8 bg-amber-200 rounded-lg"></div>
            <div className="w-24 h-8 bg-amber-200 rounded-lg"></div>
            <div className="w-18 h-8 bg-amber-200 rounded-lg"></div>
          </div>
        </div>
      </div>

      {/* Floating Elements */}
      <div className="absolute top-10 left-10 w-6 h-6 bg-amber-300 rounded-full opacity-40 animate-bounce"></div>
      <div className="absolute top-32 right-20 w-4 h-4 bg-amber-400 rounded-full opacity-60 animate-bounce animation-delay-1000"></div>
      <div className="absolute bottom-20 left-20 w-5 h-5 bg-amber-500 rounded-full opacity-50 animate-bounce animation-delay-2000"></div>
    </section>
  );
};

export default AboutHero;