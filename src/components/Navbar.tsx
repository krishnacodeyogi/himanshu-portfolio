'use client'

import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import { Sun, Moon } from 'lucide-react';
import { useTheme } from '@/lib/theme-context';

const GithubIcon = () => (
  <svg className="w-4 h-4" viewBox="0 0 24 24" fill="currentColor">
    <path d="M12 0C5.374 0 0 5.373 0 12c0 5.302 3.438 9.8 8.207 11.387.6.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23A11.5 11.5 0 0112 6.8c1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576C20.566 21.797 24 17.3 24 12c0-6.627-5.373-12-12-12z"/>
  </svg>
);

const LinkedinIcon = () => (
  <svg className="w-4 h-4" viewBox="0 0 24 24" fill="currentColor">
    <path d="M19 0H5C2.239 0 0 2.239 0 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5V5c0-2.761-2.238-5-5-5zM8 19H5V8h3v11zM6.5 6.732a1.75 1.75 0 110-3.5 1.75 1.75 0 010 3.5zM20 19h-3v-5.604c0-3.368-4-3.113-4 0V19h-3V8h3v1.765C14.396 7.179 20 6.988 20 13.476V19z"/>
  </svg>
);

const navLinks = [
  { href: '#about',    label: 'About' },
  { href: '#skills',   label: 'Skills' },
  { href: '#projects', label: 'Projects' },
  { href: '#contact',  label: 'Contact' },
];

export function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [pastHero, setPastHero] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const { theme, toggleTheme } = useTheme();

  useEffect(() => {
    const onScroll = () => {
      setScrolled(window.scrollY > 20);
      // Consider past hero once scrolled beyond 80% of viewport height
      setPastHero(window.scrollY > window.innerHeight * 0.8);
    };
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  const isLight = theme === 'light';
  // When over the hero (not past it), always use dark styling for navbar text
  // because the hero section is always dark regardless of theme
  const useDarkNavStyle = !pastHero || !isLight;

  return (
    <nav className={`fixed top-0 w-full z-50 transition-all duration-300 ${
      scrolled
        ? pastHero && isLight
          ? 'bg-white/90 backdrop-blur-xl border-b border-gray-200 shadow-sm'
          : 'bg-black/80 backdrop-blur-xl border-b border-white/10 shadow-[0_1px_40px_rgba(0,0,0,0.6)]'
        : 'bg-transparent'
    }`}>
      <div className="max-w-7xl mx-auto px-6 h-16 flex items-center justify-between">

        {/* Logo */}
        <Link href="/" className={`text-lg font-bold tracking-tighter group ${useDarkNavStyle ? 'text-white' : 'text-gray-900'}`}>
          Himanshu
          <span className={`transition-colors ${useDarkNavStyle ? 'text-neutral-500 group-hover:text-neutral-300' : 'text-gray-400 group-hover:text-gray-600'}`}>.dev</span>
        </Link>

        {/* Desktop nav */}
        <div className="hidden md:flex items-center gap-1">
          {navLinks.map(({ href, label }) => (
            <Link
              key={href}
              href={href}
              className={`px-4 py-2 text-sm font-medium rounded-lg transition-all duration-150 ${
                useDarkNavStyle
                  ? 'text-neutral-400 hover:text-white hover:bg-white/5'
                  : 'text-gray-500 hover:text-gray-900 hover:bg-gray-100'
              }`}
            >
              {label}
            </Link>
          ))}
        </div>

        {/* Right: socials + theme toggle + CTA */}
        <div className="hidden md:flex items-center gap-2">
          <a href="https://github.com/himanshucodeyogi" target="_blank" rel="noopener"
             className={`p-2 rounded-lg transition-all duration-150 ${useDarkNavStyle ? 'text-neutral-500 hover:text-white hover:bg-white/5' : 'text-gray-400 hover:text-gray-900 hover:bg-gray-100'}`}>
            <GithubIcon />
          </a>
          <a href="https://linkedin.com/in/himanshu" target="_blank" rel="noopener"
             className={`p-2 rounded-lg transition-all duration-150 ${useDarkNavStyle ? 'text-neutral-500 hover:text-white hover:bg-white/5' : 'text-gray-400 hover:text-gray-900 hover:bg-gray-100'}`}>
            <LinkedinIcon />
          </a>

          {/* Theme toggle */}
          <button
            onClick={toggleTheme}
            aria-label="Toggle theme"
            className={`p-2 rounded-lg transition-all duration-200 ${
              useDarkNavStyle
                ? 'text-neutral-500 hover:text-white hover:bg-white/5'
                : 'text-gray-500 hover:text-gray-900 hover:bg-gray-100'
            }`}
          >
            {isLight ? <Moon className="w-4 h-4" /> : <Sun className="w-4 h-4" />}
          </button>

          <Link
            href="#contact"
            className={`ml-1 px-4 py-2 text-sm font-semibold rounded-full transition-colors ${
              useDarkNavStyle
                ? 'bg-white text-black hover:bg-neutral-200'
                : 'bg-gray-900 text-white hover:bg-gray-700'
            }`}
          >
            Hire Me
          </Link>
        </div>

        {/* Mobile controls */}
        <div className="md:hidden flex items-center gap-2">
          <button
            onClick={toggleTheme}
            aria-label="Toggle theme"
            className={`p-2 rounded-lg ${useDarkNavStyle ? 'text-neutral-400' : 'text-gray-500'}`}
          >
            {isLight ? <Moon className="w-4 h-4" /> : <Sun className="w-4 h-4" />}
          </button>
          <button
            className={`p-2 ${useDarkNavStyle ? 'text-neutral-400' : 'text-gray-500'}`}
            onClick={() => setMobileOpen(!mobileOpen)}
            aria-label="Toggle menu"
          >
            <div className="w-5 flex flex-col gap-1.5">
              <span className={`h-px bg-current transition-all duration-300 ${mobileOpen ? 'rotate-45 translate-y-2' : ''}`} />
              <span className={`h-px bg-current transition-all duration-300 ${mobileOpen ? 'opacity-0' : ''}`} />
              <span className={`h-px bg-current transition-all duration-300 ${mobileOpen ? '-rotate-45 -translate-y-2' : ''}`} />
            </div>
          </button>
        </div>
      </div>

      {/* Mobile menu */}
      <div className={`md:hidden transition-all duration-300 overflow-hidden ${mobileOpen ? 'max-h-72 border-b' : 'max-h-0'} ${isLight && pastHero ? 'border-gray-200' : 'border-white/10'}`}>
        <div className={`px-6 pb-4 flex flex-col gap-1 backdrop-blur-xl ${isLight && pastHero ? 'bg-white/95' : 'bg-black/90'}`}>
          {navLinks.map(({ href, label }) => (
            <Link
              key={href}
              href={href}
              onClick={() => setMobileOpen(false)}
              className={`px-4 py-3 text-sm font-medium rounded-lg transition-all ${
                isLight && pastHero ? 'text-gray-500 hover:text-gray-900 hover:bg-gray-100' : 'text-neutral-400 hover:text-white hover:bg-white/5'
              }`}
            >
              {label}
            </Link>
          ))}
          <Link
            href="#contact"
            onClick={() => setMobileOpen(false)}
            className={`mt-2 px-4 py-3 text-sm font-semibold rounded-xl text-center ${isLight && pastHero ? 'bg-gray-900 text-white' : 'bg-white text-black'}`}
          >
            Hire Me
          </Link>
        </div>
      </div>
    </nav>
  );
}
