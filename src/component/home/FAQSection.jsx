import React, { useState, useRef, useEffect } from "react";
import { 
  FaChevronDown, 
  FaChevronUp, 
  FaSearch, 
  FaStar,
  FaShare,
  FaDownload,
  FaThumbsUp,
  FaThumbsDown,
  FaRegComment,
  FaRobot,
  FaHeadset,
  FaBook,
  FaVideo
} from "react-icons/fa";
import { MdHelp, MdContactSupport, MdLiveHelp } from "react-icons/md";

const FAQSection = () => {
  const [activeCategory, setActiveCategory] = useState("general");
  const [openItems, setOpenItems] = useState(new Set());
  const [searchTerm, setSearchTerm] = useState("");
  const [feedback, setFeedback] = useState({});
  const [searchResults, setSearchResults] = useState([]);
  const searchRef = useRef(null);

  const categories = [
    {
      id: "general",
      name: "General",
      icon: MdHelp,
      color: "from-blue-500 to-cyan-500",
      count: 5
    },
    {
      id: "account",
      name: "Account & Billing",
      icon: FaHeadset,
      color: "from-purple-500 to-pink-500",
      count: 4
    },
    {
      id: "features",
      name: "Features",
      icon: FaStar,
      color: "from-amber-500 to-orange-500",
      count: 6
    },
    {
      id: "technical",
      name: "Technical",
      icon: FaRobot,
      color: "from-green-500 to-emerald-500",
      count: 5
    },
    {
      id: "integration",
      name: "Integration",
      icon: MdLiveHelp,
      color: "from-red-500 to-rose-500",
      count: 4
    }
  ];

  const faqData = {
    general: [
      {
        id: "gen-1",
        question: "What is TexTrack and how does it work?",
        answer: "TexTrack is an AI-powered textile batch tracking system that helps manufacturers monitor production in real-time. It uses RFID technology, QR codes, and machine learning algorithms to track batches from raw materials to finished products, providing real-time insights, quality control, and supply chain transparency.",
        tags: ["getting-started", "overview"],
        popularity: 95,
        lastUpdated: "2024-01-15"
      },
      {
        id: "gen-2",
        question: "How secure is my production data?",
        answer: "We employ enterprise-grade security measures including AES-256 encryption, SOC 2 compliance, regular security audits, and multi-factor authentication. Your data is stored in secure AWS data centers with 99.9% uptime guarantee and is never shared with third parties without your explicit consent.",
        tags: ["security", "privacy"],
        popularity: 92,
        lastUpdated: "2024-01-10"
      },
      {
        id: "gen-3",
        question: "Can I integrate TexTrack with my existing systems?",
        answer: "Yes! TexTrack offers comprehensive API integration with popular ERP systems, inventory management software, and custom solutions. We support REST APIs, webhooks, and have pre-built connectors for major platforms. Our integration specialists can help you set up seamless data flow between systems.",
        tags: ["integration", "api"],
        popularity: 88,
        lastUpdated: "2024-01-08"
      },
      {
        id: "gen-4",
        question: "What kind of support do you offer?",
        answer: "We provide 24/7 dedicated support through multiple channels: live chat, email, and phone. All customers get a dedicated account manager, comprehensive training sessions, and access to our extensive documentation. Enterprise plans include on-site training and custom support SLAs.",
        tags: ["support", "help"],
        popularity: 85,
        lastUpdated: "2024-01-12"
      },
      {
        id: "gen-5",
        question: "Is there a mobile app available?",
        answer: "Yes, TexTrack offers fully-featured mobile apps for iOS and Android. The apps provide real-time tracking, push notifications, offline capabilities, QR code scanning, and full dashboard access. You can download them from the App Store or Google Play Store.",
        tags: ["mobile", "app"],
        popularity: 82,
        lastUpdated: "2024-01-05"
      }
    ],
    account: [
      {
        id: "acc-1",
        question: "What's included in the free trial?",
        answer: "Our 14-day free trial includes full access to all features: unlimited batch tracking, real-time analytics, quality control tools, mobile apps, and basic support. No credit card required. You can upgrade to a paid plan at any time during or after the trial.",
        tags: ["trial", "pricing"],
        popularity: 90,
        lastUpdated: "2024-01-14"
      },
      {
        id: "acc-2",
        question: "How does billing work?",
        answer: "We offer flexible billing options: monthly or annual subscriptions. Annual plans save you 20%. You can upgrade, downgrade, or cancel anytime. Invoices are available in your dashboard, and we support multiple payment methods including credit cards, bank transfers, and PayPal.",
        tags: ["billing", "payment"],
        popularity: 87,
        lastUpdated: "2024-01-09"
      },
      {
        id: "acc-3",
        question: "Can I add team members to my account?",
        answer: "Yes, you can add unlimited team members with role-based permissions. Assign different access levels: Admin, Manager, Operator, or Viewer. Each team member gets their own login and can be managed from your account settings.",
        tags: ["team", "collaboration"],
        popularity: 84,
        lastUpdated: "2024-01-07"
      },
      {
        id: "acc-4",
        question: "What happens if I exceed my plan limits?",
        answer: "We'll notify you before you reach your limits and provide options to upgrade. For temporary overages, we offer flexible scaling. Your service continues uninterrupted, and we'll work with you to find the right plan for your needs.",
        tags: ["limits", "scaling"],
        popularity: 79,
        lastUpdated: "2024-01-11"
      }
    ],
    features: [
      {
        id: "feat-1",
        question: "How accurate is the real-time tracking?",
        answer: "Our real-time tracking achieves 99.9% accuracy using multiple data sources: GPS, RFID, and manual updates. Updates occur every 30 seconds, and you can view complete audit trails with timestamps and location data for full transparency.",
        tags: ["tracking", "accuracy"],
        popularity: 94,
        lastUpdated: "2024-01-13"
      },
      {
        id: "feat-2",
        question: "Can I customize quality control checkpoints?",
        answer: "Absolutely! You can create custom QC workflows with specific checkpoints, acceptance criteria, and automated actions. Set up different workflows for different product types and configure automatic alerts for quality issues.",
        tags: ["quality-control", "customization"],
        popularity: 89,
        lastUpdated: "2024-01-06"
      },
      {
        id: "feat-3",
        question: "Does TexTrack provide analytics and reports?",
        answer: "Yes, we offer comprehensive analytics including production efficiency, quality metrics, delivery performance, and cost analysis. Generate custom reports, schedule automated exports, and access pre-built dashboard templates for different roles.",
        tags: ["analytics", "reports"],
        popularity: 86,
        lastUpdated: "2024-01-04"
      },
      {
        id: "feat-4",
        question: "How does the AI prediction feature work?",
        answer: "Our AI analyzes historical data and real-time inputs to predict potential bottlenecks, quality issues, and delivery delays. It uses machine learning models that improve over time and can alert you to issues before they impact your production.",
        tags: ["ai", "predictions"],
        popularity: 91,
        lastUpdated: "2024-01-16"
      },
      {
        id: "feat-5",
        question: "Can I set up automated notifications?",
        answer: "Yes, configure custom notifications for status changes, quality issues, delays, or milestones. Choose delivery methods: push notifications, email, SMS, or in-app alerts. Set up different notification rules for different team members.",
        tags: ["notifications", "alerts"],
        popularity: 83,
        lastUpdated: "2024-01-03"
      },
      {
        id: "feat-6",
        question: "Is there an API for custom integrations?",
        answer: "We offer a comprehensive REST API with detailed documentation. Access all features programmatically, set up webhooks for real-time updates, and use our SDKs for popular programming languages. API rate limits depend on your plan.",
        tags: ["api", "integration"],
        popularity: 88,
        lastUpdated: "2024-01-02"
      }
    ],
    technical: [
      {
        id: "tech-1",
        question: "What are the system requirements?",
        answer: "TexTrack works on any modern web browser (Chrome, Firefox, Safari, Edge). Mobile apps require iOS 14+ or Android 8+. For optimal performance, we recommend a stable internet connection. No special hardware required beyond standard smartphones or tablets for scanning.",
        tags: ["requirements", "compatibility"],
        popularity: 85,
        lastUpdated: "2024-01-15"
      },
      {
        id: "tech-2",
        question: "How is data backed up?",
        answer: "We perform real-time data replication across multiple geographic regions with 15-minute recovery point objectives. Data is backed up every 5 minutes with 30-day retention. Enterprise plans offer custom backup schedules and extended retention periods.",
        tags: ["backup", "recovery"],
        popularity: 82,
        lastUpdated: "2024-01-08"
      },
      {
        id: "tech-3",
        question: "What happens during system maintenance?",
        answer: "We schedule maintenance during low-traffic hours with 7-day advance notice. Most updates are seamless with no downtime. For major updates, we provide detailed changelogs and maintenance windows. Enterprise customers can request custom maintenance schedules.",
        tags: ["maintenance", "updates"],
        popularity: 78,
        lastUpdated: "2024-01-11"
      },
      {
        id: "tech-4",
        question: "Can I export my data?",
        answer: "Yes, you can export all your data in multiple formats: CSV, Excel, PDF, or via API. Schedule automated exports or download on-demand. We ensure data portability and provide tools for easy migration if needed.",
        tags: ["export", "data"],
        popularity: 80,
        lastUpdated: "2024-01-09"
      },
      {
        id: "tech-5",
        question: "How do you handle data privacy?",
        answer: "We are GDPR, CCPA, and SOC 2 compliant. Data is encrypted in transit and at rest. We undergo regular third-party security audits and provide data processing agreements. You own your data, and we never sell it to third parties.",
        tags: ["privacy", "compliance"],
        popularity: 93,
        lastUpdated: "2024-01-14"
      }
    ],
    integration: [
      {
        id: "int-1",
        question: "Which ERP systems do you integrate with?",
        answer: "We have pre-built connectors for SAP, Oracle NetSuite, Microsoft Dynamics, QuickBooks, and more. Custom integrations are available for other systems through our API. Most integrations can be set up in under 30 minutes.",
        tags: ["erp", "integration"],
        popularity: 87,
        lastUpdated: "2024-01-12"
      },
      {
        id: "int-2",
        question: "Can I connect to custom software?",
        answer: "Yes, our comprehensive API allows integration with any custom software. We provide SDKs for Python, JavaScript, Java, and C#. Our integration specialists can help design and implement custom connections.",
        tags: ["custom", "api"],
        popularity: 84,
        lastUpdated: "2024-01-07"
      },
      {
        id: "int-3",
        question: "Do you support webhooks?",
        answer: "Yes, you can set up webhooks for real-time events like batch status changes, quality alerts, and completion notifications. Configure custom payloads and endpoints with retry logic and delivery guarantees.",
        tags: ["webhooks", "automation"],
        popularity: 81,
        lastUpdated: "2024-01-05"
      },
      {
        id: "int-4",
        question: "What authentication methods are supported?",
        answer: "We support OAuth 2.0, API keys, and JWT tokens. Choose the method that best fits your security requirements. All API calls are encrypted and we recommend using environment variables for API key storage.",
        tags: ["authentication", "security"],
        popularity: 79,
        lastUpdated: "2024-01-10"
      }
    ]
  };

  // Search functionality
  useEffect(() => {
    if (searchTerm) {
      const results = [];
      Object.entries(faqData).forEach(([category, items]) => {
        items.forEach(item => {
          if (item.question.toLowerCase().includes(searchTerm.toLowerCase()) || 
              item.answer.toLowerCase().includes(searchTerm.toLowerCase()) ||
              item.tags.some(tag => tag.toLowerCase().includes(searchTerm.toLowerCase()))) {
            results.push({ ...item, category });
          }
        });
      });
      setSearchResults(results);
    } else {
      setSearchResults([]);
    }
  }, [searchTerm]);

  const toggleItem = (itemId) => {
    setOpenItems(prev => {
      const newSet = new Set(prev);
      if (newSet.has(itemId)) {
        newSet.delete(itemId);
      } else {
        newSet.add(itemId);
      }
      return newSet;
    });
  };

  const handleFeedback = (itemId, isHelpful) => {
    setFeedback(prev => ({
      ...prev,
      [itemId]: isHelpful
    }));
  };

  const currentFAQs = searchTerm ? searchResults : faqData[activeCategory];

  return (
    <section className="relative py-20 px-4 bg-gradient-to-br from-gray-50 via-amber-50/30 to-gray-100">
      {/* Background Elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -top-40 -right-40 w-80 h-80 bg-amber-200 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-pulse"></div>
        <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-amber-300 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-pulse animation-delay-2000"></div>
      </div>

      <div className="max-w-6xl mx-auto relative z-10">
        {/* Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 bg-amber-100 text-amber-800 px-6 py-3 rounded-full text-lg font-semibold mb-6 border-2 border-amber-200 shadow-lg">
            <MdHelp className="text-amber-600" />
            Frequently Asked Questions
          </div>
          
          <h2 className="text-4xl lg:text-5xl font-black mb-6">
            <span className="bg-gradient-to-r from-amber-600 to-amber-800 bg-clip-text text-transparent">
              Find Answers Quickly
            </span>
          </h2>
          
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            Get instant answers to common questions about TexTrack. Can't find what you're looking for? 
            Our support team is always ready to help.
          </p>
        </div>

        {/* Search Bar */}
        <div className="max-w-2xl mx-auto mb-12">
          <div className="relative group">
            <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none text-gray-400 group-focus-within:text-amber-500">
              <FaSearch className="text-lg" />
            </div>
            <input
              ref={searchRef}
              type="text"
              placeholder="Search questions, features, or issues..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="w-full pl-12 pr-4 py-4 bg-white/80 backdrop-blur-sm border-2 border-gray-200 rounded-2xl placeholder-gray-400 text-gray-700 focus:outline-none focus:border-amber-400 focus:ring-4 focus:ring-amber-100 transition-all duration-300 shadow-lg hover:shadow-xl"
            />
            {searchTerm && (
              <button
                onClick={() => setSearchTerm("")}
                className="absolute right-4 top-1/2 transform -translate-y-1/2 text-gray-400 hover:text-amber-500 transition-colors duration-200"
              >
                ✕
              </button>
            )}
          </div>
          {searchTerm && (
            <div className="text-center mt-2 text-sm text-gray-500">
              Found {searchResults.length} results for "{searchTerm}"
            </div>
          )}
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
          {/* Categories Sidebar */}
          <div className="lg:col-span-1">
            <div className="bg-white/80 backdrop-blur-sm rounded-2xl p-6 border border-amber-100 shadow-lg sticky top-8">
              <h3 className="text-lg font-semibold text-gray-800 mb-4">Categories</h3>
              <div className="space-y-2">
                {categories.map((category) => {
                  const Icon = category.icon;
                  return (
                    <button
                      key={category.id}
                      onClick={() => {
                        setActiveCategory(category.id);
                        setSearchTerm("");
                      }}
                      className={`w-full flex items-center gap-3 px-4 py-3 rounded-xl font-medium transition-all duration-300 ${
                        activeCategory === category.id
                          ? `bg-gradient-to-r ${category.color} text-white shadow-lg scale-105`
                          : "text-gray-700 hover:bg-amber-50 hover:text-amber-700"
                      }`}
                    >
                      <Icon className="text-lg" />
                      <span className="flex-1 text-left">{category.name}</span>
                      <span className={`text-sm px-2 py-1 rounded-full ${
                        activeCategory === category.id
                          ? "bg-white/20 text-white"
                          : "bg-amber-100 text-amber-700"
                      }`}>
                        {category.count}
                      </span>
                    </button>
                  );
                })}
              </div>

              {/* Help Resources */}
              <div className="mt-8 pt-6 border-t border-amber-100">
                <h4 className="text-lg font-semibold text-gray-800 mb-4">Need More Help?</h4>
                <div className="space-y-3">
                  <button className="w-full flex items-center gap-3 px-4 py-3 bg-amber-50 text-amber-700 rounded-xl font-medium hover:bg-amber-100 transition-colors duration-200">
                    <FaBook className="text-amber-600" />
                    <span>Documentation</span>
                  </button>
                  <button className="w-full flex items-center gap-3 px-4 py-3 bg-amber-50 text-amber-700 rounded-xl font-medium hover:bg-amber-100 transition-colors duration-200">
                    <FaVideo className="text-amber-600" />
                    <span>Video Tutorials</span>
                  </button>
                  <button className="w-full flex items-center gap-3 px-4 py-3 bg-amber-500 text-white rounded-xl font-medium hover:bg-amber-600 transition-colors duration-200">
                    <MdContactSupport className="text-lg" />
                    <span>Contact Support</span>
                  </button>
                </div>
              </div>
            </div>
          </div>

          {/* FAQ Content */}
          <div className="lg:col-span-3">
            <div className="bg-white/80 backdrop-blur-sm rounded-2xl p-8 border border-amber-100 shadow-lg">
              {searchTerm ? (
                <div className="mb-6">
                  <h3 className="text-2xl font-bold text-gray-800 mb-2">Search Results</h3>
                  <p className="text-gray-600">Showing results for "{searchTerm}"</p>
                </div>
              ) : (
                <div className="flex items-center gap-3 mb-6">
                  {categories.map(cat => cat.id === activeCategory && {
                    ...cat,
                    icon: cat.icon
                  }).find(Boolean) && (() => {
                    const category = categories.find(cat => cat.id === activeCategory);
                    const Icon = category.icon;
                    return (
                      <>
                        <div className={`w-12 h-12 rounded-xl bg-gradient-to-r ${category.color} flex items-center justify-center`}>
                          <Icon className="text-white text-xl" />
                        </div>
                        <div>
                          <h3 className="text-2xl font-bold text-gray-800">{category.name} Questions</h3>
                          <p className="text-gray-600">{category.count} frequently asked questions</p>
                        </div>
                      </>
                    );
                  })()}
                </div>
              )}

              <div className="space-y-4">
                {currentFAQs.length > 0 ? (
                  currentFAQs.map((item, index) => (
                    <div
                      key={item.id}
                      className={`border-2 rounded-2xl transition-all duration-300 overflow-hidden ${
                        openItems.has(item.id)
                          ? 'border-amber-300 bg-amber-50/50 shadow-lg'
                          : 'border-gray-200 hover:border-amber-200 hover:shadow-md'
                      }`}
                    >
                      <button
                        onClick={() => toggleItem(item.id)}
                        className="w-full flex items-center justify-between p-6 text-left hover:bg-amber-50/30 transition-colors duration-200"
                      >
                        <div className="flex-1">
                          <h4 className="text-lg font-semibold text-gray-800 pr-8">
                            {item.question}
                          </h4>
                          <div className="flex items-center gap-4 mt-2">
                            <div className="flex items-center gap-1 text-sm text-amber-600">
                              <FaStar className="fill-current" />
                              <span>{item.popularity}% helpful</span>
                            </div>
                            <div className="flex gap-1">
                              {item.tags.map(tag => (
                                <span key={tag} className="px-2 py-1 bg-amber-100 text-amber-700 rounded-full text-xs font-medium">
                                  {tag}
                                </span>
                              ))}
                            </div>
                          </div>
                        </div>
                        <div className={`transform transition-transform duration-300 ${
                          openItems.has(item.id) ? 'rotate-180' : ''
                        }`}>
                          {openItems.has(item.id) ? (
                            <FaChevronUp className="text-amber-500 text-lg" />
                          ) : (
                            <FaChevronDown className="text-gray-400 text-lg" />
                          )}
                        </div>
                      </button>

                      {openItems.has(item.id) && (
                        <div className="px-6 pb-6">
                          <div className="prose prose-amber max-w-none">
                            <p className="text-gray-600 leading-relaxed">{item.answer}</p>
                          </div>
                          
                          {/* Feedback Section */}
                          <div className="mt-6 pt-4 border-t border-amber-200">
                            <div className="flex items-center justify-between">
                              <span className="text-sm text-gray-500">Was this helpful?</span>
                              <div className="flex items-center gap-2">
                                <button
                                  onClick={() => handleFeedback(item.id, true)}
                                  className={`flex items-center gap-2 px-3 py-1 rounded-lg text-sm font-medium transition-colors duration-200 ${
                                    feedback[item.id] === true
                                      ? 'bg-green-100 text-green-700'
                                      : 'bg-gray-100 text-gray-600 hover:bg-green-50 hover:text-green-600'
                                  }`}
                                >
                                  <FaThumbsUp />
                                  <span>Yes</span>
                                </button>
                                <button
                                  onClick={() => handleFeedback(item.id, false)}
                                  className={`flex items-center gap-2 px-3 py-1 rounded-lg text-sm font-medium transition-colors duration-200 ${
                                    feedback[item.id] === false
                                      ? 'bg-red-100 text-red-700'
                                      : 'bg-gray-100 text-gray-600 hover:bg-red-50 hover:text-red-600'
                                  }`}
                                >
                                  <FaThumbsDown />
                                  <span>No</span>
                                </button>
                              </div>
                            </div>
                          </div>

                          {/* Additional Actions */}
                          <div className="flex items-center gap-4 mt-4 pt-4 border-t border-amber-200">
                            <button className="flex items-center gap-2 text-sm text-gray-500 hover:text-amber-600 transition-colors duration-200">
                              <FaShare />
                              <span>Share</span>
                            </button>
                            <button className="flex items-center gap-2 text-sm text-gray-500 hover:text-amber-600 transition-colors duration-200">
                              <FaDownload />
                              <span>Save</span>
                            </button>
                            <button className="flex items-center gap-2 text-sm text-gray-500 hover:text-amber-600 transition-colors duration-200">
                              <FaRegComment />
                              <span>Comment</span>
                            </button>
                          </div>
                        </div>
                      )}
                    </div>
                  ))
                ) : (
                  <div className="text-center py-12">
                    <div className="w-24 h-24 bg-amber-100 rounded-2xl flex items-center justify-center mx-auto mb-4">
                      <FaSearch className="text-amber-500 text-3xl" />
                    </div>
                    <h3 className="text-xl font-semibold text-gray-800 mb-2">No results found</h3>
                    <p className="text-gray-600 mb-6">Try different keywords or browse the categories</p>
                    <button
                      onClick={() => setSearchTerm("")}
                      className="bg-amber-500 text-white px-6 py-3 rounded-xl font-semibold hover:bg-amber-600 transition-colors duration-200"
                    >
                      Clear Search
                    </button>
                  </div>
                )}
              </div>

              {/* Still Need Help Section */}
              <div className="mt-12 pt-8 border-t border-amber-200">
                <div className="bg-gradient-to-r from-amber-500 to-amber-600 rounded-2xl p-8 text-white text-center">
                  <h3 className="text-2xl font-bold mb-4">Still have questions?</h3>
                  <p className="text-amber-100 mb-6">
                    Our support team is here to help you get the most out of TexTrack.
                  </p>
                  <div className="flex flex-col sm:flex-row gap-4 justify-center">
                    <button className="bg-white text-amber-600 px-6 py-3 rounded-xl font-semibold hover:bg-amber-50 transition-colors duration-200">
                      Contact Support
                    </button>
                    <button className="bg-amber-700 text-white px-6 py-3 rounded-xl font-semibold border border-amber-600 hover:bg-amber-800 transition-colors duration-200">
                      Schedule a Demo
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FAQSection;