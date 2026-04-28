import React from 'react';
import { ExternalLink } from 'lucide-react';

const GithubIcon = ({ className }: { className?: string }) => (
  <svg className={className} viewBox="0 0 24 24" fill="currentColor" stroke="none">
    <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
  </svg>
);

const projects = [
  {
    number: '01',
    title: 'Blood Donor Connect',
    tag: 'Healthcare · Geospatial',
    darkTag: 'text-red-400/60',
    lightTag: 'text-red-500',
    darkBorder: 'hover:border-red-500/20',
    lightBorder: 'hover:border-red-200',
    darkGlow: 'from-red-950/30',
    lightGlow: 'from-red-50',
    overview: 'A life-saving platform designed to bridge the gap between voluntary blood donors and recipients in urgent need. Built with a focus on speed and reliability, it enables real-time donor discovery based on blood type and location.',
    features: [
      'Real-time donor search with geolocation filtering and blood group matching for instant results',
      'Secure user authentication and profile management for both donors and seekers',
      'Responsive, mobile-first design ensuring accessibility during critical moments',
    ],
    techStack: ['React', 'Node.js', 'MongoDB', 'Tailwind CSS'],
    liveUrl: 'https://blood-donor-rust.vercel.app/',
    githubUrl: null,
  },
  {
    number: '02',
    title: 'Sugam Garbh',
    tag: 'AI · Healthcare',
    darkTag: 'text-violet-400/60',
    lightTag: 'text-violet-600',
    darkBorder: 'hover:border-violet-500/20',
    lightBorder: 'hover:border-violet-200',
    darkGlow: 'from-violet-950/30',
    lightGlow: 'from-violet-50',
    overview: 'A bilingual, AI-powered pregnancy tracking and support platform. It integrates Meta Llama 3.1 to provide context-aware health guidance, traditional remedies, and automated reminders across both Web and Telegram interfaces.',
    features: [
      'Context-aware AI conversational agent powered by Meta Llama 3.1 70B with seamless bilingual (Hindi/English) support',
      'Dual-platform accessibility via Telegram Bot and Web Interface, featuring scheduled health checks and background push notifications',
      'Military-grade data security utilizing AES-256-CBC encryption to protect sensitive user health and location records in MongoDB',
    ],
    techStack: ['Python', 'React', 'Llama 3.1 70B', 'Telegram API'],
    liveUrl: 'https://sug-solh.onrender.com/',
    githubUrl: null,
  },
  {
    number: '03',
    title: 'ThinkDual',
    tag: 'Collaboration · Real-Time',
    darkTag: 'text-cyan-400/60',
    lightTag: 'text-cyan-600',
    darkBorder: 'hover:border-cyan-500/20',
    lightBorder: 'hover:border-cyan-200',
    darkGlow: 'from-cyan-950/30',
    lightGlow: 'from-cyan-50',
    overview: 'A dynamic brainstorming and interaction hub built to manage complex data states and facilitate creative collaboration. ThinkDual turns chaotic ideas into structured, actionable threads.',
    features: [
      'Real-time collaborative workspace with WebSocket-powered live updates',
      'Stateful interaction management handling complex, nested data relationships',
      'Intuitive card-based UI for organizing, tagging, and prioritizing ideas',
    ],
    techStack: ['React', 'Node.js', 'WebSockets', 'Express'],
    liveUrl: 'https://thinkdual-8vdt.onrender.com/',
    githubUrl: null,
  },
  {
    number: '04',
    title: 'IITM Info Bot',
    tag: 'Automation · NLP',
    darkTag: 'text-orange-400/60',
    lightTag: 'text-orange-600',
    darkBorder: 'hover:border-orange-500/20',
    lightBorder: 'hover:border-orange-200',
    darkGlow: 'from-orange-950/30',
    lightGlow: 'from-orange-50',
    overview: 'An automated Telegram bot providing real-time academic information for the IIT Madras online degree community. From exam schedules to resource links, it delivers instant, reliable answers at scale.',
    features: [
      'Natural language command parsing for intuitive, conversational interactions',
      'Automated content scraping and caching for up-to-date academic information',
      'Scalable architecture handling thousands of concurrent user queries reliably',
    ],
    techStack: ['Python', 'Node.js', 'NLP', 'Telegram API'],
    liveUrl: 'https://t.me/IITMInfoBot',
    githubUrl: null,
  },
];

