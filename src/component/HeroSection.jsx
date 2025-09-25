import React from 'react';

export default function HeroSection() {
  return (
    <section className="relative bg-gradient-to-r from-green-200 via-blue-100 to-white mt-2 py-12 flex flex-col lg:flex-row items-center justify-between px-6 lg:px-20">
      {/* Hero Image (replace with your real image source) */}
      <img
        src="https://images.unsplash.com/photo-1513258496099-48168024aec0?auto=format&fit=crop&w=700&q=80"
        alt="Happy Students"
        className="rounded-2xl shadow-lg w-full max-w-md mb-8 lg:mb-0 lg:mr-12"
      />
      {/* Hero Content */}
      <div className="max-w-xl">
        <h1 className="text-4xl md:text-5xl font-extrabold text-blue-800 leading-tight mb-4">
          Empowering Education for the Future
        </h1>
        <p className="text-lg text-gray-700 mb-6">
          Join our vibrant community to explore, learn, and excel. Unlock opportunities in academics, activities, and beyond!
        </p>
        <a
          href="#admission"
          className="inline-block px-8 py-3 bg-blue-600 text-white rounded-full font-semibold shadow hover:bg-green-500 transition"
        >
          Apply Now
        </a>
      </div>
    </section>
  );
}
