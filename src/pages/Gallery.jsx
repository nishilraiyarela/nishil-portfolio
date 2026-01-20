import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ArrowLeft, SlidersHorizontal, X, Maximize2 } from "lucide-react";
import { Link } from "react-router-dom";
import SmartImage from "../components/SmartImage";
import { PORTRAITS, LANDSCAPES } from "../data/gallery";

export default function Gallery() {
  const [filter, setFilter] = useState("all");
  const [selectedImage, setSelectedImage] = useState(null);

  const portraits = PORTRAITS || [];
  const landscapes = LANDSCAPES || [];
  const allPhotos = [...portraits, ...landscapes];

  const filteredPhotos = filter === "all" 
    ? allPhotos 
    : allPhotos.filter(p => p.orientation === filter);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  // Prevent scroll when lightbox is open
  useEffect(() => {
    if (selectedImage) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
  }, [selectedImage]);

  return (
    <main className="min-h-screen bg-zinc-950 text-zinc-100 pt-24 px-6 md:px-12 pb-20 selection:bg-white selection:text-black">
      <div className="max-w-7xl mx-auto">
        
        {/* Navigation */}
        <Link to="/#photography" className="group inline-flex items-center gap-2 text-zinc-500 hover:text-white transition-colors mb-12">
          <ArrowLeft size={16} className="group-hover:-translate-x-1 transition-transform" />
          <span className="text-[10px] uppercase tracking-[0.3em] font-bold">Back to Portfolio</span>
        </Link>

        {/* Header & Filters */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-8 mb-16">
          <div>
            <h1 className="text-6xl md:text-8xl font-black tracking-tighter text-white uppercase leading-none">Archive</h1>
            <p className="text-zinc-500 text-[10px] uppercase tracking-[0.5em] mt-4 font-medium">Selected Visuals 2024—2026</p>
          </div>

          <div className="flex items-center gap-6 border-b border-zinc-900 pb-2">
            <SlidersHorizontal size={14} className="text-zinc-600" />
            {['all', 'portrait', 'landscape'].map((type) => (
              <button
                key={type}
                onClick={() => setFilter(type)}
                className={`text-[10px] uppercase tracking-[0.2em] font-bold transition-colors ${
                  filter === type ? "text-emerald-500" : "text-zinc-500 hover:text-zinc-300"
                }`}
              >
                {type}
              </button>
            ))}
          </div>
        </div>

        {/* Masonry Grid */}
        <motion.div 
          layout
          className="columns-1 sm:columns-2 lg:columns-3 gap-4 space-y-4"
        >
          <AnimatePresence mode="popLayout">
            {filteredPhotos.map((photo) => (
              <motion.div
                layout
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.9 }}
                transition={{ duration: 0.4 }}
                key={photo.id}
                className="break-inside-avoid overflow-hidden cursor-zoom-in group relative"
                onClick={() => setSelectedImage(photo)}
              >
                <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity z-10 flex items-center justify-center">
                   <Maximize2 className="text-white w-6 h-6 opacity-50" />
                </div>
                <SmartImage 
                  src={photo.url} 
                  alt="Photography Work" 
                  className="w-full hover:scale-105 transition-transform duration-700"
                />
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>

        {filteredPhotos.length === 0 && (
          <div className="py-20 text-center text-zinc-600 text-[10px] uppercase tracking-widest">
            No images found in this category.
          </div>
        )}
      </div>

      {/* Lightbox / Fullscreen View */}
      <AnimatePresence>
        {selectedImage && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 flex items-center justify-center bg-black/95 p-4 md:p-10 cursor-zoom-out"
            onClick={() => setSelectedImage(null)}
          >
            <button 
              className="absolute top-8 right-8 text-white/50 hover:text-white transition-colors"
              onClick={() => setSelectedImage(null)}
            >
              <X size={32} />
            </button>
            
            <motion.img
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.9, opacity: 0 }}
              src={selectedImage.url}
              alt="Expanded view"
              className="max-w-full max-h-full object-contain"
            />
          </motion.div>
        )}
      </AnimatePresence>
    </main>
  );
}