import React from 'react';
import { motion } from 'framer-motion';

const Header = () => {
  const navItems = ["Work", "About", "Photography", "Contact"];

  return (
    <motion.header 
      initial={{ y: -100, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.8, ease: "circOut" }}
      className="fixed top-0 left-0 w-full z-50 px-6 py-8 flex justify-between items-center pointer-events-none"
    >
      {/* BRAND / LOGO */}
      <div className="flex items-center gap-4 pointer-events-auto">
        <div className="text-xl font-bold tracking-tighter hover:scale-110 transition-transform cursor-pointer">
          N<span className="text-zinc-500">.</span>
        </div>
        <div className="hidden md:flex items-center gap-2 px-3 py-1 rounded-full border border-zinc-800 bg-zinc-900/40 backdrop-blur-md">
          <div className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-pulse" />
          <span className="text-[10px] uppercase tracking-widest text-zinc-400 font-medium">Available</span>
        </div>
      </div>

      {/* NAVIGATION PILL */}
      <nav className="absolute left-1/2 -translate-x-1/2 pointer-events-auto">
        <ul className="flex items-center gap-1 p-1 rounded-full border border-zinc-800/50 bg-zinc-950/20 backdrop-blur-xl">
          {navItems.map((item) => (
            <li key={item}>
              <button className="px-5 py-2 rounded-full text-[11px] uppercase tracking-[0.2em] text-zinc-400 hover:text-white hover:bg-zinc-800/50 transition-all duration-300 font-medium">
                {item}
              </button>
            </li>
          ))}
        </ul>
      </nav>

      {/* SOCIAL / CONTACT */}
      <div className="pointer-events-auto">
        <button className="text-[11px] uppercase tracking-[0.2em] font-bold text-zinc-400 hover:text-white transition-colors border-b border-transparent hover:border-white/20 pb-1">
          Get in touch
        </button>
      </div>
    </motion.header>
  );
};

export default Header;