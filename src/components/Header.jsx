import React, { useEffect, useState } from 'react';
import { motion } from 'framer-motion';

export default function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [active, setActive] = useState('home');

  useEffect(() => {
    const onScroll = () => {
      setScrolled(window.scrollY > 8);
      const sections = ['home', 'features', 'gallery', 'testimonials', 'pricing'];
      let current = 'home';
      for (const id of sections) {
        const el = document.getElementById(id);
        if (el) {
          const rect = el.getBoundingClientRect();
          if (rect.top <= 80 && rect.bottom >= 120) current = id;
        }
      }
      setActive(current);
    };
    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  const link = (id, label) => (
    <a
      href={`#${id}`}
      className={`px-3 py-2 rounded-md text-sm font-medium transition-colors ${
        active === id ? 'text-blue-600' : scrolled ? 'text-slate-700' : 'text-white'
      } hover:text-blue-500`}
    >
      {label}
    </a>
  );

  return (
    <motion.header
      initial={{ y: -20, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      className={`fixed top-0 left-0 right-0 z-40 backdrop-blur-md transition-colors ${
        scrolled ? 'bg-white/70 shadow-sm' : 'bg-transparent'
      }`}
      role="banner"
    >
      <div className="max-w-6xl mx-auto px-4">
        <nav className="flex items-center justify-between h-16" aria-label="Primary">
          <a href="#home" className="flex items-center gap-2">
            <span className={`w-8 h-8 rounded-xl bg-gradient-to-tr from-blue-600 via-sky-500 to-indigo-500 ${
              scrolled ? '' : 'ring-2 ring-white/30'
            }`} aria-hidden="true" />
            <span className={`text-lg font-bold ${scrolled ? 'text-slate-900' : 'text-white'}`}>LazCreval</span>
          </a>
          <div className="hidden md:flex items-center gap-1">
            {link('features', 'Features')}
            {link('gallery', 'Demo')}
            {link('testimonials', 'Testimonials')}
            {link('pricing', 'Pricing')}
          </div>
          <div className="hidden md:block">
            <a
              href="#pricing"
              className={`inline-flex items-center rounded-lg px-4 py-2 text-sm font-semibold shadow-sm transition ${
                scrolled
                  ? 'bg-blue-600 text-white hover:bg-blue-500'
                  : 'bg-white/90 text-blue-700 hover:bg-white'
              }`}
            >
              Try Now
            </a>
          </div>
        </nav>
      </div>
    </motion.header>
  );
}
