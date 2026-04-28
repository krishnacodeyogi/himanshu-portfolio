import React from 'react';
import { Code2, Database, Settings } from 'lucide-react';

const skillCategories = [
  {
    title: 'Frontend Architecture',
    icon: <Code2 className="w-5 h-5" />,
    description: 'Building dynamic, responsive user interfaces that feel fast and look polished — from single-page applications to cross-platform mobile experiences with React Native.',
    darkGlow: 'from-cyan-500/10',
    darkBorder: 'hover:border-cyan-500/20',
    darkBadge: 'bg-cyan-500/10 text-cyan-300/70 border-cyan-500/15',
    lightGlow: 'from-cyan-50',
    lightBorder: 'hover:border-cyan-200',
    lightBadge: 'bg-cyan-50 text-cyan-700 border-cyan-100',
    skills: ['React.js', 'React Native', 'JavaScript', 'HTML5', 'Tailwind CSS'],
  },
  {
    title: 'Backend & Databases',
    icon: <Database className="w-5 h-5" />,
    description: 'Designing scalable RESTful APIs and efficient database architectures that handle real-world traffic, with a focus on clean separation of concerns and robust error handling.',
    darkGlow: 'from-emerald-500/10',
    darkBorder: 'hover:border-emerald-500/20',
    darkBadge: 'bg-emerald-500/10 text-emerald-300/70 border-emerald-500/15',
    lightGlow: 'from-emerald-50',
    lightBorder: 'hover:border-emerald-200',
    lightBadge: 'bg-emerald-50 text-emerald-700 border-emerald-100',
    skills: ['Node.js', 'Express.js', 'Python', 'MongoDB', 'NoSQL'],
  },
  {
    title: 'Tools & Fundamentals',
    icon: <Settings className="w-5 h-5" />,
    description: 'Leveraging modern development workflows — version control, CI/CD thinking, and AI-powered coding assistants — to ship reliable software faster without sacrificing quality.',
    darkGlow: 'from-orange-500/10',
    darkBorder: 'hover:border-orange-500/20',
    darkBadge: 'bg-orange-500/10 text-orange-300/70 border-orange-500/15',
    lightGlow: 'from-orange-50',
    lightBorder: 'hover:border-orange-200',
    lightBadge: 'bg-orange-50 text-orange-600 border-orange-100',
    skills: ['Git', 'GitHub', 'Full-Stack Architecture', 'AI-Assisted Coding'],
  },
];

export function SkillsSection() {
  return (
    <section id="skills" className="py-24 bg-gray-50 dark:bg-neutral-950 border-t border-gray-100 dark:border-white/5 transition-colors duration-300">
      <div className="max-w-7xl mx-auto px-6">
        <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-4 mb-14 reveal">
          <div>
            <p className="text-xs font-semibold tracking-[0.2em] uppercase text-gray-400 dark:text-neutral-500 mb-3">The Tech Ecosystem</p>
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white">My Skills</h2>
          </div>
          <p className="text-gray-400 dark:text-neutral-500 max-w-sm text-sm leading-relaxed">
            A full toolkit of modern technologies — from responsive frontends to scalable backend systems.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {skillCategories.map((cat, index) => (
            <div
              key={index}
              className="reveal group relative bg-white dark:bg-black border border-gray-200 dark:border-white/8 rounded-2xl p-6 overflow-hidden transition-all duration-300 hover:-translate-y-2 hover:shadow-lg dark:hover:shadow-none hover:border-gray-300 dark:hover:border-white/20"
            >
              {/* Subtle accent line on top that expands on hover */}
              <div className={`absolute top-0 left-0 right-0 h-1 bg-gradient-to-r ${cat.lightBadge} dark:${cat.darkBadge} opacity-40 group-hover:opacity-100 transition-all duration-300`} />

              <div className="relative z-10">
                <div className="w-10 h-10 bg-gray-100 dark:bg-white/5 rounded-xl flex items-center justify-center mb-5 border border-gray-200 dark:border-white/8 text-gray-500 dark:text-neutral-400 group-hover:scale-110 transition-transform duration-300">
                  {cat.icon}
                </div>
                <h3 className="text-sm font-semibold text-gray-900 dark:text-white mb-2 tracking-wide group-hover:text-gray-950 dark:group-hover:text-white transition-colors duration-300">
                  {cat.title}
                </h3>
                <p className="text-xs text-gray-400 dark:text-neutral-500 leading-relaxed mb-4">{cat.description}</p>
                <div className="flex flex-wrap gap-2">
                  {cat.skills.map((skill, i) => (
                    <span
                      key={i}
                      className={`text-xs font-medium px-2.5 py-1.5 rounded-lg border transition-all duration-300 dark:${cat.darkBadge} ${cat.lightBadge} hover:scale-105`}
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
