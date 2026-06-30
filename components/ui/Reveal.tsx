"use client";

import { motion } from "framer-motion";

const EASE = [0.16, 1, 0.3, 1] as const;

// Scroll-reveal wrapper per the design handoff: opacity 0->1, y 18->0,
// 0.7s cubic-bezier(.16,1,.3,1), trigger at ~12% visible, once.
// `as` lets the animated element BE the semantic tag (h1/h2/p/span/a).
export default function Reveal({ as = "div", delay = 0, children, ...rest }: { as?: string; delay?: number; children?: React.ReactNode; [key: string]: unknown }) {
  const M = (motion as unknown as Record<string, React.ElementType>)[as] ?? motion.div;
  return (
    <M
      initial={{ opacity: 0, y: 18 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.12 }}
      transition={{ duration: 0.7, ease: EASE, delay }}
      {...rest}
    >
      {children}
    </M>
  );
}
