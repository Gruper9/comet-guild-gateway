
import React from 'react';

export const ActivitiesSection = () => {
  const activities = [
    {
      title: "Boss Raids",
      description: "Weekly organized raids against the toughest bosses in MapleStory. From Zakum to Black Mage, we tackle them all together.",
      image: "https://images.unsplash.com/photo-1605810230434-7631ac76ec81?w=500&h=300&fit=crop"
    },
    {
      title: "Guild Events",
      description: "Regular social events, competitions, and celebrations that bring our community together beyond just gameplay.",
      image: "https://images.unsplash.com/photo-1519389950473-47ba0277781c?w=500&h=300&fit=crop"
    },
    {
      title: "Mentorship Program",
      description: "Experienced members guide newcomers through the complexities of MapleStory, ensuring everyone can contribute and grow.",
      image: "https://images.unsplash.com/photo-1488590528505-98d2b5aba04b?w=500&h=300&fit=crop"
    },
    {
      title: "PvP Tournaments",
      description: "Friendly competitive events where guild members can test their skills against each other in various PvP formats.",
      image: "https://images.unsplash.com/photo-1470071459604-3b5ec3a7fe05?w=500&h=300&fit=crop"
    }
  ];

  return (
    <section id="activities" className="py-20 relative">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl md:text-5xl font-bold text-center text-white mb-12">
          Guild <span className="text-cyan-400">Activities</span>
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-6xl mx-auto">
          {activities.map((activity, index) => (
            <div key={index} className="bg-slate-800/50 backdrop-blur-sm rounded-xl overflow-hidden border border-cyan-500/20 hover:border-cyan-500/40 transition-all duration-300 hover:scale-105 shadow-xl hover:shadow-cyan-500/25">
              <div className="h-48 overflow-hidden">
                <img 
                  src={activity.image} 
                  alt={activity.title}
                  className="w-full h-full object-cover hover:scale-110 transition-transform duration-300"
                />
              </div>
              <div className="p-6">
                <h3 className="text-xl font-bold text-white mb-3">{activity.title}</h3>
                <p className="text-gray-300 leading-relaxed">{activity.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
