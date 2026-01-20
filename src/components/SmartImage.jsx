import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

export default function SmartImage({ src, alt, className }) {
  const [isLoaded, setIsLoaded] = useState(false);

  return (
    <div className={`relative overflow-hidden bg-zinc-900 rounded-sm ${className}`}>
      <AnimatePresence>
        {!isLoaded && (
          <motion.div
            initial={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="absolute inset-0 z-10"
          >
            {/* Shimmer CSS effect */}
            <div className="absolute inset-0 bg-gradient-to-r from-transparent via-zinc-800/20 to-transparent -translate-x-full animate-[shimmer_1.5s_infinite]" />
            <div className="w-full h-full bg-zinc-900" />
          </motion.div>
        )}
      </AnimatePresence>

      <motion.img
        src={src}
        alt={alt}
        initial={{ opacity: 0 }}
        animate={{ opacity: isLoaded ? 1 : 0 }}
        transition={{ duration: 0.8 }}
        onLoad={() => setIsLoaded(true)}
        className={`w-full h-auto block ${className}`}
      />
    </div>
  );
}