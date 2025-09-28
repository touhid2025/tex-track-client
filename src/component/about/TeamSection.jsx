import React, { useState } from "react";
import { 
  FaGithub, 
  FaLinkedin, 
  FaTwitter, 
  FaEnvelope,
  FaArrowRight,
  FaAward,
  FaCode,
  FaPalette,
  FaProjectDiagram,
  FaStar
} from "react-icons/fa";
import { MdWorkspacePremium } from "react-icons/md";

const TeamSection = () => {
  const [activeMember, setActiveMember] = useState(0);
  const [hoveredMember, setHoveredMember] = useState(null);

  const teamMembers = [
    {
      name: "Touhid Bin Amin",
      role: "Frontend Architect",
      photo: "https://i.pravatar.cc/300?img=32",
      bio: "Specialized in React ecosystem with 5+ years of experience building scalable web applications. Passionate about UI/UX and performance optimization.",
      skills: ["React", "TypeScript", "Next.js", "Tailwind"],
      social: {
        github: "#",
        linkedin: "#",
        twitter: "#",
        email: "touhid@textrack.com"
      },
      projects: 47,
      experience: "5+ Years",
      badge: "Team Lead"
    },
    {
      name: "Ashraful Alam",
      role: "Backend Engineer",
      photo: "https://i.pravatar.cc/300?img=12",
      bio: "Backend specialist with expertise in Node.js, Python, and cloud infrastructure. Focused on building robust and scalable APIs.",
      skills: ["Node.js", "Python", "AWS", "MongoDB"],
      social: {
        github: "#",
        linkedin: "#",
        twitter: "#",
        email: "ashraful@textrack.com"
      },
      projects: 52,
      experience: "6+ Years",
      badge: "API Expert"
    },
    {
      name: "Sujon Hossain",
      role: "UI/UX Designer",
      photo: "https://i.pravatar.cc/300?img=45",
      bio: "Creative designer with a keen eye for detail and user experience. Transforms complex problems into intuitive design solutions.",
      skills: ["Figma", "UI/UX", "Prototyping", "Design Systems"],
      social: {
        github: "#",
        linkedin: "#",
        twitter: "#",
        email: "sujon@textrack.com"
      },
      projects: 38,
      experience: "4+ Years",
      badge: "Design Lead"
    },
    {
      name: "Ali Hasan",
      role: "Project Manager",
      photo: "https://i.pravatar.cc/300?img=23",
      bio: "Agile project manager with proven track record of delivering projects on time. Expert in team coordination and client communication.",
      skills: ["Agile", "Scrum", "JIRA", "Client Relations"],
      social: {
        github: "#",
        linkedin: "#",
        twitter: "#",
        email: "ali@textrack.com"
      },
      projects: 63,
      experience: "7+ Years",
      badge: "PM Lead"
    }
  ];

  const socialIcons = {
    github: FaGithub,
    linkedin: FaLinkedin,
    twitter: FaTwitter,
    email: FaEnvelope
  };

  const roleIcons = {
    "Frontend Architect": FaCode,
    "Backend Engineer": FaCode,
    "UI/UX Designer": FaPalette,
    "Project Manager": FaProjectDiagram
  };

  return (
    <section className="relative py-20 lg:py-28 px-4 bg-gradient-to-br from-gray-50 to-amber-50 overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-10 left-10 w-72 h-72 bg-amber-200 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-pulse"></div>
        <div className="absolute bottom-10 right-10 w-72 h-72 bg-amber-300 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-pulse animation-delay-2000"></div>
      </div>

      <div className="max-w-7xl mx-auto relative z-10">
        {/* Header Section */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 bg-amber-100 text-amber-800 px-4 py-2 rounded-full text-sm font-medium mb-6 border border-amber-200">
            <MdWorkspacePremium className="text-amber-600" />
            Expert Team Behind TexTrack
          </div>
          
          <h2 className="text-4xl lg:text-5xl font-bold mb-6">
            <span className="bg-gradient-to-r from-amber-600 to-amber-800 bg-clip-text text-transparent">
              Meet Our Team
            </span>
          </h2>
          
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            The brilliant minds crafting the future of textile tracking technology. 
            Our diverse team brings together decades of experience in development, 
            design, and project management.
          </p>
        </div>

        {/* Team Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-4 gap-8 mb-16">
          {teamMembers.map((member, index) => {
            const RoleIcon = roleIcons[member.role];
            return (
              <div
                key={index}
                onMouseEnter={() => setHoveredMember(index)}
                onMouseLeave={() => setHoveredMember(null)}
                onClick={() => setActiveMember(index)}
                className={`group relative bg-white/90 backdrop-blur-sm rounded-2xl p-6 border-2 transition-all duration-500 cursor-pointer transform ${
                  hoveredMember === index || activeMember === index
                    ? 'scale-105 border-amber-300 shadow-2xl' 
                    : 'scale-100 border-amber-100 shadow-lg hover:shadow-xl'
                }`}
              >
                {/* Badge */}
                <div className="absolute -top-3 left-1/2 transform -translate-x-1/2">
                  <span className="bg-gradient-to-r from-amber-500 to-amber-600 text-white px-3 py-1 rounded-full text-xs font-bold shadow-lg">
                    {member.badge}
                  </span>
                </div>

                {/* Photo Container */}
                <div className="relative mb-6">
                  <div className={`w-32 h-32 mx-auto rounded-2xl bg-gradient-to-r from-amber-400 to-amber-600 p-1 transition-all duration-500 ${
                    hoveredMember === index ? 'scale-110 rotate-3' : 'scale-100 rotate-0'
                  }`}>
                    <img
                      src={member.photo}
                      alt={member.name}
                      className="w-full h-full rounded-2xl object-cover border-4 border-white"
                    />
                  </div>
                  
                  {/* Experience Badge */}
                  <div className="absolute -bottom-2 -right-2 bg-amber-100 text-amber-800 px-3 py-1 rounded-full text-xs font-bold border border-amber-200 shadow-sm">
                    {member.experience}
                  </div>
                </div>

                {/* Name & Role */}
                <div className="text-center mb-4">
                  <h3 className="text-xl font-bold text-gray-800 mb-2 group-hover:text-amber-700 transition-colors duration-300">
                    {member.name}
                  </h3>
                  <div className="flex items-center justify-center gap-2 text-gray-600">
                    <RoleIcon className="text-amber-500" />
                    <span className="font-medium">{member.role}</span>
                  </div>
                </div>

                {/* Stats */}
                <div className="flex justify-center gap-4 mb-4">
                  <div className="text-center">
                    <div className="text-lg font-bold text-amber-600">{member.projects}+</div>
                    <div className="text-xs text-gray-500">Projects</div>
                  </div>
                  <div className="text-center">
                    <div className="flex items-center gap-1 text-amber-600">
                      <FaStar className="fill-current" />
                      <span className="text-lg font-bold">4.9</span>
                    </div>
                    <div className="text-xs text-gray-500">Rating</div>
                  </div>
                </div>

                {/* Skills */}
                <div className="flex flex-wrap gap-2 justify-center mb-4">
                  {member.skills.map((skill, skillIndex) => (
                    <span
                      key={skillIndex}
                      className="px-2 py-1 bg-amber-100 text-amber-700 rounded-lg text-xs font-medium border border-amber-200"
                    >
                      {skill}
                    </span>
                  ))}
                </div>

                {/* Social Links */}
                <div className="flex justify-center gap-3">
                  {Object.entries(member.social).map(([platform, link]) => {
                    const SocialIcon = socialIcons[platform];
                    return (
                      <a
                        key={platform}
                        href={platform === 'email' ? `mailto:${link}` : link}
                        className="w-10 h-10 rounded-xl bg-gray-100 text-gray-600 flex items-center justify-center hover:bg-amber-100 hover:text-amber-600 transition-all duration-300 transform hover:scale-110"
                      >
                        <SocialIcon className="text-sm" />
                      </a>
                    );
                  })}
                </div>

                {/* Hover Overlay */}
                <div className={`absolute inset-0 rounded-2xl bg-gradient-to-br from-amber-500/5 to-orange-500/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none`}></div>
              </div>
            );
          })}
        </div>

        {/* Selected Member Detail */}
        <div className="bg-white/80 backdrop-blur-sm rounded-2xl p-8 border border-amber-100 shadow-lg">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 items-center">
            <div className="text-center lg:text-left">
              <div className="w-24 h-24 mx-auto lg:mx-0 rounded-2xl bg-gradient-to-r from-amber-400 to-amber-600 p-1 mb-4">
                <img
                  src={teamMembers[activeMember].photo}
                  alt={teamMembers[activeMember].name}
                  className="w-full h-full rounded-2xl object-cover border-4 border-white"
                />
              </div>
              <h3 className="text-2xl font-bold text-gray-800 mb-2">
                {teamMembers[activeMember].name}
              </h3>
              <p className="text-amber-600 font-semibold mb-4">
                {teamMembers[activeMember].role}
              </p>
              <div className="flex justify-center lg:justify-start gap-3">
                {Object.entries(teamMembers[activeMember].social).map(([platform, link]) => {
                  const SocialIcon = socialIcons[platform];
                  return (
                    <a
                      key={platform}
                      href={platform === 'email' ? `mailto:${link}` : link}
                      className="w-10 h-10 rounded-xl bg-amber-100 text-amber-600 flex items-center justify-center hover:bg-amber-200 transition-all duration-300"
                    >
                      <SocialIcon className="text-sm" />
                    </a>
                  );
                })}
              </div>
            </div>

            <div className="lg:col-span-2">
              <h4 className="text-lg font-semibold text-gray-800 mb-3">About</h4>
              <p className="text-gray-600 mb-6 leading-relaxed">
                {teamMembers[activeMember].bio}
              </p>
              
              <div className="grid grid-cols-2 gap-4">
                <div className="bg-amber-50 rounded-xl p-4 text-center border border-amber-100">
                  <div className="text-2xl font-bold text-amber-700 mb-1">
                    {teamMembers[activeMember].projects}+
                  </div>
                  <div className="text-sm text-gray-600">Projects Completed</div>
                </div>
                <div className="bg-amber-50 rounded-xl p-4 text-center border border-amber-100">
                  <div className="text-2xl font-bold text-amber-700 mb-1">
                    {teamMembers[activeMember].experience}
                  </div>
                  <div className="text-sm text-gray-600">Experience</div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* CTA Section */}
        <div className="text-center mt-12">
          <div className="bg-gradient-to-r from-amber-500 to-amber-600 rounded-2xl p-8 text-white shadow-2xl">
            <h3 className="text-2xl lg:text-3xl font-bold mb-4">
              Want to Join Our Team?
            </h3>
            <p className="text-amber-100 mb-6">
              We're always looking for talented individuals to help us build the future of textile technology.
            </p>
            <button className="bg-white text-amber-600 px-8 py-3 rounded-xl font-semibold hover:bg-amber-50 transition-all duration-300 transform hover:scale-105 shadow-lg flex items-center gap-2 mx-auto">
              <span>View Open Positions</span>
              <FaArrowRight className="group-hover:translate-x-1 transition-transform duration-300" />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TeamSection;