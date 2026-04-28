'use client'

import React from 'react';
import { Briefcase, GraduationCap, Zap } from 'lucide-react';

const pillars = [
  {
    number: '01',
    icon: <GraduationCap className="w-5 h-5" />,
    title: 'Academic Foundation',
    description: 'Currently a Class 11 student at S.A.M. Inter College, Saharanpur — balancing formal education with an intense, self-driven journey into real-world software engineering.',
  },
  {
    number: '02',
    icon: <Briefcase className="w-5 h-5" />,
    title: 'Production Experience',
    description: 'Remote Intern at CodeYogi Foundation — building production-grade MERN stack applications, architecting RESTful APIs, and optimizing MongoDB queries for real users.',
  },
  {
    number: '03',
    icon: <Zap className="w-5 h-5" />,
    title: 'Rapid Innovation',
    description: 'From game development to AI automation with Gemini & Claude, to ethical hacking with Kali Linux — I explore broadly to build deeply.',
  },
];

export function CrossProfileSection() {
  return (
    <section id="cross-profile" className="py-24 bg-gray-50 dark:bg-neutral-950 border-t border-gray-200 dark:border-white/5 relative overflow-hidden transition-colors duration-300">
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[400px] bg-black/[0.02] dark:bg-white/[0.03] rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <div className="max-w-2xl mb-16 reveal">
          <p className="text-xs font-semibold tracking-[0.2em] uppercase text-gray-400 dark:text-neutral-500 mb-3">
            The Journey
          </p>
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-4 leading-tight">
            Student by day.<br />
            <span className="text-gray-400 dark:text-neutral-500">Engineer by passion.</span>
          </h2>
          <p className="text-gray-500 dark:text-neutral-400 text-lg leading-relaxed">
            While my peers explore traditional paths, I&apos;ve chosen to complement my studies with hands-on training, real products, and production-grade code.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
          {pillars.map((pillar, index) => (
            <div
              key={index}
              className="reveal group relative bg-white dark:bg-black/40 border border-gray-200 dark:border-white/8 rounded-2xl p-7 hover:border-gray-300 dark:hover:border-white/20 hover:-translate-y-1 transition-all duration-300 shadow-sm dark:shadow-none"
            >
              <span className="text-[11px] font-bold tracking-widest text-gray-300 dark:text-neutral-700 mb-5 block">
                {pillar.number}
              </span>
              <div className="w-10 h-10 bg-gray-100 dark:bg-white/5 rounded-xl flex items-center justify-center mb-5 border border-gray-200 dark:border-white/8 text-gray-500 dark:text-neutral-300 group-hover:bg-gray-900 group-hover:text-white dark:group-hover:bg-white/10 dark:group-hover:text-white transition-all duration-300">
                {pillar.icon}
              </div>
              <h3 className="text-base font-semibold text-gray-900 dark:text-white mb-2">{pillar.title}</h3>
              <p className="text-sm text-gray-500 dark:text-neutral-500 leading-relaxed">{pillar.description}</p>
              <div className="absolute bottom-0 left-7 right-7 h-px bg-gradient-to-r from-transparent via-gray-300 dark:via-white/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
