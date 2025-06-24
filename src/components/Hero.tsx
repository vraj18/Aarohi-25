import React from "react";

const Hero: React.FC = () => {
  return (
    <section
      className="relative w-full py-24 md:py-32 px-4 md:px-8 bg-cover bg-center bg-no-repeat"
      style={{ backgroundImage: "url('/images/hero-bg.jpg')" }}
    >
      {/* Overlay */}
      <div className="absolute inset-0 bg-black/70 backdrop-blur-sm z-0" />

      {/* Glow effect background */}
      <div className="absolute inset-0 z-0 pointer-events-none">
        <div className="absolute top-20 left-10 w-72 h-72 bg-purple-500 rounded-full opacity-20 blur-3xl animate-pulse" />
        <div className="absolute bottom-10 right-10 w-80 h-80 bg-cyan-500 rounded-full opacity-20 blur-3xl animate-pulse" />
      </div>

      {/* Content */}
      <div className="relative z-10 max-w-4xl mx-auto text-center">
        <h1 className="text-white text-5xl md:text-7xl font-extrabold tracking-tight drop-shadow-2xl mb-6 animate-fade-in">
          Welcome to <span className="text-cyan-400">Our Fest</span>
        </h1>
        <p className="text-gray-300 text-xl md:text-2xl mb-10 max-w-2xl mx-auto animate-fade-in delay-100">
          Join us for a celebration of <span className="text-cyan-300 font-semibold">culture</span>, <span className="text-purple-300 font-semibold">creativity</span>, and <span className="text-yellow-300 font-semibold">community</span>.
        </p>

        <div className="flex justify-center gap-6 flex-wrap animate-fade-in delay-200">
          <button className="bg-gradient-to-r from-cyan-500 to-blue-500 hover:from-cyan-600 hover:to-blue-600 text-white font-bold py-3 px-8 rounded-2xl shadow-lg hover:scale-105 transition-transform duration-300">
            Register Now
          </button>
          <button className="border border-white hover:bg-white/10 text-white font-semibold py-3 px-8 rounded-2xl backdrop-blur-sm transition-all duration-300">
            View Events
          </button>
        </div>
      </div>
    </section>
  );
};

export default Hero;
