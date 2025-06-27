
import React from 'react';

export const HistorySection = () => {
  return (
    <section id="history" className="py-20 relative">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-4xl md:text-5xl font-bold text-center text-white mb-12">
            Our <span className="text-cyan-400">History</span>
          </h2>
          <div className="bg-slate-800/50 backdrop-blur-sm rounded-2xl p-8 md:p-12 border border-cyan-500/20 shadow-xl">
            <div className="prose prose-lg prose-invert max-w-none">
              <p className="text-gray-300 text-lg leading-relaxed mb-6">
                Comet was born from the dreams of a small group of dedicated MapleStory players who sought 
                more than just individual achievement. In the early days of our server, a handful of friends 
                realized that the true magic of Maple World wasn't just in reaching the highest levels or 
                acquiring the rarest equipment—it was in the bonds forged through shared adventures.
              </p>
              <p className="text-gray-300 text-lg leading-relaxed mb-6">
                What started as casual dungeon runs and boss fights gradually evolved into something greater. 
                Our founders envisioned a guild that would be more than just a collection of players; they 
                wanted to create a family. Through countless late-night grinding sessions, epic raid battles, 
                and moments of triumph and defeat, Comet transformed from a small group into a thriving community.
              </p>
              <p className="text-gray-300 text-lg leading-relaxed">
                Today, Comet stands as one of the most respected guilds in our server, known not just for 
                our strength in battle, but for our unwavering support of one another. We continue to honor 
                our founding principles: friendship, dedication, and the belief that together, we can 
                overcome any challenge that Maple World throws our way.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
