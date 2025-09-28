import React, { useState, useEffect } from "react";
import { 
  FaRocket, 
  FaArrowRight, 
  FaPlayCircle, 
  FaStar,
    
  FaHeadset,
  FaChartLine,
  FaShieldAlt
} from "react-icons/fa";
import { MdWorkspacePremium, MdAutoGraph } from "react-icons/md";

const CallToActionSection = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [counter, setCounter] = useState(0);

  useEffect(() => {
    setIsVisible(true);
    
    // Animated counter for stats
    const timer = setTimeout(() => {
      if (counter < 1000) {
        setCounter(prev => Math.min(prev + 25, 1000));
      }
    }, 50);

    return () => clearTimeout(timer);
  }, [counter]);

  const features = [
    { icon: FaShieldAlt, text: "30-day money-back guarantee" },
    { icon: FaHeadset, text: "24/7 dedicated support" },
    { icon: MdAutoGraph, text: "No credit card required" },
    { icon: FaChartLine, text: "Free onboarding session" }
  ];

  const testimonials = [
    { text: "Revolutionized our textile workflow", company: "FashionCo" },
    { text: "50% faster production tracking", company: "TextileMasters" },
    { text: "Best investment we've made", company: "GlobalFabrics" }
  ];

  return (
    <section className="relative py-20 lg:py-28 px-4 overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 bg-gradient-to-br from-amber-500 via-amber-600 to-amber-700"></div>
      
      {/* Animated Background Elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -top-20 -right-20 w-80 h-80 bg-amber-400 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-pulse"></div>
        <div className="absolute -bottom-20 -left-20 w-80 h-80 bg-amber-300 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-pulse animation-delay-2000"></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-amber-200 rounded-full mix-blend-multiply filter blur-3xl opacity-10 animate-pulse animation-delay-4000"></div>
      
        {/* Grid Pattern Overlay */}
        <div className="absolute inset-0 opacity-10">
          <div className="absolute inset-0" style={{
            backgroundImage: `linear-gradient(#ffffff 1px, transparent 1px),
                             linear-gradient(90deg, #ffffff 1px, transparent 1px)`,
            backgroundSize: '50px 50px'
          }}></div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto relative z-10">
        <div className={`transition-all duration-1000 transform ${
          isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'
        }`}>
          
          {/* Main CTA Content */}
          <div className="text-center mb-16">
            {/* Badge */}
            <div className="inline-flex items-center gap-2 bg-amber-100 text-amber-800 px-6 py-3 rounded-full text-lg font-semibold mb-8 border-2 border-amber-200 shadow-lg">
              <MdWorkspacePremium className="text-amber-600 text-xl" />
              Join 1,000+ Manufacturers Already Using TexTrack
            </div>

            {/* Main Heading */}
            <h2 className="text-4xl lg:text-6xl font-bold mb-6 text-white leading-tight">
              Ready to Transform Your
              <span className="block bg-gradient-to-r from-amber-100 to-amber-300 bg-clip-text text-transparent">
                Textile Production?
              </span>
            </h2>

            {/* Subheading */}
            <p className="text-xl lg:text-2xl text-amber-100 mb-8 max-w-4xl mx-auto leading-relaxed">
              Track your textile batches, monitor production in real-time, ensure quality control, 
              and optimize delivery—all in one intelligent platform designed for the modern manufacturer.
            </p>

            {/* Animated Stats */}
            <div className="flex justify-center items-center gap-8 mb-12">
              <div className="text-center">
                <div className="text-3xl lg:text-4xl font-bold text-white mb-2">
                  {counter}+
                </div>
                <div className="text-amber-200 text-sm font-medium">Manufacturers</div>
              </div>
              <div className="w-1 h-12 bg-amber-300/30 rounded-full"></div>
              <div className="text-center">
                <div className="text-3xl lg:text-4xl font-bold text-white mb-2">
                  99.2%
                </div>
                <div className="text-amber-200 text-sm font-medium">Satisfaction</div>
              </div>
              <div className="w-1 h-12 bg-amber-300/30 rounded-full"></div>
              <div className="text-center">
                <div className="text-3xl lg:text-4xl font-bold text-white mb-2">
                  24/7
                </div>
                <div className="text-amber-200 text-sm font-medium">Support</div>
              </div>
            </div>
          </div>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-6 justify-center items-center mb-16">
            <a
              href="/signup"
              className="group relative bg-white text-amber-600 font-bold px-10 py-5 rounded-2xl text-lg hover:scale-105 transition-all duration-300 transform shadow-2xl hover:shadow-3xl flex items-center gap-3 min-w-[200px] justify-center"
            >
              <FaRocket className="text-amber-600 group-hover:scale-110 transition-transform duration-300" />
              <span>Start Free Trial</span>
              <div className="absolute -inset-1 rounded-2xl bg-white/20 blur-sm group-hover:blur-md transition-all duration-300 opacity-0 group-hover:opacity-100"></div>
            </a>

            <a
              href="/demo"
              className="group relative bg-transparent border-2 border-amber-300 text-white font-bold px-10 py-5 rounded-2xl text-lg hover:bg-amber-500 hover:border-amber-500 transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl flex items-center gap-3 min-w-[200px] justify-center"
            >
              <FaPlayCircle className="text-amber-300 group-hover:text-white transition-colors duration-300" />
              <span>Watch Demo</span>
            </a>

            <a
              href="/enterprise"
              className="group relative bg-amber-800 text-white font-bold px-10 py-5 rounded-2xl text-lg hover:bg-amber-900 transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl flex items-center gap-3 min-w-[200px] justify-center"
            >
              <MdWorkspacePremium className="text-amber-200" />
              <span>Enterprise</span>
            </a>
          </div>

          {/* Features List */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12 max-w-4xl mx-auto">
            {features.map((feature, index) => (
              <div 
                key={index}
                className="flex items-center gap-3 text-amber-100 group hover:text-white transition-all duration-300"
              >
                <div className="w-10 h-10 rounded-xl bg-amber-500/20 flex items-center justify-center group-hover:bg-amber-500/30 transition-all duration-300">
                  <feature.icon className="text-lg text-amber-200" />
                </div>
                <span className="font-medium text-sm">{feature.text}</span>
              </div>
            ))}
          </div>

          {/* Testimonials Scroll */}
          <div className="relative max-w-4xl mx-auto">
            <div className="flex overflow-hidden">
              <div className="animate-marquee whitespace-nowrap">
                {[...testimonials, ...testimonials].map((testimonial, index) => (
                  <div key={index} className="inline-flex items-center mx-8 text-amber-200">
                    <div className="flex items-center gap-1">
                      {[...Array(5)].map((_, i) => (
                        <FaStar key={i} className="text-amber-300 text-sm" />
                      ))}
                    </div>
                    <span className="mx-3 font-medium">"{testimonial.text}"</span>
                    <span className="text-amber-300 font-semibold">— {testimonial.company}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Bottom Assurance */}
          <div className="text-center mt-12">
            <p className="text-amber-200 text-sm font-medium">
              🚀 No setup fees • 🛡️ Secure & reliable • 🔄 Easy migration
            </p>
            <p className="text-amber-300/80 text-xs mt-2">
              Get started in minutes. Cancel anytime.
            </p>
          </div>
        </div>
      </div>

      {/* Floating Elements */}
      <div className="absolute top-10 left-10 w-4 h-4 bg-amber-300 rounded-full opacity-60 animate-bounce"></div>
      <div className="absolute top-20 right-20 w-3 h-3 bg-amber-200 rounded-full opacity-80 animate-bounce animation-delay-1000"></div>
      <div className="absolute bottom-20 left-20 w-5 h-5 bg-amber-400 rounded-full opacity-40 animate-bounce animation-delay-2000"></div>
      <div className="absolute bottom-10 right-10 w-4 h-4 bg-amber-300 rounded-full opacity-70 animate-bounce animation-delay-1500"></div>

      <style jsx>{`
        @keyframes marquee {
          0% { transform: translateX(0); }
          100% { transform: translateX(-50%); }
        }
        .animate-marquee {
          animation: marquee 30s linear infinite;
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

export default CallToActionSection;