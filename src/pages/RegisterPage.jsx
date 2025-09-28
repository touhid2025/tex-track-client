import React, { useState } from "react";
import { Link } from "react-router";
import { 
  FaUser, 
  FaEnvelope, 
  FaLock, 
  FaEye, 
  FaEyeSlash, 
  FaCheck, 
  FaTimes,
  FaGoogle,
  FaGithub,
  FaLinkedin,
  FaArrowRight,
  FaRocket,
  
  FaAward,
  FaHeadset,
  FaShieldAlt
} from "react-icons/fa";
import { MdWorkspacePremium, MdCorporateFare } from "react-icons/md";

const RegisterPage = () => {
  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    password: "",
    confirmPassword: "",
    company: "",
    phone: "",
    acceptTerms: false
  });

  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);
  const [passwordStrength, setPasswordStrength] = useState(0);
  const [isLoading, setIsLoading] = useState(false);

  const passwordRequirements = [
    { id: 1, text: "At least 8 characters", met: false },
    { id: 2, text: "One uppercase letter", met: false },
    { id: 3, text: "One lowercase letter", met: false },
    { id: 4, text: "One number", met: false },
    { id: 5, text: "One special character", met: false }
  ];

  const features = [
    { icon: FaShieldAlt, text: "Enterprise Security" },
    { icon: MdWorkspacePremium, text: "Free 14-day Trial" },
    { icon: FaAward, text: "No Credit Card Required" },
    { icon: FaHeadset, text: "24/7 Support" }
  ];

  const socialProviders = [
    { name: "Google", icon: FaGoogle, color: "hover:bg-red-50 hover:border-red-200 hover:text-red-600" },
    { name: "GitHub", icon: FaGithub, color: "hover:bg-gray-50 hover:border-gray-200 hover:text-gray-800" },
    { name: "LinkedIn", icon: FaLinkedin, color: "hover:bg-blue-50 hover:border-blue-200 hover:text-blue-600" }
  ];

  const handleInputChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: type === 'checkbox' ? checked : value
    }));

    if (name === 'password') {
      checkPasswordStrength(value);
    }
  };

  const checkPasswordStrength = (password) => {
    let strength = 0;
    const requirements = [
      password.length >= 8,
      /[A-Z]/.test(password),
      /[a-z]/.test(password),
      /[0-9]/.test(password),
      /[^A-Za-z0-9]/.test(password)
    ];

    strength = requirements.filter(Boolean).length;
    setPasswordStrength(strength);
  };

  const getPasswordStrengthColor = () => {
    switch (passwordStrength) {
      case 0: return "bg-gray-200";
      case 1: return "bg-red-500";
      case 2: return "bg-orange-500";
      case 3: return "bg-yellow-500";
      case 4: return "bg-blue-500";
      case 5: return "bg-green-500";
      default: return "bg-gray-200";
    }
  };

  const getPasswordStrengthText = () => {
    switch (passwordStrength) {
      case 0: return "Very Weak";
      case 1: return "Weak";
      case 2: return "Fair";
      case 3: return "Good";
      case 4: return "Strong";
      case 5: return "Very Strong";
      default: return "";
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsLoading(true);
    
    // Simulate API call
    await new Promise(resolve => setTimeout(resolve, 2000));
    
    console.log("Registration data:", formData);
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
                Start Your
                <span className="block bg-gradient-to-r from-amber-500 to-amber-600 bg-clip-text text-transparent">
                  Free Trial
                </span>
              </h2>
              <p className="text-xl text-gray-600 leading-relaxed">
                Join thousands of manufacturers who have transformed their textile production with TexTrack's intelligent tracking platform.
              </p>
            </div>

            {/* Features List */}
            <div className="grid grid-cols-2 gap-4">
              {features.map((feature, index) => (
                <div key={index} className="flex items-center gap-3 text-gray-700">
                  <div className="w-10 h-10 rounded-xl bg-amber-100 flex items-center justify-center">
                    <feature.icon className="text-amber-600 text-lg" />
                  </div>
                  <span className="font-medium">{feature.text}</span>
                </div>
              ))}
            </div>

            {/* Stats */}
            <div className="grid grid-cols-3 gap-6 pt-8 border-t border-amber-200">
              <div className="text-center">
                <div className="text-2xl font-bold text-amber-600">1000+</div>
                <div className="text-gray-600 text-sm">Manufacturers</div>
              </div>
              <div className="text-center">
                <div className="text-2xl font-bold text-amber-600">99.9%</div>
                <div className="text-gray-600 text-sm">Uptime</div>
              </div>
              <div className="text-center">
                <div className="text-2xl font-bold text-amber-600">24/7</div>
                <div className="text-gray-600 text-sm">Support</div>
              </div>
            </div>
          </div>
        </div>

        {/* Right Side - Registration Form */}
        <div className="bg-white/90 backdrop-blur-sm rounded-3xl p-8 lg:p-12 shadow-2xl border border-amber-100">
          <div className="text-center mb-8">
            <h3 className="text-3xl font-bold text-gray-800 mb-2">
              Create Your Account
            </h3>
            <p className="text-gray-600">
              Already have an account?{" "}
              <Link to="/login" className="text-amber-600 font-semibold hover:text-amber-700 transition-colors duration-200">
                Sign in here
              </Link>
            </p>
          </div>

          {/* Social Sign Up */}
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

          {/* Registration Form */}
          <form onSubmit={handleSubmit} className="space-y-6">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <InputField
                icon={FaUser}
                type="text"
                name="fullName"
                placeholder="Full Name"
                value={formData.fullName}
                onChange={handleInputChange}
                required
              />
              
              <InputField
                icon={MdCorporateFare}
                type="text"
                name="company"
                placeholder="Company Name"
                value={formData.company}
                onChange={handleInputChange}
              />
            </div>

            <InputField
              icon={FaEnvelope}
              type="email"
              name="email"
              placeholder="Email Address"
              value={formData.email}
              onChange={handleInputChange}
              required
            />

            <InputField
              icon={FaUser}
              type="text"
              name="phone"
              placeholder="Phone Number"
              value={formData.phone}
              onChange={handleInputChange}
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

              {/* Password Strength */}
              {formData.password && (
                <div className="space-y-2">
                  <div className="flex justify-between items-center">
                    <span className="text-sm font-medium text-gray-700">Password Strength</span>
                    <span className={`text-sm font-semibold ${
                      passwordStrength <= 2 ? 'text-red-500' :
                      passwordStrength <= 3 ? 'text-yellow-500' : 'text-green-500'
                    }`}>
                      {getPasswordStrengthText()}
                    </span>
                  </div>
                  <div className="w-full bg-gray-200 rounded-full h-2">
                    <div 
                      className={`h-2 rounded-full transition-all duration-500 ${getPasswordStrengthColor()}`}
                      style={{ width: `${(passwordStrength / 5) * 100}%` }}
                    ></div>
                  </div>
                </div>
              )}
            </div>

            {/* Confirm Password */}
            <div className="relative group">
              <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none text-gray-400 group-focus-within:text-amber-500 transition-colors duration-300">
                <FaLock className="text-lg" />
              </div>
              <input
                type={showConfirmPassword ? "text" : "password"}
                name="confirmPassword"
                placeholder="Confirm Password"
                value={formData.confirmPassword}
                onChange={handleInputChange}
                required
                className="w-full pl-12 pr-12 py-4 bg-white/80 backdrop-blur-sm border-2 border-gray-200 rounded-2xl placeholder-gray-400 text-gray-700 focus:outline-none focus:border-amber-400 focus:ring-4 focus:ring-amber-100 transition-all duration-300 shadow-sm hover:shadow-md"
              />
              <button
                type="button"
                onClick={() => setShowConfirmPassword(!showConfirmPassword)}
                className="absolute inset-y-0 right-0 pr-4 flex items-center text-gray-400 hover:text-amber-500 transition-colors duration-300"
              >
                {showConfirmPassword ? <FaEyeSlash /> : <FaEye />}
              </button>
            </div>

            {/* Terms and Conditions */}
            <div className="flex items-start gap-3">
              <input
                type="checkbox"
                name="acceptTerms"
                checked={formData.acceptTerms}
                onChange={handleInputChange}
                required
                className="w-5 h-5 text-amber-500 bg-gray-100 border-gray-300 rounded focus:ring-amber-400 focus:ring-2 mt-1"
              />
              <label className="text-gray-600 text-sm">
                I agree to the{" "}
                <a href="#" className="text-amber-600 font-semibold hover:text-amber-700">
                  Terms of Service
                </a>{" "}
                and{" "}
                <a href="#" className="text-amber-600 font-semibold hover:text-amber-700">
                  Privacy Policy
                </a>
              </label>
            </div>

            {/* Submit Button */}
            <button
              type="submit"
              disabled={isLoading || !formData.acceptTerms}
              className={`w-full py-4 px-6 rounded-2xl font-bold text-white transition-all duration-500 transform shadow-2xl flex items-center justify-center gap-3 ${
                isLoading || !formData.acceptTerms
                  ? 'bg-gray-400 cursor-not-allowed'
                  : 'bg-gradient-to-r from-amber-500 to-amber-600 hover:from-amber-600 hover:to-amber-700 hover:scale-105'
              }`}
            >
              {isLoading ? (
                <>
                  <div className="animate-spin rounded-full h-5 w-5 border-b-2 border-white"></div>
                  Creating Account...
                </>
              ) : (
                <>
                  <span>Start Free Trial</span>
                  <FaArrowRight className="group-hover:translate-x-1 transition-transform duration-300" />
                </>
              )}
            </button>

            {/* Security Note */}
            <div className="text-center">
              <p className="text-gray-500 text-sm">
                🔒 Your data is securely encrypted and protected
              </p>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default RegisterPage;