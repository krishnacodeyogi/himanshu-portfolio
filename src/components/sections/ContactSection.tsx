import React from 'react';
import { Mail, ArrowUpRight } from 'lucide-react';

export function ContactSection() {
  return (
    <section id="contact" className="py-24 bg-gray-50 dark:bg-neutral-950 border-t border-gray-100 dark:border-white/5 relative overflow-hidden transition-colors duration-300">
      <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-3/4 max-w-2xl h-64 bg-gray-200/50 dark:bg-white/[0.04] blur-[100px] rounded-full pointer-events-none" />

      <div className="max-w-6xl mx-auto px-6 relative z-10">
        {/* Top CTA */}
        <div className="flex flex-col lg:flex-row lg:items-end lg:justify-between gap-10 mb-14 reveal">
          <div>
            <p className="text-xs font-semibold tracking-[0.2em] uppercase text-gray-400 dark:text-neutral-500 mb-4">Get In Touch</p>
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 dark:text-white leading-[1.1] max-w-xl">
              Let&apos;s build something great together.
            </h2>
          </div>
          <div className="flex flex-col gap-4 lg:items-end">
            <p className="text-gray-400 dark:text-neutral-400 max-w-xs text-sm leading-relaxed lg:text-right">
              Whether you&apos;re a recruiter looking for a driven engineer, a fellow developer who wants to collaborate on something ambitious, or someone with a wild idea that needs building — I&apos;d love to hear from you. My inbox is always open.
            </p>
            <a
              href="mailto:himanshu.codeyogi@gmail.com"
              className="group flex items-center gap-2.5 bg-gray-900 dark:bg-white text-white dark:text-black px-6 py-3 rounded-full font-semibold text-sm w-fit hover:bg-gray-700 dark:hover:bg-neutral-100 transition-all duration-200"
            >
              <Mail className="w-4 h-4" />
              himanshu.codeyogi@gmail.com
              <ArrowUpRight className="w-4 h-4 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
            </a>
          </div>
        </div>

        {/* Form */}
        <div className="reveal bg-white dark:bg-black/60 border border-gray-200 dark:border-white/8 rounded-2xl p-8 md:p-10 shadow-sm dark:shadow-none">
          <form className="space-y-5">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
              <div className="space-y-1.5">
                <label className="text-xs font-semibold text-gray-400 dark:text-neutral-500 uppercase tracking-wider">Name</label>
                <input
                  type="text"
                  placeholder="John Doe"
                  className="w-full bg-gray-50 dark:bg-white/[0.03] border border-gray-200 dark:border-white/8 rounded-xl px-4 py-3 text-gray-900 dark:text-white text-sm placeholder:text-gray-300 dark:placeholder:text-neutral-700 focus:outline-none focus:border-gray-400 dark:focus:border-white/25 focus:bg-white dark:focus:bg-white/[0.05] transition-all duration-200"
                />
              </div>
              <div className="space-y-1.5">
                <label className="text-xs font-semibold text-gray-400 dark:text-neutral-500 uppercase tracking-wider">Email</label>
                <input
                  type="email"
                  placeholder="john@example.com"
                  className="w-full bg-gray-50 dark:bg-white/[0.03] border border-gray-200 dark:border-white/8 rounded-xl px-4 py-3 text-gray-900 dark:text-white text-sm placeholder:text-gray-300 dark:placeholder:text-neutral-700 focus:outline-none focus:border-gray-400 dark:focus:border-white/25 focus:bg-white dark:focus:bg-white/[0.05] transition-all duration-200"
                />
              </div>
            </div>
            <div className="space-y-1.5">
              <label className="text-xs font-semibold text-gray-400 dark:text-neutral-500 uppercase tracking-wider">Subject</label>
              <input
                type="text"
                placeholder="Job Opportunity / Project Collaboration / Open Source"
                className="w-full bg-gray-50 dark:bg-white/[0.03] border border-gray-200 dark:border-white/8 rounded-xl px-4 py-3 text-gray-900 dark:text-white text-sm placeholder:text-gray-300 dark:placeholder:text-neutral-700 focus:outline-none focus:border-gray-400 dark:focus:border-white/25 focus:bg-white dark:focus:bg-white/[0.05] transition-all duration-200"
              />
            </div>
            <div className="space-y-1.5">
              <label className="text-xs font-semibold text-gray-400 dark:text-neutral-500 uppercase tracking-wider">Message</label>
              <textarea
                rows={5}
                placeholder="Tell me about your project, role, or idea..."
                className="w-full bg-gray-50 dark:bg-white/[0.03] border border-gray-200 dark:border-white/8 rounded-xl px-4 py-3 text-gray-900 dark:text-white text-sm placeholder:text-gray-300 dark:placeholder:text-neutral-700 focus:outline-none focus:border-gray-400 dark:focus:border-white/25 focus:bg-white dark:focus:bg-white/[0.05] transition-all duration-200 resize-none"
              />
            </div>
            <div className="flex items-center justify-between pt-2">
              <span className="flex items-center gap-2 text-xs text-gray-400 dark:text-neutral-600">
                <span className="relative flex h-1.5 w-1.5">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-50" />
                  <span className="relative inline-flex rounded-full h-1.5 w-1.5 bg-green-500" />
                </span>
                Open to new opportunities
              </span>
              <button
                type="button"
                className="group bg-gray-900 dark:bg-white text-white dark:text-black px-7 py-3 rounded-full font-semibold text-sm flex items-center gap-2 hover:bg-gray-700 dark:hover:bg-neutral-100 transition-all duration-200 hover:scale-[1.02]"
              >
                Send Message
                <ArrowUpRight className="w-4 h-4 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
              </button>
            </div>
          </form>
        </div>
      </div>
    </section>
  );
}
