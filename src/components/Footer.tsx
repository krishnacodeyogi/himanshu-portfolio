import React from 'react';
import Link from 'next/link';

const links = [
  { href: '#about',    label: 'About' },
  { href: '#skills',   label: 'Skills' },
  { href: '#projects', label: 'Projects' },
  { href: '#contact',  label: 'Contact' },
];

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

export function Footer() {
  return (
    <footer className="bg-white dark:bg-black border-t border-gray-100 dark:border-white/5 py-10 transition-colors duration-300">
      <div className="max-w-7xl mx-auto px-6">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6">
          <Link href="/" className="text-base font-bold tracking-tighter text-gray-900 dark:text-white">
            Himanshu<span className="text-gray-300 dark:text-neutral-600">.dev</span>
          </Link>

          <div className="flex items-center gap-1">
            {links.map(({ href, label }) => (
              <Link
                key={href}
                href={href}
                className="px-3 py-1.5 text-xs font-medium text-gray-400 dark:text-neutral-600 hover:text-gray-900 dark:hover:text-neutral-300 rounded-lg hover:bg-gray-100 dark:hover:bg-white/5 transition-all duration-150"
              >
                {label}
              </Link>
            ))}
          </div>

          <div className="flex items-center gap-3">
            <a href="https://github.com/himanshucodeyogi" target="_blank" rel="noopener"
               className="p-2 text-gray-300 dark:text-neutral-600 hover:text-gray-900 dark:hover:text-white hover:bg-gray-100 dark:hover:bg-white/5 rounded-lg transition-all duration-150">
              <GithubIcon />
            </a>
            <a href="https://linkedin.com/in/himanshu" target="_blank" rel="noopener"
               className="p-2 text-gray-300 dark:text-neutral-600 hover:text-gray-900 dark:hover:text-white hover:bg-gray-100 dark:hover:bg-white/5 rounded-lg transition-all duration-150">
              <LinkedinIcon />
            </a>
            <span className="text-gray-300 dark:text-neutral-700 text-xs ml-1">
              © {new Date().getFullYear()} Himanshu · Built with React & Three.js
            </span>
          </div>
        </div>
      </div>
    </footer>
  );
}
