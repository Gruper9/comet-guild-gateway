
import React from 'react';

export const HeroSection = () => {
  return (
    <section id="hero" className="min-h-screen flex items-center justify-center relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-r from-blue-600/20 to-purple-600/20"></div>
      <div className="container mx-auto px-4 text-center relative z-10">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-6xl md:text-8xl font-bold text-white mb-6 animate-fade-in">
            <span className="bg-gradient-to-r from-cyan-400 to-blue-400 bg-clip-text text-transparent">
              Comet
            </span>
          </h1>
          <p className="text-xl md:text-2xl text-gray-300 mb-8 animate-fade-in">
            A legendary MapleStory guild blazing through Maple World
          </p>
          <p className="text-lg text-gray-400 max-w-2xl mx-auto mb-12 animate-fade-in">
            Join our community of dedicated adventurers as we explore dungeons, conquer bosses, 
            and create unforgettable memories together in the world of MapleStory.
          </p>
          <button 
            onClick={() => document.getElementById('application')?.scrollIntoView({ behavior: 'smooth' })}
            className="bg-gradient-to-r from-cyan-500 to-blue-500 hover:from-cyan-600 hover:to-blue-600 text-white px-8 py-4 rounded-lg text-lg font-semibold transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-cyan-500/25"
          >
            Join Our Guild
          </button>
        </div>
      </div>
    </section>
  );
};
