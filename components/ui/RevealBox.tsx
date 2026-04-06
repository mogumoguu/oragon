"use client";

import { motion } from "framer-motion";

interface Props {
  children: React.ReactNode;
  inView: boolean;
  delay?: number;
  block?: boolean;
}

export default function RevealBox({ children, inView, delay = 0, block = false }: Props) {
  const Wrap = block ? "div" : "span";
  return (
    <Wrap style={{ position: "relative", overflow: "hidden", display: block ? "block" : "inline-block" }}>
      <motion.span
        initial={{ x: "-101%" }}
        animate={inView ? { x: ["-101%", "0%", "101%"] } : { x: "-101%" }}
        transition={{ duration: 0.7, times: [0, 0.45, 1], ease: "easeInOut", delay }}
        style={{ position: "absolute", inset: 0, background: "var(--accent)", zIndex: 1 }}
      />
      <motion.span
        initial={{ opacity: 0 }}
        animate={inView ? { opacity: 1 } : {}}
        transition={{ delay: delay + 0.34, duration: 0 }}
      >
        {children}
      </motion.span>
    </Wrap>
  );
}
