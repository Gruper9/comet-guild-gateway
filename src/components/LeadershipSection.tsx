
import React from 'react';

export const LeadershipSection = () => {
  const leadership = [
    {
      name: "Alex Chen",
      ign: "DragonLord99",
      role: "Guild Master",
      level: 1,
      image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=150&h=150&fit=crop&crop=face"
    },
    {
      name: "Sarah Kim",
      ign: "MysticHealer",
      role: "Vice Master",
      level: 2,
      image: "https://images.unsplash.com/photo-1494790108755-2616b612b1a3?w=150&h=150&fit=crop&crop=face"
    },
    {
      name: "Mike Johnson",
      ign: "ThunderStrike",
      role: "Vice Master",
      level: 2,
      image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=150&h=150&fit=crop&crop=face"
    },
    {
      name: "Emma Davis",
      ign: "ShadowDancer",
      role: "Junior Master",
      level: 3,
      image: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=150&h=150&fit=crop&crop=face"
    },
    {
      name: "James Wilson",
      ign: "IceWizard",
      role: "Junior Master",
      level: 3,
      image: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=150&h=150&fit=crop&crop=face"
    },
    {
      name: "Lisa Rodriguez",
      ign: "FirePhoenix",
      role: "Junior Master",
      level: 3,
      image: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=150&h=150&fit=crop&crop=face"
    }
  ];

  const getMarginClass = (level: number) => {
    switch (level) {
      case 1: return 'ml-0';
      case 2: return 'ml-8 md:ml-16';
      case 3: return 'ml-16 md:ml-32';
      default: return 'ml-0';
    }
  };

  return (
    <section id="leadership" className="py-20 relative">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl md:text-5xl font-bold text-center text-white mb-12">
          Guild <span className="text-cyan-400">Leadership</span>
        </h2>
        <div className="max-w-4xl mx-auto">
          {leadership.map((leader, index) => (
            <div key={index} className={`flex items-center mb-6 ${getMarginClass(leader.level)}`}>
              <div className="bg-slate-800/50 backdrop-blur-sm rounded-xl p-6 border border-cyan-500/20 hover:border-cyan-500/40 transition-all duration-300 shadow-xl hover:shadow-cyan-500/25 flex items-center space-x-4 w-full max-w-md">
                <img 
                  src={leader.image} 
                  alt={leader.name}
                  className="w-16 h-16 rounded-full border-2 border-cyan-400"
                />
                <div>
                  <h3 className="text-lg font-bold text-white">{leader.name}</h3>
                  <p className="text-cyan-400 font-medium">{leader.ign}</p>
                  <p className="text-gray-300 text-sm">{leader.role}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
