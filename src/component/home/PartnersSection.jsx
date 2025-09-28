import React, { useState, useEffect, useRef } from "react";
import { 
  FaHandshake, 
  FaAward, 
  FaRocket, 
  FaGlobe,
  FaStar,
  FaQuoteLeft,
  FaArrowRight,
  FaCrown
} from "react-icons/fa";
import { MdWorkspacePremium, MdAutoGraph, MdSecurity } from "react-icons/md";

const PartnersSection = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [activePartner, setActivePartner] = useState(0);
  const marqueeRef = useRef(null);

  const partners = [
    {
      id: 1,
      name: "TextileMasters Inc.",
      logo: "🏭",
      description: "Leading textile manufacturer with 50+ years of industry experience",
      partnership: "Strategic Technology Partner",
      duration: "2 years",
      achievements: ["45% efficiency gain", "99.8% quality rate"],
      testimonial: "TexTrack revolutionized our production workflow and quality control processes."
    },
    {
      id: 2,
      name: "Global Fabrics Co.",
      logo: "🌍",
      description: "International textile supplier with operations in 12 countries",
      partnership: "Supply Chain Innovation Partner",
      duration: "18 months",
      achievements: ["60% faster delivery", "Real-time tracking"],
      testimonial: "The real-time tracking transformed our international supply chain management."
    },
    {
      id: 3,
      name: "Premium Textiles Ltd.",
      logo: "👑",
      description: "Luxury textile producer for high-end fashion brands",
      partnership: "Quality Excellence Partner",
      duration: "3 years",
      achievements: ["Zero defects", "100% traceability"],
      testimonial: "TexTrack's quality control system ensures our premium standards are always met."
    },
    {
      id: 4,
      name: "FashionCo International",
      logo: "👔",
      description: "Global fashion brand with 200+ retail locations",
      partnership: "Retail Integration Partner",
      duration: "1 year",
      achievements: ["Seamless integration", "Inventory optimization"],
      testimonial: "Perfect integration with our retail operations and inventory management."
    },
    {
      id: 5,
      name: "EcoTextile Solutions",
      logo: "🌱",
      description: "Sustainable textile innovator with eco-friendly production",
      partnership: "Sustainability Technology Partner",
      duration: "2 years",
      achievements: ["Carbon footprint tracking", "Sustainable sourcing"],
      testimonial: "TexTrack helps us maintain our sustainability commitments with precise tracking."
    },
    {
      id: 6,
      name: "SmartManufacture Tech",
      logo: "⚡",
      description: "Industry 4.0 technology provider for smart factories",
      partnership: "Technology Integration Partner",
      duration: "2.5 years",
      achievements: ["IoT integration", "Smart factory enablement"],
      testimonial: "Seamless integration with our Industry 4.0 ecosystem and IoT devices."
    }
  ];

  const stats = [
    { number: "50+", label: "Partnerships", icon: FaHandshake },
    { number: "99%", label: "Satisfaction Rate", icon: FaStar },
    { number: "3M+", label: "Batches Tracked", icon: MdAutoGraph },
    { number: "24/7", label: "Global Support", icon: FaGlobe }
  ];

  const features = [
    { icon: MdSecurity, text: "Secure Data Exchange", color: "text-blue-500" },
    { icon: FaRocket, text: "Fast Integration", color: "text-purple-500" },
    { icon: MdWorkspacePremium, text: "Premium Support", color: "text-amber-500" },
    { icon: FaCrown, text: "Priority Features", color: "text-green-500" }
  ];

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.3 }
    );

    if (marqueeRef.current) {
      observer.observe(marqueeRef.current);
    }

    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    const interval = setInterval(() => {
      setActivePartner(prev => (prev + 1) % partners.length);
    }, 4000);

    return () => clearInterval(interval);
  }, [partners.length]);

  const MarqueeRow = ({ items, reverse = false }) => (
    <div className={`flex ${reverse ? 'animate-marquee-reverse' : 'animate-marquee'} whitespace-nowrap py-4`}>
      {[...items, ...items].map((partner, index) => (
        <div
          key={`${partner.id}-${index}`}
          className="inline-flex items-center justify-center mx-8 bg-white/80 backdrop-blur-sm rounded-2xl px-8 py-6 border-2 border-amber-100 shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105"
        >
          <div className="text-4xl mr-4">{partner.logo}</div>
          <div className="text-center">
            <div className="font-bold text-gray-800 text-lg">{partner.name}</div>
            <div className="text-amber-600 font-semibold text-sm">{partner.partnership}</div>
          </div>
        </div>
      ))}
    </div>
  );

  return (
    <section className="relative py-20 lg:py-28 px-4 bg-gradient-to-br from-amber-50 via-white to-amber-100 overflow-hidden">
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
            <FaHandshake className="text-amber-600" />
            Trusted by Industry Leaders
          </div>
          
          <h2 className="text-4xl lg:text-6xl font-black mb-6">
            <span className="bg-gradient-to-r from-amber-600 to-amber-800 bg-clip-text text-transparent">
              Our Partners
            </span>
          </h2>
          
          <p className="text-xl lg:text-2xl text-gray-600 max-w-4xl mx-auto leading-relaxed">
            We collaborate with the world's leading textile manufacturers and fashion brands to 
            <span className="font-semibold text-amber-700"> drive innovation and excellence </span>
            in the textile industry.
          </p>
        </div>

        {/* Stats Section */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 mb-16 max-w-4xl mx-auto">
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

        {/* Marquee Section */}
        <div ref={marqueeRef} className="relative mb-20 overflow-hidden">
          {/* First Marquee Row */}
          <div className="relative">
            <MarqueeRow items={partners.slice(0, 3)} />
          </div>
          
          {/* Second Marquee Row (Reverse) */}
          <div className="relative mt-4">
            <MarqueeRow items={partners.slice(3)} reverse />
          </div>

          {/* Gradient Overlays */}
          <div className="absolute inset-y-0 left-0 w-32 bg-gradient-to-r from-amber-50 to-transparent z-10"></div>
          <div className="absolute inset-y-0 right-0 w-32 bg-gradient-to-l from-amber-50 to-transparent z-10"></div>
        </div>

        {/* Partner Features */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 mb-16 max-w-4xl mx-auto">
          {features.map((feature, index) => {
            const Icon = feature.icon;
            return (
              <div 
                key={index}
                className="flex items-center gap-3 text-gray-700 group hover:text-amber-700 transition-all duration-300"
              >
                <div className="w-12 h-12 rounded-xl bg-amber-100 flex items-center justify-center group-hover:bg-amber-200 transition-colors duration-300">
                  <Icon className={`text-xl ${feature.color}`} />
                </div>
                <span className="font-semibold text-sm">{feature.text}</span>
              </div>
            );
          })}
        </div>

        {/* Featured Partner Spotlight */}
        <div className="bg-white/80 backdrop-blur-sm rounded-3xl p-8 lg:p-12 border border-amber-100 shadow-xl mb-16">
          <div className="text-center mb-8">
            <h3 className="text-3xl lg:text-4xl font-bold text-gray-800 mb-4">
              Partner Spotlight
            </h3>
            <p className="text-xl text-gray-600">
              Discover how our partners achieve exceptional results with TexTrack
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            {/* Partner Info */}
            <div className="space-y-6">
              <div className="flex items-center gap-4">
                <div className="text-6xl">{partners[activePartner].logo}</div>
                <div>
                  <h4 className="text-2xl font-bold text-gray-800">{partners[activePartner].name}</h4>
                  <p className="text-amber-600 font-semibold">{partners[activePartner].partnership}</p>
                  <p className="text-gray-500 text-sm">{partners[activePartner].duration} partnership</p>
                </div>
              </div>

              <p className="text-gray-600 leading-relaxed">
                {partners[activePartner].description}
              </p>

              {/* Achievements */}
              <div className="space-y-3">
                <h5 className="font-semibold text-gray-800">Key Achievements:</h5>
                <div className="grid grid-cols-2 gap-3">
                  {partners[activePartner].achievements.map((achievement, index) => (
                    <div key={index} className="flex items-center gap-2 bg-amber-50 rounded-xl p-3">
                      <FaAward className="text-amber-500" />
                      <span className="text-sm font-medium text-gray-700">{achievement}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Testimonial */}
              <div className="bg-amber-50 rounded-2xl p-6 border border-amber-200">
                <FaQuoteLeft className="text-amber-400 text-xl mb-3" />
                <p className="text-gray-700 italic mb-4">
                  "{partners[activePartner].testimonial}"
                </p>
                <div className="flex items-center gap-2">
                  <div className="flex gap-1">
                    {[...Array(5)].map((_, i) => (
                      <FaStar key={i} className="text-amber-400 fill-current" />
                    ))}
                  </div>
                  <span className="text-amber-600 font-semibold">Verified Partner</span>
                </div>
              </div>
            </div>

            {/* Partner Navigation */}
            <div className="space-y-6">
              <div className="grid grid-cols-2 lg:grid-cols-3 gap-4">
                {partners.map((partner, index) => (
                  <button
                    key={partner.id}
                    onClick={() => setActivePartner(index)}
                    className={`flex flex-col items-center p-4 rounded-2xl border-2 transition-all duration-300 transform ${
                      activePartner === index
                        ? 'border-amber-400 bg-amber-50 scale-105 shadow-lg'
                        : 'border-gray-200 hover:border-amber-300 hover:scale-105'
                    }`}
                  >
                    <div className="text-3xl mb-2">{partner.logo}</div>
                    <div className="text-center">
                      <div className="font-semibold text-gray-800 text-sm">{partner.name.split(' ')[0]}</div>
                      <div className="text-amber-600 text-xs">{partner.duration}</div>
                    </div>
                  </button>
                ))}
              </div>

              {/* Partnership CTA */}
              <div className="bg-gradient-to-r from-amber-500 to-amber-600 rounded-2xl p-6 text-white text-center">
                <h4 className="text-xl font-bold mb-2">Become a Partner</h4>
                <p className="text-amber-100 mb-4">
                  Join our network of industry leaders and transform your textile operations.
                </p>
                <button className="bg-white text-amber-600 px-6 py-3 rounded-xl font-semibold hover:bg-amber-50 transition-all duration-300 transform hover:scale-105 flex items-center gap-2 mx-auto">
                  <span>Partner With Us</span>
                  <FaArrowRight className="group-hover:translate-x-1 transition-transform duration-300" />
                </button>
              </div>
            </div>
          </div>
        </div>

        {/* Final CTA */}
        <div className="text-center">
          <div className="bg-gradient-to-r from-amber-500 to-amber-600 rounded-3xl p-12 text-white shadow-2xl">
            <h3 className="text-3xl lg:text-4xl font-bold mb-6">
              Ready to Join Our Partner Network?
            </h3>
            <p className="text-xl text-amber-100 mb-8 max-w-2xl mx-auto">
              Connect with industry leaders, access exclusive features, and transform your textile operations with TexTrack.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="bg-white text-amber-600 px-8 py-4 rounded-2xl font-semibold hover:bg-amber-50 transition-all duration-300 transform hover:scale-105 shadow-lg">
                Start Partnership Discussion
              </button>
              <button className="bg-amber-700 text-white px-8 py-4 rounded-2xl font-semibold border border-amber-600 hover:bg-amber-800 transition-all duration-300 transform hover:scale-105">
                View Partnership Benefits
              </button>
            </div>
          </div>
        </div>
      </div>

      <style jsx>{`
        @keyframes marquee {
          0% { transform: translateX(0); }
          100% { transform: translateX(-50%); }
        }
        @keyframes marquee-reverse {
          0% { transform: translateX(-50%); }
          100% { transform: translateX(0); }
        }
        .animate-marquee {
          animation: marquee 40s linear infinite;
        }
        .animate-marquee-reverse {
          animation: marquee-reverse 35s linear infinite;
        }
        .animation-delay-2000 {
          animation-delay: 2s;
        }
      `}</style>
    </section>
  );
};

export default PartnersSection;