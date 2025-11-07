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
      {/* Ambient gradients that do not block interaction */}
      <div aria-hidden className="pointer-events-none absolute inset-0">
        <div className="absolute -top-24 right-1/4 w-[60rem] h-[60rem] bg-gradient-to-br from-blue-600/30 via-sky-400/20 to-indigo-500/20 blur-3xl rounded-full" />
        <div className="absolute -bottom-24 -left-24 w-[40rem] h-[40rem] bg-gradient-to-tr from-indigo-600/20 via-blue-500/20 to-sky-400/20 blur-3xl rounded-full" />
      </div>

      {/* Spline cover background */}
      <div className="absolute inset-0">
        <Spline scene="https://prod.spline.design/ESO6PnMadasO0hU3/scene.splinecode" style={{ width: '100%', height: '100%' }} />
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
              Exhibith Your Excellence
            </h1>
            <p className="mt-5 text-lg sm:text-xl text-slate-300 max-w-2xl">
              LazCreval menghadirkan pengalaman modern dan interaktif untuk menampilkan bakat, kolaborasi antar sekolah, dan momen terbaik Anda.
            </p>
            <div className="mt-8 flex flex-wrap gap-4">
              <CTAButton as="a" href="#pricing" variant="primary" aria-label="Coba LazCreval sekarang">
                Coba Sekarang
              </CTAButton>
              <CTAButton as="a" href="#gallery" variant="ghost" aria-label="Lihat demo LazCreval">
                Lihat Demo
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
            aria-label="Sorotan utama"
          >
            {[
              { label: 'Interaktif', value: '3D Spline cover' },
              { label: 'Desain', value: 'Glassmorphic • Modern' },
              { label: 'Aksesibilitas', value: 'Fokus & kontras' },
              { label: 'Performa', value: 'Ringan & responsif' }
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
