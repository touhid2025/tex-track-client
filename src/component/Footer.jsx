import React from "react";
import { 
  FaTwitter, 
  FaLinkedin, 
  FaGithub, 
  FaFacebook,
  FaInstagram,
  FaYoutube,
  FaDiscord,
  FaMapMarkerAlt,
  FaPhone,
  FaEnvelope,
  FaRocket,
  
  FaAward,
  FaHeadset,
  FaArrowRight,
  FaMobileAlt,
 
  FaQrcode,
  FaCloudDownloadAlt,
  FaShieldAlt
} from "react-icons/fa";
import { MdEmail, MdSupportAgent, MdSecurity } from "react-icons/md";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  const navigation = {
    product: [
      { name: "Features", href: "/features" },
      { name: "Pricing", href: "/pricing" },
      { name: "Use Cases", href: "/use-cases" },
      { name: "Integrations", href: "/integrations" },
      { name: "API Docs", href: "/api" },
      { name: "Status", href: "/status" }
    ],
    solutions: [
      { name: "Textile Manufacturing", href: "/solutions/textile" },
      { name: "Fashion Industry", href: "/solutions/fashion" },
      { name: "Supply Chain", href: "/solutions/supply-chain" },
      { name: "Quality Control", href: "/solutions/quality" },
      { name: "Inventory Management", href: "/solutions/inventory" },
      { name: "Logistics", href: "/solutions/logistics" }
    ],
    resources: [
      { name: "Documentation", href: "/docs" },
      { name: "Blog", href: "/blog" },
      { name: "Case Studies", href: "/case-studies" },
      { name: "Webinars", href: "/webinars" },
      { name: "Help Center", href: "/help" },
      { name: "Community", href: "/community" }
    ],
    company: [
      { name: "About Us", href: "/about" },
      { name: "Careers", href: "/careers" },
      { name: "Press Kit", href: "/press" },
      { name: "Partners", href: "/partners" },
      { name: "Contact", href: "/contact" },
      { name: "Legal", href: "/legal" }
    ]
  };

  const features = [
    { icon: FaShieldAlt, text: "Enterprise Security" },
    { icon: MdSupportAgent, text: "24/7 Support" },
    { icon: FaAward, text: "Award Winning" },
    { icon: FaRocket, text: "99.9% Uptime" }
  ];

  const socialLinks = [
    { icon: FaTwitter, href: "#", label: "Twitter" },
    { icon: FaLinkedin, href: "#", label: "LinkedIn" },
    { icon: FaGithub, href: "#", label: "GitHub" },
    { icon: FaFacebook, href: "#", label: "Facebook" },
    { icon: FaInstagram, href: "#", label: "Instagram" },
    { icon: FaYoutube, href: "#", label: "YouTube" },
    { icon: FaDiscord, href: "#", label: "Discord" }
  ];

  const appStores = [
    { 
      name: "App Store", 
      href: "#", 
      icon: FaMobileAlt,
      subtitle: "Download on the",
      title: "App Store"
    },
    { 
      name: "Google Play", 
      href: "#", 
      icon: FaCloudDownloadAlt,
      subtitle: "Get it on",
      title: "Google Play"
    }
  ];

  return (
    <footer className="relative bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900 text-white overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 overflow-hidden">
        {/* Grid Pattern */}
        <div className="absolute inset-0 opacity-5">
          <div className="absolute inset-0" style={{
            backgroundImage: `linear-gradient(#ffffff 1px, transparent 1px),
                             linear-gradient(90deg, #ffffff 1px, transparent 1px)`,
            backgroundSize: '50px 50px'
          }}></div>
        </div>
        
        {/* Animated Orbs */}
        <div className="absolute -top-40 -right-40 w-80 h-80 bg-amber-500 rounded-full mix-blend-multiply filter blur-3xl opacity-10 animate-pulse"></div>
        <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-amber-600 rounded-full mix-blend-multiply filter blur-3xl opacity-10 animate-pulse animation-delay-2000"></div>
        
        {/* Floating Elements */}
        <div className="absolute top-1/4 left-10 w-2 h-2 bg-amber-400 rounded-full opacity-60 animate-bounce"></div>
        <div className="absolute top-1/3 right-20 w-1 h-1 bg-amber-300 rounded-full opacity-80 animate-bounce animation-delay-1000"></div>
        <div className="absolute bottom-1/4 left-20 w-3 h-3 bg-amber-500 rounded-full opacity-40 animate-bounce animation-delay-2000"></div>
      </div>

      {/* Main Footer Content */}
      <div className="relative z-10">
        {/* Newsletter Section */}
        <div className="border-b border-gray-700/50">
          <div className="max-w-7xl mx-auto px-4 py-16">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <div>
                <div className="inline-flex items-center gap-2 bg-amber-500/10 text-amber-400 px-4 py-2 rounded-full text-sm font-medium mb-4 border border-amber-500/20">
                  <MdEmail className="text-amber-400" />
                  Stay Updated
                </div>
                <h3 className="text-3xl lg:text-4xl font-bold mb-4">
                  Transform Your Textile Production
                </h3>
                <p className="text-gray-300 text-lg">
                  Get the latest insights, product updates, and industry trends delivered to your inbox.
                </p>
              </div>
              
              <div className="bg-gray-800/50 backdrop-blur-sm rounded-2xl p-8 border border-gray-700/50">
                <div className="flex flex-col sm:flex-row gap-4">
                  <input
                    type="email"
                    placeholder="Enter your email address"
                    className="flex-1 px-6 py-4 bg-gray-700/50 border border-gray-600 rounded-xl text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-amber-500 focus:border-transparent"
                  />
                  <button className="bg-gradient-to-r from-amber-500 to-amber-600 text-white px-8 py-4 rounded-xl font-semibold hover:from-amber-600 hover:to-amber-700 transition-all duration-300 transform hover:scale-105 flex items-center gap-2 shadow-lg">
                    <span>Subscribe</span>
                    <FaArrowRight className="text-sm" />
                  </button>
                </div>
                <p className="text-gray-400 text-sm mt-4">
                  No spam. Unsubscribe at any time.
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Main Footer Links */}
        <div className="max-w-7xl mx-auto px-4 py-16">
          <div className="grid grid-cols-1 lg:grid-cols-6 gap-12">
            {/* Brand Section */}
            <div className="lg:col-span-2">
              <div className="flex items-center gap-3 mb-6">
                <div className="w-12 h-12 rounded-xl bg-gradient-to-r from-amber-500 to-amber-600 flex items-center justify-center">
                  <FaRocket className="text-white text-xl" />
                </div>
                <div>
                  <h3 className="text-2xl font-bold bg-gradient-to-r from-amber-400 to-amber-600 bg-clip-text text-transparent">
                    TexTrack
                  </h3>
                  <p className="text-gray-400 text-sm">Smart Textile Tracking</p>
                </div>
              </div>
              
              <p className="text-gray-300 mb-6 leading-relaxed">
                Revolutionizing textile manufacturing with AI-powered batch tracking, real-time monitoring, and quality control solutions for the modern era.
              </p>
              
              {/* Feature Badges */}
              <div className="grid grid-cols-2 gap-3 mb-8">
                {features.map((feature, index) => (
                  <div key={index} className="flex items-center gap-2 text-gray-300">
                    <feature.icon className="text-amber-400 text-sm" />
                    <span className="text-sm">{feature.text}</span>
                  </div>
                ))}
              </div>

              {/* Social Links */}
              <div className="flex gap-3">
                {socialLinks.map((social, index) => (
                  <a
                    key={index}
                    href={social.href}
                    className="w-10 h-10 rounded-xl bg-gray-700/50 text-gray-300 flex items-center justify-center hover:bg-amber-500 hover:text-white transition-all duration-300 transform hover:scale-110 border border-gray-600/50"
                    aria-label={social.label}
                  >
                    <social.icon className="text-lg" />
                  </a>
                ))}
              </div>
            </div>

            {/* Navigation Links */}
            <div className="lg:col-span-4 grid grid-cols-2 md:grid-cols-4 gap-8">
              {Object.entries(navigation).map(([category, links]) => (
                <div key={category}>
                  <h4 className="text-lg font-semibold mb-6 text-white capitalize">
                    {category}
                  </h4>
                  <ul className="space-y-3">
                    {links.map((link, index) => (
                      <li key={index}>
                        <a
                          href={link.href}
                          className="text-gray-400 hover:text-amber-400 transition-all duration-300 hover:translate-x-1 flex items-center gap-2 group"
                        >
                          <FaArrowRight className="text-amber-500 opacity-0 group-hover:opacity-100 transition-opacity duration-300 text-xs" />
                          {link.name}
                        </a>
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Contact & Download Section */}
        <div className="border-t border-gray-700/50">
          <div className="max-w-7xl mx-auto px-4 py-12">
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
              {/* Contact Info */}
              <div className="space-y-4">
                <h4 className="text-lg font-semibold text-white mb-4">Get in Touch</h4>
                <div className="flex items-center gap-3 text-gray-300">
                  <FaMapMarkerAlt className="text-amber-400" />
                  <span>Dhaka, Bangladesh</span>
                </div>
                <div className="flex items-center gap-3 text-gray-300">
                  <FaPhone className="text-amber-400" />
                  <span>+880 1743287246</span>
                </div>
                <div className="flex items-center gap-3 text-gray-300">
                  <FaEnvelope className="text-amber-400" />
                  <span>touhidbinamin@gmail.com</span>
                </div>
              </div>

              {/* App Downloads */}
              <div>
                <h4 className="text-lg font-semibold text-white mb-4">Mobile App</h4>
                <div className="flex gap-4">
                  {appStores.map((store, index) => (
                    <a
                      key={index}
                      href={store.href}
                      className="flex items-center gap-3 bg-gray-800/50 hover:bg-gray-700/50 border border-gray-700/50 rounded-xl p-4 transition-all duration-300 hover:scale-105 group"
                    >
                      <store.icon className="text-2xl text-amber-400" />
                      <div>
                        <div className="text-xs text-gray-400">{store.subtitle}</div>
                        <div className="text-white font-semibold">{store.title}</div>
                      </div>
                    </a>
                  ))}
                </div>
              </div>

              {/* QR Code */}
              <div className="text-center lg:text-right">
                <h4 className="text-lg font-semibold text-white mb-4">Scan to Download</h4>
                <div className="inline-flex items-center justify-center w-32 h-32 bg-white rounded-2xl p-2">
                  <div className="w-full h-full bg-gradient-to-br from-amber-400 to-amber-600 rounded-xl flex items-center justify-center">
                    <FaQrcode className="text-white text-4xl" />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-gray-700/50">
          <div className="max-w-7xl mx-auto px-4 py-8">
            <div className="flex flex-col lg:flex-row justify-between items-center gap-4">
              <div className="flex items-center gap-6 text-gray-400 text-sm">
                <span>&copy; {currentYear} TexTrack. All rights reserved.</span>
                <div className="flex gap-4">
                  <a href="/privacy" className="hover:text-amber-400 transition-colors duration-300">Privacy Policy</a>
                  <a href="/terms" className="hover:text-amber-400 transition-colors duration-300">Terms of Service</a>
                  <a href="/cookies" className="hover:text-amber-400 transition-colors duration-300">Cookie Policy</a>
                </div>
              </div>
              
              <div className="flex items-center gap-4 text-gray-400">
                <div className="flex items-center gap-2">
                  <MdSecurity className="text-amber-400" />
                  <span className="text-sm">ISO 27001 Certified</span>
                </div>
                <div className="w-1 h-1 bg-gray-600 rounded-full"></div>
                <div className="flex items-center gap-2">
                  <FaHeadset className="text-amber-400" />
                  <span className="text-sm">24/7 Support</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <style jsx>{`
        .animation-delay-1000 {
          animation-delay: 1s;
        }
        .animation-delay-2000 {
          animation-delay: 2s;
        }
      `}</style>
    </footer>
  );
};

export default Footer;