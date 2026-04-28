'use client'

import React from 'react';
import { ExternalLink } from 'lucide-react';
import Link from 'next/link';

const designs = [
  {
    title: 'EcoSphere App',
    category: 'UI/UX & Brand',
    description: 'A sleek sustainability tracker focusing on conversion optimization and motion design.',
    image: '/eco_sphere.png'
  },
  {
    title: 'Nova Dashboard',
    category: 'SaaS Analytics',
    description: 'Simplifying complex data into intuitive visual hierarchies.',
    image: '/nova_dashboard.png'
  },
  {
    title: 'Aura Design System',
    category: 'Component Library',
    description: 'A scalable, consistent UI kit built for high-performance applications.',
    image: '/aura_design.png'
  }
];

export function DesignGallerySection() {
  return (
    <section id="design-gallery" className="py-24 bg-black border-t border-white/5">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-5xl font-bold text-white mb-4 tracking-tight">
            Design Gallery
          </h2>
          <p className="text-neutral-400 max-w-2xl mx-auto text-lg">
            A curated collection of digital experiences, visual experiments, and product interfaces.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {designs.map((design, index) => (
            <div 
              key={index} 
              className="group relative bg-neutral-900/50 rounded-2xl overflow-hidden border border-white/10 hover:border-white/20 transition-all duration-300"
            >
              <div className="aspect-[4/3] relative overflow-hidden">
                <img 
                  src={design.image} 
                  alt={design.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black via-black/20 to-transparent opacity-60 group-hover:opacity-40 transition-opacity" />
              </div>
              
              <div className="p-6 relative z-10">
                <span className="text-xs font-semibold tracking-wider text-neutral-400 uppercase">
                  {design.category}
                </span>
                <h3 className="text-2xl font-bold text-white mt-2 mb-3 flex items-center justify-between">
                  {design.title}
                  <Link href="#" className="text-neutral-400 hover:text-white transition-colors">
                    <ExternalLink className="w-5 h-5" />
                  </Link>
                </h3>
                <p className="text-neutral-300 text-sm leading-relaxed">
                  {design.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