export function ProjectsSection() {
  return (
    <section id="projects" className="py-24 bg-white dark:bg-black border-t border-gray-100 dark:border-white/5 transition-colors duration-300">
      <div className="max-w-7xl mx-auto px-6">
        <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-4 mb-14 reveal">
          <div>
            <p className="text-xs font-semibold tracking-[0.2em] uppercase text-gray-400 dark:text-neutral-500 mb-3">Interactive Gallery</p>
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white">Featured Projects</h2>
          </div>
          <p className="text-gray-400 dark:text-neutral-500 max-w-sm text-sm leading-relaxed">
            Complex, real-world problems solved end-to-end — from architecture to deployment.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {projects.map((project, index) => (
            <div
              key={index}
              className="reveal group relative bg-gray-50 dark:bg-neutral-950 border border-gray-200 dark:border-white/8 rounded-2xl p-7 overflow-hidden transition-all duration-300 hover:-translate-y-2 hover:shadow-xl dark:hover:shadow-none hover:border-gray-300 dark:hover:border-white/20"
            >
              {/* Subtle top accent gradient line that becomes vibrant on hover */}
              <div className={`absolute top-0 left-0 right-0 h-1 bg-gradient-to-r ${project.lightGlow} dark:${project.darkGlow} opacity-30 group-hover:opacity-100 transition-all duration-300`} />

              <div className="relative z-10">
                <div className="flex items-start justify-between mb-5">
                  <div>
                    <div className="flex items-center gap-3 mb-1">
                      <span className="text-[11px] font-bold text-gray-300 dark:text-neutral-700 font-mono">{project.number}</span>
                      <span className={`text-[11px] font-semibold tracking-widest uppercase dark:${project.darkTag} ${project.lightTag}`}>
                        {project.tag}
                      </span>
                    </div>
                    <h3 className="text-xl font-bold text-gray-900 dark:text-white group-hover:text-black dark:group-hover:text-white transition-colors duration-200">{project.title}</h3>
                  </div>
                  <div className="flex items-center gap-2 md:opacity-0 md:group-hover:opacity-100 transition-opacity duration-200">
                    {project.githubUrl && (
                      <a href={project.githubUrl} target="_blank" rel="noopener noreferrer" className="p-1.5 text-gray-400 dark:text-neutral-500 hover:text-gray-900 dark:hover:text-white rounded-lg hover:bg-gray-100 dark:hover:bg-white/5 transition-colors">
                        <GithubIcon className="w-4 h-4" />
                      </a>
                    )}
                    {project.liveUrl && (
                      <a href={project.liveUrl} target="_blank" rel="noopener noreferrer" className="p-1.5 text-gray-400 dark:text-neutral-500 hover:text-gray-900 dark:hover:text-white rounded-lg hover:bg-gray-100 dark:hover:bg-white/5 transition-colors">
                        <ExternalLink className="w-4 h-4" />
                      </a>
                    )}
                  </div>
                </div>

                <p className="text-gray-500 dark:text-neutral-400 text-sm leading-relaxed mb-5">{project.overview}</p>

                <div className="space-y-2 mb-5">
                  {project.features.map((feature, i) => (
                    <div key={i} className="flex gap-2 group/feature">
                      <span className="text-gray-300 dark:text-neutral-600 mt-0.5 flex-shrink-0 group-hover/feature:text-gray-600 dark:group-hover/feature:text-neutral-400 transition-colors">▹</span>
                      <p className="text-xs text-gray-400 dark:text-neutral-500 leading-relaxed group-hover/feature:text-gray-600 dark:group-hover/feature:text-neutral-300 transition-colors">{feature}</p>
                    </div>
                  ))}
                </div>

                <div className="flex flex-wrap gap-1.5 pt-4 border-t border-gray-200 dark:border-white/5">
                  {project.techStack.map((tech, i) => (
                    <span key={i} className="text-[11px] font-medium px-2.5 py-1 bg-white dark:bg-white/3 text-gray-500 dark:text-neutral-400 rounded-md border border-gray-200 dark:border-white/5 group-hover:border-gray-300 dark:group-hover:border-white/10 transition-colors duration-200">
                      {tech}
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
