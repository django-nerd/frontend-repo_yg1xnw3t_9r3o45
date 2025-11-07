import React from 'react';
import { motion } from 'framer-motion';
import { Shield, Zap, Sparkles, Cpu } from 'lucide-react';

const features = [
  {
    icon: Shield,
    title: 'Bank-grade security',
    desc: 'End-to-end encryption, tokenization and fine-grained access controls by default.'
  },
  {
    icon: Zap,
    title: 'Blazing fast',
    desc: 'Optimized edge APIs deliver sub-100ms responses across regions.'
  },
  {
    icon: Cpu,
    title: 'Smart underwriting',
    desc: 'ML-powered risk scoring and limits that adapt to your users in real-time.'
  },
  {
    icon: Sparkles,
    title: 'Designed to convert',
    desc: 'Delightful UI kits with microinteractions that boost sign ups and approvals.'
  }
];

const cardVariants = {
  hidden: { opacity: 0, y: 20 },
  show: (i) => ({ opacity: 1, y: 0, transition: { delay: i * 0.08 } })
};

export default function Features() {
  return (
    <section id="features" className="relative py-24 bg-white">
      <div className="max-w-6xl mx-auto px-4">
        <div className="text-center mb-14">
          <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-slate-900">Everything you need to launch credit</h2>
          <p className="mt-3 text-slate-600">A modern platform crafted for speed, security, and conversion.</p>
        </div>
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {features.map((f, idx) => (
            <motion.div
              key={f.title}
              custom={idx}
              initial="hidden"
              whileInView="show"
              viewport={{ once: true, amount: 0.3 }}
              variants={cardVariants}
              className="group rounded-2xl border border-slate-200 bg-white p-6 shadow-sm transition-transform will-change-transform hover:scale-[1.02] hover:shadow-lg focus-within:shadow-lg"
            >
              <div className="inline-flex items-center justify-center w-12 h-12 rounded-xl bg-gradient-to-br from-blue-600 to-sky-500 text-white shadow-md">
                {React.createElement(f.icon, { size: 22 })}
              </div>
              <h3 className="mt-5 text-lg font-semibold text-slate-900">{f.title}</h3>
              <p className="mt-2 text-slate-600">{f.desc}</p>
              <span className="sr-only">{f.title} feature</span>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
