"use client";

// useContext
import { useAppContext } from "@/context/AppContext";

export function PageTransition({ children }: { children: React.ReactNode }) {
  const { motion } = useAppContext();
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -20 }}
      transition={{ duration: 0.5, ease: "easeInOut" }}
    >
      {children}
    </motion.div>
  );
}
