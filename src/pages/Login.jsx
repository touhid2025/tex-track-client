import React, { useState } from "react";
import { Link } from "react-router";
import { 
  FaEnvelope, 
  FaLock, 
  FaEye, 
  FaEyeSlash, 
  FaArrowRight,
  FaRocket,
  FaAward,
  FaHeadset,
  FaGoogle,
  FaGithub,
  FaLinkedin,
  FaUser,
  FaCheckCircle,
  FaShieldAlt
} from "react-icons/fa";
import { MdWorkspacePremium, MdSecurity } from "react-icons/md";

const Login = () => {
  const [formData, setFormData] = useState({
    email: "",
    password: "",
    rememberMe: false
  });

  const [showPassword, setShowPassword] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [showForgotPassword, setShowForgotPassword] = useState(false);

  const features = [
    { icon: FaShieldAlt, text: "Enterprise Security", color: "text-blue-500" },
    { icon: MdWorkspacePremium, text: "AI-Powered Insights", color: "text-purple-500" },
    { icon: FaAward, text: "99.9% Uptime", color: "text-amber-500" },
    { icon: FaHeadset, text: "24/7 Support", color: "text-green-500" }
  ];

  const socialProviders = [
    { 
      name: "Google", 
      icon: FaGoogle, 
      color: "hover:bg-red-50 hover:border-red-200 hover:text-red-600",
      bgColor: "bg-red-500"
    },
    { 
      name: "GitHub", 
      icon: FaGithub, 
      color: "hover:bg-gray-50 hover:border-gray-200 hover:text-gray-800",
      bgColor: "bg-gray-800"
    },
    { 
      name: "LinkedIn", 
      icon: FaLinkedin, 
      color: "hover:bg-blue-50 hover:border-blue-200 hover:text-blue-600",
      bgColor: "bg-blue-600"
    }
  ];

  const testimonials = [
    {
      name: "Sarah Chen",
      role: "Production Manager",
      text: "TexTrack reduced our production delays by 65% and improved our efficiency dramatically.",
      avatar: "👩‍💼"
    },
    {
      name: "Marcus Rodriguez",
      role: "Supply Chain Director",
      text: "The real-time tracking and analytics have transformed our entire operation.",
      avatar: "👨‍💼"
    },
    {
      name: "Emily Watson",
      role: "QA Lead",
      text: "Automated quality checks saved us 40+ hours per week. Incredible platform!",
      avatar: "👩‍🔧"
    }
  ];

  const handleInputChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: type === 'checkbox' ? checked : value
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsLoading(true);
    
    // Simulate API call
    await new Promise(resolve => setTimeout(resolve, 1500));
    
    console.log("Login data:", formData);
    setIsLoading(false);
  };

  const handleForgotPassword = async (e) => {
    e.preventDefault();
    setIsLoading(true);
    
    // Simulate password reset API call
    await new Promise(resolve => setTimeout(resolve, 1000));
    
    alert("Password reset instructions sent to your email!");
    setShowForgotPassword(false);
    setIsLoading(false);
  };

  const InputField = ({ icon: Icon, type, name, placeholder, value, onChange, required = false }) => (
    <div className="relative group">
      <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none text-gray-400 group-focus-within:text-amber-500 transition-colors duration-300">
        <Icon className="text-lg" />
      </div>
      <input
        type={type}
        name={name}
        placeholder={placeholder}
        value={value}
        onChange={onChange}
        required={required}
        className="w-full pl-12 pr-4 py-4 bg-white/80 backdrop-blur-sm border-2 border-gray-200 rounded-2xl placeholder-gray-400 text-gray-700 focus:outline-none focus:border-amber-400 focus:ring-4 focus:ring-amber-100 transition-all duration-300 shadow-sm hover:shadow-md"
      />
    </div>
  );

  return (
    <div className="min-h-screen bg-gradient-to-br from-amber-50 via-white to-amber-100 flex items-center justify-center p-4">
      <div className="max-w-7xl w-full grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
        
        {/* Left Side - Branding & Features */}
        <div className="text-center lg:text-left">
          <Link to="/" className="inline-flex items-center gap-3 mb-12 group">
            <div className="w-14 h-14 rounded-2xl bg-gradient-to-r from-amber-500 to-amber-600 flex items-center justify-center shadow-2xl group-hover:scale-110 transition-transform duration-300">
              <FaRocket className="text-white text-2xl" />
            </div>
            <div>
              <h1 className="text-4xl font-black bg-gradient-to-r from-amber-600 to-amber-800 bg-clip-text text-transparent">
                TexTrack
              </h1>
              <p className="text-amber-600 font-semibold text-sm tracking-wider">
                SMART TEXTILE TRACKING
              </p>
            </div>
          </Link>

          <div className="space-y-8">
            <div>
              <h2 className="text-5xl lg:text-6xl font-black text-gray-800 mb-6 leading-tight">
                Welcome
                <span className="block bg-gradient-to-r from-amber-500 to-amber-600 bg-clip-text text-transparent">
                  Back
                </span>
              </h2>
              <p className="text-xl text-gray-600 leading-relaxed">
                Sign in to your TexTrack account and continue transforming your textile production with intelligent tracking.
              </p>
            </div>

            {/* Features List */}
            <div className="grid grid-cols-2 gap-4">
              {features.map((feature, index) => (
                <div key={index} className="flex items-center gap-3 text-gray-700">
                  <div className={`w-10 h-10 rounded-xl bg-amber-100 flex items-center justify-center ${feature.color}`}>
                    <feature.icon className="text-lg" />
                  </div>
                  <span className="font-medium">{feature.text}</span>
                </div>
              ))}
            </div>

            {/* Testimonials Carousel */}
            <div className="bg-white/60 backdrop-blur-sm rounded-2xl p-6 border border-amber-200">
              <div className="space-y-4">
                {testimonials.map((testimonial, index) => (
                  <div key={index} className="flex items-start gap-4">
                    <div className="text-2xl">{testimonial.avatar}</div>
                    <div>
                      <p className="text-gray-600 text-sm leading-relaxed">"{testimonial.text}"</p>
                      <div className="mt-2">
                        <div className="font-semibold text-gray-800">{testimonial.name}</div>
                        <div className="text-amber-600 text-sm">{testimonial.role}</div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Right Side - Login Form */}
        <div className="bg-white/90 backdrop-blur-sm rounded-3xl p-8 lg:p-12 shadow-2xl border border-amber-100">
          <div className="text-center mb-8">
            <h3 className="text-3xl font-bold text-gray-800 mb-2">
              Sign In to Your Account
            </h3>
            <p className="text-gray-600">
              New to TexTrack?{" "}
              <Link to="/register" className="text-amber-600 font-semibold hover:text-amber-700 transition-colors duration-200">
                Create an account
              </Link>
            </p>
          </div>

          {/* Social Sign In */}
          <div className="space-y-4 mb-8">
            {socialProviders.map((provider, index) => {
              const Icon = provider.icon;
              return (
                <button
                  key={index}
                  className={`w-full flex items-center justify-center gap-3 py-4 px-6 border-2 border-gray-200 rounded-2xl font-semibold text-gray-700 transition-all duration-300 transform hover:scale-105 ${provider.color}`}
                >
                  <Icon className="text-xl" />
                  <span>Continue with {provider.name}</span>
                </button>
              );
            })}
          </div>

          {/* Divider */}
          <div className="flex items-center mb-8">
            <div className="flex-1 border-t border-gray-200"></div>
            <span className="px-4 text-gray-500 font-medium">OR</span>
            <div className="flex-1 border-t border-gray-200"></div>
          </div>

          {/* Login Form */}
          <form onSubmit={handleSubmit} className="space-y-6">
            <InputField
              icon={FaEnvelope}
              type="email"
              name="email"
              placeholder="Email Address"
              value={formData.email}
              onChange={handleInputChange}
              required
            />

            {/* Password Field */}
            <div className="space-y-3">
              <div className="relative group">
                <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none text-gray-400 group-focus-within:text-amber-500 transition-colors duration-300">
                  <FaLock className="text-lg" />
                </div>
                <input
                  type={showPassword ? "text" : "password"}
                  name="password"
                  placeholder="Password"
                  value={formData.password}
                  onChange={handleInputChange}
                  required
                  className="w-full pl-12 pr-12 py-4 bg-white/80 backdrop-blur-sm border-2 border-gray-200 rounded-2xl placeholder-gray-400 text-gray-700 focus:outline-none focus:border-amber-400 focus:ring-4 focus:ring-amber-100 transition-all duration-300 shadow-sm hover:shadow-md"
                />
                <button
                  type="button"
                  onClick={() => setShowPassword(!showPassword)}
                  className="absolute inset-y-0 right-0 pr-4 flex items-center text-gray-400 hover:text-amber-500 transition-colors duration-300"
                >
                  {showPassword ? <FaEyeSlash /> : <FaEye />}
                </button>
              </div>

              {/* Remember Me & Forgot Password */}
              <div className="flex justify-between items-center">
                <label className="flex items-center gap-2 text-gray-700 cursor-pointer">
                  <input
                    type="checkbox"
                    name="rememberMe"
                    checked={formData.rememberMe}
                    onChange={handleInputChange}
                    className="w-4 h-4 text-amber-500 bg-gray-100 border-gray-300 rounded focus:ring-amber-400 focus:ring-2"
                  />
                  <span className="text-sm font-medium">Remember me</span>
                </label>
                
                <button
                  type="button"
                  onClick={() => setShowForgotPassword(true)}
                  className="text-amber-600 hover:text-amber-700 font-medium text-sm transition-colors duration-200"
                >
                  Forgot password?
                </button>
              </div>
            </div>

            {/* Submit Button */}
            <button
              type="submit"
              disabled={isLoading}
              className={`w-full py-4 px-6 rounded-2xl font-bold text-white transition-all duration-500 transform shadow-2xl flex items-center justify-center gap-3 ${
                isLoading
                  ? 'bg-gray-400 cursor-not-allowed'
                  : 'bg-gradient-to-r from-amber-500 to-amber-600 hover:from-amber-600 hover:to-amber-700 hover:scale-105'
              }`}
            >
              {isLoading ? (
                <>
                  <div className="animate-spin rounded-full h-5 w-5 border-b-2 border-white"></div>
                  Signing In...
                </>
              ) : (
                <>
                  <span>Sign In</span>
                  <FaArrowRight className="group-hover:translate-x-1 transition-transform duration-300" />
                </>
              )}
            </button>

            {/* Security Features */}
            <div className="bg-amber-50 rounded-2xl p-4 border border-amber-200">
              <div className="flex items-center gap-3 text-amber-700 mb-2">
                <MdSecurity className="text-lg" />
                <span className="font-semibold">Secure Login</span>
              </div>
              <div className="grid grid-cols-2 gap-2 text-xs text-amber-600">
                <div className="flex items-center gap-1">
                  <FaCheckCircle className="text-amber-500" />
                  <span>Encrypted Connection</span>
                </div>
                <div className="flex items-center gap-1">
                  <FaCheckCircle className="text-amber-500" />
                  <span>2FA Ready</span>
                </div>
                <div className="flex items-center gap-1">
                  <FaCheckCircle className="text-amber-500" />
                  <span>Activity Monitoring</span>
                </div>
                <div className="flex items-center gap-1">
                  <FaCheckCircle className="text-amber-500" />
                  <span>GDPR Compliant</span>
                </div>
              </div>
            </div>
          </form>

          {/* Forgot Password Modal */}
          {showForgotPassword && (
            <div className="fixed inset-0 bg-black/50 backdrop-blur-sm flex items-center justify-center z-50 p-4">
              <div className="bg-white rounded-3xl p-8 max-w-md w-full shadow-2xl border border-amber-100">
                <div className="text-center mb-6">
                  <div className="w-16 h-16 bg-amber-100 rounded-2xl flex items-center justify-center mx-auto mb-4">
                    <FaLock className="text-amber-600 text-2xl" />
                  </div>
                  <h3 className="text-2xl font-bold text-gray-800 mb-2">Reset Password</h3>
                  <p className="text-gray-600">Enter your email to receive reset instructions</p>
                </div>
                
                <form onSubmit={handleForgotPassword} className="space-y-4">
                  <InputField
                    icon={FaEnvelope}
                    type="email"
                    name="resetEmail"
                    placeholder="Enter your email"
                    required
                  />
                  
                  <div className="flex gap-3">
                    <button
                      type="button"
                      onClick={() => setShowForgotPassword(false)}
                      className="flex-1 py-3 px-6 border-2 border-gray-300 text-gray-700 rounded-2xl font-semibold hover:bg-gray-50 transition-all duration-300"
                    >
                      Cancel
                    </button>
                    <button
                      type="submit"
                      disabled={isLoading}
                      className={`flex-1 py-3 px-6 rounded-2xl font-semibold text-white transition-all duration-300 ${
                        isLoading
                          ? 'bg-gray-400 cursor-not-allowed'
                          : 'bg-gradient-to-r from-amber-500 to-amber-600 hover:from-amber-600 hover:to-amber-700'
                      }`}
                    >
                      {isLoading ? 'Sending...' : 'Send Instructions'}
                    </button>
                  </div>
                </form>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Login;