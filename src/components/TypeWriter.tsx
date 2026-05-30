"use client";

import { useState, useEffect } from "react";
import { AnimatePresence, motion } from "framer-motion";

export default function TypeWriter({ roles }: { roles: string[] }) {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setIndex((prev) => (prev + 1) % roles.length);
    }, 2800);
    return () => clearInterval(timer);
  }, [roles.length]);

  return (
    <div className="flex items-center gap-2.5 text-lg font-medium md:text-xl">
      <span className="font-mono text-accent-2">{"//"}</span>
      <div className="relative h-8 overflow-hidden md:h-9">
        <AnimatePresence mode="wait">
          <motion.span
            key={roles[index]}
            initial={{ opacity: 0, y: 18 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -18 }}
            transition={{ duration: 0.4, ease: "easeInOut" }}
            className="block whitespace-nowrap text-gradient-accent"
          >
            {roles[index]}
          </motion.span>
        </AnimatePresence>
      </div>
    </div>
  );
}
