import React from 'react';

export default function Footer() {
  return (
    <footer className="py-12 bg-slate-950 text-slate-300">
      <div className="max-w-6xl mx-auto px-4">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="flex items-center gap-3">
            <span className="w-8 h-8 rounded-xl bg-gradient-to-tr from-blue-600 via-sky-500 to-indigo-500" aria-hidden="true" />
            <p className="text-sm">© {new Date().getFullYear()} LazCreval. All rights reserved.</p>
          </div>
          <nav aria-label="Footer">
            <ul className="flex items-center gap-4 text-sm">
              <li><a className="hover:text-white focus:outline-none focus-visible:ring-2 ring-blue-400 rounded px-1" href="#features">Features</a></li>
              <li><a className="hover:text-white focus:outline-none focus-visible:ring-2 ring-blue-400 rounded px-1" href="#pricing">Pricing</a></li>
              <li><a className="hover:text-white focus:outline-none focus-visible:ring-2 ring-blue-400 rounded px-1" href="#gallery">Demo</a></li>
            </ul>
          </nav>
        </div>
      </div>
    </footer>
  );
}
