import React from 'react';
import { motion } from 'framer-motion';
import { Star } from 'lucide-react';

const testimonials = [
  {
    name: 'Elena Park',
    role: 'CPO, NovaPay',
    quote: 'We shipped our credit feature in 2 weeks instead of months. Conversion lifted 18%.',
  },
  {
    name: 'Ravi Patel',
    role: 'CTO, FluxBank',
    quote: 'Security and compliance were turnkey. The developer experience is delightful.',
  },
  {
    name: 'Maya Gomez',
    role: 'Founder, Loop',
    quote: 'LazCreval gave us a premium feel that our users love. The UI is stunning.',
  },
];

export default function Testimonials() {
  return (
    <section id="testimonials" className="py-24 bg-white">
      <div className="max-w-6xl mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-slate-900">Loved by modern fintech teams</h2>
          <p className="mt-3 text-slate-600">Real stories from builders shipping better credit products, faster.</p>
        </div>
        <div className="grid md:grid-cols-3 gap-6">
          {testimonials.map((t, i) => (
            <motion.figure
              key={t.name}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ delay: i * 0.05 }}
              className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm"
            >
              <div className="flex items-center gap-1 text-amber-500" aria-hidden="true">
                {Array.from({ length: 5 }).map((_, idx) => (
                  <Star key={idx} size={16} fill="currentColor" />
                ))}
              </div>
              <blockquote className="mt-4 text-slate-800">“{t.quote}”</blockquote>
              <figcaption className="mt-6">
                <p className="text-sm font-semibold text-slate-900">{t.name}</p>
                <p className="text-xs text-slate-600">{t.role}</p>
              </figcaption>
            </motion.figure>
          ))}
        </div>
      </div>
    </section>
  );
}
