import React, { useState, useEffect } from "react";
import { motion, useScroll, useTransform, AnimatePresence } from "framer-motion";
import { Github, Linkedin, Instagram, Twitter, Mail, ArrowUpRight, Download } from "lucide-react";
import { Link } from "react-router-dom";

// --- Data ---
const PROJECTS = [
  { 
    id: 1, 
    title: "Biometric Security Solutions", 
    category: "Android & Java Development", 
    img: "https://images.unsplash.com/photo-1550751827-4bd374c3f58b?q=80&w=2000&auto=format&fit=crop" 
  },
  { 
    id: 2, 
    title: "Event Management System", 
    category: "Full Stack Mobile App", 
    img: "https://images.unsplash.com/photo-1505373877841-8d25f7d46678?q=80&w=2000&auto=format&fit=crop" 
  }
];

const SKILLS = [
  { category: "Languages", items: ["Java", "Kotlin", "Python", "JavaScript", "C#", "SQL", "C++", "PHP","C"] },
  { category: "Frameworks", items: ["Flutter", "ReactJS", "Node.js", "Express", ".NET", "Qt"] },
  { category: "Mobile & Security", items: ["Android Studio", "Biometrics", "SQLite", "Firebase", "MVC"] },
  { category: "Tools", items: ["Git", "Jira", "CI/CD", "Docker", "Linux", "Shell Scripting"] } 
];

const GITHUB_RAW_BASE = "https://raw.githubusercontent.com/nishilraiyarela/nishil-assets/main/gallery";

const PHOTO_SAMPLES = [
  `${GITHUB_RAW_BASE}/portrait/nishil_portrait_9.jpg`,
  `${GITHUB_RAW_BASE}/portrait/nishil_portrait_2.jpg`,
  `${GITHUB_RAW_BASE}/portrait/nishil_portrait_3.jpg`,
  `${GITHUB_RAW_BASE}/portrait/nishil_portrait_4.jpg`
];

const SOCIALS = [
  { name: "LinkedIn", icon: <Linkedin size={18} />, href: "https://www.linkedin.com/in/nishil-raiyarela-9b1958154/" },
  { name: "GitHub", icon: <Github size={18} />, href: "https://github.com/nishilraiyarela" },
  { name: "Instagram", icon: <Instagram size={18} />, href: "https://www.instagram.com/nishilraiyarela_/" },
  { name: "X (Twitter)", icon: <Twitter size={18} />, href: "https://x.com/nishilraiyarela" },
];

// --- Sub-Components ---

