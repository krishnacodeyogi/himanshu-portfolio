'use client'

import { SplineScene } from "@/components/ui/splite";
import { Spotlight } from "@/components/ui/spotlight";
import Link from "next/link";
import { ArrowRight, Mail } from "lucide-react";
import { useTheme } from "@/lib/theme-context";

const stats = [
  { value: '4+', label: 'Projects Shipped' },
  { value: '3',  label: 'Domains Mastered' },
  { value: '∞',  label: 'Problems to Solve' },
];

export function HeroSection() {
  const { theme } = useTheme();
  const isLight = theme === 'light';

  return (
    <section className="w-full min-h-screen bg-white dark:bg-black relative overflow-hidden flex items-center pt-16 transition-colors duration-300">
      {/* Spotlight is only vibrant in dark mode */}
      {!isLight && <Spotlight className="-top-40 left-0 md:left-60 md:-top-20" fill="white" />}
      {isLight && <Spotlight className="-top-40 left-0 md:left-60 md:-top-20" fill="rgba(0,0,0,0.05)" />}

      {/* Grid overlay */}
      <div
        className="absolute inset-0 z-0 opacity-[0.05] dark:opacity-[0.03] pointer-events-none transition-opacity duration-300"
        style={{
          backgroundImage: isLight 
            ? 'linear-gradient(rgba(0,0,0,.3) 1px,transparent 1px),linear-gradient(90deg,rgba(0,0,0,.3) 1px,transparent 1px)'
            : 'linear-gradient(rgba(255,255,255,.5) 1px,transparent 1px),linear-gradient(90deg,rgba(255,255,255,.5) 1px,transparent 1px)',
          backgroundSize: '72px 72px',
        }}
      />

      {/* Spline — contained within hero. In light mode, we invert the canvas to get a white bg and silver robot! */}
      <div className={`absolute inset-0 z-0 transition-all duration-500 ${isLight ? 'invert hue-rotate-180 opacity-90' : ''}`}>
        <SplineScene
          scene="https://prod.spline.design/kZDDjO5HuC9GJUM2/scene.splinecode"
          className="w-full h-full"
        />
      </div>

      {/* Left fade so text is readable over the 3D scene */}
      <div className="absolute inset-y-0 left-0 w-2/3 bg-gradient-to-r from-white via-white/80 to-transparent dark:from-black dark:via-black/70 dark:to-transparent z-[1] pointer-events-none transition-all duration-300" />

      {/* Content — pointer-events-none on wrapper, auto on interactive kids */}
      <div className="relative z-10 max-w-7xl mx-auto px-6 w-full py-16 pointer-events-none">
        <div className="max-w-xl">

          {/* Live badge */}
          <div className="animate-fade-up delay-100 flex items-center gap-2 mb-6 pointer-events-auto w-fit">
            <span className="relative flex h-2 w-2">
              <span className={`animate-ping absolute inline-flex h-full w-full rounded-full opacity-40 ${isLight ? 'bg-gray-900' : 'bg-white'}`} />
              <span className={`relative inline-flex rounded-full h-2 w-2 ${isLight ? 'bg-gray-900' : 'bg-white'}`} />
            </span>
            <span className="text-xs font-semibold text-gray-500 dark:text-neutral-400 tracking-[0.2em] uppercase">
              Welcome to my world
            </span>
          </div>

          <h1 className="animate-fade-up delay-200 text-5xl md:text-6xl lg:text-7xl font-bold bg-clip-text text-transparent bg-gradient-to-br from-gray-900 via-gray-700 to-gray-500 dark:from-white dark:via-neutral-100 dark:to-neutral-500 leading-[1.05] mb-3">
            Hi, I&apos;m Himanshu
          </h1>
          <p className="animate-fade-up delay-250 text-2xl md:text-3xl font-semibold text-gray-700 dark:text-neutral-300 mb-6">
            Full-Stack Developer
          </p>

          <p className="animate-fade-up delay-300 text-gray-600 dark:text-neutral-400 max-w-md text-lg mb-8 leading-relaxed">
            I craft high-performance digital experiences that merge elegant design with robust engineering. From scalable web platforms to intelligent automation — I turn complex problems into clean, efficient code.
          </p>

          <div className="animate-fade-up delay-400 flex flex-wrap items-center gap-3 pointer-events-auto">
            <Link
              href="#projects"
              className="group bg-gray-950 text-white dark:bg-white dark:text-black px-6 py-3 rounded-full font-semibold flex items-center gap-2 hover:bg-gray-800 dark:hover:bg-neutral-100 transition-all duration-200 text-sm"
            >
              Explore My Work
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </Link>
            <Link
              href="#contact"
              className="border border-gray-300 text-gray-700 dark:border-white/20 dark:text-neutral-300 px-6 py-3 rounded-full font-semibold flex items-center gap-2 hover:border-gray-400 dark:hover:border-white/40 hover:text-gray-900 dark:hover:text-white hover:bg-gray-50 dark:hover:bg-white/5 transition-all duration-200 text-sm"
            >
              Get in Touch <Mail className="w-4 h-4" />
            </Link>
          </div>

          {/* Stats */}
          <div className="animate-fade-up delay-500 mt-14 flex items-center gap-10 pointer-events-auto">
            {stats.map((stat, i) => (
              <div key={i} className={`pl-10 border-l ${isLight ? 'border-gray-200' : 'border-white/10'} ${i === 0 ? 'pl-0 border-0' : ''}`}>
                <p className="text-3xl font-bold text-gray-900 dark:text-white">{stat.value}</p>
                <p className="text-gray-500 dark:text-neutral-500 text-xs mt-1 font-medium">{stat.label}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
