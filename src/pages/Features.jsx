import React, { useState, useEffect, useRef } from "react";
import { 
  FaEye, 
  FaShieldAlt, 
  FaRocket, 
  FaChartLine, 
  FaSync, 
  FaMobileAlt,
  FaCloud,
  FaDatabase,
  FaCog,
  FaBell,
  FaUsers,
  FaLock,
  FaArrowRight,
  FaPlay,
  FaPause,
  FaStar,
  FaCheckCircle,
  FaRegCheckCircle
} from "react-icons/fa";
import { 
  MdPrecisionManufacturing, 
  MdAnalytics, 
  MdDashboard,
  MdSpeed,
  MdSecurity,
  MdIntegrationInstructions
} from "react-icons/md";
import { TbRefresh } from "react-icons/tb";

const FeaturesPage = () => {
  const [activeCategory, setActiveCategory] = useState("tracking");
  const [activeFeature, setActiveFeature] = useState(0);
  const [isPlaying, setIsPlaying] = useState(true);
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef(null);

  useEffect(() => {
    setIsVisible(true);
    
    if (isPlaying) {
      const interval = setInterval(() => {
        setActiveFeature(prev => (prev + 1) % features[activeCategory].items.length);
      }, 4000);
      return () => clearInterval(interval);
    }
  }, [isPlaying, activeCategory]);

  const categories = [
    {
      id: "tracking",
      name: "Smart Tracking",
      icon: FaEye,
      color: "from-blue-500 to-cyan-500",
      description: "Advanced batch tracking with real-time monitoring"
    },
    {
      id: "analytics",
      name: "AI Analytics",
      icon: MdAnalytics,
      color: "from-purple-500 to-pink-500",
      description: "Predictive insights and performance analytics"
    },
    {
      id: "automation",
      name: "Automation",
      icon: TbRefresh,
      color: "from-green-500 to-emerald-500",
      description: "Automated workflows and quality control"
    },
    {
      id: "security",
      name: "Security",
      icon: FaShieldAlt,
      color: "from-amber-500 to-orange-500",
      description: "Enterprise-grade security and compliance"
    },
    {
      id: "integration",
      name: "Integration",
      icon: MdIntegrationInstructions,
      color: "from-red-500 to-rose-500",
      description: "Seamless third-party integrations"
    }
  ];

  const features = {
    tracking: {
      items: [
        {
          icon: FaEye,
          title: "Real-time Batch Tracking",
          description: "Live tracking of textile batches with GPS and RFID integration. Monitor every stage from raw material to finished product.",
          highlights: ["GPS Tracking", "RFID Integration", "Live Updates", "Location History"],
          stats: "99.9% Accuracy"
        },
        {
          icon: MdDashboard,
          title: "Interactive Dashboard",
          description: "Beautiful, intuitive dashboard with customizable widgets and real-time production metrics.",
          highlights: ["Custom Widgets", "Real-time Metrics", "Drag & Drop", "Multi-view"],
          stats: "50+ Widgets"
        },
        {
          icon: FaMobileAlt,
          title: "Mobile Monitoring",
          description: "Complete mobile access with push notifications and offline capabilities for on-the-go management.",
          highlights: ["Push Notifications", "Offline Mode", "Mobile Alerts", "QR Scanning"],
          stats: "24/7 Access"
        }
      ]
    },
    analytics: {
      items: [
        {
          icon: MdAnalytics,
          title: "Predictive Analytics",
          description: "AI-powered predictions for production bottlenecks, delivery times, and quality issues before they happen.",
          highlights: ["AI Predictions", "Bottleneck Detection", "Quality Forecasting", "Risk Analysis"],
          stats: "95% Accuracy"
        },
        {
          icon: FaChartLine,
          title: "Performance Insights",
          description: "Deep insights into production efficiency, machine utilization, and workforce productivity.",
          highlights: ["Efficiency Metrics", "Utilization Rates", "Productivity Analysis", "KPI Tracking"],
          stats: "45% Improvement"
        },
        {
          icon: FaDatabase,
          title: "Data Intelligence",
          description: "Advanced data processing with machine learning algorithms for continuous improvement.",
          highlights: ["Machine Learning", "Pattern Recognition", "Trend Analysis", "Smart Reports"],
          stats: "10M+ Data Points"
        }
      ]
    },
    automation: {
      items: [
        {
          icon: TbRefresh,
          title: "Automated Workflows",
          description: "Create custom automation rules for quality checks, status updates, and notification triggers.",
          highlights: ["Custom Rules", "Auto QC", "Status Updates", "Smart Triggers"],
          stats: "80% Time Saved"
        },
        {
          icon: FaCog,
          title: "Smart Quality Control",
          description: "Automated quality assessment with AI-powered defect detection and compliance checking.",
          highlights: ["AI Defect Detection", "Auto Compliance", "Quality Scoring", "Issue Tracking"],
          stats: "99.2% Quality Rate"
        },
        {
          icon: FaBell,
          title: "Intelligent Alerts",
          description: "Smart notification system that learns from patterns to provide relevant, timely alerts.",
          highlights: ["Smart Notifications", "Pattern Learning", "Priority Alerts", "Multi-channel"],
          stats: "60% Fewer False Alerts"
        }
      ]
    },
    security: {
      items: [
        {
          icon: FaShieldAlt,
          title: "Enterprise Security",
          description: "Military-grade encryption, multi-factor authentication, and comprehensive access controls.",
          highlights: ["AES-256 Encryption", "2FA/MFA", "Role-based Access", "Audit Logs"],
          stats: "ISO 27001 Certified"
        },
        {
          icon: FaLock,
          title: "Data Protection",
          description: "End-to-end data protection with regular security audits and compliance monitoring.",
          highlights: ["End-to-end Encryption", "Security Audits", "Compliance Monitoring", "Data Backup"],
          stats: "99.99% Uptime"
        },
        {
          icon: FaUsers,
          title: "Team Management",
          description: "Granular permission system with customizable roles and detailed activity tracking.",
          highlights: ["Granular Permissions", "Custom Roles", "Activity Tracking", "Team Analytics"],
          stats: "Unlimited Users"
        }
      ]
    },
    integration: {
      items: [
        {
          icon: MdIntegrationInstructions,
          title: "API Ecosystem",
          description: "Comprehensive REST API with extensive documentation and SDK support for custom integrations.",
          highlights: ["REST API", "Webhooks", "SDK Support", "Custom Endpoints"],
          stats: "100+ Endpoints"
        },
        {
          icon: FaCloud,
          title: "Cloud Integration",
          description: "Seamless integration with major cloud platforms and enterprise systems.",
          highlights: ["AWS/Azure/GCP", "ERP Systems", "CRM Integration", "Cloud Storage"],
          stats: "50+ Integrations"
        },
        {
          icon: MdSpeed,
          title: "High Performance",
          description: "Lightning-fast data processing and real-time synchronization across all platforms.",
          highlights: ["Real-time Sync", "Fast Processing", "Low Latency", "High Availability"],
          stats: "<100ms Response"
        }
      ]
    }
  };

  const stats = [
    { number: "99.9%", label: "Tracking Accuracy", icon: FaCheckCircle },
    { number: "24/7", label: "Real-time Monitoring", icon: FaEye },
    { number: "50%", label: "Faster Production", icon: MdSpeed },
    { number: "1000+", label: "Batches Tracked", icon: FaDatabase }
  ];

  const testimonials = [
    {
      name: "Sarah Chen",
      role: "Production Manager",
      company: "TextileMasters Inc.",
      text: "TexTrack reduced our production delays by 65% and improved quality control accuracy to 99.8%.",
      rating: 5
    },
    {
      name: "Marcus Rodriguez",
      role: "Supply Chain Director",
      company: "Global Fabrics Co.",
      text: "The real-time tracking and predictive analytics have transformed our entire supply chain operations.",
      rating: 5
    },
    {
      name: "Emily Watson",
      role: "Quality Assurance Lead",
      company: "Premium Textiles Ltd.",
      text: "Automated quality checks saved us 40 hours per week and eliminated human error in inspections.",
      rating: 5
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 via-amber-50/30 to-gray-100">
      {/* Hero Section */}
      <section className="relative py-20 lg:py-28 px-4 overflow-hidden">
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute -top-40 -right-40 w-80 h-80 bg-amber-200 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-pulse"></div>
          <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-amber-300 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-pulse animation-delay-2000"></div>
        </div>

        <div className="max-w-7xl mx-auto text-center relative z-10">
          <div className="inline-flex items-center gap-2 bg-amber-100 text-amber-800 px-6 py-3 rounded-full text-lg font-semibold mb-8 border-2 border-amber-200 shadow-lg">
            <FaRocket className="text-amber-600" />
            Powerful Features for Modern Textile Manufacturing
          </div>

          <h1 className="text-5xl lg:text-7xl font-black mb-6 leading-tight">
            <span className="bg-gradient-to-r from-amber-600 via-amber-700 to-amber-800 bg-clip-text text-transparent">
              Advanced Features
            </span>
          </h1>

          <p className="text-xl lg:text-2xl text-gray-600 mb-12 max-w-4xl mx-auto leading-relaxed">
            Discover how TexTrack's comprehensive suite of tools can transform your textile production 
            with <span className="font-semibold text-amber-700">AI-powered insights, real-time tracking, and automated workflows</span> 
            designed for the modern manufacturer.
          </p>

          {/* Stats Bar */}
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 max-w-4xl mx-auto mb-16">
            {stats.map((stat, index) => {
              const Icon = stat.icon;
              return (
                <div key={index} className="text-center">
                  <div className="inline-flex items-center justify-center w-16 h-16 rounded-2xl bg-amber-100 text-amber-600 mb-4 shadow-lg">
                    <Icon className="text-2xl" />
                  </div>
                  <div className="text-3xl font-bold text-amber-700 mb-2">{stat.number}</div>
                  <div className="text-gray-600 font-medium">{stat.label}</div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Category Navigation */}
      <section className="relative py-8 px-4 border-y border-amber-200/30 bg-white/50 backdrop-blur-sm">
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-wrap justify-center gap-4">
            {categories.map((category) => {
              const Icon = category.icon;
              return (
                <button
                  key={category.id}
                  onClick={() => {
                    setActiveCategory(category.id);
                    setActiveFeature(0);
                  }}
                  className={`flex items-center gap-3 px-6 py-4 rounded-2xl font-semibold transition-all duration-500 transform ${
                    activeCategory === category.id
                      ? `bg-gradient-to-r ${category.color} text-white shadow-2xl scale-105`
                      : "bg-white text-gray-700 hover:bg-amber-50 hover:scale-105 shadow-lg hover:shadow-xl"
                  }`}
                >
                  <Icon className="text-xl" />
                  <span>{category.name}</span>
                </button>
              );
            })}
          </div>
        </div>
      </section>

      {/* Features Showcase */}
      <section ref={sectionRef} className="py-20 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            {/* Feature Content */}
            <div className={`transition-all duration-1000 transform ${
              isVisible ? 'translate-x-0 opacity-100' : 'translate-x-10 opacity-0'
            }`}>
              <div className="flex items-center gap-4 mb-6">
                <button
                  onClick={() => setIsPlaying(!isPlaying)}
                  className="w-12 h-12 rounded-2xl bg-amber-100 text-amber-600 flex items-center justify-center hover:bg-amber-200 transition-all duration-300 shadow-lg"
                >
                  {isPlaying ? <FaPause /> : <FaPlay />}
                </button>
                <span className="text-amber-600 font-semibold">
                  Feature {activeFeature + 1} of {features[activeCategory].items.length}
                </span>
              </div>

              {features[activeCategory].items.map((feature, index) => (
                <div
                  key={index}
                  className={`transition-all duration-500 ${
                    activeFeature === index ? 'block' : 'hidden'
                  }`}
                >
                  <div className="inline-flex items-center gap-2 bg-amber-100 text-amber-700 px-4 py-2 rounded-full text-sm font-medium mb-4">
                    <feature.icon className="text-amber-600" />
                    {feature.stats}
                  </div>

                  <h3 className="text-4xl lg:text-5xl font-bold text-gray-800 mb-6">
                    {feature.title}
                  </h3>

                  <p className="text-xl text-gray-600 mb-8 leading-relaxed">
                    {feature.description}
                  </p>

                  <div className="grid grid-cols-2 gap-4 mb-8">
                    {feature.highlights.map((highlight, idx) => (
                      <div key={idx} className="flex items-center gap-3">
                        <FaRegCheckCircle className="text-amber-500 text-lg" />
                        <span className="text-gray-700 font-medium">{highlight}</span>
                      </div>
                    ))}
                  </div>

                  <button className="bg-gradient-to-r from-amber-500 to-amber-600 text-white px-8 py-4 rounded-2xl font-semibold hover:from-amber-600 hover:to-amber-700 transition-all duration-300 transform hover:scale-105 shadow-lg flex items-center gap-3">
                    <span>Learn More</span>
                    <FaArrowRight className="group-hover:translate-x-1 transition-transform duration-300" />
                  </button>
                </div>
              ))}
            </div>

            {/* Feature Visual */}
            <div className="relative">
              <div className="relative bg-gradient-to-br from-amber-500/10 to-amber-600/10 rounded-3xl p-8 border-2 border-amber-200/50 backdrop-blur-sm">
                {/* Animated Background */}
                <div className="absolute inset-0 rounded-3xl bg-gradient-to-r from-amber-500/5 to-amber-600/5 animate-pulse"></div>
                
                {/* Feature Cards */}
                <div className="relative grid gap-6">
                  {features[activeCategory].items.map((feature, index) => {
                    const Icon = feature.icon;
                    return (
                      <div
                        key={index}
                        className={`bg-white rounded-2xl p-6 border-2 shadow-lg transition-all duration-500 transform ${
                          activeFeature === index
                            ? 'border-amber-300 scale-105 shadow-2xl'
                            : 'border-gray-200 opacity-50 scale-95'
                        }`}
                      >
                        <div className="flex items-center gap-4 mb-4">
                          <div className={`w-12 h-12 rounded-xl bg-gradient-to-r from-amber-500 to-amber-600 flex items-center justify-center ${
                            activeFeature === index ? 'scale-110' : 'scale-100'
                          } transition-transform duration-300`}>
                            <Icon className="text-white text-xl" />
                          </div>
                          <h4 className="text-xl font-bold text-gray-800">{feature.title}</h4>
                        </div>
                        <p className="text-gray-600">{feature.description}</p>
                      </div>
                    );
                  })}
                </div>

                {/* Floating Elements */}
                <div className="absolute -top-4 -right-4 w-8 h-8 bg-amber-400 rounded-full animate-bounce"></div>
                <div className="absolute -bottom-4 -left-4 w-6 h-6 bg-amber-300 rounded-full animate-bounce animation-delay-1000"></div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-20 px-4 bg-gradient-to-r from-amber-500/5 to-amber-600/5">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl lg:text-5xl font-bold text-gray-800 mb-6">
              Trusted by Industry Leaders
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              See what textile manufacturers are saying about their experience with TexTrack.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <div
                key={index}
                className="bg-white rounded-3xl p-8 shadow-2xl border border-amber-100 hover:shadow-3xl transition-all duration-500 transform hover:scale-105"
              >
                <div className="flex gap-1 mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <FaStar key={i} className="text-amber-400 fill-current" />
                  ))}
                </div>
                <p className="text-gray-600 text-lg mb-6 leading-relaxed">
                  "{testimonial.text}"
                </p>
                <div>
                  <div className="font-bold text-gray-800">{testimonial.name}</div>
                  <div className="text-amber-600 font-medium">{testimonial.role}</div>
                  <div className="text-gray-500 text-sm">{testimonial.company}</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="py-20 px-4">
        <div className="max-w-4xl mx-auto text-center">
          <div className="bg-gradient-to-r from-amber-500 to-amber-600 rounded-3xl p-12 text-white shadow-2xl">
            <h2 className="text-4xl lg:text-5xl font-bold mb-6">
              Ready to Transform Your Textile Production?
            </h2>
            <p className="text-xl text-amber-100 mb-8 max-w-2xl mx-auto">
              Join thousands of manufacturers who have revolutionized their workflow with TexTrack's advanced features.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="bg-white text-amber-600 px-8 py-4 rounded-2xl font-semibold hover:bg-amber-50 transition-all duration-300 transform hover:scale-105 shadow-lg">
                Start Free Trial
              </button>
              <button className="bg-amber-700 text-white px-8 py-4 rounded-2xl font-semibold border border-amber-600 hover:bg-amber-800 transition-all duration-300 transform hover:scale-105">
                Schedule Demo
              </button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default FeaturesPage;