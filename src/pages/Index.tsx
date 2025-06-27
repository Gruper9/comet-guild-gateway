
import React from 'react';
import { Navigation } from '@/components/Navigation';
import { HeroSection } from '@/components/HeroSection';
import { HistorySection } from '@/components/HistorySection';
import { ActivitiesSection } from '@/components/ActivitiesSection';
import { GallerySection } from '@/components/GallerySection';
import { LeadershipSection } from '@/components/LeadershipSection';
import { ApplicationSection } from '@/components/ApplicationSection';

const Index = () => {
  return (
    <div className="min-h-screen bg-gradient-to-b from-slate-900 via-blue-900 to-slate-800">
      <Navigation />
      <HeroSection />
      <HistorySection />
      <ActivitiesSection />
      <GallerySection />
      <LeadershipSection />
      <ApplicationSection />
    </div>
  );
};

export default Index;
