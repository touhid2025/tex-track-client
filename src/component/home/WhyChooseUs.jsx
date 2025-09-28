import React, { useState, useRef, useEffect } from "react";
import { 
  FaShieldAlt, 
  FaRocket, 
  FaChartLine, 
  FaUsers,
  FaAward,
  FaHeadset,
  FaSync,
  FaLock,
  FaCheckCircle,
  FaArrowRight,
  FaPlay,
  FaStar,
  FaCrown,
  FaTimes
} from "react-icons/fa";
import { 
  MdPrecisionManufacturing, 
  MdAutoGraph, 
  MdSpeed,
  MdSecurity,
  MdWorkspacePremium
} from "react-icons/md";
import { TbRefresh } from "react-icons/tb";

const WhyChooseUs = () => {
  const [activeFeature, setActiveFeature] = useState(0);
  const [isVisible, setIsVisible] = useState(false);
  const [videoPlaying, setVideoPlaying] = useState(false);
  const sectionRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.3 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  const features = [
    {
      icon: MdAutoGraph,
      title: "AI-Powered Intelligence",
      description: "Our advanced machine learning algorithms predict production bottlenecks, optimize workflows, and provide actionable insights before issues occur.",
      highlights: ["Predictive Analytics", "Smart Recommendations", "Automated Insights", "Risk Prevention"],
      stat: "95% Accuracy",
      color: "from-purple-500 to-pink-500",
      delay: "0"
    },
    {
      icon: MdSpeed,
      title: "Lightning Fast Performance",
      description: "Experience real-time tracking and instant updates with our optimized infrastructure that handles millions of data points seamlessly.",
      highlights: ["Real-time Updates", "High Performance", "Low Latency", "Scalable Infrastructure"],
      stat: "<100ms Response",
      color: "from-blue-500 to-cyan-500",
      delay: "100"
    },
    {
      icon: FaShieldAlt,
      title: "Enterprise-Grade Security",
      description: "Military-grade encryption, SOC 2 compliance, and multi-layered security protocols ensure your data remains protected at all times.",
      highlights: ["AES-256 Encryption", "SOC 2 Compliant", "Multi-factor Auth", "Regular Audits"],
      stat: "99.99% Uptime",
      color: "from-green-500 to-emerald-500",
      delay: "200"
    },
    {
      icon: TbRefresh,
      title: "Automated Workflows",
      description: "Streamline your operations with intelligent automation that handles quality checks, status updates, and notifications automatically.",
      highlights: ["Smart Automation", "Quality Control", "Auto Reporting", "Workflow Optimization"],
      stat: "80% Time Saved",
      color: "from-amber-500 to-orange-500",
      delay: "300"
    },
    {
      icon: FaUsers,
      title: "Dedicated Support",
      description: "Get 24/7 expert support from our team of textile industry specialists who understand your unique challenges and needs.",
      highlights: ["24/7 Support", "Industry Experts", "Dedicated Manager", "Training Included"],
      stat: "5-min Response",
      color: "from-red-500 to-rose-500",
      delay: "400"
    },
    {
      icon: MdWorkspacePremium,
      title: "Proven Results",
      description: "Join thousands of manufacturers who have achieved measurable improvements in efficiency, quality, and profitability.",
      highlights: ["Measurable ROI", "Case Studies", "Client Success", "Industry Leader"],
      stat: "98% Satisfaction",
      color: "from-indigo-500 to-purple-500",
      delay: "500"
    }
  ];

  const stats = [
    { number: "45%", label: "Average Production Increase", icon: FaChartLine },
    { number: "99.2%", label: "Quality Control Accuracy", icon: FaAward },
    { number: "65%", label: "Reduction in Delays", icon: FaSync },
    { number: "50%", label: "Cost Savings", icon: FaCrown }
  ];

  const testimonials = [
    {
      name: "Sarah Chen",
      role: "Production Director",
      company: "TextileMasters Inc.",
      text: "TexTrack transformed our entire production workflow. We saw a 60% reduction in delays within the first month.",
      rating: 5,
      improvement: "60% Faster"
    },
    {
      name: "Marcus Rodriguez",
      role: "Supply Chain Manager",
      company: "Global Fabrics Co.",
      text: "The real-time tracking and predictive analytics helped us prevent $2M in potential losses last quarter.",
      rating: 5,
      improvement: "$2M Saved"
    },
    {
      name: "Emily Watson",
      role: "Quality Assurance Lead",
      company: "Premium Textiles Ltd.",
      text: "Automated quality checks eliminated human error and improved our defect detection rate to 99.8%.",
      rating: 5,
      improvement: "99.8% Accuracy"
    }
  ];

  const comparisonData = [
    { feature: "Real-time Tracking", texTrack: true, competitors: false },
    { feature: "AI Predictions", texTrack: true, competitors: false },
    { feature: "Automated QC", texTrack: true, competitors: "Limited" },
    { feature: "24/7 Support", texTrack: true, competitors: "Business Hours" },
    { feature: "Custom Workflows", texTrack: true, competitors: "Limited" },
    { feature: "API Access", texTrack: "Full", competitors: "Basic" }
  ];

  return (
    <section ref={sectionRef} className="relative py-20 lg:py-28 px-4 bg-gradient-to-br from-gray-50 via-amber-50/30 to-gray-100 overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -top-40 -right-40 w-80 h-80 bg-amber-200 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-pulse"></div>
        <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-amber-300 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-pulse animation-delay-2000"></div>
        
        {/* Grid Pattern */}
        <div className="absolute inset-0 opacity-5">
          <div className="absolute inset-0" style={{
            backgroundImage: `linear-gradient(#f59e0b 1px, transparent 1px),
                             linear-gradient(90deg, #f59e0b 1px, transparent 1px)`,
            backgroundSize: '50px 50px'
          }}></div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto relative z-10">
        {/* Header Section */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 bg-amber-100 text-amber-800 px-6 py-3 rounded-full text-lg font-semibold mb-6 border-2 border-amber-200 shadow-lg">
            <FaCrown className="text-amber-600" />
            Why Industry Leaders Choose TexTrack
          </div>
          
          <h2 className="text-4xl lg:text-6xl font-black mb-6">
            <span className="bg-gradient-to-r from-amber-600 to-amber-800 bg-clip-text text-transparent">
              Built for Excellence
            </span>
          </h2>
          
          <p className="text-xl lg:text-2xl text-gray-600 max-w-4xl mx-auto leading-relaxed">
            Discover why thousands of textile manufacturers trust TexTrack to power their production 
            with <span className="font-semibold text-amber-700">unmatched intelligence, security, and performance</span>.
          </p>
        </div>

        {/* Stats Bar */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 mb-20">
          {stats.map((stat, index) => {
            const Icon = stat.icon;
            return (
              <div 
                key={index}
                className={`bg-white/80 backdrop-blur-sm rounded-2xl p-6 text-center border border-amber-100 shadow-lg hover:shadow-xl transition-all duration-500 transform hover:scale-105 ${
                  isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
                }`}
                style={{ transitionDelay: `${index * 100}ms` }}
              >
                <div className="inline-flex items-center justify-center w-16 h-16 rounded-2xl bg-amber-100 text-amber-600 mb-4">
                  <Icon className="text-2xl" />
                </div>
                <div className="text-3xl font-bold text-amber-700 mb-2">{stat.number}</div>
                <div className="text-gray-600 font-medium">{stat.label}</div>
              </div>
            );
          })}
        </div>

        {/* Features Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-20">
          {features.map((feature, index) => {
            const Icon = feature.icon;
            return (
              <div
                key={index}
                onMouseEnter={() => setActiveFeature(index)}
                className={`group relative bg-white/90 backdrop-blur-sm rounded-2xl p-8 border-2 transition-all duration-500 cursor-pointer transform ${
                  activeFeature === index 
                    ? 'border-amber-300 shadow-2xl scale-105' 
                    : 'border-amber-100 shadow-lg hover:shadow-xl'
                } ${
                  isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
                }`}
                style={{ transitionDelay: `${feature.delay}ms` }}
              >
                {/* Icon */}
                <div className={`inline-flex items-center justify-center w-16 h-16 rounded-2xl bg-gradient-to-r ${feature.color} text-white mb-6 group-hover:scale-110 transition-transform duration-300 shadow-lg`}>
                  <Icon className="text-2xl" />
                </div>

                {/* Stat Badge */}
                <div className="inline-flex items-center gap-2 bg-amber-100 text-amber-700 px-3 py-1 rounded-full text-sm font-medium mb-4">
                  <FaCheckCircle className="text-amber-600" />
                  {feature.stat}
                </div>

                {/* Title */}
                <h3 className="text-2xl font-bold text-gray-800 mb-4 group-hover:text-amber-700 transition-colors duration-300">
                  {feature.title}
                </h3>

                {/* Description */}
                <p className="text-gray-600 mb-6 leading-relaxed">
                  {feature.description}
                </p>

                {/* Highlights */}
                <div className="space-y-2">
                  {feature.highlights.map((highlight, idx) => (
                    <div key={idx} className="flex items-center gap-3">
                      <div className="w-2 h-2 bg-amber-400 rounded-full"></div>
                      <span className="text-gray-700 font-medium text-sm">{highlight}</span>
                    </div>
                  ))}
                </div>

                {/* Hover Gradient Overlay */}
                <div className={`absolute inset-0 rounded-2xl bg-gradient-to-br from-amber-500/5 to-orange-500/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none`}></div>
              </div>
            );
          })}
        </div>

        {/* Comparison Section */}
        <div className="bg-white/80 backdrop-blur-sm rounded-3xl p-8 lg:p-12 border border-amber-100 shadow-xl mb-20">
          <div className="text-center mb-12">
            <h3 className="text-3xl lg:text-4xl font-bold text-gray-800 mb-4">
              See the Difference
            </h3>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              How TexTrack compares to traditional textile tracking solutions
            </p>
          </div>

          <div className="max-w-4xl mx-auto">
            <div className="grid grid-cols-3 gap-4 mb-6 p-4 bg-amber-50 rounded-2xl">
              <div className="font-semibold text-gray-800">Feature</div>
              <div className="font-semibold text-amber-700 text-center">TexTrack</div>
              <div className="font-semibold text-gray-500 text-center">Competitors</div>
            </div>

            {comparisonData.map((item, index) => (
              <div 
                key={index}
                className="grid grid-cols-3 gap-4 py-4 px-4 border-b border-amber-100 last:border-b-0 hover:bg-amber-50/50 transition-colors duration-200"
              >
                <div className="font-medium text-gray-700">{item.feature}</div>
                <div className="text-center">
                  {item.texTrack === true ? (
                    <FaCheckCircle className="text-green-500 text-xl mx-auto" />
                  ) : (
                    <span className="font-semibold text-amber-700">{item.texTrack}</span>
                  )}
                </div>
                <div className="text-center">
                  {item.competitors === false ? (
                    <FaTimes className="text-red-400 text-xl mx-auto" />
                  ) : item.competitors === true ? (
                    <FaCheckCircle className="text-green-400 text-xl mx-auto" />
                  ) : (
                    <span className="text-gray-500 font-medium">{item.competitors}</span>
                  )}
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Testimonials */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-16">
          {testimonials.map((testimonial, index) => (
            <div
              key={index}
              className={`bg-white/90 backdrop-blur-sm rounded-2xl p-8 border border-amber-100 shadow-lg hover:shadow-xl transition-all duration-500 transform hover:scale-105 ${
                isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
              }`}
              style={{ transitionDelay: `${index * 200}ms` }}
            >
              <div className="flex gap-1 mb-4">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <FaStar key={i} className="text-amber-400 fill-current" />
                ))}
              </div>
              
              <p className="text-gray-600 text-lg mb-6 leading-relaxed">
                "{testimonial.text}"
              </p>

              <div className="flex items-center justify-between">
                <div>
                  <div className="font-bold text-gray-800">{testimonial.name}</div>
                  <div className="text-amber-600 font-medium">{testimonial.role}</div>
                  <div className="text-gray-500 text-sm">{testimonial.company}</div>
                </div>
                <div className="bg-amber-100 text-amber-700 px-3 py-1 rounded-full text-sm font-semibold">
                  {testimonial.improvement}
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Final CTA */}
        <div className="text-center">
          <div className="bg-gradient-to-r from-amber-500 to-amber-600 rounded-3xl p-12 text-white shadow-2xl">
            <h3 className="text-3xl lg:text-4xl font-bold mb-6">
              Ready to Experience the Difference?
            </h3>
            <p className="text-xl text-amber-100 mb-8 max-w-2xl mx-auto">
              Join the thousands of manufacturers who have transformed their operations with TexTrack.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="bg-white text-amber-600 px-8 py-4 rounded-2xl font-semibold hover:bg-amber-50 transition-all duration-300 transform hover:scale-105 shadow-lg flex items-center gap-3">
                <span>Start Free Trial</span>
                <FaArrowRight className="group-hover:translate-x-1 transition-transform duration-300" />
              </button>
              <button className="bg-amber-700 text-white px-8 py-4 rounded-2xl font-semibold border border-amber-600 hover:bg-amber-800 transition-all duration-300 transform hover:scale-105 flex items-center gap-3">
                <FaPlay />
                <span>Watch Case Study</span>
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhyChooseUs;