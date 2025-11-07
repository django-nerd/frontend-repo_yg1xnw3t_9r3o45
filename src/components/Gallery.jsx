import React, { useEffect, useState } from 'react';
import { motion } from 'framer-motion';

const cards = [
  { id: 1, title: 'Card UI', svg: (
    <svg viewBox="0 0 320 200" className="w-full h-full" role="img" aria-label="Glass card UI">
      <defs>
        <linearGradient id="grad1" x1="0" x2="1" y1="0" y2="1">
          <stop offset="0%" stopColor="#60a5fa"/>
          <stop offset="100%" stopColor="#a78bfa"/>
        </linearGradient>
      </defs>
      <rect x="10" y="20" rx="18" ry="18" width="300" height="160" fill="url(#grad1)" opacity="0.25"/>
      <rect x="10" y="20" rx="18" ry="18" width="300" height="160" fill="#ffffff" opacity="0.15"/>
      <circle cx="270" cy="60" r="10" fill="#ffffff" opacity="0.8"/>
      <rect x="30" y="60" width="160" height="10" rx="5" fill="#ffffff" opacity="0.9"/>
      <rect x="30" y="90" width="110" height="10" rx="5" fill="#ffffff" opacity="0.7"/>
      <rect x="30" y="120" width="80" height="10" rx="5" fill="#ffffff" opacity="0.6"/>
    </svg>
  )},
  { id: 2, title: 'Analytics', svg: (
    <svg viewBox="0 0 320 200" className="w-full h-full" role="img" aria-label="Analytics dashboard">
      <defs>
        <linearGradient id="grad2" x1="0" x2="1" y1="0" y2="1">
          <stop offset="0%" stopColor="#38bdf8"/>
          <stop offset="100%" stopColor="#6366f1"/>
        </linearGradient>
      </defs>
      <rect x="20" y="20" width="280" height="160" rx="12" fill="#0ea5e9" opacity="0.1"/>
      <polyline points="20,150 80,110 140,130 200,70 260,90 300,50" fill="none" stroke="url(#grad2)" strokeWidth="6" strokeLinecap="round"/>
      <circle cx="80" cy="110" r="4" fill="#38bdf8"/>
      <circle cx="200" cy="70" r="4" fill="#6366f1"/>
    </svg>
  )},
  { id: 3, title: 'Checkout', svg: (
    <svg viewBox="0 0 320 200" className="w-full h-full" role="img" aria-label="Checkout flow">
      <defs>
        <linearGradient id="grad3" x1="0" x2="1" y1="0" y2="1">
          <stop offset="0%" stopColor="#3b82f6"/>
          <stop offset="100%" stopColor="#06b6d4"/>
        </linearGradient>
      </defs>
      <rect x="30" y="25" rx="12" width="260" height="40" fill="url(#grad3)" opacity="0.2"/>
      <rect x="30" y="80" rx="12" width="260" height="40" fill="url(#grad3)" opacity="0.2"/>
      <rect x="30" y="135" rx="12" width="160" height="40" fill="url(#grad3)" opacity="0.5"/>
    </svg>
  )}
];

export default function Gallery() {
  const [loading, setLoading] = useState(true);
  useEffect(() => {
    const t = setTimeout(() => setLoading(false), 800);
    return () => clearTimeout(t);
  }, []);

  return (
    <section id="gallery" className="py-24 bg-gradient-to-b from-white to-slate-50">
      <div className="max-w-6xl mx-auto px-4">
        <div className="text-center mb-14">
          <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-slate-900">See it in action</h2>
          <p className="mt-3 text-slate-600">A quick look at the LazCreval experience and components.</p>
        </div>

        <div className="grid md:grid-cols-3 gap-6">
          {cards.map((c, i) => (
            <motion.div
              key={c.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ delay: i * 0.05 }}
              className="rounded-2xl border border-slate-200 bg-white p-4 shadow-sm hover:shadow-lg transition-transform hover:scale-[1.01]"
            >
              <div className="aspect-[16/10] rounded-xl bg-gradient-to-br from-slate-900 to-slate-800 text-white flex items-center justify-center overflow-hidden">
                {loading ? (
                  <div className="w-full h-full animate-pulse bg-slate-700/50" aria-hidden="true" />
                ) : (
                  c.svg
                )}
              </div>
              <p className="mt-4 text-sm font-medium text-slate-800">{c.title}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
