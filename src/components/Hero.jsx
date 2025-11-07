import React from 'react';
import { motion } from 'framer-motion';
import Spline from '@splinetool/react-spline';
import CTAButton from './CTAButton';

const fadeUp = {
  hidden: { opacity: 0, y: 20 },
  show: { opacity: 1, y: 0 }
};

export default function Hero() {
  return (
    <section id="home" className="relative min-h-[90vh] flex items-center overflow-hidden bg-gradient-to-b from-slate-950 via-slate-900 to-slate-900">
      <div aria-hidden className="pointer-events-none absolute inset-0">
        <div className="absolute -top-24 right-1/4 w-[60rem] h-[60rem] bg-gradient-to-br from-blue-600/30 via-sky-400/20 to-indigo-500/20 blur-3xl rounded-full" />
        <div className="absolute -bottom-24 -left-24 w-[40rem] h-[40rem] bg-gradient-to-tr from-indigo-600/20 via-blue-500/20 to-sky-400/20 blur-3xl rounded-full" />
      </div>

      <div className="absolute inset-0">
        <Spline scene="https://prod.spline.design/41MGRk-UDPKO-l6W/scene.splinecode" style={{ width: '100%', height: '100%' }} />
      </div>

      <div className="relative z-10 w-full">
        <div className="max-w-6xl mx-auto px-4 grid lg:grid-cols-12 gap-8 items-center">
          <motion.div
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, amount: 0.6 }}
            variants={fadeUp}
            transition={{ duration: 0.6, ease: 'easeOut' }}
            className="lg:col-span-7"
          >
            <h1 className="text-4xl sm:text-6xl font-extrabold tracking-tight text-white leading-[1.1]">
              Modern credit experiences for the next-gen fintech
            </h1>
            <p className="mt-5 text-lg sm:text-xl text-slate-300 max-w-2xl">
              LazCreval brings glassmorphic, secure, and beautiful credit flows to your product with a single API.
            </p>
            <div className="mt-8 flex flex-wrap gap-4">
              <CTAButton as="a" href="#pricing" variant="primary" aria-label="Try LazCreval now">
                Try Now
              </CTAButton>
              <CTAButton as="a" href="#gallery" variant="ghost" aria-label="See LazCreval demo">
                See Demo
              </CTAButton>
            </div>
          </motion.div>

          <motion.ul
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, amount: 0.4 }}
            variants={{ hidden: { opacity: 0, y: 30 }, show: { opacity: 1, y: 0 } }}
            transition={{ duration: 0.7, delay: 0.2 }}
            className="lg:col-span-5 grid grid-cols-2 gap-4 mt-6 lg:mt-0"
            aria-label="Key highlights"
          >
            {[
              { label: 'PCI-DSS Ready', value: 'Compliant-by-design' },
              { label: '99.99% Uptime', value: 'Global edge' },
              { label: 'SDKs', value: 'Web • iOS • Android' },
              { label: 'Time to Integrate', value: '~10 minutes' }
            ].map((item) => (
              <li key={item.label} className="rounded-2xl bg-white/10 border border-white/10 backdrop-blur p-4 text-white/90">
                <p className="text-sm text-slate-200/80">{item.label}</p>
                <p className="text-base font-semibold">{item.value}</p>
              </li>
            ))}
          </motion.ul>
        </div>
      </div>
    </section>
  );
}
