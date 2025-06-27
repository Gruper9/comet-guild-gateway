
import React, { useState } from 'react';
import { useToast } from '@/hooks/use-toast';

export const ApplicationSection = () => {
  const { toast } = useToast();
  const [formData, setFormData] = useState({
    realName: '',
    ign: '',
    level: '',
    class: '',
    experience: '',
    motivation: '',
    availability: '',
    discord: ''
  });

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Application submitted:', formData);
    toast({
      title: "Application Submitted!",
      description: "Thank you for your interest in joining Comet. We'll review your application and get back to you soon.",
    });
    setFormData({
      realName: '',
      ign: '',
      level: '',
      class: '',
      experience: '',
      motivation: '',
      availability: '',
      discord: ''
    });
  };

  return (
    <section id="application" className="py-20 relative">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl md:text-5xl font-bold text-center text-white mb-12">
          Join <span className="text-cyan-400">Comet</span>
        </h2>
        <div className="max-w-2xl mx-auto">
          <div className="bg-slate-800/50 backdrop-blur-sm rounded-2xl p-8 border border-cyan-500/20 shadow-xl">
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label htmlFor="realName" className="block text-sm font-medium text-gray-300 mb-2">
                    Real Name
                  </label>
                  <input
                    type="text"
                    id="realName"
                    name="realName"
                    value={formData.realName}
                    onChange={handleInputChange}
                    required
                    className="w-full px-4 py-3 bg-slate-700/50 border border-gray-600 rounded-lg text-white placeholder-gray-400 focus:border-cyan-500 focus:ring-1 focus:ring-cyan-500 transition-colors"
                    placeholder="Your real name"
                  />
                </div>
                <div>
                  <label htmlFor="ign" className="block text-sm font-medium text-gray-300 mb-2">
                    In-Game Name
                  </label>
                  <input
                    type="text"
                    id="ign"
                    name="ign"
                    value={formData.ign}
                    onChange={handleInputChange}
                    required
                    className="w-full px-4 py-3 bg-slate-700/50 border border-gray-600 rounded-lg text-white placeholder-gray-400 focus:border-cyan-500 focus:ring-1 focus:ring-cyan-500 transition-colors"
                    placeholder="Your IGN"
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label htmlFor="level" className="block text-sm font-medium text-gray-300 mb-2">
                    Character Level
                  </label>
                  <input
                    type="number"
                    id="level"
                    name="level"
                    value={formData.level}
                    onChange={handleInputChange}
                    required
                    className="w-full px-4 py-3 bg-slate-700/50 border border-gray-600 rounded-lg text-white placeholder-gray-400 focus:border-cyan-500 focus:ring-1 focus:ring-cyan-500 transition-colors"
                    placeholder="200+"
                  />
                </div>
                <div>
                  <label htmlFor="class" className="block text-sm font-medium text-gray-300 mb-2">
                    Character Class
                  </label>
                  <input
                    type="text"
                    id="class"
                    name="class"
                    value={formData.class}
                    onChange={handleInputChange}
                    required
                    className="w-full px-4 py-3 bg-slate-700/50 border border-gray-600 rounded-lg text-white placeholder-gray-400 focus:border-cyan-500 focus:ring-1 focus:ring-cyan-500 transition-colors"
                    placeholder="e.g., Night Lord, Bishop"
                  />
                </div>
              </div>

              <div>
                <label htmlFor="discord" className="block text-sm font-medium text-gray-300 mb-2">
                  Discord Username
                </label>
                <input
                  type="text"
                  id="discord"
                  name="discord"
                  value={formData.discord}
                  onChange={handleInputChange}
                  required
                  className="w-full px-4 py-3 bg-slate-700/50 border border-gray-600 rounded-lg text-white placeholder-gray-400 focus:border-cyan-500 focus:ring-1 focus:ring-cyan-500 transition-colors"
                  placeholder="username#1234"
                />
              </div>

              <div>
                <label htmlFor="experience" className="block text-sm font-medium text-gray-300 mb-2">
                  MapleStory Experience
                </label>
                <textarea
                  id="experience"
                  name="experience"
                  value={formData.experience}
                  onChange={handleInputChange}
                  required
                  rows={3}
                  className="w-full px-4 py-3 bg-slate-700/50 border border-gray-600 rounded-lg text-white placeholder-gray-400 focus:border-cyan-500 focus:ring-1 focus:ring-cyan-500 transition-colors resize-none"
                  placeholder="Tell us about your MapleStory experience..."
                />
              </div>

              <div>
                <label htmlFor="motivation" className="block text-sm font-medium text-gray-300 mb-2">
                  Why do you want to join Comet?
                </label>
                <textarea
                  id="motivation"
                  name="motivation"
                  value={formData.motivation}
                  onChange={handleInputChange}
                  required
                  rows={3}
                  className="w-full px-4 py-3 bg-slate-700/50 border border-gray-600 rounded-lg text-white placeholder-gray-400 focus:border-cyan-500 focus:ring-1 focus:ring-cyan-500 transition-colors resize-none"
                  placeholder="What draws you to our guild?"
                />
              </div>

              <div>
                <label htmlFor="availability" className="block text-sm font-medium text-gray-300 mb-2">
                  Availability
                </label>
                <select
                  id="availability"
                  name="availability"
                  value={formData.availability}
                  onChange={handleInputChange}
                  required
                  className="w-full px-4 py-3 bg-slate-700/50 border border-gray-600 rounded-lg text-white focus:border-cyan-500 focus:ring-1 focus:ring-cyan-500 transition-colors"
                >
                  <option value="">Select your availability</option>
                  <option value="casual">Casual (Few hours per week)</option>
                  <option value="regular">Regular (Several hours per week)</option>
                  <option value="active">Active (Daily player)</option>
                  <option value="hardcore">Hardcore (Multiple hours daily)</option>
                </select>
              </div>

              <button
                type="submit"
                className="w-full bg-gradient-to-r from-cyan-500 to-blue-500 hover:from-cyan-600 hover:to-blue-600 text-white py-4 rounded-lg font-semibold transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-cyan-500/25"
              >
                Submit Application
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};
