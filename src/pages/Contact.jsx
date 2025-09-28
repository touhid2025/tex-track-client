import React, { useRef, useState } from "react";
import { 
  FaPhoneAlt, 
  FaEnvelope, 
  FaMapMarkerAlt, 
  FaFacebook, 
  FaGithub, 
  FaLinkedin,
  FaPaperPlane,
  FaUser,
  FaComment
} from "react-icons/fa";
import { MdOutlineEmail } from "react-icons/md";
import { IoIosSend } from "react-icons/io";
import emailjs from "emailjs-com";
import Swal from "sweetalert2";

const Contact = () => {
  const form = useRef();
  const [isSending, setIsSending] = useState(false);
  const [formData, setFormData] = useState({
    user_name: "",
    user_email: "",
    message: ""
  });

  const handleInputChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const sendEmail = (e) => {
    e.preventDefault();
    setIsSending(true);

    emailjs
      .sendForm(
        "service_touhid",
        "template_d7acc59",
        form.current,
        "dztHR3UZjrT32qKAH"
      )
      .then(
        (result) => {
          Swal.fire({
            icon: "success",
            title: "Message Sent!",
            text: "Thank you for your message. I'll get back to you soon!",
            confirmButtonColor: "#3B82F6",
            background: "#fff",
            color: "#1F2937",
          });
          form.current.reset();
          setFormData({ user_name: "", user_email: "", message: "" });
        },
        (error) => {
          Swal.fire({
            icon: "error",
            title: "Oops...",
            text: "Something went wrong. Please try again or contact me directly via email.",
            confirmButtonColor: "#EF4444",
            background: "#fff",
            color: "#1F2937",
          });
        }
      )
      .finally(() => {
        setIsSending(false);
      });
  };

  const contactInfo = [
    {
      icon: FaMapMarkerAlt,
      text: "Dhaka, Bangladesh",
      subtext: "Based in Bangladesh",
      color: "text-red-500"
    },
    {
      icon: FaPhoneAlt,
      text: "+880 1743287246",
      subtext: "Mon to Fri 9am to 6pm",
      color: "text-green-500"
    },
    {
      icon: FaEnvelope,
      text: "touhidbinamin@gmail.com",
      subtext: "Send me an email anytime",
      color: "text-blue-500"
    }
  ];

  const socialLinks = [
    {
      icon: FaFacebook,
      href: "#",
      color: "hover:text-blue-600",
      bgColor: "hover:bg-blue-100"
    },
    {
      icon: FaGithub,
      href: "#",
      color: "hover:text-gray-800",
      bgColor: "hover:bg-gray-100"
    },
    {
      icon: FaLinkedin,
      href: "#",
      color: "hover:text-blue-700",
      bgColor: "hover:bg-blue-100"
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100 flex items-center justify-center px-4 py-12">
      <div className="max-w-6xl w-full grid lg:grid-cols-2 gap-8 lg:gap-12">
        
        {/* Contact Information Card */}
        <div className="bg-white rounded-2xl shadow-2xl p-8 lg:p-10 transform hover:scale-[1.02] transition-all duration-300">
          <div className="mb-8">
            <h1 className="text-4xl font-bold bg-gradient-to-r from-amber-600 to-amber-700 bg-clip-text text-transparent mb-3">
              Get In Touch
            </h1>
            <p className="text-gray-600 text-lg">
              I'm always open to discussing new opportunities and interesting projects.
              Let's create something amazing together!
            </p>
          </div>

          <div className="space-y-6 mb-8">
            {contactInfo.map((item, index) => (
              <div 
                key={index}
                className="flex items-start gap-4 p-4 rounded-xl hover:bg-gray-50 transition-all duration-200 group cursor-pointer"
              >
                <div className={`p-3 rounded-xl bg-gradient-to-br from-blue-50 to-indigo-50 group-hover:scale-110 transition-transform duration-200 ${item.color}`}>
                  <item.icon className="text-xl" />
                </div>
                <div>
                  <p className="font-semibold text-gray-800">{item.text}</p>
                  <p className="text-sm text-gray-500">{item.subtext}</p>
                </div>
              </div>
            ))}
          </div>

          {/* Social Links */}
          <div className="border-t pt-8">
            <h3 className="text-lg font-semibold text-gray-800 mb-4">Follow Me</h3>
            <div className="flex gap-3">
              {socialLinks.map((social, index) => (
                <a
                  key={index}
                  href={social.href}
                  className={`p-3 rounded-xl bg-gray-50 text-gray-600 transition-all duration-200 transform hover:scale-110 ${social.color} ${social.bgColor}`}
                >
                  <social.icon className="text-xl" />
                </a>
              ))}
            </div>
          </div>
        </div>

        {/* Contact Form Card */}
        <div className="bg-gradient-to-br from-amber-600 to-orange-500 rounded-2xl shadow-2xl p-8 lg:p-10 text-white">
          <div className="mb-8">
            <h2 className="text-3xl font-bold mb-3">Send a Message</h2>
            <p className="text-blue-100">
              Have a project in mind? Let's talk about how we can work together.
            </p>
          </div>

          <form ref={form} onSubmit={sendEmail} className="space-y-6">
            {/* Name Field */}
            <div className="relative">
              <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none text-blue-200">
                <FaUser className="text-lg" />
              </div>
              <input
                type="text"
                name="user_name"
                value={formData.user_name}
                onChange={handleInputChange}
                placeholder="Your full name"
                className="w-full pl-10 pr-4 py-3 bg-blue-500/20 border border-blue-400/30 rounded-xl placeholder-blue-200 text-white focus:outline-none focus:ring-2 focus:ring-white/50 focus:border-transparent transition-all duration-200"
                required
              />
            </div>

            {/* Email Field */}
            <div className="relative">
              <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none text-blue-200">
                <MdOutlineEmail className="text-lg" />
              </div>
              <input
                type="email"
                name="user_email"
                value={formData.user_email}
                onChange={handleInputChange}
                placeholder="Your email address"
                className="w-full pl-10 pr-4 py-3 bg-blue-500/20 border border-blue-400/30 rounded-xl placeholder-blue-200 text-white focus:outline-none focus:ring-2 focus:ring-white/50 focus:border-transparent transition-all duration-200"
                required
              />
            </div>

            {/* Message Field */}
            <div className="relative">
              <div className="absolute top-3 left-3 flex items-start pointer-events-none text-blue-200">
                <FaComment className="text-lg mt-1" />
              </div>
              <textarea
                name="message"
                value={formData.message}
                onChange={handleInputChange}
                rows="5"
                placeholder="Tell me about your project..."
                className="w-full pl-10 pr-4 py-3 bg-blue-500/20 border border-blue-400/30 rounded-xl placeholder-blue-200 text-white focus:outline-none focus:ring-2 focus:ring-white/50 focus:border-transparent transition-all duration-200 resize-none"
                required
              ></textarea>
            </div>

            {/* Submit Button */}
            <button
              type="submit"
              disabled={isSending}
              className={`w-full py-3 px-6 bg-white text-amber-600 cursor-pointer rounded-xl font-semibold flex items-center justify-center gap-2 transition-all duration-200 transform hover:scale-105 hover:shadow-lg ${
                isSending ? "opacity-50 cursor-not-allowed" : "hover:bg-gray-100"
              }`}
            >
              {isSending ? (
                <>
                  <div className="animate-spin rounded-full h-5 w-5 border-b-2 border-blue-600"></div>
                  Sending...
                </>
              ) : (
                <>
                  <IoIosSend className="text-xl" />
                  Send Message
                </>
              )}
            </button>
          </form>

          {/* Additional Info */}
          <div className="mt-6 text-center">
            <p className="text-blue-200 text-sm">
              Typically replies within 2-4 hours
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;