import React, { useState, useEffect } from "react";
import { 
  FaUserShield, 
  FaClipboardList, 
  FaCheck, 
  FaTruck,
  FaArrowRight,
  FaPlay,
  FaPause,
  FaRegCheckCircle,
  FaSync,
  FaRocket
} from "react-icons/fa";
import { MdPrecisionManufacturing, MdAnalytics, MdDashboard } from "react-icons/md";

const WorkflowSection = () => {
  const [activeStep, setActiveStep] = useState(0);
  const [isPlaying, setIsPlaying] = useState(true);
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    let interval;
    if (isPlaying) {
      interval = setInterval(() => {
        setActiveStep((prev) => (prev + 1) % steps.length);
      }, 3000);
    }
    return () => clearInterval(interval);
  }, [isPlaying]);

  useEffect(() => {
    const progressInterval = setInterval(() => {
      setProgress((prev) => (prev + 1) % 101);
    }, 30);
    return () => clearInterval(progressInterval);
  }, []);

  const steps = [
    {
      icon: FaUserShield,
      title: "Admin Creates Batch",
      description: "Administrators initiate production batches with comprehensive details including materials, timelines, and specifications using our intuitive dashboard.",
      features: ["Batch Configuration", "Material Allocation", "Timeline Setup"],
      color: "from-blue-500 to-cyan-500",
      duration: "2-5 min"
    },
    {
      icon: FaClipboardList,
      title: "Production Monitoring",
      description: "Real-time tracking of manufacturing progress with automated status updates and quality checkpoints at every stage of production.",
      features: ["Real-time Updates", "Quality Checkpoints", "Progress Tracking"],
      color: "from-purple-500 to-pink-500",
      duration: "Ongoing"
    },
    {
      icon: MdPrecisionManufacturing,
      title: "Smart Manufacturing",
      description: "Automated workflow management with IoT sensor integration and predictive maintenance alerts for uninterrupted production.",
      features: ["IoT Integration", "Predictive Maintenance", "Workflow Automation"],
      color: "from-amber-500 to-orange-500",
      duration: "24/7"
    },
    {
      icon: FaCheck,
      title: "Quality Assurance",
      description: "Comprehensive quality control with AI-powered defect detection and automated quality certification before shipment.",
      features: ["AI Defect Detection", "Quality Certification", "Compliance Checks"],
      color: "from-green-500 to-emerald-500",
      duration: "1-2 hours"
    },
    {
      icon: MdAnalytics,
      title: "Analytics & Reporting",
      description: "Advanced analytics dashboard providing insights into production efficiency, quality metrics, and delivery performance.",
      features: ["Performance Analytics", "Quality Metrics", "Efficiency Reports"],
      color: "from-indigo-500 to-purple-500",
      duration: "Real-time"
    },
    {
      icon: FaTruck,
      title: "Delivery Tracking",
      description: "End-to-end logistics tracking with real-time shipment updates and automated customer notifications for complete transparency.",
      features: ["Live Tracking", "Route Optimization", "Customer Alerts"],
      color: "from-red-500 to-rose-500",
      duration: "Until Delivery"
    }
  ];

  const stats = [
    { value: "85%", label: "Faster Setup" },
    { value: "99.2%", label: "Accuracy Rate" },
    { value: "24/7", label: "Monitoring" },
    { value: "50%", label: "Time Saved" }
  ];

  return (
    <section className="relative py-20 lg:py-28 px-4 bg-gradient-to-br from-gray-50 to-amber-50 overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-0 left-0 w-96 h-96 bg-amber-200 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-pulse"></div>
        <div className="absolute bottom-0 right-0 w-96 h-96 bg-amber-300 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-pulse animation-delay-2000"></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-80 h-80 bg-amber-400 rounded-full mix-blend-multiply filter blur-3xl opacity-10 animate-pulse animation-delay-4000"></div>
      </div>

      {/* Animated Progress Line */}
      <div className="absolute top-1/2 left-0 right-0 hidden lg:block">
        <div className="max-w-6xl mx-auto px-8">
          <div className="relative">
            <div className="absolute top-1/2 left-0 right-0 h-1 bg-amber-200 transform -translate-y-1/2 rounded-full"></div>
            <div 
              className="absolute top-1/2 left-0 h-1 bg-gradient-to-r from-amber-500 to-amber-600 transform -translate-y-1/2 rounded-full transition-all duration-1000"
              style={{ width: `${((activeStep + 1) / steps.length) * 100}%` }}
            ></div>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto relative z-10">
        {/* Header Section */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 bg-amber-100 text-amber-800 px-4 py-2 rounded-full text-sm font-medium mb-6 border border-amber-200">
            <FaRocket className="text-amber-600" />
            Streamlined Workflow Process
          </div>
          
          <h2 className="text-4xl lg:text-5xl font-bold mb-6">
            <span className="bg-gradient-to-r from-amber-600 to-amber-800 bg-clip-text text-transparent">
              How TexTrack Works
            </span>
          </h2>
          
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            Experience seamless textile production management with our 
            <span className="font-semibold text-amber-700"> intelligent workflow system </span>
            that automates every step from batch creation to final delivery.
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

        {/* Workflow Controls */}
        <div className="flex justify-center items-center gap-4 mb-12">
          <button
            onClick={() => setIsPlaying(!isPlaying)}
            className="flex items-center gap-2 bg-amber-600 text-white px-6 py-3 rounded-xl font-semibold hover:bg-amber-700 transition-all duration-300 transform hover:scale-105 shadow-lg"
          >
            {isPlaying ? <FaPause /> : <FaPlay />}
            <span>{isPlaying ? 'Pause' : 'Play'} Demo</span>
          </button>
          <div className="text-sm text-gray-600">
            Step {activeStep + 1} of {steps.length}
          </div>
        </div>

        {/* Workflow Steps */}
        <div className="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-8 mb-16">
          {steps.map((step, index) => {
            const StepIcon = step.icon;
            return (
              <div
                key={index}
                onMouseEnter={() => !isPlaying && setActiveStep(index)}
                className={`group relative bg-white/90 backdrop-blur-sm rounded-2xl p-8 border-2 transition-all duration-500 cursor-pointer transform ${
                  activeStep === index 
                    ? 'scale-105 border-amber-300 shadow-2xl' 
                    : 'scale-100 border-amber-100 shadow-lg hover:shadow-xl'
                }`}
              >
                {/* Step Number */}
                <div className={`absolute -top-3 -left-3 w-8 h-8 rounded-full flex items-center justify-center text-white font-bold text-sm shadow-lg transition-all duration-300 ${
                  activeStep === index 
                    ? 'bg-gradient-to-r from-amber-500 to-amber-600 scale-110' 
                    : 'bg-gray-400'
                }`}>
                  {index + 1}
                </div>

                {/* Icon */}
                <div className={`inline-flex items-center justify-center w-16 h-16 rounded-2xl bg-gradient-to-r ${step.color} text-white mb-6 group-hover:scale-110 transition-transform duration-300 shadow-lg`}>
                  <StepIcon className="text-2xl" />
                </div>

                {/* Duration Badge */}
                <div className="inline-flex items-center gap-1 bg-amber-100 text-amber-700 px-3 py-1 rounded-full text-xs font-medium mb-4 border border-amber-200">
                  <FaSync className="text-amber-600" />
                  {step.duration}
                </div>

                {/* Title */}
                <h3 className={`text-xl font-bold mb-4 transition-colors duration-300 ${
                  activeStep === index ? 'text-amber-700' : 'text-gray-800'
                }`}>
                  {step.title}
                </h3>

                {/* Description */}
                <p className="text-gray-600 mb-6 leading-relaxed">
                  {step.description}
                </p>

                {/* Features */}
                <div className="space-y-2">
                  {step.features.map((feature, featureIndex) => (
                    <div key={featureIndex} className="flex items-center gap-3">
                      <FaRegCheckCircle className={`text-sm ${
                        activeStep === index ? 'text-amber-500' : 'text-gray-400'
                      }`} />
                      <span className="text-sm text-gray-600">{feature}</span>
                    </div>
                  ))}
                </div>

                {/* Active Indicator */}
                {activeStep === index && (
                  <div className="absolute top-4 right-4">
                    <div className="w-3 h-3 bg-amber-400 rounded-full animate-ping"></div>
                    <div className="absolute top-1 right-1 w-1 h-1 bg-amber-600 rounded-full"></div>
                  </div>
                )}

                {/* Hover Gradient Overlay */}
                <div className={`absolute inset-0 rounded-2xl bg-gradient-to-br from-amber-500/5 to-orange-500/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none`}></div>
              </div>
            );
          })}
        </div>

        {/* Progress Visualization */}
        <div className="bg-white/80 backdrop-blur-sm rounded-2xl p-8 border border-amber-100 shadow-lg mb-12">
          <div className="flex items-center justify-between mb-4">
            <h3 className="text-lg font-semibold text-gray-800">Current Workflow Progress</h3>
            <span className="text-amber-600 font-bold">{steps[activeStep].title}</span>
          </div>
          <div className="w-full bg-amber-100 rounded-full h-3">
            <div 
              className="bg-gradient-to-r from-amber-500 to-amber-600 h-3 rounded-full transition-all duration-500 ease-out"
              style={{ width: `${((activeStep + 1) / steps.length) * 100}%` }}
            ></div>
          </div>
          <div className="flex justify-between text-sm text-gray-500 mt-2">
            <span>Batch Creation</span>
            <span>Delivery Complete</span>
          </div>
        </div>

        {/* CTA Section */}
        <div className="text-center">
          <div className="bg-gradient-to-r from-amber-500 to-amber-600 rounded-2xl p-8 text-white shadow-2xl">
            <h3 className="text-2xl lg:text-3xl font-bold mb-4">
              Ready to Streamline Your Workflow?
            </h3>
            <p className="text-amber-100 mb-6 max-w-2xl mx-auto">
              Join thousands of manufacturers who have transformed their production process with TexTrack's intelligent workflow system.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="bg-white text-amber-600 px-8 py-3 rounded-xl font-semibold hover:bg-amber-50 transition-all duration-300 transform hover:scale-105 shadow-lg flex items-center gap-2 justify-center">
                <span>Start Free Trial</span>
                <FaArrowRight className="group-hover:translate-x-1 transition-transform duration-300" />
              </button>
              <button className="bg-amber-700 text-white px-8 py-3 rounded-xl font-semibold border border-amber-600 hover:bg-amber-800 transition-all duration-300 transform hover:scale-105">
                Watch Full Demo
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WorkflowSection;