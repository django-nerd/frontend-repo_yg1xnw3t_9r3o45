import React, { useRef } from 'react';
import { motion } from 'framer-motion';

function useRipple() {
  const rippleRef = useRef(null);
  const createRipple = (event) => {
    const button = event.currentTarget;
    const rect = button.getBoundingClientRect();
    const size = Math.max(rect.width, rect.height);
    const x = event.clientX - rect.left - size / 2;
    const y = event.clientY - rect.top - size / 2;

    const ripple = document.createElement('span');
    ripple.style.position = 'absolute';
    ripple.style.borderRadius = '9999px';
    ripple.style.pointerEvents = 'none';
    ripple.style.width = ripple.style.height = `${size}px`;
    ripple.style.left = `${x}px`;
    ripple.style.top = `${y}px`;
    ripple.style.background = 'rgba(255,255,255,0.35)';
    ripple.style.transform = 'scale(0)';
    ripple.style.opacity = '0.9';
    ripple.style.filter = 'blur(1px)';
    ripple.style.transition = 'transform 600ms ease, opacity 700ms ease';

    rippleRef.current.appendChild(ripple);
    requestAnimationFrame(() => {
      ripple.style.transform = 'scale(2.5)';
      ripple.style.opacity = '0';
    });

    setTimeout(() => {
      ripple.remove();
    }, 750);
  };
  return { rippleRef, createRipple };
}

export default function CTAButton({ children, variant = 'primary', as = 'button', href = '#', onClick, className = '', ...props }) {
  const { rippleRef, createRipple } = useRipple();
  const common = `relative inline-flex items-center justify-center gap-2 rounded-xl px-5 py-3 font-semibold focus:outline-none focus-visible:ring-2 ring-offset-2 ring-blue-300 transition active:translate-y-[1px] ${className}`;

  const variants = {
    primary:
      'text-white bg-gradient-to-r from-blue-600 via-sky-500 to-indigo-500 hover:from-blue-500 hover:via-sky-400 hover:to-indigo-400 shadow-lg shadow-blue-500/30',
    secondary:
      'text-blue-700 bg-white/90 hover:bg-white focus-visible:ring-blue-400 border border-blue-200 backdrop-blur',
    ghost:
      'text-white/90 hover:text-white bg-white/10 hover:bg-white/15 border border-white/10 backdrop-blur'
  };

  const Component = as === 'a' ? 'a' : 'button';

  return (
    <motion.div whileTap={{ scale: 0.98 }} whileHover={{ y: -1 }}>
      <Component
        href={as === 'a' ? href : undefined}
        onClick={(e) => {
          createRipple(e);
          onClick && onClick(e);
        }}
        className={`${common} ${variants[variant]}`}
        {...props}
      >
        <span ref={rippleRef} className="absolute inset-0 overflow-hidden rounded-xl" aria-hidden="true" />
        <span className="relative z-10">{children}</span>
      </Component>
    </motion.div>
  );
}
