
import React from 'react';

export const GallerySection = () => {
  const galleryImages = [
    "https://images.unsplash.com/photo-1605810230434-7631ac76ec81?w=400&h=300&fit=crop",
    "https://images.unsplash.com/photo-1519389950473-47ba0277781c?w=400&h=300&fit=crop",
    "https://images.unsplash.com/photo-1488590528505-98d2b5aba04b?w=400&h=300&fit=crop",
    "https://images.unsplash.com/photo-1470071459604-3b5ec3a7fe05?w=400&h=300&fit=crop",
    "https://images.unsplash.com/photo-1582562124811-c09040d0a901?w=400&h=300&fit=crop",
    "https://images.unsplash.com/photo-1439886183900-e79ec0057170?w=400&h=300&fit=crop"
  ];

  return (
    <section id="gallery" className="py-20 relative">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl md:text-5xl font-bold text-center text-white mb-12">
          Guild <span className="text-cyan-400">Gallery</span>
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
          {galleryImages.map((image, index) => (
            <div key={index} className="relative group overflow-hidden rounded-xl border border-cyan-500/20 hover:border-cyan-500/40 transition-all duration-300 shadow-xl hover:shadow-cyan-500/25">
              <img 
                src={image} 
                alt={`Guild memory ${index + 1}`}
                className="w-full h-64 object-cover group-hover:scale-110 transition-transform duration-300"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
