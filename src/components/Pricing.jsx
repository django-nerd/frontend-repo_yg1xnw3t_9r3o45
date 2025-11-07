import React from 'react';
import { motion } from 'framer-motion';
import CTAButton from './CTAButton';

const tiers = [
  {
    name: 'Starter',
    price: 'Free',
    features: ['Sandbox access', 'Basic analytics', 'Email support']
  },
  {
    name: 'Growth',
    price: '$99/mo',
    highlight: true,
    features: ['All Starter', 'Priority support', 'Advanced analytics']
  },
  {
    name: 'Scale',
    price: 'Contact',
    features: ['Custom SLAs', 'Dedicated support', 'Volume pricing']
  }
];

export default function Pricing() {
  return (
    <section id="pricing" className="py-24 bg-gradient-to-b from-slate-50 to-white">
      <div className="max-w-6xl mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-slate-900">Simple pricing, serious value</h2>
          <p className="mt-3 text-slate-600">Start free. Upgrade as you grow.</p>
        </div>
        <div className="grid md:grid-cols-3 gap-6">
          {tiers.map((t, i) => (
            <motion.div
              key={t.name}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ delay: i * 0.05 }}
              className={`rounded-2xl border p-6 shadow-sm ${
                t.highlight
                  ? 'border-blue-300 bg-gradient-to-br from-white to-blue-50'
                  : 'border-slate-200 bg-white'
              }`}
            >
              <h3 className="text-lg font-semibold text-slate-900">{t.name}</h3>
              <p className="mt-3 text-3xl font-extrabold text-slate-900">{t.price}</p>
              <ul className="mt-4 space-y-2 text-slate-700">
                {t.features.map((f) => (
                  <li key={f} className="flex items-center gap-2">
                    <span className="inline-block w-1.5 h-1.5 rounded-full bg-blue-500" aria-hidden />
                    {f}
                  </li>
                ))}
              </ul>
              <div className="mt-6">
                <CTAButton as="a" href="#home" variant={t.highlight ? 'primary' : 'secondary'} aria-label={`Choose ${t.name} plan`}>
                  Get Started
                </CTAButton>
              </div>
            </motion.div>
          ))}
        </div>

        <div className="mt-12 text-center">
          <p className="text-sm text-slate-600">Want a guided tour?</p>
          <a href="#gallery" className="text-sm font-semibold text-blue-600 hover:text-blue-500 focus:outline-none focus-visible:ring-2 ring-blue-300 rounded px-2">See Demo</a>
        </div>
      </div>
    </section>
  );
}
