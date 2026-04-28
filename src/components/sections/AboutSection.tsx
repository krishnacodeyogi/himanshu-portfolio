import React from 'react';
import { Sparkles } from 'lucide-react';

const highlights = [
  {
    title: 'Real-World Engineering Experience',
    body: 'As a Remote Intern at CodeYogi Foundation, building production-grade MERN stack applications that serve real users — writing code that scales.',
  },
  {
    title: 'Rigorous Self-Learning',
    body: 'Complementing formal education with intense, hands-on training — from foundational programming to complex system architecture.',
  },
  {
    title: 'Broad Technical Curiosity',
    body: 'Exploring game development, AI automation with Gemini & Claude, and ethical hacking with Kali Linux — building a rich mental model of how software, security, and intelligence intersect.',
  },
];

export function AboutSection() {
  return (
    <section id="about" className="py-24 bg-white dark:bg-black border-t border-gray-100 dark:border-white/5 transition-colors duration-300">
      <div className="max-w-7xl mx-auto px-6">

        <div className="flex items-center gap-3 mb-16 reveal">
          <div className="p-2.5 bg-gray-100 dark:bg-white/5 rounded-xl border border-gray-200 dark:border-white/10">
            <Sparkles className="w-5 h-5 text-gray-700 dark:text-white" />
          </div>
          <p className="text-xs font-semibold tracking-[0.2em] uppercase text-gray-400 dark:text-neutral-500">The Journey</p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
          {/* Left — bio */}
          <div className="reveal">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white leading-tight mb-6">
              About Me
            </h2>
            <div className="space-y-4 text-gray-500 dark:text-neutral-400 leading-relaxed text-[15px]">
              <p>
                I&apos;m currently a Class 11 student at S.A.M. Inter College in Saharanpur, navigating the exciting intersection of formal education and real-world software engineering. While my peers explore traditional academic paths, I&apos;ve chosen to complement my studies with an intense, hands-on journey into the world of technology. Through rigorous training at CodeYogi, I&apos;ve learned everything from foundational programming to complex system architecture, building real products along the way.
              </p>
              <p>
                As a Remote Intern at CodeYogi Foundation, I&apos;ve had the privilege of working on production-grade MERN stack applications that serve real users. This experience has taught me the difference between writing code that works and writing code that scales — from architecting RESTful APIs and optimizing MongoDB queries to implementing responsive, accessible front-end interfaces with React and Tailwind CSS.
              </p>
              <p>
                Beyond web development, my curiosity spans a wide and growing landscape. I&apos;ve explored game development, built automation pipelines with AI tools like Gemini and Claude, and delved into the fundamentals of ethical hacking using Kali Linux. This breadth isn&apos;t scattered ambition — it&apos;s a deliberate strategy to understand how different domains of computing connect.
              </p>
            </div>

            {/* Terminal block */}
            <div className="mt-8 bg-gray-950 dark:bg-neutral-950 border border-gray-800 dark:border-white/8 rounded-xl p-5 font-mono text-sm">
              <div className="flex items-center gap-1.5 mb-4">
                <div className="w-2.5 h-2.5 rounded-full bg-red-500/70" />
                <div className="w-2.5 h-2.5 rounded-full bg-yellow-500/70" />
                <div className="w-2.5 h-2.5 rounded-full bg-green-500/70" />
                <span className="ml-2 text-neutral-600 text-xs">himanshu@dev ~</span>
              </div>
              <p className="text-neutral-500"><span className="text-neutral-300">const</span> me = {'{'}</p>
              <p className="text-neutral-500 pl-4">role: <span className="text-neutral-300">&apos;Full-Stack Developer&apos;</span>,</p>
              <p className="text-neutral-500 pl-4">focus: <span className="text-neutral-300">&apos;MERN · AI · Automation&apos;</span>,</p>
              <p className="text-neutral-500 pl-4">education: <span className="text-neutral-300">&apos;Class 11 @ S.A.M. Inter College&apos;</span>,</p>
              <p className="text-neutral-500 pl-4">status: <span className="text-green-400/80">&apos;open to opportunities&apos;</span>,</p>
              <p className="text-neutral-500">{'}'}</p>
            </div>
          </div>

          {/* Right — highlights */}
          <div className="reveal">
            <p className="text-xs font-semibold tracking-[0.2em] uppercase text-gray-400 dark:text-neutral-500 mb-6">What Sets Me Apart</p>
            <div className="space-y-4">
              {highlights.map((item, i) => (
                <div
                  key={i}
                  className="group flex items-start gap-4 p-5 bg-gray-50 dark:bg-white/[0.02] border border-gray-200 dark:border-white/8 rounded-xl hover:border-gray-300 dark:hover:border-white/15 hover:bg-gray-100 dark:hover:bg-white/[0.04] transition-all duration-300"
                >
                  <div className="w-6 h-6 rounded-full border border-gray-300 dark:border-white/15 flex items-center justify-center flex-shrink-0 mt-0.5 group-hover:border-gray-500 dark:group-hover:border-white/30 transition-colors">
                    <span className="text-[10px] font-bold text-gray-400 dark:text-neutral-500 group-hover:text-gray-700 dark:group-hover:text-neutral-300 transition-colors">
                      {String(i + 1).padStart(2, '0')}
                    </span>
                  </div>
                  <div>
                    <p className="text-gray-900 dark:text-white text-sm font-medium mb-1 leading-snug">{item.title}</p>
                    <p className="text-gray-500 dark:text-neutral-500 text-sm leading-relaxed">{item.body}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
