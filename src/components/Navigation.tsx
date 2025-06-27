
import React, { useState, useEffect } from 'react';
import { useNavigate, useLocation } from 'react-router-dom';

export const Navigation = () => {
  const [activeSection, setActiveSection] = useState('hero');
  const navigate = useNavigate();
  const location = useLocation();

  const navItems = [
    { id: 'hero', label: 'Home' },
    { id: 'history', label: 'History' },
    { id: 'activities', label: 'Activities' },
    { id: 'gallery', label: 'Gallery' },
    { id: 'leadership', label: 'Leadership' },
  ];

  const scrollToSection = (sectionId: string) => {
    if (location.pathname !== '/') {
      navigate('/');
      setTimeout(() => {
        const element = document.getElementById(sectionId);
        if (element) {
          element.scrollIntoView({ behavior: 'smooth' });
        }
      }, 100);
    } else {
      const element = document.getElementById(sectionId);
      if (element) {
        element.scrollIntoView({ behavior: 'smooth' });
      }
    }
  };

  const handleApplyClick = () => {
    navigate('/apply');
  };

  useEffect(() => {
    if (location.pathname !== '/') return;

    const handleScroll = () => {
      const sections = navItems.map(item => item.id);
      const current = sections.find(section => {
        const element = document.getElementById(section);
        if (element) {
          const rect = element.getBoundingClientRect();
          return rect.top <= 100 && rect.bottom >= 100;
        }
        return false;
      });
      if (current) {
        setActiveSection(current);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, [location.pathname]);

  return (
    <nav className="fixed top-0 w-full bg-slate-900/90 backdrop-blur-sm border-b border-cyan-500/20 z-50">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          <div 
            className="text-2xl font-bold text-cyan-400 cursor-pointer" 
            onClick={() => navigate('/')}
          >
            Comet
          </div>
          <div className="hidden md:flex items-center space-x-8">
            {navItems.map((item) => (
              <button
                key={item.id}
                onClick={() => scrollToSection(item.id)}
                className={`text-sm font-medium transition-colors duration-200 hover:text-cyan-400 ${
                  activeSection === item.id && location.pathname === '/' ? 'text-cyan-400' : 'text-gray-300'
                }`}
              >
                {item.label}
              </button>
            ))}
            <button
              onClick={handleApplyClick}
              className={`bg-gradient-to-r from-cyan-500 to-blue-500 hover:from-cyan-600 hover:to-blue-600 text-white px-4 py-2 rounded-lg text-sm font-semibold transition-all duration-300 ${
                location.pathname === '/apply' ? 'ring-2 ring-cyan-400' : ''
              }`}
            >
              Apply
            </button>
          </div>
        </div>
      </div>
    </nav>
  );
};