const Header = () => {
  const scrollToSection = (id) => {
    if (id === "home") {
      window.scrollTo({ top: 0, behavior: "smooth" });
      return;
    }
    const element = document.getElementById(id);
    if (element) {
      const offset = 100; 
      const bodyRect = document.body.getBoundingClientRect().top;
      const elementRect = element.getBoundingClientRect().top;
      const elementPosition = elementRect - bodyRect;
      window.scrollTo({ top: elementPosition - offset, behavior: "smooth" });
    }
  };

  return (
    <motion.header 
      initial={{ y: -20, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      className="fixed top-0 left-0 w-full z-50 px-8 py-10 flex justify-between items-center pointer-events-none"
    >
      <div className="flex items-center gap-6 pointer-events-auto">
        <div onClick={() => window.scrollTo({top: 0, behavior: 'smooth'})} className="text-2xl font-black tracking-tighter hover:opacity-70 transition-opacity cursor-pointer text-white">NR</div>
        <div className="hidden sm:flex items-center gap-2.5 px-4 py-1.5 rounded-full border border-zinc-800/50 bg-zinc-900/20 backdrop-blur-md">
          <div className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-pulse" />
          <span className="text-[10px] uppercase tracking-[0.3em] text-zinc-400 font-bold">Available for work</span>
        </div>
      </div>

      <nav className="absolute left-1/2 -translate-x-1/2 pointer-events-auto hidden lg:block">
        <ul className="flex items-center gap-1 p-1.5 rounded-full border border-zinc-800/40 bg-zinc-950/20 backdrop-blur-2xl">
          {["Home", "About", "Work", "Skills"].map((item) => (
            <li key={item}>
              <button 
                onClick={() => scrollToSection(item.toLowerCase())} 
                className="px-5 py-2.5 rounded-full text-[9px] uppercase tracking-[0.25em] text-zinc-400 hover:text-white hover:bg-zinc-800/40 transition-all duration-300 font-bold leading-none"
              >
                {item}
              </button>
            </li>
          ))}
          <li>
            <button 
              onClick={() => scrollToSection('photography')} 
              className="px-5 py-2.5 rounded-full text-[9px] uppercase tracking-[0.25em] text-zinc-400 hover:text-white hover:bg-zinc-800/40 transition-all duration-300 font-bold leading-none"
            >
              Photography
            </button>
          </li>
        </ul>
      </nav>

      <div className="pointer-events-auto flex items-center gap-4 md:gap-6">
        {/* UPDATED CV Download Button with Border */}
        <a 
          href="/Nishil_ProfessionalResume_.pdf" 
          download="Nishil_ProfessionalResume_.pdf"
          className="group flex items-center gap-2.5 px-5 py-2.5 rounded-full border border-zinc-800/40 bg-zinc-950/20 backdrop-blur-2xl hover:border-zinc-700 hover:bg-zinc-800/40 transition-all duration-300"
        >
          <span className="text-[9px] uppercase tracking-[0.25em] font-bold text-zinc-400 group-hover:text-white leading-none">CV</span>
          <Download size={12} className="text-zinc-500 group-hover:text-emerald-500 transition-colors" />
        </a>

        {/* Get In Touch Button */}
        <button onClick={() => scrollToSection('contact')} className="group relative px-2 py-1 overflow-hidden">
          <span className="text-[11px] uppercase tracking-[0.3em] font-black text-zinc-400 group-hover:text-white transition-colors duration-300">Get in touch</span>
          <span className="absolute bottom-0 left-0 w-full h-px bg-zinc-800 group-hover:bg-white transition-colors duration-300" />
        </button>
      </div>
    </motion.header>
  );
};

export default function Home() {
  const { scrollY } = useScroll();
  const opacity = useTransform(scrollY, [0, 500], [0.35, 0]);
  const scale = useTransform(scrollY, [0, 500], [1, 1.1]);
  const blurValue = useTransform(scrollY, [0, 500], [0, 20]);
  const blur = useTransform(blurValue, (v) => `blur(${v}px)`);
  const [time, setTime] = useState("");

  useEffect(() => {
    // Corrected Logic: Handles scrolling to the hash (e.g., #photography) when returning to the page
    if (window.location.hash) {
      const id = window.location.hash.replace('#', '');
      const element = document.getElementById(id);
      if (element) {
        setTimeout(() => {
          element.scrollIntoView({ behavior: 'smooth' });
        }, 150);
      }
    }
  }, []);

  useEffect(() => {
    const updateTime = () => {
      const now = new Date();
      const options = { timeZone: 'America/Toronto', hour: '2-digit', minute: '2-digit', hour12: true };
      setTime(new Intl.DateTimeFormat('en-US', options).format(now));
    };
    updateTime();
    const interval = setInterval(updateTime, 1000);
    return () => clearInterval(interval);
  }, []);

  return (
    <main className="relative w-full bg-zinc-950 text-zinc-100 overflow-x-hidden selection:bg-white selection:text-black">
      
      <motion.div style={{ opacity, scale, filter: blur }} className="fixed inset-0 z-0 flex items-center justify-center pointer-events-none">
        <div className="w-full aspect-[16/9] md:aspect-[32/9] relative overflow-hidden grayscale contrast-[1.1]">
          <img src="/my-portrait.jpg" alt="Portrait" className="w-full h-full object-cover" style={{ objectPosition: 'center 45%' }} />
          <div className="absolute inset-0 bg-gradient-to-b from-zinc-950 via-transparent to-zinc-950" />
        </div>
      </motion.div>

      <Header />

      {/* HERO */}
      <section id="home" className="relative h-screen flex items-center justify-center">
        <div className="relative z-10 flex flex-col items-center translate-y-24 text-center">
          <motion.h1 initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} className="text-7xl md:text-9xl font-black tracking-tighter text-white uppercase leading-none">NISHIL</motion.h1>
          <motion.p initial={{ opacity: 0 }} animate={{ opacity: 0.4 }} className="mt-8 text-zinc-500 text-[10px] md:text-[12px] font-medium tracking-[0.8em] uppercase">Everything is a matter of perspective</motion.p>
        </div>
      </section>

      {/* 01. ABOUT */}
      <section id="about" className="relative z-30 bg-zinc-950 px-6 md:px-20 pt-12 pb-32 border-t border-zinc-900/50">
        <div className="max-w-7xl mx-auto flex flex-col items-center mb-16">
            <span className="text-[10px] uppercase tracking-[0.5em] font-bold text-zinc-500 opacity-40 mb-10">01 / About Me</span>
            <h2 className="text-4xl md:text-7xl font-light tracking-tighter text-zinc-400 text-center leading-[1.1]">Focused on <span className="italic text-white font-serif">reliable</span> software.</h2>
        </div>
        
        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-12 gap-12 items-center">
          <div className="md:col-span-4 aspect-[4/5] overflow-hidden rounded-sm grayscale transition-all duration-1000 border border-zinc-900 shadow-xl">
             <img 
               src="https://images.unsplash.com/photo-1550751827-4bd374c3f58b?q=80&w=1000&auto=format&fit=crop" 
               className="w-full h-full object-cover opacity-40" 
               alt="Technical Abstract" 
             />
          </div>

          <div className="md:col-span-8">
            <div className="space-y-10 text-zinc-400 text-lg md:text-xl leading-relaxed">
              <p>
                I am a <span className="text-zinc-200">Software Developer</span> based in Toronto with a background in Computer Engineering and Software Systems Design.
              </p>
              
              <p className="text-zinc-500 text-base md:text-lg">
                My professional journey includes 2 years of experience in full-stack and mobile development. At <span className="text-zinc-400">Mantra Softech</span>, I worked on biometric security features and cross-platform Flutter applications. I enjoy the process of solving technical problems whether it’s refining a database query or ensuring a mobile UI feels responsive across different devices.
              </p>

              <p className="text-zinc-500 text-base md:text-lg">
                I balance my industry experience with a solid academic foundation from Centennial College, focusing on building maintainable code and collaborating effectively within Agile teams.
              </p>
              
              <div className="pt-6 flex items-center gap-8">
                <a href="/Nishil_ProfessionalResume__.pdf" target="_blank" rel="noopener noreferrer" download="Nishil_ProfessionalResume_.pdf" className="group relative flex items-center gap-4 py-2">
                  <div className="flex flex-col">
                    <span className="text-[10px] uppercase tracking-[0.4em] font-black text-zinc-500 group-hover:text-emerald-500 transition-colors">Curriculum Vitae</span>
                    <span className="text-xs text-zinc-600 font-medium italic mt-1">Nishil_ProfessionalResume_.pdf</span>
                  </div>
                  <div className="h-10 w-10 rounded-full border border-zinc-800 flex items-center justify-center group-hover:border-emerald-500 group-hover:bg-emerald-500/5 transition-all duration-500">
                    <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" className="text-zinc-500 group-hover:text-emerald-500 group-hover:translate-y-0.5 transition-all">
                      <path d="M7 13l5 5 5-5M12 18V6" />
                    </svg>
                  </div>
                  <span className="absolute bottom-0 left-0 w-0 h-px bg-emerald-500 group-hover:w-full transition-all duration-700" />
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 02. WORK */}
      <section id="work" className="relative z-30 bg-zinc-950 px-6 md:px-20 pt-12 pb-32 border-t border-zinc-900/50">
        <div className="max-w-7xl mx-auto flex flex-col items-center mb-16 text-center">
          <span className="text-[10px] uppercase tracking-[0.5em] font-bold text-zinc-500 opacity-40 mb-10 block">02 / Portfolio</span>
          <h2 className="text-4xl md:text-7xl font-light tracking-tighter text-zinc-400">Selected <span className="italic text-white font-serif">works</span>.</h2>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-16 max-w-7xl mx-auto">
          {PROJECTS.map((project) => (
            <motion.div key={project.id} initial={{ opacity: 0, y: 40 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="group">
              <div className="relative aspect-[16/10] overflow-hidden bg-zinc-900">
                <motion.img whileHover={{ scale: 1.05 }} src={project.img} className="w-full h-full object-cover grayscale opacity-40 group-hover:opacity-100 transition-all duration-1000" />
              </div>
              <div className="mt-6 border-b border-zinc-900 pb-6">
                <h3 className="text-2xl font-bold text-zinc-300">{project.title}</h3>
                <p className="text-zinc-600 text-[10px] mt-2 uppercase tracking-widest font-bold">{project.category}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </section>

      {/* 03. SKILLS SECTION */}
      <section id="skills" className="relative z-30 bg-zinc-950 py-32 border-t border-zinc-900/50 overflow-hidden">
        <div className="max-w-7xl mx-auto px-6 md:px-20">
          <div className="flex flex-col items-center mb-20">
            <span className="text-[10px] uppercase tracking-[0.5em] font-bold text-zinc-500 opacity-40 mb-10 block">03 / Tech Stack</span>
            <h2 className="text-4xl md:text-7xl font-light tracking-tighter text-zinc-400 text-center leading-[1.1]">
              Engineered <span className="italic text-white font-serif">solutions</span>.
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
            {SKILLS.map((skill, i) => (
              <motion.div 
                key={i}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="group relative p-10 border border-zinc-900 bg-zinc-900/10 hover:bg-zinc-900/40 transition-all duration-700 rounded-sm"
              >
                <div className="absolute inset-0 opacity-[0.03] pointer-events-none" 
                    style={{ backgroundImage: 'radial-gradient(circle, #fff 1px, transparent 1px)', backgroundSize: '20px 20px' }} />
                
                <div className="relative z-10">
                  <div className="flex justify-between items-start mb-12">
                    <h3 className="text-xs font-mono tracking-[0.3em] text-emerald-500 uppercase">{skill.category}</h3>
                    <span className="text-zinc-800 font-black text-4xl group-hover:text-zinc-700 transition-colors">0{i+1}</span>
                  </div>

                  <div className="flex flex-wrap gap-x-8 gap-y-4">
                    {skill.items.map((item, idx) => (
                      <div key={idx} className="flex items-center gap-3">
                        {/* UPDATED: Bullet point now glows emerald on whole card hover */}
                        <div className="w-1.5 h-1.5 bg-zinc-800 group-hover:bg-emerald-500 group-hover:shadow-[0_0_8px_#10b981] transition-all duration-500" />
                        {/* UPDATED: Text now turns white on whole card hover */}
                        <span className="text-lg md:text-xl font-light text-zinc-500 group-hover:text-white transition-colors duration-300">
                          {item}
                        </span>
                      </div>
                    ))}
                  </div>
                </div>

                <motion.div 
                  className="absolute bottom-0 left-0 h-1 bg-emerald-500"
                  initial={{ width: 0 }}
                  whileHover={{ width: '100%' }}
                  transition={{ duration: 0.5 }}
                />
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* 04. PHOTOGRAPHY */}
      <section id="photography" className="relative z-30 bg-zinc-950 px-6 md:px-20 pt-12 pb-32 border-t border-zinc-900/50">
        <div className="max-w-7xl mx-auto flex flex-col items-center mb-16 text-center">
          <span className="text-[10px] uppercase tracking-[0.5em] font-bold text-zinc-500 opacity-40 mb-10 block">04 / Visuals</span>
          <h2 className="text-4xl md:text-7xl font-light tracking-tighter text-zinc-400 max-w-4xl leading-tight">
            Geometry of <span className="italic text-white font-serif">life</span>.
          </h2>
          <Link to="/photography" className="mt-12 group flex items-center gap-4 px-8 py-4 rounded-full border border-zinc-800 hover:border-emerald-500 transition-all">
            <span className="text-[10px] uppercase tracking-[0.4em] font-black text-zinc-400 group-hover:text-white">Full Archive</span>
            <ArrowUpRight size={16} className="text-zinc-500 group-hover:text-emerald-500 transition-all" />
          </Link>
        </div>

        <div className="max-w-7xl mx-auto grid grid-cols-2 lg:grid-cols-4 gap-6">
          {PHOTO_SAMPLES.map((src, i) => (
            <motion.div key={i} whileHover={{ y: -10 }} className="aspect-[3/4] overflow-hidden bg-zinc-900 rounded-sm border border-zinc-900 group shadow-2xl">
              <img src={src} className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-1000 opacity-80 group-hover:opacity-100" alt="Nishil Photo" loading="lazy" />
            </motion.div>
          ))}
        </div>
      </section>

      {/* FOOTER */}
      <footer id="contact" className="relative z-30 bg-zinc-950 border-t border-zinc-900 pt-32 pb-10">
        <div className="max-w-7xl mx-auto px-6 md:px-20">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 mb-20">
            <div>
              <span className="text-[10px] uppercase tracking-[0.5em] font-bold text-zinc-600 block mb-8">05 / Contact</span>
              <h2 className="text-5xl md:text-8xl font-black tracking-tighter text-white leading-none">LET'S BUILD <br /> <span className="text-emerald-500">SOMETHING.</span></h2>
              <a href="mailto:nishilraiyarela@gmail.com" className="group flex items-center gap-4 text-xl md:text-3xl font-light text-zinc-400 hover:text-white mt-12 transition-colors">
                nishilraiyarela@gmail.com
                <ArrowUpRight size={24} className="group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
              </a>
            </div>

            <div className="grid grid-cols-2 gap-8 lg:pt-16">
              <div className="space-y-6">
                <p className="text-[9px] uppercase tracking-widest font-black text-zinc-500">Socials</p>
                <div className="flex flex-col gap-4">
                  {SOCIALS.map((s) => (
                    <a key={s.name} href={s.href} target="_blank" rel="noopener noreferrer" className="flex items-center gap-3 text-zinc-400 hover:text-emerald-500 transition-colors">
                      {s.icon} <span className="text-sm">{s.name}</span>
                    </a>
                  ))}
                </div>
              </div>
              <div className="space-y-6 text-zinc-400">
                <p className="text-[9px] uppercase tracking-widest font-black text-zinc-500">Location</p>
                <p className="text-sm font-medium">Toronto, ON</p>
                <p className="text-sm font-medium text-emerald-500">{time}</p>
              </div>
            </div>
          </div>
          {/* Bottom Copyright Bar */}
          <div className="pt-8 border-t border-zinc-900 flex flex-col md:flex-row justify-between items-center gap-6">
            <div className="flex items-center gap-8 text-[9px] uppercase tracking-widest font-bold text-zinc-600">
              <span>&copy; 2026 NISHIL R.</span>
              <span className="hidden md:inline">/</span>
              <span>All rights reserved</span>
            </div>
            <button onClick={() => window.scrollTo({top: 0, behavior: 'smooth'})} className="text-[9px] uppercase tracking-widest font-black text-zinc-500 hover:text-white transition-colors">
              Back to top ↑
            </button>
          </div>
        </div>
      </footer>
    </main>
  );
}