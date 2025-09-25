import React from 'react';
import { FaBookOpen, FaFlask, FaFootballBall, FaTheaterMasks } from 'react-icons/fa';

const features = [
  {
    icon: <FaBookOpen className="text-blue-600 text-4xl mb-3" />,
    title: "Modern Library",
    desc: "A vast collection of books, journals & digital resources.",
  },
  {
    icon: <FaFlask className="text-green-600 text-4xl mb-3" />,
    title: "Advanced Labs",
    desc: "State-of-the-art science & computer labs for hands-on learning.",
  },
  {
    icon: <FaFootballBall className="text-blue-400 text-4xl mb-3" />,
    title: "Sports Facilities",
    desc: "Spacious playgrounds and indoor sport activities for all students.",
  },
  {
    icon: <FaTheaterMasks className="text-green-400 text-4xl mb-3" />,
    title: "Extracurriculars",
    desc: "Clubs, competitions, arts & more for holistic development.",
  },
];

export default function FeatureCards() {
  return (
    <section className="w-full max-w-6xl mx-auto mt-12 mb-16 px-4 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
      {features.map((feature) => (
        <div
          key={feature.title}
          className="bg-white rounded-xl shadow-md p-6 flex flex-col items-center text-center hover:shadow-lg transition"
        >
          {feature.icon}
          <h3 className="font-bold text-xl text-gray-800 mb-2">{feature.title}</h3>
          <p className="text-gray-500">{feature.desc}</p>
        </div>
      ))}
    </section>
  );
}
